'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Snowflake, Mountain, Wind, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Frost Dev",
    role: "Frontend Architect",
    email: "dev@arctic.io",
    phone: "+1 555 000 0000",
    location: "Nordic Systems",
    bio: "Crafting crystalline interfaces with precision. Where clarity meets elegance.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Framer Motion", "Three.js", "Figma", "Design Systems"],
    experience: [{ company: "Arctic Labs", position: "Lead Frontend", startDate: "2020", endDate: "Present", description: "Building frozen-solid interfaces", highlights: [] }],
    education: [
        { school: "Nordic Design Institute", degree: "MS Human-Computer Interaction", field: "HCI", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Glacier", description: "Component design system", technologies: ["React", "TypeScript"] },
        { name: "Permafrost", description: "Static site generator", technologies: ["Next.js", "MDX"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Aurora borealis background
const AuroraBorealis = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Aurora bands */}
        <motion.div
            className="absolute -top-1/4 left-0 right-0 h-full"
            style={{
                background: `
                    linear-gradient(180deg, 
                        transparent 0%,
                        rgba(74, 222, 128, 0.08) 20%,
                        rgba(34, 197, 94, 0.12) 30%,
                        rgba(16, 185, 129, 0.08) 40%,
                        rgba(45, 212, 191, 0.1) 50%,
                        rgba(139, 92, 246, 0.08) 60%,
                        rgba(168, 85, 247, 0.06) 70%,
                        transparent 100%
                    )
                `,
                filter: 'blur(60px)'
            }}
            animate={{
                x: [0, 100, -100, 0],
                skewX: [0, 5, -5, 0],
                opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
            className="absolute -top-1/3 left-1/4 right-0 h-full"
            style={{
                background: `
                    linear-gradient(180deg, 
                        transparent 0%,
                        rgba(139, 92, 246, 0.1) 25%,
                        rgba(236, 72, 153, 0.06) 40%,
                        transparent 60%
                    )
                `,
                filter: 'blur(80px)'
            }}
            animate={{
                x: [0, -80, 80, 0],
                opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 25, repeat: Infinity, delay: 3 }}
        />
    </div>
);

// Snow particle effect
const SnowParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: '-10px',
                    opacity: 0.3 + Math.random() * 0.4
                }}
                animate={{
                    y: ['0vh', '110vh'],
                    x: [0, Math.sin(i) * 50, 0]
                }}
                transition={{
                    duration: 10 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: 'linear'
                }}
            />
        ))}
    </div>
);

// Ice crystal component
const IceCrystal = ({ x, y, size, rotation, delay }: {
    x: string; y: string; size: number; rotation: number; delay: number
}) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        animate={{ rotate: [rotation, rotation + 5, rotation] }}
        transition={{ duration: 10, repeat: Infinity, delay }}
    >
        <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
            {/* Hexagonal crystal */}
            <motion.polygon
                points="50,5 90,27 90,73 50,95 10,73 10,27"
                fill="url(#crystalGradient)"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="1"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay }}
            />
            {/* Inner facets */}
            <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="10" y1="27" x2="90" y2="73" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <line x1="90" y1="27" x2="10" y2="73" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            <defs>
                <linearGradient id="crystalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="50%" stopColor="rgba(147,197,253,0.15)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
                </linearGradient>
            </defs>
        </svg>
    </motion.div>
);

// Frosted ice panel with crack patterns
const IcePanel = ({ children, className = '', intensity = 'medium' }: {
    children: React.ReactNode;
    className?: string;
    intensity?: 'light' | 'medium' | 'strong';
}) => {
    const opacityMap = { light: '0.05', medium: '0.1', strong: '0.15' };
    const blurMap = { light: '10px', medium: '20px', strong: '30px' };

    return (
        <div className={`relative ${className}`}>
            {/* Ice background */}
            <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                    background: `rgba(255,255,255,${opacityMap[intensity]})`,
                    backdropFilter: `blur(${blurMap[intensity]}) saturate(180%)`,
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 20px 50px -10px rgba(0,0,0,0.3)'
                }}
            >
                {/* Frost texture overlay */}
                <div className="absolute inset-0 opacity-30"
                    style={{
                        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 40%),
                                          radial-gradient(circle at 80% 70%, rgba(147,197,253,0.15) 0%, transparent 40%)`
                    }}
                />
                {/* Ice crack pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10">
                    <line x1="0" y1="30%" x2="40%" y2="45%" stroke="white" strokeWidth="0.5" />
                    <line x1="40%" y1="45%" x2="35%" y2="80%" stroke="white" strokeWidth="0.5" />
                    <line x1="40%" y1="45%" x2="70%" y2="55%" stroke="white" strokeWidth="0.5" />
                    <line x1="100%" y1="20%" x2="60%" y2="35%" stroke="white" strokeWidth="0.5" />
                </svg>
            </div>
            {/* Top frost edge */}
            <div className="absolute top-0 left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

// Icicle drip from nav
const IcicleDrips = () => (
    <div className="absolute -bottom-4 left-0 right-0 flex justify-around pointer-events-none">
        {[...Array(7)].map((_, i) => (
            <motion.div
                key={i}
                className="w-1 rounded-b-full"
                style={{
                    height: 10 + Math.random() * 20,
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.4), rgba(147,197,253,0.2), transparent)'
                }}
                animate={{
                    scaleY: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
            />
        ))}
    </div>
);

// Hexagonal skill crystal
const SkillCrystal = ({ skill, index }: { skill: string; index: number }) => {
    const colors = ['#93c5fd', '#a5b4fc', '#c4b5fd', '#86efac', '#7dd3fc', '#fda4af', '#fcd34d', '#a78bfa'];
    const color = colors[index % colors.length];

    return (
        <motion.div
            initial={{ scale: 0, rotate: -30 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, type: 'spring' }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="cursor-pointer text-center"
        >
            <div className="relative w-24 h-24 mx-auto mb-3">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Outer hexagon */}
                    <polygon
                        points="50,5 90,27 90,73 50,95 10,73 10,27"
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        opacity="0.5"
                    />
                    {/* Inner hexagon */}
                    <polygon
                        points="50,20 75,35 75,65 50,80 25,65 25,35"
                        fill={`${color}30`}
                        stroke={color}
                        strokeWidth="1"
                        opacity="0.8"
                    />
                    {/* Center glow */}
                    <motion.circle
                        cx="50" cy="50" r="10"
                        fill={color}
                        opacity="0.6"
                        animate={{ r: [8, 12, 8], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </svg>
                {/* Refraction effect */}
                <motion.div
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 30% 30%, ${color}40, transparent 60%)`,
                        filter: 'blur(8px)'
                    }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                />
            </div>
            <span className="text-sm font-medium text-white/80">{skill}</span>
        </motion.div>
    );
};

// Breath mist on hover effect wrapper
const MistHover = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        className={`relative group ${className}`}
        whileHover="hover"
    >
        {children}
        {/* Mist effect on hover */}
        <motion.div
            className="absolute -inset-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent 70%)',
                filter: 'blur(20px)'
            }}
        />
    </motion.div>
);

export default function GlassmorphismPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden" style={{
            background: 'linear-gradient(180deg, #0f172a 0%, #1e1b4b 30%, #312e81 60%, #1e1b4b 100%)'
        }}>
            {/* Aurora borealis */}
            <AuroraBorealis />

            {/* Snow particles */}
            <SnowParticles />

            {/* Ice crystals in background */}
            <div className="fixed inset-0 pointer-events-none">
                <IceCrystal x="5%" y="15%" size={80} rotation={15} delay={0} />
                <IceCrystal x="85%" y="25%" size={60} rotation={-10} delay={2} />
                <IceCrystal x="15%" y="65%" size={50} rotation={30} delay={1} />
                <IceCrystal x="75%" y="70%" size={70} rotation={-20} delay={3} />
                <IceCrystal x="45%" y="85%" size={40} rotation={5} delay={1.5} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <IcePanel className="rounded-2xl relative" intensity="medium">
                        <IcicleDrips />
                        <div className="px-8 py-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Snowflake className="w-8 h-8 text-blue-200" />
                                    </motion.div>
                                    <span className="text-2xl font-bold tracking-wider text-white">ARCTIC</span>
                                    <div className="w-px h-6 bg-white/20 mx-2" />
                                    <span className="text-xs text-blue-200/60">-40°C</span>
                                </div>
                                <div className="flex gap-8 text-sm font-medium text-white/60">
                                    {['Tundra', 'Crystals', 'Glaciers', 'Signal'].map((item) => (
                                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </IcePanel>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Mountain silhouette with aurora reflection */}
                        <motion.div
                            className="w-64 h-32 mx-auto mb-12 relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity }}
                        >
                            <svg viewBox="0 0 200 80" className="w-full h-full">
                                {/* Mountains */}
                                <polygon points="0,80 40,30 80,80" fill="url(#mountainGrad)" />
                                <polygon points="60,80 100,20 140,80" fill="url(#mountainGrad2)" />
                                <polygon points="120,80 160,35 200,80" fill="url(#mountainGrad)" />
                                {/* Snow caps */}
                                <polygon points="40,30 50,45 30,45" fill="white" opacity="0.8" />
                                <polygon points="100,20 115,40 85,40" fill="white" opacity="0.9" />
                                <polygon points="160,35 170,50 150,50" fill="white" opacity="0.8" />
                                <defs>
                                    <linearGradient id="mountainGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#475569" />
                                        <stop offset="100%" stopColor="#1e293b" />
                                    </linearGradient>
                                    <linearGradient id="mountainGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#64748b" />
                                        <stop offset="100%" stopColor="#334155" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Aurora glow behind mountains */}
                            <motion.div
                                className="absolute -top-8 inset-x-0 h-16"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(74,222,128,0.3), rgba(139,92,246,0.2), transparent)',
                                    filter: 'blur(20px)'
                                }}
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity }}
                            />
                        </motion.div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur mb-6">
                            <Wind className="w-4 h-4 text-blue-200" />
                            <span className="text-blue-100/80 text-sm">{displayData.role}</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-blue-100/60 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <MistHover>
                                <motion.a
                                    href="#glaciers"
                                    className="px-8 py-4 rounded-xl font-bold text-slate-900 bg-white/90 hover:bg-white transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Explore Work
                                </motion.a>
                            </MistHover>
                            <MistHover>
                                <motion.a
                                    href="#signal"
                                    className="px-8 py-4 rounded-xl font-bold border border-white/30 hover:bg-white/10 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    Send Signal
                                </motion.a>
                            </MistHover>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="tundra" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <IcePanel className="rounded-3xl p-12" intensity="medium">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center border border-white/20">
                                    <Mountain className="w-6 h-6 text-blue-200" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Frozen Clarity</h2>
                            </div>
                            <p className="text-blue-100/60 leading-relaxed text-lg">
                                Like ice that forms with perfect molecular precision, I craft interfaces with
                                crystalline clarity. Every component is structured, every interaction is
                                deliberate. I find beauty in the stark simplicity of frozen landscapes—
                                where nothing is hidden and everything serves a purpose.
                                Currently stationed in {displayData.location}.
                            </p>
                            {/* Temperature indicator */}
                            <div className="mt-8 flex items-center gap-4">
                                <Snowflake className="w-5 h-5 text-blue-300" />
                                <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full rounded-full"
                                        style={{ background: 'linear-gradient(90deg, #93c5fd, #c4b5fd)' }}
                                        animate={{ width: ['60%', '80%', '60%'] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                </div>
                                <span className="text-sm text-blue-200/60">Optimal</span>
                            </div>
                        </IcePanel>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Ice crystals */}
            <section id="crystals" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-white"
                    >
                        Crystal Formation
                    </motion.h2>
                    <p className="text-center text-blue-200/40 mb-16">Technologies that form my core</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <SkillCrystal key={skill} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="glaciers" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Glacier Projects
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
                                <IcePanel className="rounded-3xl overflow-hidden group h-full" intensity="light">
                                    {/* Aurora header */}
                                    <div className="h-32 relative overflow-hidden"
                                        style={{
                                            background: i === 0
                                                ? 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(139,92,246,0.2))'
                                                : 'linear-gradient(135deg, rgba(139,92,246,0.2), rgba(236,72,153,0.2))'
                                        }}>
                                        <motion.div
                                            className="absolute inset-0"
                                            animate={{ x: [0, 20, 0] }}
                                            transition={{ duration: 10, repeat: Infinity }}
                                        >
                                            <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/20" />
                                        </motion.div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-blue-100/50 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-sm text-white/80 bg-white/10 rounded-full border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </IcePanel>
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
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Expedition Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <IcePanel className="rounded-2xl p-6" intensity="light">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <div className="px-4 py-1 bg-white/10 rounded-full text-blue-200/70 text-sm border border-white/10">
                                        {exp.startDate} — {exp.endDate}
                                    </div>
                                </div>
                                <p className="text-purple-300 mb-2">{exp.company}</p>
                                <p className="text-blue-100/50">{exp.description}</p>
                            </IcePanel>
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
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Training Grounds
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <IcePanel className="rounded-2xl p-6" intensity="light">
                                    <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mb-4 border border-white/20">
                                        <span className="text-lg">❄️</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-purple-300">{edu.school}</p>
                                    <p className="text-sm text-blue-200/50">{edu.startDate} — {edu.endDate}</p>
                                </IcePanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="signal" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <IcePanel className="rounded-3xl p-12" intensity="medium">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <Snowflake className="w-16 h-16 text-blue-200 mx-auto mb-8" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Break the Ice</h2>
                            <p className="text-blue-100/50 mb-8">
                                Ready to build something crystalline together?
                            </p>
                            <div className="flex justify-center gap-4">
                                {[
                                    { icon: Mail, href: `mailto:${displayData.email}` },
                                    { icon: Github, href: displayData.links.github },
                                    { icon: Linkedin, href: displayData.links.linkedin }
                                ].map(({ icon: Icon, href }, i) => (
                                    <MistHover key={i}>
                                        <motion.a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="p-4 rounded-xl bg-white/10 border border-white/20"
                                        >
                                            <Icon className="w-6 h-6 text-blue-200" />
                                        </motion.a>
                                    </MistHover>
                                ))}
                            </div>
                        </IcePanel>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
