-- SQL Script to insert 20 new creative portfolio templates into Supabase
-- Run this in the Supabase SQL Editor

INSERT INTO public.templates (id, name, category) VALUES
('watercolor-splash', 'Watercolor Splash', 'creative'),
('origami-paper', 'Origami Paper', 'creative'),
('underwater-ocean', 'Underwater Ocean', 'creative'),
('steampunk-brass', 'Steampunk Brass', 'creative'),
('neon-tokyo', 'Neon Tokyo', 'developer'),
('art-deco-gold', 'Art Deco Gold', 'creative'),
('polaroid-memories', 'Polaroid Memories', 'creative'),
('arcade-cabinet', 'Arcade Cabinet', 'developer'),
('candy-pop', 'Candy Pop', 'creative'),
('industrial-steel', 'Industrial Steel', 'developer'),
('botanical-garden', 'Botanical Garden', 'creative'),
('cosmic-nebula', 'Cosmic Nebula', 'creative'),
('vintage-radio', 'Vintage Radio', 'creative'),
('chalkboard-school', 'Chalkboard School', 'creative'),
('lava-lamp', 'Lava Lamp', 'creative'),
('circuit-board', 'Circuit Board', 'developer'),
('stained-glass', 'Stained Glass', 'creative'),
('cassette-tape', 'Cassette Tape', 'creative'),
('graffiti-street', 'Graffiti Street', 'creative'),
('retro-diner', 'Retro Diner', 'creative')
ON CONFLICT (id) DO NOTHING;
