'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Gamepad2, Star, Trophy, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Pixel Dev",
    role: "Game UI Designer",
    email: "dev@arcade.io",
    phone: "+1 555 000 0000",
    location: "Neo Tokyo",
    bio: "Crafting interfaces that level up the user experience. Insert coin to continue.",
    skills: ["React", "Unity", "Figma", "Motion", "Pixel Art", "UI/UX", "CSS", "Animation"],
    experience: [{ company: "Arcade Studios", position: "Lead UI Designer", startDate: "2020", endDate: "Present", description: "Designing game interfaces that players love", highlights: [] }],
    education: [
        { school: "Digital Arts Institute", degree: "BFA Game Design", field: "Game Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "PixelQuest", description: "Retro RPG interface kit", technologies: ["Figma", "React"] },
        { name: "NeonDash", description: "Racing game HUD system", technologies: ["Unity", "C#"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// CRT scanline overlay
const ScanlineOverlay = () => (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            backgroundSize: '100% 4px'
        }}
    />
);

// Neon tube light effect
const NeonTube = ({ color, className }: { color: string; className?: string }) => (
    <motion.div
        className={`rounded-full ${className}`}
        style={{
            background: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}50`
        }}
        animate={{
            opacity: [0.8, 1, 0.9, 1, 0.8],
            boxShadow: [
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}50`,
                `0 0 15px ${color}, 0 0 30px ${color}, 0 0 60px ${color}60`,
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}50`
            ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
    />
);

// Pixel art star decoration
const PixelStar = ({ x, y, delay, size = 8 }: { x: string; y: string; delay: number; size?: number }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360]
        }}
        transition={{ duration: 3, repeat: Infinity, delay }}
    >
        <svg width={size} height={size} viewBox="0 0 8 8" style={{ imageRendering: 'pixelated' }}>
            <rect x="3" y="0" width="2" height="2" fill="#fef08a" />
            <rect x="0" y="3" width="2" height="2" fill="#fef08a" />
            <rect x="6" y="3" width="2" height="2" fill="#fef08a" />
            <rect x="3" y="6" width="2" height="2" fill="#fef08a" />
            <rect x="3" y="3" width="2" height="2" fill="#ffffff" />
        </svg>
    </motion.div>
);

// Arcade button component
const ArcadeButton = ({ color, children, onClick, className = '' }: {
    color: string; children: React.ReactNode; onClick?: () => void; className?: string
}) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, y: 2 }}
        className={`relative px-6 py-3 font-bold uppercase tracking-wider rounded-lg ${className}`}
        style={{
            background: `linear-gradient(180deg, ${color} 0%, ${color}cc 100%)`,
            boxShadow: `0 4px 0 ${color}80, 0 6px 20px ${color}40, inset 0 2px 0 rgba(255,255,255,0.3)`,
            border: `2px solid ${color}`
        }}
    >
        {children}
    </motion.button>
);

// Arcade cabinet frame card
const ArcadeCard = ({ children, className = '', glowColor = '#f0abfc' }: {
    children: React.ReactNode; className?: string; glowColor?: string
}) => (
    <div className={`relative ${className}`}>
        {/* Outer frame with neon border */}
        <div className="relative rounded-xl overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #1e1b4b 0%, #0f0d24 100%)',
                boxShadow: `0 0 30px ${glowColor}30, inset 0 0 30px rgba(0,0,0,0.5)`
            }}>
            {/* Top neon strip */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-400 to-transparent" />
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-pink-400/50" />
            <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-cyan-400/50" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-pink-400/50" />
            {/* Content */}
            <div className="p-6">{children}</div>
        </div>
    </div>
);

// Token/coin component for skills
const ArcadeToken = ({ skill, index }: { skill: string; index: number }) => {
    const colors = ['#f472b6', '#a78bfa', '#67e8f9', '#a3e635', '#fbbf24', '#fb7185', '#818cf8', '#2dd4bf'];
    const color = colors[index % colors.length];

    return (
        <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, rotateY: 15 }}
            className="cursor-pointer perspective-1000"
        >
            <div className="w-20 h-20 rounded-full flex items-center justify-center relative"
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${color}, ${color}99 70%, ${color}66)`,
                    boxShadow: `0 4px 0 ${color}80, 0 0 20px ${color}40, inset 0 -4px 10px rgba(0,0,0,0.3), inset 0 4px 10px rgba(255,255,255,0.2)`,
                    border: `3px solid ${color}`
                }}>
                {/* Inner ring */}
                <div className="absolute inset-2 rounded-full border-2 border-white/20" />
                {/* Star emblem */}
                <Star className="w-6 h-6 text-white/90" fill="currentColor" />
            </div>
            <p className="text-center mt-2 text-sm font-bold text-white/90">{skill}</p>
        </motion.div>
    );
};

// Joystick decoration
const JoystickDeco = ({ className }: { className?: string }) => (
    <div className={`${className}`}>
        <div className="w-12 h-12 rounded-full bg-gradient-to-b from-zinc-600 to-zinc-800 shadow-lg flex items-center justify-center">
            <motion.div
                className="w-6 h-16 rounded-full bg-gradient-to-b from-red-500 to-red-700 -mt-8"
                style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.4)' }}
                animate={{ rotate: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </div>
    </div>
);

export default function CandyPopPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen overflow-hidden font-sans" style={{
            background: 'linear-gradient(180deg, #0f0d24 0%, #1e1b4b 50%, #2e1065 100%)'
        }}>
            {/* CRT scanlines */}
            <ScanlineOverlay />

            {/* Pixel stars background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <PixelStar
                        key={i}
                        x={`${Math.random() * 100}%`}
                        y={`${Math.random() * 100}%`}
                        delay={i * 0.3}
                        size={6 + Math.random() * 6}
                    />
                ))}
            </div>

            {/* Neon accent lights */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <NeonTube color="#f472b6" className="absolute top-20 left-10 w-px h-32" />
                <NeonTube color="#67e8f9" className="absolute top-40 right-16 w-px h-24" />
                <NeonTube color="#a78bfa" className="absolute bottom-32 left-20 w-24 h-px" />
                <NeonTube color="#fbbf24" className="absolute bottom-48 right-24 w-20 h-px" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-40 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <ArcadeCard glowColor="#f472b6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Gamepad2 className="w-8 h-8 text-pink-400" />
                                </motion.div>
                                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                                    ARCADE
                                </span>
                                <div className="ml-4 flex gap-1">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-green-400"
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-6 text-sm font-bold">
                                {['Start', 'Skills', 'Scores', 'Credits'].map((item, i) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="hover:text-pink-400 transition-colors"
                                        style={{ color: ['#f472b6', '#a78bfa', '#67e8f9', '#fbbf24'][i] }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </ArcadeCard>
                </div>
            </nav>

            {/* Hero - Claw machine inspired */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Claw machine frame */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative w-72 h-80 mx-auto mb-12"
                    >
                        {/* Machine frame */}
                        <div className="absolute inset-0 rounded-xl border-4 border-purple-500/50 overflow-hidden"
                            style={{
                                background: 'linear-gradient(180deg, rgba(139,92,246,0.1) 0%, rgba(30,27,75,0.9) 100%)',
                                boxShadow: '0 0 40px rgba(168,85,247,0.3), inset 0 0 60px rgba(0,0,0,0.5)'
                            }}>
                            {/* Top display */}
                            <div className="absolute top-4 left-4 right-4 h-10 bg-black/50 rounded border border-purple-400/30 flex items-center justify-center">
                                <motion.span
                                    className="text-cyan-400 font-mono text-sm"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                >
                                    INSERT COIN ▶
                                </motion.span>
                            </div>

                            {/* Claw */}
                            <motion.div
                                className="absolute top-16 left-1/2 -translate-x-1/2"
                                animate={{ y: [0, 40, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="w-1 h-20 bg-gradient-to-b from-zinc-400 to-zinc-600 mx-auto" />
                                <div className="flex">
                                    <motion.div
                                        className="w-6 h-8 bg-gradient-to-b from-zinc-400 to-zinc-600 -rotate-12 origin-top"
                                        animate={{ rotate: [-12, -25, -12] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="w-6 h-8 bg-gradient-to-b from-zinc-400 to-zinc-600 rotate-12 origin-top -ml-2"
                                        animate={{ rotate: [12, 25, 12] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </div>
                            </motion.div>

                            {/* Prizes (floating circles) */}
                            <div className="absolute bottom-4 left-4 right-4 h-24 flex items-end justify-center gap-2">
                                {['#f472b6', '#a78bfa', '#67e8f9', '#fbbf24', '#a3e635'].map((color, i) => (
                                    <motion.div
                                        key={i}
                                        className="w-10 h-10 rounded-full"
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, ${color}, ${color}80)`,
                                            boxShadow: `0 0 15px ${color}60`
                                        }}
                                        animate={{ y: [0, -5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Side joysticks */}
                        <JoystickDeco className="absolute -left-8 bottom-20" />
                        <JoystickDeco className="absolute -right-8 bottom-20" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pink-500/50 bg-pink-500/10 mb-6">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            <span className="text-pink-300 font-bold text-sm uppercase tracking-wider">{displayData.role}</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
                                {displayData.name}
                            </span>
                        </h1>

                        <p className="text-lg text-purple-200/70 max-w-md mx-auto mb-10">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <ArcadeButton color="#ec4899">
                                <span className="text-white">Start Game</span>
                            </ArcadeButton>
                            <ArcadeButton color="#8b5cf6">
                                <span className="text-white">High Scores</span>
                            </ArcadeButton>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="start" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ArcadeCard glowColor="#a78bfa">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                    <Trophy className="w-6 h-6 text-white" />
                                </div>
                                <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                                    Player Profile
                                </h2>
                            </div>
                            <p className="text-purple-200/70 leading-relaxed">
                                Like a perfectly designed game UI, I believe interfaces should be intuitive,
                                rewarding, and visually exciting. Every button press should feel satisfying,
                                every transition should feel smooth. I bring the joy of gaming to every project,
                                creating experiences that users want to engage with again and again.
                                Currently leveling up from {displayData.location}.
                            </p>
                            {/* Stats bar */}
                            <div className="mt-6 flex gap-4">
                                {[
                                    { label: 'LVL', value: '42' },
                                    { label: 'XP', value: '9,999' },
                                    { label: 'RANK', value: 'S+' }
                                ].map((stat) => (
                                    <div key={stat.label} className="px-4 py-2 bg-black/30 rounded border border-purple-500/30">
                                        <div className="text-xs text-purple-400">{stat.label}</div>
                                        <div className="text-xl font-bold text-cyan-400">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                        </ArcadeCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Arcade tokens */}
            <section id="skills" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4"
                    >
                        Power-Ups
                    </motion.h2>
                    <p className="text-purple-400 mb-16">Collect them all!</p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {displayData.skills.map((skill, i) => (
                            <ArcadeToken key={skill} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Trading cards */}
            <section id="scores" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-16"
                    >
                        High Scores
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, rotateY: 5 }}
                                className={`perspective-1000 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <ArcadeCard glowColor={i === 0 ? '#f472b6' : '#67e8f9'}>
                                    {/* Holographic top strip */}
                                    <div className="h-2 -mx-6 -mt-6 mb-4 rounded-t"
                                        style={{
                                            background: `linear-gradient(90deg, ${i === 0 ? '#f472b6' : '#67e8f9'}, #a78bfa, ${i === 0 ? '#67e8f9' : '#f472b6'})`,
                                            animation: 'holo 3s linear infinite'
                                        }}
                                    />
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-purple-300/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={tech} className="px-3 py-1 rounded-full text-xs font-bold"
                                                style={{
                                                    background: ['#f472b620', '#a78bfa20', '#67e8f920', '#fbbf2420'][j % 4],
                                                    color: ['#f472b6', '#a78bfa', '#67e8f9', '#fbbf24'][j % 4],
                                                    border: `1px solid ${['#f472b6', '#a78bfa', '#67e8f9', '#fbbf24'][j % 4]}50`
                                                }}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </ArcadeCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-16"
                    >
                        Quest Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ArcadeCard glowColor="#a78bfa">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-pink-400">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-cyan-400 mb-2">{exp.company}</p>
                                <p className="text-purple-200/60">{exp.description}</p>
                            </ArcadeCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-16"
                    >
                        Training Mode
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <ArcadeCard glowColor="#67e8f9">
                                    <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4">
                                        <span className="text-lg">🎮</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-cyan-400 mb-1">{edu.degree}</h3>
                                    <p className="text-purple-400">{edu.school}</p>
                                    <p className="text-sm text-purple-300/50">{edu.startDate} — {edu.endDate}</p>
                                </ArcadeCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="credits" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ArcadeCard glowColor="#f472b6">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Gamepad2 className="w-16 h-16 mx-auto mb-6 text-pink-400" />
                            </motion.div>
                            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-4">
                                Insert Coin
                            </h2>
                            <p className="text-purple-200/60 mb-8">
                                Ready to start a new game together?
                            </p>
                            <div className="flex justify-center gap-4">
                                {[
                                    { icon: Mail, href: `mailto:${displayData.email}`, color: '#f472b6' },
                                    { icon: Github, href: displayData.links.github, color: '#a78bfa' },
                                    { icon: Linkedin, href: displayData.links.linkedin, color: '#67e8f9' }
                                ].map(({ icon: Icon, href, color }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        className="p-4 rounded-xl"
                                        style={{
                                            background: `${color}20`,
                                            border: `2px solid ${color}50`,
                                            boxShadow: `0 0 20px ${color}30`
                                        }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color }} />
                                    </motion.a>
                                ))}
                            </div>
                        </ArcadeCard>
                    </motion.div>
                </div>
            </section>

            {/* CSS for holographic animation */}
            <style jsx>{`
                @keyframes holo {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 200% 50%; }
                }
            `}</style>
        </div>
    );
}
