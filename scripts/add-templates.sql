-- Run ONLY this in Supabase SQL Editor
-- Adds the 23 new templates with the correct column schema

INSERT INTO public.templates (id, name, category) VALUES
('aurora-borealis', 'Aurora Borealis', 'creative'),
('matrix-rain', 'Matrix Rain', 'developer'),
('neon-synthwave', 'Neon Synthwave', 'creative'),
('dark-academia', 'Dark Academia', 'minimal'),
('glass-cards', 'Glass Cards', 'creative'),
('minimal-swiss', 'Minimal Swiss', 'minimal'),
('gradient-mesh', 'Gradient Mesh', 'creative'),
('vaporwave', 'Vaporwave', 'creative'),
('geometric-art', 'Geometric Art', 'creative'),
('japanese-zen', 'Japanese Zen', 'minimal'),
('brutalist-web', 'Brutalist Web', 'developer'),
('cyberpunk-2077', 'Cyberpunk 2077', 'developer'),
('memphis-design', 'Memphis Design', 'creative'),
('cosmic-galaxy', 'Cosmic Galaxy', 'creative'),
('paper-cutout', 'Paper Cutout', 'creative'),
('blueprint', 'Blueprint', 'developer'),
('monochrome-elegant', 'Monochrome Elegant', 'minimal'),
('holographic', 'Holographic', 'creative'),
('newspaper', 'Newspaper', 'minimal'),
('gradient-waves', 'Gradient Waves', 'creative'),
('neon-grid', 'Neon Grid', 'developer'),
('retro-comic', 'Retro Comic', 'creative'),
('pixel-art', 'Pixel Art', 'developer')
ON CONFLICT (id) DO NOTHING;
