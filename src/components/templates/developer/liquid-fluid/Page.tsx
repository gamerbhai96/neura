'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Waves, Anchor, Compass, Fish } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Deep Dev",
    role: "Systems Diver",
    email: "dev@abyss.io",
    phone: "+1 555 000 0000",
    location: "The Marianas",
    bio: "Exploring the depths of complex systems. Where others see darkness, I find bioluminescent solutions.",
    skills: ["Rust", "Go", "Kubernetes", "PostgreSQL", "Redis", "GraphQL", "Docker", "AWS"],
    experience: [{ company: "Abyssal Labs", position: "Principal Architect", startDate: "2020", endDate: "Present", description: "Diving deep into distributed systems", highlights: [] }],
    education: [
        { school: "Ocean Tech University", degree: "MS Distributed Systems", field: "Computer Science", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Leviathan", description: "High-scale message broker", technologies: ["Rust", "Tokio"] },
        { name: "Kraken", description: "Distributed task orchestrator", technologies: ["Go", "gRPC"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Bioluminescent jellyfish
const Jellyfish = ({ x, y, size, color, delay }: {
    x: string; y: string; size: number; color: string; delay: number
}) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        animate={{
            y: [0, -100, 0],
            x: [0, 20, -20, 0]
        }}
        transition={{ duration: 20 + delay * 5, repeat: Infinity, delay }}
    >
        {/* Bell */}
        <motion.div
            className="rounded-t-full relative"
            style={{
                width: size,
                height: size * 0.7,
                background: `radial-gradient(ellipse at 50% 30%, ${color}80, ${color}40, transparent)`,
                boxShadow: `0 0 ${size / 2}px ${color}60, inset 0 0 ${size / 3}px ${color}40`
            }}
            animate={{
                scaleX: [1, 1.1, 0.9, 1],
                scaleY: [1, 0.9, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            {/* Glow core */}
            <motion.div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 w-1/3 h-1/3 rounded-full"
                style={{ background: color, filter: `blur(${size / 10}px)` }}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.div>
        {/* Tentacles */}
        <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-px rounded-full"
                    style={{
                        height: size * (0.8 + Math.random() * 0.4),
                        background: `linear-gradient(180deg, ${color}60, transparent)`,
                    }}
                    animate={{
                        scaleY: [1, 1.1, 0.9, 1],
                        x: [0, (i - 2) * 3, 0]
                    }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                />
            ))}
        </div>
    </motion.div>
);

// Deep sea anglerfish silhouette
const AnglerSilhouette = ({ x, size }: { x: string; size: number }) => (
    <motion.div
        className="absolute pointer-events-none opacity-20"
        style={{ left: x, bottom: '10%' }}
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
    >
        <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none">
            <path
                d="M10,30 Q30,10 50,30 Q70,50 90,30 Q95,30 95,35 Q90,40 70,35 Q50,50 30,40 Q10,45 10,30"
                fill="currentColor"
                className="text-cyan-300"
            />
            {/* Lure */}
            <motion.circle
                cx="95" cy="20" r="4"
                fill="#22d3ee"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            />
            <line x1="85" y1="25" x2="95" y2="20" stroke="#22d3ee" strokeWidth="0.5" opacity="0.5" />
        </svg>
    </motion.div>
);

// Caustic light pattern
const CausticLight = () => (
    <div className="fixed inset-0 pointer-events-none opacity-10">
        <motion.div
            className="absolute inset-0"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                filter: 'blur(20px) contrast(2)'
            }}
            animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
        />
    </div>
);

// Bubble particles
const BubbleField = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    bottom: '-20px',
                    width: 4 + Math.random() * 8,
                    height: 4 + Math.random() * 8,
                    background: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.4), rgba(34,211,238,0.1))',
                    border: '1px solid rgba(34,211,238,0.2)'
                }}
                animate={{
                    y: [0, '-100vh'],
                    x: [0, Math.sin(i) * 50, 0],
                    opacity: [0, 0.6, 0]
                }}
                transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: i * 0.5
                }}
            />
        ))}
    </div>
);

// Pressure depth indicator
const DepthMeter = () => (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-cyan-400/50 uppercase tracking-wider">Depth</span>
            <div className="w-1 h-48 bg-slate-800 rounded-full relative overflow-hidden">
                <motion.div
                    className="absolute bottom-0 w-full rounded-full"
                    style={{ background: 'linear-gradient(0deg, #22d3ee, #06b6d4, #0891b2)' }}
                    animate={{ height: ['30%', '70%', '30%'] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>
            <motion.span
                className="text-sm font-mono text-cyan-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                3.7km
            </motion.span>
        </div>
    </div>
);

// Submarine porthole frame
const PortholeCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        {/* Outer ring (metallic frame) */}
        <div className="absolute -inset-3 rounded-2xl"
            style={{
                background: 'linear-gradient(145deg, #334155, #1e293b)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.05), 0 10px 40px rgba(0,0,0,0.5)'
            }}>
            {/* Rivets */}
            {[0, 1, 2, 3].map((i) => (
                <div key={i} className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-slate-400 to-slate-600"
                    style={{
                        top: i < 2 ? '8px' : 'auto',
                        bottom: i >= 2 ? '8px' : 'auto',
                        left: i % 2 === 0 ? '8px' : 'auto',
                        right: i % 2 === 1 ? '8px' : 'auto'
                    }}
                />
            ))}
        </div>
        {/* Glass content area */}
        <div className="relative rounded-xl overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, rgba(8,145,178,0.1), rgba(6,95,124,0.2))',
                boxShadow: 'inset 0 0 30px rgba(34,211,238,0.1)'
            }}>
            {/* Glass reflection */}
            <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="p-6 relative z-10">{children}</div>
        </div>
    </div>
);

// Glowing organism for skills
const GlowOrganism = ({ skill, index }: { skill: string; index: number }) => {
    const colors = ['#22d3ee', '#a855f7', '#ec4899', '#14b8a6', '#f472b6', '#06b6d4', '#8b5cf6', '#10b981'];
    const color = colors[index % colors.length];

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer text-center"
        >
            <motion.div
                className="w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center relative"
                style={{
                    background: `radial-gradient(circle at 40% 40%, ${color}40, ${color}10, transparent)`,
                    boxShadow: `0 0 30px ${color}40, inset 0 0 20px ${color}20`
                }}
                animate={{
                    boxShadow: [
                        `0 0 30px ${color}40, inset 0 0 20px ${color}20`,
                        `0 0 50px ${color}60, inset 0 0 30px ${color}30`,
                        `0 0 30px ${color}40, inset 0 0 20px ${color}20`
                    ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
            >
                {/* Pulsing core */}
                <motion.div
                    className="w-8 h-8 rounded-full"
                    style={{ background: color, filter: 'blur(4px)' }}
                    animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.div>
            <span className="text-sm font-medium text-cyan-200/80">{skill}</span>
        </motion.div>
    );
};

export default function LiquidFluidPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #0c1929 0%, #0a1628 30%, #061224 60%, #020617 100%)'
        }}>
            {/* Caustic light patterns */}
            <CausticLight />

            {/* Bubble field */}
            <BubbleField />

            {/* Jellyfish */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <Jellyfish x="10%" y="20%" size={60} color="#22d3ee" delay={0} />
                <Jellyfish x="80%" y="30%" size={45} color="#a855f7" delay={3} />
                <Jellyfish x="25%" y="60%" size={50} color="#ec4899" delay={1.5} />
                <Jellyfish x="70%" y="70%" size={40} color="#14b8a6" delay={4} />
            </div>

            {/* Anglerfish silhouettes */}
            <AnglerSilhouette x="5%" size={120} />
            <AnglerSilhouette x="75%" size={80} />

            {/* Depth meter */}
            <DepthMeter />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <PortholeCard>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Compass className="w-8 h-8 text-cyan-400" />
                                </motion.div>
                                <span className="text-2xl font-bold tracking-wider text-cyan-300">ABYSS</span>
                                <div className="w-px h-6 bg-cyan-500/30 mx-2" />
                                <div className="flex gap-1">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                                            animate={{ opacity: [0.3, 1, 0.3] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-cyan-300/60">
                                {['Dive', 'Explore', 'Discover', 'Surface'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-300 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </PortholeCard>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Submarine silhouette */}
                        <motion.div
                            className="w-64 h-32 mx-auto mb-12 relative"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <svg viewBox="0 0 200 80" className="w-full h-full">
                                {/* Sub body */}
                                <ellipse cx="100" cy="40" rx="80" ry="25" fill="url(#subGradient)" />
                                {/* Conning tower */}
                                <rect x="80" y="15" width="30" height="25" rx="5" fill="url(#subGradient)" />
                                {/* Periscope */}
                                <rect x="92" y="5" width="6" height="15" fill="#334155" />
                                {/* Porthole */}
                                <circle cx="60" cy="40" r="8" fill="#0c1929" stroke="#22d3ee" strokeWidth="2" />
                                <circle cx="100" cy="40" r="8" fill="#0c1929" stroke="#22d3ee" strokeWidth="2" />
                                <circle cx="140" cy="40" r="8" fill="#0c1929" stroke="#22d3ee" strokeWidth="2" />
                                {/* Lights */}
                                <motion.circle
                                    cx="180" cy="40" r="4"
                                    fill="#22d3ee"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <defs>
                                    <linearGradient id="subGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#475569" />
                                        <stop offset="100%" stopColor="#1e293b" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Light beam */}
                            <motion.div
                                className="absolute right-0 top-1/2 w-32 h-16 -translate-y-1/2"
                                style={{
                                    background: 'linear-gradient(90deg, rgba(34,211,238,0.3), transparent)',
                                    clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 60%)'
                                }}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </motion.div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
                            <Anchor className="w-4 h-4 text-cyan-400" />
                            <span className="text-cyan-300/80 text-sm">{displayData.role}</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(180deg, #22d3ee 0%, #06b6d4 40%, #0e7490 100%)'
                            }}>
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-cyan-100/50 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <motion.a
                                href="#explore"
                                className="px-8 py-4 rounded-lg font-bold text-slate-900"
                                style={{ background: 'linear-gradient(90deg, #22d3ee, #06b6d4)' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                Begin Descent
                            </motion.a>
                            <motion.a
                                href="#surface"
                                className="px-8 py-4 rounded-lg font-bold border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                Send Beacon
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="dive" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <PortholeCard>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/30 to-cyan-700/30 flex items-center justify-center border border-cyan-400/30">
                                    <Fish className="w-6 h-6 text-cyan-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-cyan-300">Mission Brief</h2>
                            </div>
                            <p className="text-cyan-100/60 leading-relaxed">
                                Like the creatures of the deep that generate their own light in darkness,
                                I illuminate complex technical challenges with elegant solutions. My work
                                takes me into the depths of distributed systems, where pressure is high
                                and visibility is low—but that's where the most fascinating architectures
                                emerge. Currently stationed at {displayData.location}.
                            </p>
                            {/* Sonar ping indicator */}
                            <div className="mt-8 flex items-center gap-4">
                                <div className="relative w-16 h-16">
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-cyan-400/30"
                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    />
                                    <div className="absolute inset-0 rounded-full border border-cyan-400/50 flex items-center justify-center">
                                        <motion.div
                                            className="w-2 h-2 rounded-full bg-cyan-400"
                                            animate={{ opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1, repeat: Infinity }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xs text-cyan-400/50 uppercase">Signal Active</div>
                                    <div className="text-cyan-300 font-mono">PING: 42ms</div>
                                </div>
                            </div>
                        </PortholeCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Glowing organisms */}
            <section id="explore" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4 text-cyan-300"
                    >
                        Bioluminescent Stack
                    </motion.h2>
                    <p className="text-center text-cyan-400/40 mb-16">Technologies that light the way</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {displayData.skills.map((skill, i) => (
                            <GlowOrganism key={skill} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Porthole cards */}
            <section id="discover" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-cyan-300"
                    >
                        Deep Discoveries
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={project.url || project.github ? 'cursor-pointer' : ''}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <PortholeCard className="h-full group">
                                    {/* Creature silhouette bg */}
                                    <div className="h-24 -mx-6 -mt-6 mb-4 relative overflow-hidden"
                                        style={{
                                            background: i === 0
                                                ? 'linear-gradient(180deg, rgba(34,211,238,0.2), transparent)'
                                                : 'linear-gradient(180deg, rgba(168,85,247,0.2), transparent)'
                                        }}>
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center opacity-20"
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{ duration: 5, repeat: Infinity }}
                                        >
                                            <Waves className="w-24 h-24" style={{ color: i === 0 ? '#22d3ee' : '#a855f7' }} />
                                        </motion.div>
                                    </div>
                                    <h3 className="text-xl font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-cyan-100/50 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </PortholeCard>
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
                        className="text-3xl font-bold text-center mb-16 text-cyan-300"
                    >
                        Dive Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <PortholeCard>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-cyan-300">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm rounded">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-purple-300 mb-2">{exp.company}</p>
                                <p className="text-cyan-100/50">{exp.description}</p>
                            </PortholeCard>
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
                        className="text-3xl font-bold text-center mb-16 text-cyan-300"
                    >
                        Training Depths
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <PortholeCard>
                                    <div className="w-10 h-10 rounded bg-gradient-to-br from-cyan-500/30 to-teal-600/30 flex items-center justify-center mb-4 border border-cyan-400/30">
                                        <span className="text-lg">🐋</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-cyan-300 mb-1">{edu.degree}</h3>
                                    <p className="text-purple-300">{edu.school}</p>
                                    <p className="text-sm text-cyan-400/50">{edu.startDate} — {edu.endDate}</p>
                                </PortholeCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="surface" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <PortholeCard>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Waves className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-4 text-cyan-300">Send a Signal</h2>
                            <p className="text-cyan-100/50 mb-8">
                                Ready to explore the depths together?
                            </p>
                            <div className="flex justify-center gap-4">
                                {[
                                    { icon: Mail, href: `mailto:${displayData.email}` },
                                    { icon: Github, href: displayData.links.github },
                                    { icon: Linkedin, href: displayData.links.linkedin }
                                ].map(({ icon: Icon, href }, i) => (
                                    <motion.a
                                        key={i}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20"
                                    >
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </PortholeCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
