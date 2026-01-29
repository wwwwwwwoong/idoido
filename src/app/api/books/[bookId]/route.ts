import { prisma } from "@/lib/db";
import { requireUserId } from "@/lib/auth";
import { successResponse, notFoundResponse, handleApiError } from "@/lib/apiResponse";

export const runtime = "nodejs";

interface RouteParams {
    params: Promise<{ bookId: string }>;
}

/**
 * GET /api/books/[bookId]
 * 동화책 상세 조회
 */
export async function GET(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { bookId } = await params;

        const book = await prisma.book.findFirst({
            where: { id: bookId, userId },
            include: {
                scenes: {
                    include: { character: true },
                    orderBy: { order: "asc" },
                },
                cards: true,
                _count: { select: { scenes: true } },
            },
        });

        if (!book) {
            return notFoundResponse("Book");
        }

        // Supabase signed URLs 생성
        const { createClient } = await import("@/lib/supabase/server");
        const supabase = await createClient();

        // Helper to sign path or public url
        const signSupabaseUrl = async (pathOrUrl: string | null) => {
            if (!pathOrUrl || pathOrUrl.startsWith("data:")) return pathOrUrl;

            const isSupabasePublicUrl = pathOrUrl.includes("/storage/v1/object/public/doodles/");
            const isRelativePath = !pathOrUrl.startsWith("http");

            if (isRelativePath || isSupabasePublicUrl) {
                try {
                    let storagePath = pathOrUrl;
                    if (isSupabasePublicUrl) {
                        const match = pathOrUrl.match(/\/doodles\/(.+)$/);
                        if (match && match[1]) {
                            storagePath = match[1];
                        }
                    }

                    console.log(`[SignDebug] Signing path: ${storagePath} (Original: ${pathOrUrl.substring(0, 30)}...)`);

                    const { data, error } = await supabase.storage
                        .from("doodles")
                        .createSignedUrl(storagePath, 3600);

                    if (error) {
                        console.error("[SignDebug] Signing error:", error);
                        return null;
                    }
                    if (data?.signedUrl) {
                        return data.signedUrl;
                    }
                    return null; // Fallback if data missing
                } catch (e) {
                    console.error("Signing error:", e);
                    return pathOrUrl;
                }
            }
            return pathOrUrl;
        };

        // 표지 URL 서명
        book.coverPath = await signSupabaseUrl(book.coverPath);

        // 장면 이미지 URL 서명 (병렬 처리)
        if (book.scenes && book.scenes.length > 0) {
            await Promise.all(book.scenes.map(async (scene: any) => {
                scene.sceneImagePath = await signSupabaseUrl(scene.sceneImagePath);
            }));
        }

        return successResponse({ book });
    } catch (error) {
        return handleApiError(error);
    }
}

/**
 * PATCH /api/books/[bookId]
 * 동화책 정보 업데이트
 */

/**
 * DELETE /api/books/[bookId]
 * 동화책 삭제
 */
export async function DELETE(_req: Request, { params }: RouteParams) {
    try {
        const userId = await requireUserId();
        const { bookId } = await params;

        // 사용자의 동화책인지 확인 및 파일 경로 수집을 위해 scenes 조회
        const book = await prisma.book.findFirst({
            where: { id: bookId, userId },
            include: { scenes: { select: { sceneImagePath: true } } }
        });

        if (!book) {
            return notFoundResponse("Book");
        }

        // Storage 파일 삭제 로직
        const { createClient } = await import("@/lib/supabase/server");
        const supabase = await createClient();

        // 삭제할 파일 경로 수집
        const pathsToDelete: string[] = [];

        // Helper to extract clean path from URL or path
        const extractPath = (pathOrUrl: string) => {
            if (pathOrUrl.startsWith("http") && pathOrUrl.includes("/doodles/")) {
                const match = pathOrUrl.match(/\/doodles\/(.+)$/);
                return match ? match[1] : null;
            }
            // Supabase Storage 경로는 보통 상대 경로로 저장되지만 혹시 모르니 체크
            if (!pathOrUrl.startsWith("http") && !pathOrUrl.startsWith("data:")) {
                return pathOrUrl;
            }
            return null;
        };

        if (book.coverPath) {
            const path = extractPath(book.coverPath);
            if (path) pathsToDelete.push(path);
        }

        if (book.scenes) {
            book.scenes.forEach(scene => {
                if (scene.sceneImagePath) {
                    const path = extractPath(scene.sceneImagePath);
                    if (path) pathsToDelete.push(path);
                }
            });
        }

        if (pathsToDelete.length > 0) {
            console.log(`Deleting ${pathsToDelete.length} files from storage for book ${bookId}`);
            const { error } = await supabase.storage
                .from("doodles")
                .remove(pathsToDelete);

            if (error) {
                console.error("Failed to delete files from storage:", error);
                // 파일 삭제 실패하더라도 DB 삭제는 진행 (고아 파일 방지보다 사용자 경험 우선)
            }
        }

        // 동화책 삭제 (관련 장면도 cascade 삭제됨)
        await prisma.book.delete({
            where: { id: bookId },
        });

        return successResponse({ message: "동화책이 삭제되었습니다." });
    } catch (error) {
        return handleApiError(error);
    }
}
