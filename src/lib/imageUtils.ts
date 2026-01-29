/**
 * 이미지 배경 제거 유틸리티
 * Flood Fill 알고리즘을 사용하여 외부 배경을 투명하게 만듭니다.
 */

export async function removeBackgroundFromImage(base64: string, tolerance: number = 20): Promise<string> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                reject(new Error("Failed to get canvas context"));
                return;
            }

            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const width = canvas.width;
            const height = canvas.height;

            // 1. 시작점 찾기 (네 귀퉁이 중 가장 밝은 곳을 배경색으로 가정)
            const corners = [
                { x: 0, y: 0 },
                { x: width - 1, y: 0 },
                { x: 0, y: height - 1 },
                { x: width - 1, y: height - 1 },
            ];

            // 배경색 샘플링 (첫 번째 귀퉁이 사용)
            // 실제로는 네 귀퉁이가 다 비슷한 색이어야 깔끔하게 지워짐
            const startNode = corners[0];
            const startIdx = (startNode.y * width + startNode.x) * 4;
            const bgR = data[startIdx];
            const bgG = data[startIdx + 1];
            const bgB = data[startIdx + 2];

            // 방문 여부 체크 (1D 배열)
            const visited = new Uint8Array(width * height);

            // BFS 큐
            const queue: number[] = [startNode.x, startNode.y];

            // 색상 차이 계산 함수
            const isSimilar = (idx: number) => {
                const r = data[idx];
                const g = data[idx + 1];
                const b = data[idx + 2];
                // 유클리드 거리 또는 절대값 합
                return Math.abs(r - bgR) < tolerance &&
                    Math.abs(g - bgG) < tolerance &&
                    Math.abs(b - bgB) < tolerance;
            };

            while (queue.length > 0) {
                const y = queue.pop()!;
                const x = queue.pop()!;

                const pixelPos = y * width + x;
                if (visited[pixelPos]) continue;
                visited[pixelPos] = 1;

                const idx = pixelPos * 4;

                // 투명화 처리
                data[idx + 3] = 0; // Alpha = 0

                // 4방향 탐색
                const neighbors = [
                    { nx: x + 1, ny: y },
                    { nx: x - 1, ny: y },
                    { nx: x, ny: y + 1 },
                    { nx: x, ny: y - 1 }
                ];

                for (const { nx, ny } of neighbors) {
                    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
                        const nPos = ny * width + nx;
                        if (!visited[nPos]) {
                            const nIdx = nPos * 4;
                            if (isSimilar(nIdx)) {
                                queue.push(nx, ny);
                            }
                        }
                    }
                }
            }

            ctx.putImageData(imageData, 0, 0);
            resolve(canvas.toDataURL("image/png"));
        };
        img.onerror = (e) => reject(e);
        img.src = base64.startsWith("data:") ? base64 : `data:image/png;base64,${base64}`;
    });
}

/**
 * 이미지 압축 유틸리티
 * Base64 이미지를 지정된 포맷과 품질로 압축하여 Blob으로 반환합니다.
 * 기본값: WebP, 품질 0.8 (투명도 지원 및 고압축)
 */
export async function compressImage(
    base64: string,
    quality: number = 0.8,
    format: "image/webp" | "image/jpeg" | "image/png" = "image/webp"
): Promise<Blob> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            if (!ctx) {
                reject(new Error("Failed to get canvas context"));
                return;
            }

            ctx.drawImage(img, 0, 0);

            canvas.toBlob(
                (blob) => {
                    if (blob) {
                        resolve(blob);
                    } else {
                        reject(new Error("Canvas to Blob failed"));
                    }
                },
                format,
                quality
            );
        };
        img.onerror = (e) => reject(e);
        img.src = base64.startsWith("data:") ? base64 : `data:image/png;base64,${base64}`;
    });
}
