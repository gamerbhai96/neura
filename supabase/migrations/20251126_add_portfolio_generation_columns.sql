-- Migration: Add portfolio generation columns to user_sites table
-- Date: 2025-11-26
-- Description: Adds columns needed for the new portfolio generation flow

-- Add generation_status column to track portfolio creation status
ALTER TABLE user_sites 
ADD COLUMN IF NOT EXISTS generation_status TEXT DEFAULT 'draft' CHECK (generation_status IN ('draft', 'processing', 'completed', 'failed'));

-- Add preview_url column to store the preview URL
ALTER TABLE user_sites 
ADD COLUMN IF NOT EXISTS preview_url TEXT;

-- Add exported_zip_url column to store the downloadable ZIP file URL
ALTER TABLE user_sites 
ADD COLUMN IF NOT EXISTS exported_zip_url TEXT;

-- Add resume_file_url column to store the uploaded resume (optional)
ALTER TABLE user_sites 
ADD COLUMN IF NOT EXISTS resume_file_url TEXT;

-- Add index on user_id and generation_status for faster queries
CREATE INDEX IF NOT EXISTS idx_user_sites_user_status 
ON user_sites(user_id, generation_status);

-- Comment
COMMENT ON COLUMN user_sites.generation_status IS 'Status of portfolio generation: draft, processing, completed, failed';
COMMENT ON COLUMN user_sites.preview_url IS 'URL to preview the generated portfolio';
COMMENT ON COLUMN user_sites.exported_zip_url IS 'URL to download the portfolio ZIP file';
COMMENT ON COLUMN user_sites.resume_file_url IS 'URL of the uploaded resume file';
