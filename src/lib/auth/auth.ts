import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { createClient } from '@/lib/supabase/server';

const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-change-me';
const COOKIE_NAME = 'neura-auth-token';
const OTP_EXPIRY_MINUTES = 10;

export interface AuthUser {
    id: string;
    email: string;
    name: string | null;
    email_verified: boolean;
}

export interface JWTPayload {
    userId: string;
    email: string;
    iat?: number;
    exp?: number;
}

// Password hashing
export async function hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
}

// JWT Token handling
export function generateToken(userId: string, email: string): string {
    return jwt.sign(
        { userId, email } as JWTPayload,
        JWT_SECRET,
        { expiresIn: '7d' }
    );
}

export function verifyToken(token: string): JWTPayload | null {
    try {
        return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch {
        return null;
    }
}

// Generate 6-digit OTP code
export function generateOTP(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

// Cookie management
export async function setAuthCookie(token: string): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set(COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
    });
}

export async function clearAuthCookie(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete(COOKIE_NAME);
}

export async function getAuthCookie(): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(COOKIE_NAME)?.value;
}

// Get current session from cookies (server-side)
export async function getSession(): Promise<AuthUser | null> {
    const token = await getAuthCookie();
    if (!token) return null;

    const payload = verifyToken(token);
    if (!payload) return null;

    // Fetch user from database to get fresh data
    const supabase = await createClient();
    const { data: user, error } = await supabase
        .from('users')
        .select('id, email, name, email_verified')
        .eq('id', payload.userId)
        .single();

    if (error || !user) return null;

    return user as AuthUser;
}

// Get user by email
export async function getUserByEmail(email: string) {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', email.toLowerCase())
        .single();

    if (error) return null;
    return data;
}

// Get user by ID
export async function getUserById(id: string) {
    const supabase = await createClient();
    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return null;
    return data;
}

// Create new user with OTP
export async function createUser(email: string, password: string, name: string) {
    const supabase = await createClient();
    const passwordHash = await hashPassword(password);
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000).toISOString();

    const { data, error } = await supabase
        .from('users')
        .insert({
            email: email.toLowerCase(),
            password_hash: passwordHash,
            name,
            verification_otp: otp,
            verification_otp_expires: otpExpires,
            email_verified: false,
        })
        .select()
        .single();

    if (error) throw error;
    return { user: data, otp };
}

// Verify email with OTP
export async function verifyEmailOTP(email: string, otp: string) {
    const supabase = await createClient();

    const { data: user, error: findError } = await supabase
        .from('users')
        .select('id, verification_otp, verification_otp_expires')
        .eq('email', email.toLowerCase())
        .eq('email_verified', false)
        .single();

    if (findError || !user) return { success: false, error: 'User not found' };

    // Check if OTP matches
    if (user.verification_otp !== otp) {
        return { success: false, error: 'Invalid OTP code' };
    }

    // Check if OTP is expired
    if (new Date(user.verification_otp_expires) < new Date()) {
        return { success: false, error: 'OTP has expired. Please request a new one.' };
    }

    const { error: updateError } = await supabase
        .from('users')
        .update({
            email_verified: true,
            verification_otp: null,
            verification_otp_expires: null,
            updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

    if (updateError) throw updateError;
    return { success: true, userId: user.id };
}

// Resend verification OTP
export async function resendVerificationOTP(email: string) {
    const supabase = await createClient();
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000).toISOString();

    const { data, error } = await supabase
        .from('users')
        .update({
            verification_otp: otp,
            verification_otp_expires: otpExpires,
            updated_at: new Date().toISOString(),
        })
        .eq('email', email.toLowerCase())
        .eq('email_verified', false)
        .select()
        .single();

    if (error) return null;
    return { user: data, otp };
}

// Set password reset OTP
export async function setPasswordResetOTP(email: string) {
    const supabase = await createClient();
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + OTP_EXPIRY_MINUTES * 60 * 1000).toISOString();

    const { data, error } = await supabase
        .from('users')
        .update({
            reset_otp: otp,
            reset_otp_expires: otpExpires,
            updated_at: new Date().toISOString(),
        })
        .eq('email', email.toLowerCase())
        .select()
        .single();

    if (error) return null;
    return { user: data, otp };
}

// Verify password reset OTP
export async function verifyPasswordResetOTP(email: string, otp: string) {
    const supabase = await createClient();

    const { data: user, error: findError } = await supabase
        .from('users')
        .select('id, reset_otp, reset_otp_expires')
        .eq('email', email.toLowerCase())
        .single();

    if (findError || !user) return { success: false, error: 'User not found' };

    if (user.reset_otp !== otp) {
        return { success: false, error: 'Invalid OTP code' };
    }

    if (new Date(user.reset_otp_expires) < new Date()) {
        return { success: false, error: 'OTP has expired. Please request a new one.' };
    }

    return { success: true, userId: user.id };
}

// Reset password after OTP verification
export async function resetPasswordWithOTP(email: string, otp: string, newPassword: string) {
    const verification = await verifyPasswordResetOTP(email, otp);
    if (!verification.success) {
        return verification;
    }

    const supabase = await createClient();
    const passwordHash = await hashPassword(newPassword);

    const { error: updateError } = await supabase
        .from('users')
        .update({
            password_hash: passwordHash,
            reset_otp: null,
            reset_otp_expires: null,
            updated_at: new Date().toISOString(),
        })
        .eq('id', verification.userId);

    if (updateError) throw updateError;
    return { success: true, error: undefined };
}
