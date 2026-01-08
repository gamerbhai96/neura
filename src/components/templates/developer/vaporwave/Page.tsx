'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Tv, Disc, Palmtree, Sunset } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "WAVE DEV",
    role: "Digital Artist",
    email: "dev@vapor.io",
    phone: "+1 555 000 0000",
    location: "Virtual Reality",
    bio: "A E S T H E T I C  C O D E  ヴェイパーウェイヴ",
    skills: ["React", "Synth", "Pixel Art", "WebGL", "Retro", "Neon", "VHS", "Dreams"],
    experience: [{ company: "Aesthetic Labs", position: "Vibe Curator", startDate: "1990", endDate: "2099", description: "Creating nostalgic experiences", highlights: [] }],
    education: [
        { school: "Miami Sunset Academy", degree: "BS Digital Arts", field: "Aesthetic", startDate: "1984", endDate: "1988" }
    ],
    projects: [
        { name: "N O S T A L G I A", description: "Retro wave generator", technologies: ["Synth", "WebAudio"] },
        { name: "S U N S E T", description: "Gradient dreams app", technologies: ["Canvas", "CSS"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Retro sun with gradient lines
const RetroSun = () => (
    <div className="relative w-64 h-64 mx-auto">
        <motion.div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #ff6b9d 0%, #ffa726 30%, #ffeb3b 60%, #ff6b9d 100%)'
            }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
        >
            {/* Horizontal stripe lines */}
            {[...Array(8)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-full bg-[#1a0a2e]"
                    style={{
                        height: `${4 + i * 2}px`,
                        bottom: `${10 + i * 12}%`
                    }}
                />
            ))}
        </motion.div>
    </div>
);

// 80s grid floor
const GridFloor = () => (
    <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0"
            style={{
                background: 'linear-gradient(180deg, transparent 0%, #1a0a2e 30%)',
            }}
        />
        <motion.div
            className="absolute inset-0"
            style={{
                backgroundImage: 'linear-gradient(#ff00ff40 2px, transparent 2px), linear-gradient(90deg, #00ffff40 2px, transparent 2px)',
                backgroundSize: '50px 50px',
                transform: 'perspective(300px) rotateX(60deg)',
                transformOrigin: 'center top'
            }}
            animate={{ backgroundPositionY: ['0px', '50px'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

// VHS tracking effect
const VHSTracking = () => (
    <motion.div
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
    >
        <motion.div
            className="absolute w-full h-8 bg-white/20"
            animate={{ y: ['-100%', '2000%'] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
        />
    </motion.div>
);

// Glitch text effect
const GlitchText = ({ children, className = '' }: { children: string; className?: string }) => (
    <div className={`relative ${className}`}>
        <span className="relative z-10">{children}</span>
        <motion.span
            className="absolute top-0 left-0 text-cyan-400 z-0"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)' }}
            animate={{ x: [-2, 2, -2] }}
            transition={{ duration: 0.2, repeat: Infinity }}
        >
            {children}
        </motion.span>
        <motion.span
            className="absolute top-0 left-0 text-pink-400 z-0"
            style={{ clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)' }}
            animate={{ x: [2, -2, 2] }}
            transition={{ duration: 0.2, repeat: Infinity }}
        >
            {children}
        </motion.span>
    </div>
);

// Japanese text decoration
const JapaneseText = ({ text, x }: { text: string; x: string }) => (
    <div
        className="fixed text-pink-400/30 text-2xl tracking-widest writing-vertical-rl"
        style={{
            left: x,
            top: '20%',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            fontFamily: 'serif'
        }}
    >
        {text}
    </div>
);

export default function VaporwavePage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)'
        }}>
            {/* VHS tracking effect */}
            <VHSTracking />

            {/* Scanlines overlay */}
            <div
                className="fixed inset-0 pointer-events-none opacity-10 z-40"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
                }}
            />

            {/* Japanese text decorations */}
            <JapaneseText text="ヴェイパーウェイヴ" x="5%" />
            <JapaneseText text="アエステチック" x="92%" />

            {/* Palm tree silhouettes */}
            <div className="fixed bottom-0 left-10 pointer-events-none opacity-60 z-10">
                <Palmtree className="w-32 h-48 text-purple-900" />
            </div>
            <div className="fixed bottom-0 right-10 pointer-events-none opacity-60 z-10 transform scale-x-[-1]">
                <Palmtree className="w-28 h-40 text-purple-900" />
            </div>

            {/* Grid floor */}
            <GridFloor />

            {/* Navigation - Retro TV style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6">
                <div className="max-w-4xl mx-auto">
                    <div
                        className="bg-gradient-to-b from-zinc-700 to-zinc-800 p-2 rounded-lg"
                        style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                    >
                        <div className="bg-[#1a0a2e] px-8 py-4 rounded border-4 border-zinc-600">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <Tv className="w-6 h-6 text-cyan-400" />
                                    <span
                                        className="text-xl font-bold tracking-[0.3em] text-transparent bg-clip-text"
                                        style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff)' }}
                                    >
                                        VAPOR
                                    </span>
                                </div>
                                <div className="flex gap-8 text-sm tracking-widest">
                                    {['波', 'ドリーム', 'ビジョン', 'リンク'].map((item, i) => (
                                        <a
                                            key={item}
                                            href={`#section${i}`}
                                            className="text-pink-400 hover:text-cyan-400 transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative z-20">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Retro sun */}
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-12"
                    >
                        <RetroSun />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-400 text-cyan-400 tracking-[0.3em] mb-8"
                    >
                        <Disc className="w-5 h-5" />
                        {displayData.role}
                    </motion.div>

                    <GlitchText className="text-5xl md:text-8xl font-black mb-6 tracking-widest">
                        {displayData.name || 'WAVE DEV'}
                    </GlitchText>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-xl text-pink-300/70 tracking-[0.2em] max-w-xl mx-auto mb-12"
                        style={{ fontFamily: 'serif' }}
                    >
                        {displayData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="flex justify-center gap-4"
                    >
                        <a
                            href="#section2"
                            className="px-8 py-4 text-black font-bold tracking-widest transition-all"
                            style={{ background: 'linear-gradient(90deg, #ff00ff, #00ffff)' }}
                        >
                            E X P L O R E
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="section0" className="py-32 px-6 relative z-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-2 border-pink-500 p-12 relative"
                        style={{ background: 'rgba(26,10,46,0.9)' }}
                    >
                        {/* Corner decorations */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400 -translate-x-2 -translate-y-2" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400 translate-x-2 -translate-y-2" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400 -translate-x-2 translate-y-2" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400 translate-x-2 translate-y-2" />

                        <div className="flex items-center gap-4 mb-8">
                            <Sunset className="w-10 h-10 text-pink-400" />
                            <h2
                                className="text-3xl font-bold tracking-[0.2em] text-transparent bg-clip-text"
                                style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff)' }}
                            >
                                ドリーム
                            </h2>
                        </div>
                        <p className="text-pink-100/70 leading-relaxed text-lg tracking-wider" style={{ fontFamily: 'serif' }}>
                            In the neon-soaked dreamscape of the digital realm, I craft experiences that
                            transport you to a world of eternal sunsets and infinite grids. Like a VHS
                            tape of memories, my code captures the essence of a future that never was.
                            Currently vibing from {displayData.location}. ✧･ﾟ: *✧･ﾟ:*
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="section1" className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 tracking-[0.3em] text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff)' }}
                    >
                        S K I L L S
                    </motion.h2>
                    <p className="text-center text-pink-400/50 mb-16 tracking-widest">テクノロジー</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                className="border border-pink-500/50 p-6 text-center relative overflow-hidden cursor-pointer group"
                                style={{ background: 'rgba(26,10,46,0.8)' }}
                            >
                                {/* Hover gradient */}
                                <motion.div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{ background: 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))' }}
                                />
                                <span className="relative z-10 font-bold tracking-widest text-cyan-300">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="section2" className="py-32 px-6 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 tracking-[0.3em] text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #00ffff, #ff00ff)' }}
                    >
                        P R O J E C T S
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group border-2 border-cyan-500/50 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{ background: 'rgba(26,10,46,0.9)' }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Header with sunset gradient */}
                                <div
                                    className="h-40 flex items-center justify-center relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(180deg, ${i === 0 ? '#ff6b9d, #ffa726' : '#00ffff, #ff00ff'})`
                                    }}
                                >
                                    {/* Stripe lines like sun */}
                                    {[...Array(5)].map((_, j) => (
                                        <div
                                            key={j}
                                            className="absolute w-full bg-[#1a0a2e]/80"
                                            style={{
                                                height: `${3 + j}px`,
                                                bottom: `${j * 15}%`
                                            }}
                                        />
                                    ))}
                                    <span className="relative z-10 text-4xl font-black tracking-[0.2em] text-[#1a0a2e]">
                                        {i === 0 ? '波' : '夢'}
                                    </span>
                                </div>

                                <div className="p-8">
                                    <h3
                                        className="text-2xl font-bold mb-3 tracking-[0.2em] text-transparent bg-clip-text group-hover:text-cyan-400 transition-colors"
                                        style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff)' }}
                                    >
                                        {project.name}
                                    </h3>
                                    <p className="text-pink-200/60 mb-4 tracking-wider">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 border border-pink-500/50 text-pink-400 text-sm tracking-wider">
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
            <section className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 tracking-[0.3em] text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff)' }}
                    >
                        履歴
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="border border-pink-500/50 p-6"
                            style={{ background: 'rgba(26,10,46,0.8)' }}
                        >
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 className="text-xl font-bold text-pink-400 tracking-wider">{exp.position}</h3>
                                <span className="px-4 py-1 border border-cyan-400 text-cyan-400 text-sm tracking-wider">
                                    {exp.startDate} - {exp.endDate}
                                </span>
                            </div>
                            <p className="text-cyan-300 mb-2 tracking-wider">{exp.company}</p>
                            <p className="text-pink-100/60 tracking-wider">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 tracking-[0.3em] text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #00ffff, #ff00ff)' }}
                    >
                        学歴
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-cyan-500/50 p-6"
                                style={{ background: 'rgba(26,10,46,0.8)' }}
                            >
                                <Disc className="w-8 h-8 text-pink-400 mb-4" />
                                <h3 className="text-lg font-bold text-cyan-300 tracking-wider mb-1">{edu.degree}</h3>
                                <p className="text-pink-400 tracking-wider">{edu.school}</p>
                                <p className="text-sm text-pink-200/50 tracking-wider">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="section3" className="py-32 px-6 relative z-20">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="w-20 h-20 mx-auto mb-8 border-2 border-pink-400 flex items-center justify-center"
                        >
                            <Tv className="w-10 h-10 text-cyan-400" />
                        </motion.div>
                        <h2
                            className="text-4xl font-bold mb-6 tracking-[0.3em] text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(90deg, #ff00ff, #00ffff, #ff00ff)' }}
                        >
                            C O N T A C T
                        </h2>
                        <p className="text-pink-200/50 mb-12 tracking-widest">
                            接続する ✧･ﾟ: *✧･ﾟ:*
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
                                    whileHover={{ scale: 1.2 }}
                                    className="p-4 border border-pink-500/50"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,0,255,0.2), rgba(0,255,255,0.2))'
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
