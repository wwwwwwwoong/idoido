import { NextResponse } from "next/server";
import { ZodError } from "zod";

/**
 * 표준화된 API 응답 헬퍼 함수들
 */

export function successResponse<T>(data: T, status = 200) {
    return NextResponse.json(data, { status });
}

export function createdResponse<T>(data: T) {
    return NextResponse.json(data, { status: 201 });
}

export function errorResponse(
    message: string,
    status = 500,
    detail?: string
) {
    return NextResponse.json(
        { error: message, ...(detail && { detail }) },
        { status }
    );
}

export function unauthorizedResponse() {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}

export function forbiddenResponse() {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
}

export function notFoundResponse(resource = "Resource") {
    return NextResponse.json({ error: `${resource} not found` }, { status: 404 });
}

export function validationErrorResponse(error: ZodError) {
    return NextResponse.json(
        {
            error: "Validation Error",
            issues: error.issues.map((issue) => ({
                path: issue.path.join("."),
                message: issue.message,
            })),
        },
        { status: 400 }
    );
}

/**
 * 에러를 분류하고 적절한 응답을 반환하는 헬퍼
 */
export function handleApiError(error: unknown) {
    // Zod validation error
    if (error instanceof ZodError) {
        return validationErrorResponse(error);
    }

    // Custom auth error
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
        return unauthorizedResponse();
    }

    // Generic error
    // Generic error
    const message = error instanceof Error ? error.message : "Internal Server Error";
    console.error("API Error:", error);
    // 디버깅을 위해 실제 에러 메시지 반환
    return errorResponse(message, 500);
}
