import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail, verifyPassword, generateToken, setAuthCookie } from '@/lib/auth';
import { rateLimit, getClientIP, RATE_LIMITS } from '@/lib/rate-limit';

export async function POST(request: NextRequest) {
    try {
        // Rate limiting - 5 attempts per 5 minutes per IP
        const ip = getClientIP(request);
        const { success: rateLimitOk, remaining, resetTime } = rateLimit(
            `login:${ip}`,
            RATE_LIMITS.LOGIN.limit,
            RATE_LIMITS.LOGIN.windowMs
        );

        if (!rateLimitOk) {
            const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);
            return NextResponse.json(
                { error: 'Too many login attempts. Please try again later.' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(retryAfter) }
                }
            );
        }

        const { email, password } = await request.json();

        // Validation
        if (!email || !password) {
            return NextResponse.json(
                { error: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find user
        const user = await getUserByEmail(email);
        if (!user) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Verify password
        const isValidPassword = await verifyPassword(password, user.password_hash);
        if (!isValidPassword) {
            return NextResponse.json(
                { error: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Check if email is verified
        if (!user.email_verified) {
            return NextResponse.json(
                { error: 'Please verify your email before logging in' },
                { status: 403 }
            );
        }

        // Generate JWT token
        const token = generateToken(user.id, user.email);

        // Set auth cookie
        await setAuthCookie(token);

        return NextResponse.json({
            success: true,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Failed to log in' },
            { status: 500 }
        );
    }
}
