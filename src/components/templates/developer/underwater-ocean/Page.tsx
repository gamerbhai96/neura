'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Anchor, Fish, Waves } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Deep Diver",
    role: "Backend Engineer",
    email: "dev@ocean.io",
    phone: "+1 555 000 0000",
    location: "Monterey Bay, CA",
    bio: "Exploring the depths of technology. Building systems that flow like ocean currents.",
    skills: ["Rust", "Go", "PostgreSQL", "Redis", "Kubernetes", "gRPC", "GraphQL", "Kafka"],
    experience: [{ company: "Abyssal Tech", position: "Principal Engineer", startDate: "2019", endDate: "Present", description: "Architecting deep systems", highlights: [] }],
    education: [
        { school: "Ocean Institute", degree: "MS Marine Technology", field: "Tech", startDate: "2015", endDate: "2017" }
    ],
    projects: [
        { name: "Depth", description: "Distributed message queue", technologies: ["Rust", "Kafka"] },
        { name: "Current", description: "Real-time data pipeline", technologies: ["Go", "gRPC"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Animated fish component
const SwimmingFish = ({ delay, y, direction }: { delay: number; y: string; direction: 1 | -1 }) => (
    <motion.div
        className="absolute"
        style={{ top: y }}
        initial={{ x: direction === 1 ? '-100px' : 'calc(100vw + 100px)' }}
        animate={{ x: direction === 1 ? 'calc(100vw + 100px)' : '-100px' }}
        transition={{ duration: 20 + delay * 5, repeat: Infinity, delay, ease: "linear" }}
    >
        <Fish className={`w-8 h-8 text-cyan-300/30 ${direction === -1 ? 'scale-x-[-1]' : ''}`} />
    </motion.div>
);

// Bubble component
const Bubble = ({ size, x, delay }: { size: number; x: string; delay: number }) => (
    <motion.div
        className="absolute rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
        style={{ width: size, height: size, left: x, bottom: -size }}
        animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.sin(delay) * 50, 0],
            scale: [1, 1.2, 0.8, 1]
        }}
        transition={{
            duration: 15 + delay * 3,
            repeat: Infinity,
            delay,
            ease: "easeOut"
        }}
    />
);

export default function UnderwaterOceanPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #0c1929 0%, #0a2a43 20%, #0e3d5c 40%, #0f4d6e 60%, #115e7a 80%, #0a3d5c 100%)'
        }}>
            {/* Deep water caustics effect */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%">
                    <defs>
                        <filter id="caustics">
                            <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="5">
                                <animate attributeName="baseFrequency" values="0.01;0.02;0.01" dur="10s" repeatCount="indefinite" />
                            </feTurbulence>
                            <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" />
                        </filter>
                    </defs>
                    <rect width="100%" height="100%" filter="url(#caustics)" fill="url(#lightGradient)" />
                    <defs>
                        <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#7dd3fc" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Swimming fish */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <SwimmingFish delay={0} y="20%" direction={1} />
                <SwimmingFish delay={3} y="40%" direction={-1} />
                <SwimmingFish delay={7} y="60%" direction={1} />
                <SwimmingFish delay={5} y="75%" direction={-1} />
            </div>

            {/* Rising bubbles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <Bubble key={i} size={10 + Math.random() * 30} x={`${5 + i * 6}%`} delay={i * 1.5} />
                ))}
            </div>

            {/* Kelp forest silhouettes */}
            <div className="fixed bottom-0 left-0 right-0 h-64 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bottom-0 bg-gradient-to-t from-emerald-900/40 to-transparent rounded-t-full"
                        style={{
                            left: `${i * 8 + Math.random() * 4}%`,
                            width: `${30 + Math.random() * 40}px`,
                            height: `${100 + Math.random() * 150}px`,
                        }}
                        animate={{
                            skewX: [-5, 5, -5],
                            scaleY: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-slate-900/80 to-transparent">
                <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="flex items-center gap-2 text-cyan-400"
                    >
                        <Anchor className="w-6 h-6" />
                        <span className="font-bold tracking-wider">ABYSS</span>
                    </motion.div>
                    <div className="flex gap-8 text-sm text-cyan-200/80">
                        {['Depths', 'Explore', 'Skills', 'Surface'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero - Descending into the deep */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-3xl mx-auto relative z-10">
                    {/* Bioluminescent glow */}
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
                        style={{
                            background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)'
                        }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        <Waves className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                        <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-4">
                            Depth: 3,280 ft • {displayData.role}
                        </p>
                        <h1 className="text-6xl md:text-8xl font-thin mb-8 text-white tracking-wide">
                            {displayData.name}
                        </h1>
                        <p className="text-xl text-cyan-100/70 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="px-8 py-4 bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 rounded-full backdrop-blur-sm hover:bg-cyan-500/30 transition-all"
                        >
                            Dive Deeper
                        </motion.button>
                    </motion.div>
                </div>

                {/* Light rays from surface */}
                <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-0 bg-gradient-to-b from-cyan-200/10 to-transparent"
                            style={{
                                left: `${20 + i * 15}%`,
                                width: '60px',
                                height: '400px',
                                transform: `rotate(${-10 + i * 5}deg)`,
                            }}
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3 + i, repeat: Infinity }}
                        />
                    ))}
                </div>
            </section>

            {/* About - Pressure zone */}
            <section id="depths" className="py-32 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-3xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(8,145,178,0.2), rgba(6,95,70,0.2))',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(34,211,238,0.2)'
                        }}
                    >
                        {/* Pressure gauge decoration */}
                        <div className="absolute top-6 right-6 text-xs text-cyan-400/60 font-mono">
                            DEPTH: 6,500 ft<br />
                            PRESSURE: 2,850 PSI<br />
                            TEMP: 39°F
                        </div>

                        <Fish className="w-12 h-12 text-cyan-400 mb-6" />
                        <h2 className="text-4xl font-thin mb-8 text-white">Into the Abyss</h2>
                        <p className="text-cyan-100/70 leading-relaxed text-lg">
                            In the deepest trenches of technology, where others fear to venture, I thrive.
                            Like creatures of the deep that have evolved to withstand crushing pressure,
                            my systems are built to handle extreme load while remaining elegant.
                            Currently exploring the depths from {displayData.location}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Bioluminescent orbs */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-16 text-white"
                    >
                        Bioluminescent Skills
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.1 }}
                                className="relative"
                            >
                                {/* Glow effect */}
                                <motion.div
                                    className="absolute inset-0 rounded-full blur-xl"
                                    style={{ background: `hsl(${180 + i * 15}, 70%, 50%)`, opacity: 0.3 }}
                                    animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
                                    transition={{ duration: 2 + i * 0.5, repeat: Infinity }}
                                />
                                <div
                                    className="relative px-6 py-4 rounded-full text-white font-medium"
                                    style={{
                                        background: `linear-gradient(135deg, hsla(${180 + i * 15}, 70%, 40%, 0.4), hsla(${180 + i * 15}, 70%, 30%, 0.4))`,
                                        border: `1px solid hsla(${180 + i * 15}, 70%, 50%, 0.5)`,
                                        backdropFilter: 'blur(5px)'
                                    }}
                                >
                                    {skill}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="explore" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-16 text-white"
                    >
                        Deep Sea Discoveries
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group relative rounded-2xl overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{
                                    background: 'linear-gradient(180deg, rgba(8,145,178,0.1), rgba(6,78,59,0.2))',
                                    border: '1px solid rgba(34,211,238,0.2)'
                                }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video relative overflow-hidden">
                                    {/* Underwater scene */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/50 to-teal-900/50" />
                                    <motion.div
                                        animate={{ y: [0, -20, 0] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <Anchor className="w-16 h-16 text-cyan-400/30 group-hover:text-cyan-400/60 transition-colors" />
                                    </motion.div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-light mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-cyan-100/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-16 text-white"
                    >
                        Dive Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-8 border-l border-cyan-500/30"
                        >
                            <motion.div
                                className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-cyan-400"
                                animate={{ boxShadow: ['0 0 10px rgba(34,211,238,0.5)', '0 0 20px rgba(34,211,238,0.8)', '0 0 10px rgba(34,211,238,0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="p-6 rounded-xl" style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl text-white">{exp.position}</h3>
                                    <span className="text-sm text-cyan-400">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-cyan-300 mb-2">{exp.company}</p>
                                <p className="text-cyan-100/60">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-16 text-white"
                    >
                        Training
                    </motion.h2>
                    <div className="grid gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl"
                                style={{ background: 'rgba(8,145,178,0.1)', border: '1px solid rgba(34,211,238,0.2)' }}
                            >
                                <h3 className="text-lg text-white mb-1">{edu.degree}</h3>
                                <p className="text-cyan-400">{edu.school}</p>
                                <p className="text-sm text-cyan-200/50">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="surface" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Anchor className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-5xl font-thin mb-6 text-white">Surface</h2>
                        <p className="text-cyan-100/60 mb-12 text-lg">
                            Ready to explore the depths together?
                        </p>
                        <div className="flex justify-center gap-6">
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
                                    whileHover={{ y: -10, scale: 1.1 }}
                                    className="p-4 rounded-full"
                                    style={{
                                        background: 'rgba(34,211,238,0.1)',
                                        border: '1px solid rgba(34,211,238,0.3)'
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-cyan-400" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
