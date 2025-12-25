-- Migration: Create user_sites and templates tables
-- Date: 2025-11-26
-- Description: Complete database setup for portfolio generation feature

-- Create templates table (if it doesn't exist)
CREATE TABLE IF NOT EXISTS public.templates (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create user_sites table
CREATE TABLE IF NOT EXISTS public.user_sites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    template_id TEXT REFERENCES public.templates(id) ON DELETE SET NULL,
    data_json JSONB DEFAULT '{}'::jsonb,
    exported_zip_url TEXT,
    preview_url TEXT,
    generation_status TEXT DEFAULT 'draft' CHECK (generation_status IN ('draft', 'processing', 'completed', 'failed')),
    resume_file_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_sites_user_id ON public.user_sites(user_id);
CREATE INDEX IF NOT EXISTS idx_user_sites_template_id ON public.user_sites(template_id);
CREATE INDEX IF NOT EXISTS idx_user_sites_status ON public.user_sites(user_id, generation_status);

-- Enable Row Level Security (RLS)
ALTER TABLE public.user_sites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_sites
-- Users can only see their own sites
CREATE POLICY "Users can view own sites"
    ON public.user_sites
    FOR SELECT
    USING (auth.uid() = user_id);

-- Users can insert their own sites
CREATE POLICY "Users can insert own sites"
    ON public.user_sites
    FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- Users can update their own sites
CREATE POLICY "Users can update own sites"
    ON public.user_sites
    FOR UPDATE
    USING (auth.uid() = user_id);

-- Users can delete their own sites
CREATE POLICY "Users can delete own sites"
    ON public.user_sites
    FOR DELETE
    USING (auth.uid() = user_id);

-- Templates are publicly readable
CREATE POLICY "Templates are publicly readable"
    ON public.templates
    FOR SELECT
    USING (true);

-- Insert default templates (all the templates we have)
INSERT INTO public.templates (id, name, category) VALUES
    ('cyberpunk-neon', 'Cyberpunk Neon', 'developer'),
    ('apple-minimal', 'Apple Minimal', 'minimal'),
    ('3d-interactive', '3D Interactive', 'creative'),
    ('glassmorphism', 'Glassmorphism', 'creative'),
    ('particle-bg', 'Particle Flow', 'creative'),
    ('retro-pixel', 'Retro Pixel', 'developer'),
    ('gradient-blob', 'Gradient Blob', 'creative'),
    ('parallax-scroll', 'Parallax Scroll', 'minimal'),
    ('neo-brutalism', 'Neo Brutalism', 'creative'),
    ('space-cosmic', 'Space Cosmic', 'creative'),
    ('terminal-cli', 'Terminal CLI', 'developer'),
    ('isometric-3d', 'Isometric 3D', 'developer'),
    ('magazine-editorial', 'Magazine', 'minimal'),
    ('glitch-cyber', 'Glitch Cyber', 'developer'),
    ('nature-organic', 'Nature Organic', 'minimal'),
    ('liquid-fluid', 'Liquid Fluid', 'creative'),
    ('3d-room', '3D Room', 'creative'),
    ('webgl-tunnel', 'WebGL Tunnel', 'creative')
ON CONFLICT (id) DO NOTHING;

-- Add comments
COMMENT ON TABLE public.user_sites IS 'Stores user-generated portfolio sites';
COMMENT ON TABLE public.templates IS 'Available portfolio templates';
COMMENT ON COLUMN public.user_sites.generation_status IS 'Status: draft, processing, completed, failed';
COMMENT ON COLUMN public.user_sites.data_json IS 'Portfolio data extracted from resume';
COMMENT ON COLUMN public.user_sites.exported_zip_url IS 'URL to download the generated ZIP file';
