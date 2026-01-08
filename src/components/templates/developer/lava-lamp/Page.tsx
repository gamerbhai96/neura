'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Thermometer, Gauge, Flame } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Forge Dev",
    role: "Systems Architect",
    email: "dev@forge.io",
    phone: "+1 555 000 0000",
    location: "Silicon Foundry",
    bio: "Forging robust systems from molten ideas. Where raw concepts become hardened solutions.",
    skills: ["React", "Rust", "Go", "Kubernetes", "AWS", "Docker", "PostgreSQL", "Redis"],
    experience: [{ company: "Metal Works Inc", position: "Principal Engineer", startDate: "2020", endDate: "Present", description: "Architecting high-temperature systems", highlights: [] }],
    education: [
        { school: "Tech Forge Academy", degree: "MS Computer Engineering", field: "Engineering", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Crucible", description: "High-performance data pipeline", technologies: ["Rust", "Kafka"] },
        { name: "Anvil", description: "Distributed task scheduler", technologies: ["Go", "gRPC"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Molten metal drip component
const MoltenDrip = ({ x, delay, color }: { x: string; delay: number; color: string }) => (
    <motion.div
        className="absolute top-0 pointer-events-none"
        style={{ left: x }}
        initial={{ y: -20 }}
        animate={{
            y: [0, 150, 300],
            scaleY: [0.5, 1.5, 0.3],
            opacity: [0, 1, 0]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            delay,
            repeatDelay: 2
        }}
    >
        <div
            className="w-4 h-12 rounded-full"
            style={{
                background: `linear-gradient(180deg, ${color}, transparent)`,
                boxShadow: `0 0 20px ${color}, 0 0 40px ${color}50`
            }}
        />
    </motion.div>
);

// Molten pool at bottom
const MoltenPool = () => (
    <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
        <motion.div
            className="absolute inset-x-0 bottom-0 h-20"
            style={{
                background: 'linear-gradient(0deg, #f59e0b 0%, #ea580c 50%, transparent 100%)',
                filter: 'blur(8px)'
            }}
            animate={{
                opacity: [0.6, 0.8, 0.6],
                scaleY: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
        />
        {/* Surface bubbles */}
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute bottom-4 w-3 h-3 rounded-full"
                style={{
                    left: `${10 + i * 12}%`,
                    background: 'radial-gradient(circle at 30% 30%, #fbbf24, #f59e0b)'
                }}
                animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 1.5 + i * 0.2, repeat: Infinity, delay: i * 0.3 }}
            />
        ))}
    </div>
);

// Industrial gauge component
const TempGauge = ({ value, label }: { value: number; label: string }) => (
    <div className="relative w-20 h-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Gauge background */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#44403c" strokeWidth="8" />
            {/* Gauge value */}
            <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gaugeGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={`${value * 2.83} 283`}
                transform="rotate(-90 50 50)"
                animate={{ strokeDasharray: [`${value * 2.83} 283`, `${value * 2.83 + 10} 283`, `${value * 2.83} 283`] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
            <defs>
                <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
            </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-amber-400 font-bold text-sm">{value}%</span>
            <span className="text-stone-500 text-xs">{label}</span>
        </div>
    </div>
);

// Industrial panel with rivets
const IndustrialPanel = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        {/* Main panel */}
        <div className="relative rounded-lg overflow-hidden"
            style={{
                background: 'linear-gradient(145deg, #292524, #1c1917)',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.05), inset 0 -2px 4px rgba(0,0,0,0.3), 0 10px 40px rgba(0,0,0,0.5)'
            }}>
            {/* Rivet corners */}
            {['-top-0.5 -left-0.5', '-top-0.5 -right-0.5', '-bottom-0.5 -left-0.5', '-bottom-0.5 -right-0.5'].map((pos, i) => (
                <div key={i} className={`absolute ${pos} w-3 h-3 rounded-full bg-gradient-to-br from-stone-500 to-stone-700 border border-stone-600`} />
            ))}
            {/* Content */}
            <div className="p-6">{children}</div>
        </div>
    </div>
);

// Heat distortion text effect
const HeatText = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <motion.div
        className={className}
        animate={{
            filter: ['blur(0px)', 'blur(0.5px)', 'blur(0px)']
        }}
        transition={{ duration: 0.1, repeat: Infinity }}
        style={{
            textShadow: '0 0 30px rgba(245,158,11,0.5), 0 0 60px rgba(234,88,12,0.3)'
        }}
    >
        {children}
    </motion.div>
);

export default function LavaLampPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const metalColors = ['#f59e0b', '#ea580c', '#dc2626', '#b45309', '#92400e'];

    return (
        <div className="min-h-screen overflow-hidden relative font-mono" style={{
            background: 'linear-gradient(180deg, #0c0a09 0%, #1c1917 30%, #292524 60%, #1c1917 100%)'
        }}>
            {/* Molten pool at bottom */}
            <MoltenPool />

            {/* Dripping metal from top */}
            <div className="fixed top-0 left-0 right-0 pointer-events-none">
                <MoltenDrip x="15%" delay={0} color="#f59e0b" />
                <MoltenDrip x="35%" delay={1.5} color="#ea580c" />
                <MoltenDrip x="55%" delay={3} color="#dc2626" />
                <MoltenDrip x="75%" delay={0.8} color="#f59e0b" />
                <MoltenDrip x="90%" delay={2.2} color="#ea580c" />
            </div>

            {/* Ambient glow */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, #f59e0b, transparent)', filter: 'blur(100px)' }} />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, #ea580c, transparent)', filter: 'blur(80px)' }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <IndustrialPanel>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ opacity: [0.8, 1, 0.8] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <Flame className="w-8 h-8 text-amber-500" />
                                </motion.div>
                                <span className="text-xl font-bold text-amber-400 tracking-widest">FORGE</span>
                                <div className="w-px h-6 bg-stone-600 mx-2" />
                                <span className="text-xs text-stone-500">TEMP: 1200°C</span>
                            </div>
                            <div className="flex gap-6 text-sm text-stone-400">
                                {['Core', 'Alloys', 'Output', 'Signal'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors uppercase tracking-wider">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </IndustrialPanel>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Crucible visualization */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="relative w-64 h-48 mx-auto">
                            {/* Crucible container */}
                            <div className="absolute bottom-0 w-full h-36 rounded-b-3xl overflow-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #44403c, #292524)',
                                    boxShadow: 'inset 0 10px 30px rgba(0,0,0,0.5)'
                                }}>
                                {/* Molten content */}
                                <motion.div
                                    className="absolute bottom-0 left-2 right-2 rounded-b-2xl"
                                    style={{
                                        height: '70%',
                                        background: 'linear-gradient(0deg, #f59e0b, #ea580c 50%, #dc2626)'
                                    }}
                                    animate={{
                                        height: ['65%', '75%', '65%']
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                >
                                    {/* Surface glow */}
                                    <div className="absolute inset-x-0 top-0 h-4"
                                        style={{
                                            background: 'linear-gradient(180deg, #fbbf24, transparent)',
                                            filter: 'blur(4px)'
                                        }} />
                                    {/* Bubbles */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 rounded-full bg-yellow-300/60"
                                            style={{ left: `${15 + i * 18}%`, bottom: '20%' }}
                                            animate={{ y: [0, -30], opacity: [1, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.4 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                            {/* Crucible rim */}
                            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-72 h-6 rounded-t-lg"
                                style={{ background: 'linear-gradient(180deg, #57534e, #44403c)' }} />
                            {/* Heat waves above */}
                            <motion.div
                                className="absolute -top-4 left-1/2 -translate-x-1/2 w-48 h-16 opacity-30"
                                style={{ background: 'linear-gradient(0deg, rgba(251,191,36,0.3), transparent)' }}
                                animate={{ scaleY: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded border border-amber-900/50 bg-stone-900/50">
                            <Thermometer className="w-4 h-4 text-amber-500" />
                            <span className="text-amber-400/80 text-sm uppercase tracking-widest">{displayData.role}</span>
                        </div>

                        <HeatText className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(180deg, #fbbf24 0%, #f59e0b 30%, #ea580c 60%, #dc2626 100%)'
                            } as any}>
                            <h1>{displayData.name}</h1>
                        </HeatText>

                        <p className="text-lg text-stone-400 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <a href="#output" className="px-8 py-3 rounded font-bold text-stone-900 transition-all hover:scale-105"
                                style={{ background: 'linear-gradient(90deg, #f59e0b, #ea580c)' }}>
                                View Output
                            </a>
                            <a href="#signal" className="px-8 py-3 rounded font-bold border border-amber-600/50 text-amber-400 hover:bg-amber-500/10 transition-all">
                                Send Signal
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="core" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <IndustrialPanel className="mb-0">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                                    <Gauge className="w-6 h-6 text-amber-200" />
                                </div>
                                <h2 className="text-2xl font-bold text-amber-400">Core Systems</h2>
                            </div>
                            <p className="text-stone-400 leading-relaxed">
                                Like metal in a crucible, I transform raw requirements into refined, high-performance
                                systems. My process involves intense focus on fundamentals—heat treating ideas until
                                they achieve maximum strength and durability. Every system I architect is forged to
                                withstand production pressures. Operating from {displayData.location}.
                            </p>
                            <div className="flex gap-6 mt-8">
                                <TempGauge value={95} label="UPTIME" />
                                <TempGauge value={87} label="PERF" />
                                <TempGauge value={92} label="SCALE" />
                            </div>
                        </IndustrialPanel>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Molten badges */}
            <section id="alloys" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4 text-amber-400"
                    >
                        Alloy Components
                    </motion.h2>
                    <p className="text-center text-stone-500 mb-16 uppercase tracking-widest text-sm">Materials in the mix</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="cursor-pointer"
                            >
                                <IndustrialPanel>
                                    <div className="text-center">
                                        <motion.div
                                            className="w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${metalColors[i % metalColors.length]}, ${metalColors[(i + 1) % metalColors.length]})`
                                            }}
                                            animate={{ boxShadow: [`0 0 20px ${metalColors[i % metalColors.length]}40`, `0 0 30px ${metalColors[i % metalColors.length]}60`, `0 0 20px ${metalColors[i % metalColors.length]}40`] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <span className="text-stone-900 font-bold text-lg">{skill.charAt(0)}</span>
                                        </motion.div>
                                        <span className="text-stone-300 font-medium text-sm">{skill}</span>
                                    </div>
                                </IndustrialPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="output" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-amber-400"
                    >
                        Forged Output
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
                                <IndustrialPanel className="group h-full">
                                    {/* Top glow bar */}
                                    <div className="h-1 rounded-full mb-6"
                                        style={{ background: `linear-gradient(90deg, ${metalColors[i]}, ${metalColors[i + 1]})` }} />
                                    <h3 className="text-xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-stone-500 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs text-amber-400 bg-amber-500/10 border border-amber-600/30 rounded uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </IndustrialPanel>
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
                        className="text-3xl font-bold text-center mb-16 text-amber-400"
                    >
                        Forge History
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <IndustrialPanel>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-amber-400">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-amber-500/10 border border-amber-600/30 text-amber-500 text-sm rounded">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-orange-400 mb-2">{exp.company}</p>
                                <p className="text-stone-500">{exp.description}</p>
                            </IndustrialPanel>
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
                        className="text-3xl font-bold text-center mb-16 text-amber-400"
                    >
                        Foundation
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <IndustrialPanel>
                                    <div className="w-10 h-10 rounded bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center mb-4">
                                        <span className="text-lg">🔥</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-amber-400 mb-1">{edu.degree}</h3>
                                    <p className="text-orange-400">{edu.school}</p>
                                    <p className="text-sm text-stone-500">{edu.startDate} — {edu.endDate}</p>
                                </IndustrialPanel>
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
                        <IndustrialPanel>
                            <motion.div
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Flame className="w-16 h-16 text-amber-500 mx-auto mb-6" />
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-4 text-amber-400">Send a Signal</h2>
                            <p className="text-stone-500 mb-8">
                                Ready to forge something exceptional together?
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
                                        className="p-4 rounded bg-stone-800 border border-stone-700 hover:border-amber-600/50 transition-colors"
                                    >
                                        <Icon className="w-6 h-6 text-amber-500" />
                                    </motion.a>
                                ))}
                            </div>
                        </IndustrialPanel>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
