'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Zap, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Groovy Dev",
    role: "Creative Technologist",
    email: "dev@lava.io",
    phone: "+1 555 000 0000",
    location: "San Francisco, CA",
    bio: "Flowing with the vibes. Creating experiences that make you feel good, man.",
    skills: ["React", "Vue", "GSAP", "Three.js", "WebGL", "Creative Coding", "CSS", "Motion"],
    experience: [{ company: "Psychedelic Labs", position: "Chief Vibe Officer", startDate: "2020", endDate: "Present", description: "Making the web groovy again", highlights: [] }],
    education: [
        { school: "Art Center", degree: "BFA New Media", field: "New Media", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Mellow", description: "Ambient music visualizer", technologies: ["Three.js", "Web Audio"] },
        { name: "Flow", description: "Fluid simulation art", technologies: ["WebGL", "GLSL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Lava blob component
const LavaBlob = ({ color, size, x, y, duration }: { color: string; size: number; x: string; y: string; duration: number }) => (
    <motion.div
        className="absolute rounded-full blur-xl pointer-events-none"
        style={{
            width: size,
            height: size,
            left: x,
            background: color,
        }}
        animate={{
            y: [y, '-120%', y],
            scale: [1, 1.3, 0.8, 1.2, 1],
            borderRadius: ['50%', '40% 60%', '60% 40%', '30% 70%', '50%']
        }}
        transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

// Morphing background blob
const MorphBlob = ({ color, index }: { color: string; index: number }) => (
    <motion.div
        className="absolute w-[600px] h-[600px] blur-3xl opacity-40 pointer-events-none"
        style={{ background: color }}
        animate={{
            borderRadius: [
                "30% 70% 70% 30% / 30% 30% 70% 70%",
                "70% 30% 30% 70% / 70% 70% 30% 30%",
                "50% 50% 50% 50% / 50% 50% 50% 50%",
                "30% 70% 70% 30% / 30% 30% 70% 70%"
            ],
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

export default function LavaLampPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const groovyColors = [
        'radial-gradient(circle, #ec4899, #be185d)',
        'radial-gradient(circle, #f97316, #ea580c)',
        'radial-gradient(circle, #a855f7, #7c3aed)',
        'radial-gradient(circle, #06b6d4, #0891b2)',
        'radial-gradient(circle, #eab308, #ca8a04)'
    ];

    return (
        <div className="min-h-screen overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 30%, #4c1d95 60%, #581c87 100%)'
        }}>
            {/* Morphing background blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <MorphBlob color="radial-gradient(circle, rgba(236,72,153,0.4), transparent)" index={0} />
                <div style={{ position: 'absolute', right: '-10%', top: '20%' }}>
                    <MorphBlob color="radial-gradient(circle, rgba(249,115,22,0.3), transparent)" index={1} />
                </div>
                <div style={{ position: 'absolute', left: '30%', bottom: '-20%' }}>
                    <MorphBlob color="radial-gradient(circle, rgba(168,85,247,0.3), transparent)" index={2} />
                </div>
            </div>

            {/* Rising lava blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <LavaBlob color={groovyColors[0]} size={200} x="10%" y="100%" duration={12} />
                <LavaBlob color={groovyColors[1]} size={150} x="30%" y="100%" duration={10} />
                <LavaBlob color={groovyColors[2]} size={180} x="50%" y="100%" duration={14} />
                <LavaBlob color={groovyColors[3]} size={120} x="70%" y="100%" duration={11} />
                <LavaBlob color={groovyColors[4]} size={160} x="85%" y="100%" duration={13} />
            </div>

            {/* Navigation - Groovy floating */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6">
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.span
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    className="text-3xl"
                                >
                                    ☮️
                                </motion.span>
                                <span className="text-xl font-bold text-pink-300">GROOVY</span>
                            </div>
                            <div className="flex gap-6 text-sm font-medium text-purple-200/80">
                                {['Vibes', 'Flow', 'Energy', 'Connect'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-300 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </nav>

            {/* Hero - Psychedelic center */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Central lava lamp shape */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative inline-block mb-12"
                    >
                        {/* Lamp glass container */}
                        <div className="relative w-48 h-80 mx-auto">
                            {/* Base */}
                            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-b from-zinc-600 to-zinc-800 rounded-b-3xl" />
                            {/* Top cap */}
                            <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-zinc-800 to-zinc-600 rounded-t-full" />
                            {/* Glass */}
                            <div className="absolute top-6 bottom-12 left-4 right-4 bg-gradient-to-b from-purple-900/50 to-indigo-900/50 rounded-[100px] border border-white/10 overflow-hidden">
                                {/* Internal blobs */}
                                {[...Array(4)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-16 h-24 rounded-[50%] blur-sm"
                                        style={{
                                            left: `${20 + (i % 2) * 30}%`,
                                            background: groovyColors[i % groovyColors.length]
                                        }}
                                        animate={{
                                            y: [240 - i * 50, -20, 240 - i * 50],
                                            scale: [1, 0.8, 1.2, 0.9, 1],
                                            borderRadius: ['50%', '40% 60%', '60% 40%', '50%']
                                        }}
                                        transition={{
                                            duration: 6 + i * 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 1.5
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.p
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-pink-400 font-medium tracking-widest uppercase mb-4"
                        >
                            ✨ {displayData.role} ✨
                        </motion.p>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(45deg, #ec4899, #f97316, #eab308, #22c55e, #06b6d4, #8b5cf6, #ec4899)',
                                backgroundSize: '300% 300%',
                                animation: 'gradient-shift 5s ease infinite'
                            }}>
                            {displayData.name}
                        </h1>

                        <style jsx>{`
                            @keyframes gradient-shift {
                                0%, 100% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                            }
                        `}</style>

                        <p className="text-xl text-purple-200/70 max-w-xl mx-auto">
                            {displayData.bio}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="vibes" className="py-32 px-6 relative">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-[50px] overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))',
                            backdropFilter: 'blur(20px)',
                            border: '2px solid rgba(255,255,255,0.1)'
                        }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-5xl"
                            >
                                🌈
                            </motion.span>
                            <h2 className="text-3xl font-bold text-pink-300">Good Vibes Only</h2>
                        </div>
                        <p className="text-purple-100/70 leading-relaxed text-lg">
                            Like the hypnotic flow of a lava lamp, I believe in the power of smooth transitions
                            and organic movement. My work pulses with color and life—never static, always evolving.
                            Whether you're looking for groovy animations or far-out experiences, I'm your trip guide
                            through the digital cosmos. Currently vibing in {displayData.location}. ✌️
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Floating bubbles */}
            <section id="energy" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-pink-300"
                    >
                        Power Sources ⚡
                    </motion.h2>
                    <p className="text-center text-purple-300/60 mb-16">The energy that fuels the flow</p>

                    <div className="flex flex-wrap justify-center gap-8">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring", bounce: 0.5 }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                className="relative cursor-pointer"
                                style={{
                                    animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.3}s`
                                }}
                            >
                                <div
                                    className="w-28 h-28 rounded-full flex items-center justify-center text-white font-bold text-center p-4 text-sm"
                                    style={{
                                        background: groovyColors[i % groovyColors.length],
                                        boxShadow: `0 10px 40px ${i % 2 === 0 ? 'rgba(236,72,153,0.4)' : 'rgba(168,85,247,0.4)'}`
                                    }}
                                >
                                    {skill}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <style jsx>{`
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                        }
                    `}</style>
                </div>
            </section>

            {/* Projects */}
            <section id="flow" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-pink-300"
                    >
                        Far Out Projects 🚀
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, rotate: 1 }}
                                className={`group relative rounded-[40px] overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(236,72,153,0.2), rgba(168,85,247,0.2))',
                                    backdropFilter: 'blur(10px)',
                                    border: '2px solid rgba(255,255,255,0.1)'
                                }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Animated gradient header */}
                                <div className="h-40 relative overflow-hidden">
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(45deg, ${i === 0 ? '#ec4899, #f97316' : '#8b5cf6, #06b6d4'})`
                                        }}
                                        animate={{
                                            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                                        }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.span
                                            animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="text-6xl"
                                        >
                                            {i === 0 ? '🎵' : '🌊'}
                                        </motion.span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-pink-300 mb-3 group-hover:text-white transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-purple-200/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 rounded-full text-white text-sm font-medium"
                                                style={{ background: groovyColors[(i + j) % groovyColors.length] }}
                                            >
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
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-pink-300"
                    >
                        The Journey 🌙
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-pink-500/50"
                        >
                            <motion.div
                                className="absolute left-0 top-0 -translate-x-[14px] w-6 h-6 rounded-full"
                                style={{ background: groovyColors[0] }}
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="rounded-[30px] p-6"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.15))',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-pink-300">{exp.position}</h3>
                                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-orange-400 mb-2">{exp.company}</p>
                                <p className="text-purple-200/60">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-pink-300"
                    >
                        School of Rock 🎸
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="rounded-[30px] p-6"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(168,85,247,0.15))',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.1)'
                                }}
                            >
                                <span className="text-3xl block mb-4">🎓</span>
                                <h3 className="text-lg font-bold text-pink-300">{edu.degree}</h3>
                                <p className="text-orange-400">{edu.school}</p>
                                <p className="text-sm text-purple-300/50">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="connect" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="text-7xl block mb-8"
                        >
                            ☮️
                        </motion.span>
                        <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(45deg, #ec4899, #f97316, #eab308)',
                            }}>
                            Drop a Peace Sign
                        </h2>
                        <p className="text-purple-200/60 mb-12">
                            Let's make something groovy together
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, bg: groovyColors[0] },
                                { icon: Github, href: displayData.links.github, bg: groovyColors[2] },
                                { icon: Linkedin, href: displayData.links.linkedin, bg: groovyColors[3] }
                            ].map(({ icon: Icon, href, bg }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ y: { duration: 2, repeat: Infinity, delay: i * 0.3 } }}
                                    className="p-4 rounded-full shadow-lg"
                                    style={{ background: bg }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
