-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Templates table
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  preview_image_url TEXT,
  folder_path TEXT NOT NULL,
  tech_stack JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User sites table
CREATE TABLE user_sites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  template_id UUID REFERENCES templates(id),
  data_json JSONB NOT NULL,
  exported_zip_url TEXT,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AI logs table (optional, for debugging)
CREATE TABLE ai_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id),
  action VARCHAR(50),
  input_data JSONB,
  output_data JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_templates_role ON templates(role);
CREATE INDEX idx_user_sites_user_id ON user_sites(user_id);
CREATE INDEX idx_user_sites_template_id ON user_sites(template_id);
CREATE INDEX idx_ai_logs_user_id ON ai_logs(user_id);
CREATE INDEX idx_ai_logs_created_at ON ai_logs(created_at);

-- Row Level Security (RLS) policies
ALTER TABLE user_sites ENABLE ROW LEVEL SECURITY;

-- Users can only read their own sites
CREATE POLICY "Users can read own sites" 
  ON user_sites FOR SELECT 
  USING (auth.uid() = user_id);

-- Users can insert their own sites
CREATE POLICY "Users can insert own sites" 
  ON user_sites FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own sites
CREATE POLICY "Users can update own sites" 
  ON user_sites FOR UPDATE 
  USING (auth.uid() = user_id);

-- Users can delete their own sites
CREATE POLICY "Users can delete own sites" 
  ON user_sites FOR DELETE 
  USING (auth.uid() = user_id);

-- Everyone can read templates (public)
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read templates" 
  ON templates FOR SELECT 
  TO public 
  USING (true);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to auto-update updated_at
CREATE TRIGGER update_user_sites_updated_at 
  BEFORE UPDATE ON user_sites 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
