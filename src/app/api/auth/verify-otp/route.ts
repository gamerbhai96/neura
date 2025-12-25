import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailOTP, generateToken, setAuthCookie, getUserByEmail } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const { email, otp } = await request.json();

        if (!email || !otp) {
            return NextResponse.json(
                { error: 'Email and OTP are required' },
                { status: 400 }
            );
        }

        const result = await verifyEmailOTP(email, otp);

        if (!result.success) {
            return NextResponse.json(
                { error: result.error },
                { status: 400 }
            );
        }

        // Get updated user and auto-login
        const user = await getUserByEmail(email);
        if (user) {
            const token = generateToken(user.id, user.email);
            await setAuthCookie(token);
        }

        return NextResponse.json({
            success: true,
            message: 'Email verified successfully!',
        });
    } catch (error) {
        console.error('Verify OTP error:', error);
        return NextResponse.json(
            { error: 'Failed to verify email' },
            { status: 500 }
        );
    }
}
