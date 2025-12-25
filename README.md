# Neura - AI-Powered Portfolio Builder

A modern SaaS platform for generating stunning portfolio websites. Upload your resume and let AI create a professional portfolio in minutes.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Database-green?style=flat-square&logo=supabase)
![Brevo](https://img.shields.io/badge/Brevo-Email-orange?style=flat-square)

## ✨ Features

- **40+ Premium Templates** - Developer, Creative, and Minimal styles with Framer Motion animations
- **AI-Powered Resume Parsing** - Upload PDF and auto-fill your portfolio with Gemini AI
- **Live Preview** - Real-time template preview as you edit
- **Export as ZIP** - Download complete Next.js project ready to deploy
- **Custom Authentication** - JWT-based auth with OTP email verification via Brevo
- **Save & Manage** - Multiple portfolio drafts with auto-save

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, TypeScript, TailwindCSS, Framer Motion |
| **Backend** | Supabase (PostgreSQL), Next.js API Routes |
| **Auth** | Custom JWT + OTP via Brevo Email |


## � Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Create a `.env` file:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Auth
JWT_SECRET=your-32-character-secret-key-here

# Brevo Email
BREVO_API_KEY=your-brevo-api-key
BREVO_SENDER_EMAIL=your-verified-sender@email.com
BREVO_SENDER_NAME=Neura

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Set Up Database

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  name TEXT,
  email_verified BOOLEAN DEFAULT FALSE,
  verification_otp TEXT,
  verification_otp_expires TIMESTAMPTZ,
  reset_otp TEXT,
  reset_otp_expires TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow all via service role" ON users FOR ALL USING (true);
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/          # Login, Signup, Forgot Password
│   ├── (dashboard)/     # Dashboard, Profile
│   ├── api/auth/        # Auth API routes
│   ├── builder/         # Portfolio builder
│   └── templates/       # Template browser
├── components/
│   └── templates/       # 40+ portfolio templates
└── lib/
    ├── auth/            # JWT, OTP, Brevo integration
    └── supabase/        # Database client
```

## 🔐 Authentication Flow

1. **Signup** → User receives 6-digit OTP via email
2. **Verify OTP** → Account activated, auto-login
3. **Login** → JWT stored in HTTP-only cookie (7 days)
4. **Forgot Password** → OTP sent → Verify → Set new password

## 🚀 Deployment (Vercel)

1. Push to GitHub
2. Import in Vercel
3. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `JWT_SECRET`
   - `BREVO_API_KEY`
   - `BREVO_SENDER_EMAIL`
   - `BREVO_SENDER_NAME`
   - `NEXT_PUBLIC_APP_URL` (your Vercel URL)
4. Deploy!

## 📝 License

MIT License

---

Built with ❤️ using Next.js, Supabase, and Brevo
