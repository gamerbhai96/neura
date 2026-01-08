/**
 * Simple in-memory rate limiter using token bucket algorithm
 * For production with multiple server instances, consider using Redis
 */

type RateLimitRecord = {
    count: number;
    resetTime: number;
};

// In-memory store for rate limits
const rateLimits = new Map<string, RateLimitRecord>();

// Clean up expired entries every 5 minutes to prevent memory leaks
setInterval(() => {
    const now = Date.now();
    for (const [key, record] of rateLimits.entries()) {
        if (now > record.resetTime) {
            rateLimits.delete(key);
        }
    }
}, 5 * 60 * 1000);

export interface RateLimitResult {
    success: boolean;
    remaining: number;
    resetTime: number;
}

/**
 * Check if an action is rate limited
 * @param identifier - Unique identifier (e.g., "login:192.168.1.1")
 * @param limit - Maximum number of requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns Object with success status and remaining attempts
 */
export function rateLimit(
    identifier: string,
    limit: number = 10,
    windowMs: number = 60000
): RateLimitResult {
    const now = Date.now();
    const record = rateLimits.get(identifier);

    // If no record exists or window has expired, create new record
    if (!record || now > record.resetTime) {
        const resetTime = now + windowMs;
        rateLimits.set(identifier, { count: 1, resetTime });
        return { success: true, remaining: limit - 1, resetTime };
    }

    // If limit exceeded
    if (record.count >= limit) {
        return { success: false, remaining: 0, resetTime: record.resetTime };
    }

    // Increment count
    record.count++;
    return { success: true, remaining: limit - record.count, resetTime: record.resetTime };
}

/**
 * Get client IP from request headers
 * Works with proxies like Vercel, Cloudflare, etc.
 */
export function getClientIP(request: Request): string {
    // Try various headers that proxies use
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        // x-forwarded-for can contain multiple IPs, first one is the client
        return forwardedFor.split(',')[0].trim();
    }

    const realIP = request.headers.get('x-real-ip');
    if (realIP) {
        return realIP;
    }

    const cfConnectingIP = request.headers.get('cf-connecting-ip');
    if (cfConnectingIP) {
        return cfConnectingIP;
    }

    return 'unknown';
}

// Preset rate limit configurations
export const RATE_LIMITS = {
    // Login: 5 attempts per 5 minutes
    LOGIN: { limit: 5, windowMs: 5 * 60 * 1000 },
    // Signup: 3 attempts per hour
    SIGNUP: { limit: 3, windowMs: 60 * 60 * 1000 },
    // Password reset: 3 attempts per 15 minutes
    PASSWORD_RESET: { limit: 3, windowMs: 15 * 60 * 1000 },
    // OTP verification: 10 attempts per 15 minutes
    OTP_VERIFY: { limit: 10, windowMs: 15 * 60 * 1000 },
    // Resume parsing: 20 per hour
    RESUME_PARSE: { limit: 20, windowMs: 60 * 60 * 1000 },
    // Portfolio generation: 10 per hour
    PORTFOLIO_GEN: { limit: 10, windowMs: 60 * 60 * 1000 },
    // General API: 100 per minute
    GENERAL_API: { limit: 100, windowMs: 60 * 1000 },
} as const;

/**
 * Helper function to create rate limit error response
 */
export function rateLimitExceededResponse(resetTime: number): Response {
    const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
    return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
            status: 429,
            headers: {
                'Content-Type': 'application/json',
                'Retry-After': String(retryAfter),
            },
        }
    );
}
