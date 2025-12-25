-- Run this SQL in your Supabase SQL Editor to create the users table
-- This is required for the custom authentication system with OTP

-- Create the users table for custom authentication
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  
  -- OTP for email verification
  verification_otp TEXT,
  verification_otp_expires TIMESTAMPTZ,
  
  -- OTP for password reset
  reset_otp TEXT,
  reset_otp_expires TIMESTAMPTZ,
  
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add index for email lookups (for fast login)
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Enable Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Policy: Allow all operations via service role
CREATE POLICY "Allow all via service role" ON users
  FOR ALL USING (true) WITH CHECK (true);

-- Note: We use 'true' policies because all auth operations are handled 
-- by the API routes using the service role key, not client-side queries
