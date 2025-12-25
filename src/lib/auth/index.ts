// Auth utilities
export {
    hashPassword,
    verifyPassword,
    generateToken,
    verifyToken,
    generateOTP,
    setAuthCookie,
    clearAuthCookie,
    getAuthCookie,
    getSession,
    getUserByEmail,
    getUserById,
    createUser,
    verifyEmailOTP,
    resendVerificationOTP,
    setPasswordResetOTP,
    verifyPasswordResetOTP,
    resetPasswordWithOTP,
} from './auth';

export type { AuthUser, JWTPayload } from './auth';

// Email utilities
export {
    sendVerificationOTP,
    sendPasswordResetOTP,
} from './brevo';
