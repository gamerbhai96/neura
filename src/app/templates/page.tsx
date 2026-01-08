'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

interface AuthUser {
    id: string;
    email: string;
    name: string | null;
}

const categories = [
    { id: 'all', label: 'All' },
    { id: 'developer', label: 'Developer' },
    { id: 'creative', label: 'Creative' },
    { id: 'minimal', label: 'Minimal' },
];

const templates = [
    { id: 'cyberpunk-neon', name: 'Cyberpunk Neon', category: 'developer', color: 'from-violet-600 to-fuchsia-600', isNew: false, isPopular: true },
    { id: 'apple-minimal', name: 'Apple Minimal', category: 'minimal', color: 'from-zinc-400 to-zinc-600', isNew: false, isPopular: true },
    { id: '3d-interactive', name: '3D Interactive', category: 'creative', color: 'from-orange-500 to-red-600', isNew: false },
    { id: 'glassmorphism', name: 'Glassmorphism', category: 'creative', color: 'from-cyan-500 to-blue-600', isNew: false },
    { id: 'particle-bg', name: 'Particle Flow', category: 'creative', color: 'from-emerald-500 to-teal-600', isNew: false },
    { id: 'retro-pixel', name: 'Retro Pixel', category: 'developer', color: 'from-green-500 to-emerald-600', isNew: false },
    { id: 'neo-brutalism', name: 'Neo Brutalism', category: 'creative', color: 'from-yellow-500 to-orange-500', isNew: false },
    { id: 'space-cosmic', name: 'Space Cosmic', category: 'creative', color: 'from-indigo-600 to-purple-800', isNew: false },
    { id: 'terminal-cli', name: 'Terminal CLI', category: 'developer', color: 'from-green-600 to-black', isNew: false, isPopular: true },
    { id: 'isometric-3d', name: 'Isometric 3D', category: 'developer', color: 'from-blue-600 to-violet-600', isNew: false },
    { id: 'magazine-editorial', name: 'Magazine', category: 'minimal', color: 'from-stone-300 to-stone-500', isNew: false },
    { id: 'glitch-cyber', name: 'Glitch Cyber', category: 'developer', color: 'from-cyan-500 to-purple-600', isNew: false },
    { id: 'nature-organic', name: 'Nature Organic', category: 'minimal', color: 'from-green-400 to-teal-500', isNew: false },
    { id: 'liquid-fluid', name: 'Liquid Fluid', category: 'creative', color: 'from-blue-400 to-cyan-500', isNew: false },
    { id: 'gradient-blob', name: 'Gradient Blob', category: 'creative', color: 'from-pink-500 to-rose-600', isNew: false },
    { id: 'parallax-scroll', name: 'Parallax Scroll', category: 'minimal', color: 'from-slate-600 to-zinc-700', isNew: false },
    { id: 'webgl-tunnel', name: 'WebGL Tunnel', category: 'creative', color: 'from-cyan-700 to-purple-800', isNew: false },
    { id: 'aurora-borealis', name: 'Aurora Borealis', category: 'creative', color: 'from-emerald-400 to-purple-600', isNew: true },
    { id: 'matrix-rain', name: 'Matrix Rain', category: 'developer', color: 'from-green-500 to-black', isNew: true },
    { id: 'neon-synthwave', name: 'Neon Synthwave', category: 'creative', color: 'from-pink-500 to-cyan-500', isNew: true },
    { id: 'dark-academia', name: 'Dark Academia', category: 'minimal', color: 'from-amber-700 to-stone-800', isNew: true },
    { id: 'glass-cards', name: 'Glass Cards', category: 'creative', color: 'from-violet-500 to-fuchsia-600', isNew: true },
    { id: 'minimal-swiss', name: 'Minimal Swiss', category: 'minimal', color: 'from-white to-red-500', isNew: true },
    { id: 'gradient-mesh', name: 'Gradient Mesh', category: 'creative', color: 'from-rose-400 to-indigo-500', isNew: true },
    { id: 'vaporwave', name: 'Vaporwave', category: 'creative', color: 'from-pink-400 to-purple-500', isNew: true },
    { id: 'geometric-art', name: 'Geometric Art', category: 'creative', color: 'from-orange-400 to-blue-500', isNew: true },
    { id: 'japanese-zen', name: 'Japanese Zen', category: 'minimal', color: 'from-stone-200 to-stone-400', isNew: true },
    { id: 'brutalist-web', name: 'Brutalist Web', category: 'developer', color: 'from-black to-white', isNew: true },
    { id: 'cyberpunk-2077', name: 'Cyberpunk 2077', category: 'developer', color: 'from-yellow-400 to-pink-600', isNew: true },
    { id: 'memphis-design', name: 'Memphis Design', category: 'creative', color: 'from-yellow-300 to-cyan-400', isNew: true },
    { id: 'cosmic-galaxy', name: 'Cosmic Galaxy', category: 'creative', color: 'from-purple-600 to-blue-600', isNew: true },
    { id: 'paper-cutout', name: 'Paper Cutout', category: 'creative', color: 'from-amber-200 to-orange-400', isNew: true },
    { id: 'blueprint', name: 'Blueprint', category: 'developer', color: 'from-blue-800 to-cyan-700', isNew: true },
    { id: 'monochrome-elegant', name: 'Monochrome', category: 'minimal', color: 'from-white to-black', isNew: true },
    { id: 'holographic', name: 'Holographic', category: 'creative', color: 'from-pink-400 via-cyan-400 to-yellow-400', isNew: true },
    { id: 'newspaper', name: 'Newspaper', category: 'minimal', color: 'from-amber-50 to-stone-300', isNew: true },
    { id: 'gradient-waves', name: 'Gradient Waves', category: 'creative', color: 'from-violet-500 to-pink-500', isNew: true },
    { id: 'neon-grid', name: 'Neon Grid', category: 'developer', color: 'from-cyan-500 to-fuchsia-500', isNew: true },
    { id: 'retro-comic', name: 'Retro Comic', category: 'creative', color: 'from-red-500 to-yellow-400', isNew: true, isPopular: true },
    { id: 'pixel-art', name: 'Pixel Art', category: 'developer', color: 'from-indigo-700 to-pink-600', isNew: true },
    // New 20 Creative Templates
    { id: 'watercolor-splash', name: 'Watercolor Splash', category: 'creative', color: 'from-pink-300 via-purple-300 to-blue-300', isNew: true },
    { id: 'origami-paper', name: 'Origami Paper', category: 'creative', color: 'from-rose-200 to-amber-200', isNew: true },
    { id: 'underwater-ocean', name: 'Underwater Ocean', category: 'creative', color: 'from-blue-600 to-cyan-400', isNew: true },
    { id: 'steampunk-brass', name: 'Steampunk Brass', category: 'creative', color: 'from-amber-600 to-yellow-800', isNew: true },
    { id: 'neon-tokyo', name: 'Neon Tokyo', category: 'developer', color: 'from-pink-500 to-cyan-400', isNew: true },
    { id: 'art-deco-gold', name: 'Art Deco Gold', category: 'creative', color: 'from-yellow-500 to-amber-700', isNew: true },
    { id: 'polaroid-memories', name: 'Polaroid Memories', category: 'creative', color: 'from-amber-100 to-stone-300', isNew: true },
    { id: 'arcade-cabinet', name: 'Arcade Cabinet', category: 'developer', color: 'from-purple-600 to-pink-500', isNew: true },
    { id: 'candy-pop', name: 'Candy Pop', category: 'creative', color: 'from-pink-400 to-yellow-300', isNew: true },
    { id: 'industrial-steel', name: 'Industrial Steel', category: 'developer', color: 'from-zinc-600 to-yellow-500', isNew: true },
    { id: 'botanical-garden', name: 'Botanical Garden', category: 'creative', color: 'from-green-400 to-emerald-600', isNew: true },
    { id: 'cosmic-nebula', name: 'Cosmic Nebula', category: 'creative', color: 'from-purple-600 to-pink-500', isNew: true },
    { id: 'vintage-radio', name: 'Vintage Radio', category: 'creative', color: 'from-amber-500 to-orange-700', isNew: true },
    { id: 'chalkboard-school', name: 'Chalkboard School', category: 'creative', color: 'from-green-900 to-green-950', isNew: true },
    { id: 'lava-lamp', name: 'Lava Lamp', category: 'creative', color: 'from-pink-500 to-orange-500', isNew: true },
    { id: 'circuit-board', name: 'Circuit Board', category: 'developer', color: 'from-green-600 to-green-900', isNew: true },
    { id: 'stained-glass', name: 'Stained Glass', category: 'creative', color: 'from-red-500 via-amber-400 to-blue-500', isNew: true },
    { id: 'cassette-tape', name: 'Cassette Tape', category: 'creative', color: 'from-orange-400 to-amber-600', isNew: true },
    { id: 'graffiti-street', name: 'Graffiti Street', category: 'creative', color: 'from-pink-500 via-yellow-400 to-cyan-400', isNew: true },
    { id: 'retro-diner', name: 'Retro Diner', category: 'creative', color: 'from-rose-500 to-cyan-400', isNew: true },
];

export default function TemplatesPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState<AuthUser | null>(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('/api/auth/me');
                if (response.ok) {
                    const data = await response.json();
                    setUser(data.user);
                }
            } catch (error) {
                console.error('Auth check error:', error);
            }
        };
        checkAuth();
    }, []);

    const filteredTemplates = templates.filter(t => {
        const matchesCategory = selectedCategory === 'all' || t.category === selectedCategory;
        const matchesSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen bg-[#09090b] text-white">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg opacity-30" />

            {/* Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[120px]" />
            </div>

            <Navbar />

            {/* Main Content */}
            <main className="relative pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 mb-4"
                        >
                            <Sparkles className="w-5 h-5 text-blue-400" />
                            <span className="text-sm text-zinc-400">{templates.length} templates available</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="heading-lg mb-4"
                        >
                            Choose your template
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-zinc-400 max-w-lg"
                        >
                            Stunning portfolios powered by Next.js and Framer Motion. Pick one and make it yours.
                        </motion.p>
                    </div>

                    {/* Filters */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mb-12"
                    >
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                            <input
                                type="text"
                                placeholder="Search templates..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {/* Categories */}
                        <div className="flex gap-2 flex-wrap">
                            {categories.map(cat => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat.id
                                        ? 'bg-white text-black'
                                        : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>

                    {/* Templates Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredTemplates.map((template, i) => (
                            <motion.div
                                key={template.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                            >
                                <Link
                                    href={`/templates/${template.id}`}
                                    className="block group"
                                >
                                    <div className="card overflow-hidden">
                                        {/* Preview */}
                                        <div className={`aspect-[4/3] bg-gradient-to-br ${template.color} relative overflow-hidden`}>
                                            {/* Pattern Overlay */}
                                            <div className="absolute inset-0 dot-pattern opacity-20" />

                                            {/* Center Element */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform" />
                                            </div>

                                            {/* Badges */}
                                            <div className="absolute top-3 left-3 flex gap-2">
                                                {template.isNew && (
                                                    <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-md">
                                                        New
                                                    </span>
                                                )}
                                                {template.isPopular && (
                                                    <span className="px-2 py-1 bg-amber-500 text-black text-xs font-medium rounded-md">
                                                        Popular
                                                    </span>
                                                )}
                                            </div>

                                            {/* Hover Overlay */}
                                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-2">
                                                    Preview
                                                    <ArrowUpRight className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="p-4">
                                            <h3 className="font-medium group-hover:text-blue-400 transition-colors">
                                                {template.name}
                                            </h3>
                                            <p className="text-sm text-zinc-500 capitalize">
                                                {template.category}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredTemplates.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-zinc-400">No templates found. Try a different search.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
