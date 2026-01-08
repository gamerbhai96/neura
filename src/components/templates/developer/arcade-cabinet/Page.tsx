'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Gamepad2, Trophy, Joystick } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Player One",
    role: "Game Developer",
    email: "dev@arcade.io",
    phone: "+1 555 000 0000",
    location: "Pixel City",
    bio: "INSERT COIN TO CONTINUE. Level 99 developer ready to build your next high-score experience.",
    skills: ["Unity", "C#", "JavaScript", "React", "Three.js", "WebGL", "Pixel Art", "Game Design"],
    experience: [{ company: "Arcade Studios", position: "Lead Developer", startDate: "2019", endDate: "Present", description: "Creating immersive games", highlights: [] }],
    education: [
        { school: "Game Dev Academy", degree: "BS Game Development", field: "Games", startDate: "2015", endDate: "2019" }
    ],
    projects: [
        { name: "PixelQuest", description: "Retro-style adventure game", technologies: ["Unity", "C#"] },
        { name: "NeonRacer", description: "Arcade racing game", technologies: ["JavaScript", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function ArcadeCabinetPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-gray-950 text-white font-mono overflow-hidden">
            {/* Scanline effect */}
            <div className="fixed inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)'
            }} />

            {/* CRT glow effect */}
            <div className="fixed inset-0 pointer-events-none" style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.3) 100%)'
            }} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur border-b-4 border-yellow-400">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-yellow-400 flex items-center gap-2 tracking-wider">
                        <Gamepad2 className="w-6 h-6" />
                        ARCADE
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-cyan-400 uppercase tracking-wider">
                        {['About', 'Games', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Pixel border frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative p-12 border-8 border-cyan-400"
                        style={{
                            boxShadow: '0 0 0 4px #1a1a2e, 0 0 0 8px #fbbf24, 0 0 40px rgba(34, 211, 238, 0.3)',
                            imageRendering: 'pixelated'
                        }}
                    >
                        {/* Corner decorations */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400" />
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400" />
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-yellow-400" />
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-yellow-400" />

                        <motion.div
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                            className="text-sm text-cyan-400 mb-4 tracking-widest"
                        >
                            PLAYER SELECT
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-5xl md:text-7xl font-bold mb-4 text-yellow-400 tracking-wider"
                            style={{ textShadow: '4px 4px 0 #0891b2' }}
                        >
                            {displayData.name?.toUpperCase()}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-magenta-400 mb-6"
                            style={{ color: '#ff00ff' }}
                        >
                            ★ {displayData.role?.toUpperCase()} ★
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-cyan-300 max-w-xl mx-auto mb-8"
                        >
                            {displayData.bio}
                        </motion.p>

                        {/* Blinking text */}
                        <motion.p
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="text-yellow-400 text-lg tracking-widest"
                        >
                            PRESS START
                        </motion.p>
                    </motion.div>

                    {/* Score display */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 flex justify-center gap-12 text-sm"
                    >
                        <div className="text-center">
                            <p className="text-cyan-400">HIGH SCORE</p>
                            <p className="text-yellow-400 text-2xl font-bold">999999</p>
                        </div>
                        <div className="text-center">
                            <p className="text-cyan-400">LEVEL</p>
                            <p className="text-yellow-400 text-2xl font-bold">99</p>
                        </div>
                        <div className="text-center">
                            <p className="text-cyan-400">LIVES</p>
                            <p className="text-2xl">❤️❤️❤️</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 bg-gray-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-yellow-400 mb-8 tracking-wider">PLAYER BIO</h2>
                        <div className="border-4 border-cyan-400 p-8" style={{ boxShadow: '4px 4px 0 #fbbf24' }}>
                            <p className="text-lg text-cyan-100 leading-relaxed">
                                From the golden age of arcades to the modern era of gaming, I&apos;ve been on
                                an epic quest to create unforgettable digital experiences. With a passion
                                for pixel-perfect design and gameplay mechanics, I bring that retro magic
                                to every project. Currently based in {displayData.location}.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-yellow-400 mb-16 tracking-wider"
                    >
                        POWER-UPS
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                className="border-4 border-cyan-400 p-4 text-center bg-gray-900"
                                style={{ boxShadow: '4px 4px 0 #fbbf24' }}
                            >
                                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                                <span className="text-cyan-100 font-bold uppercase tracking-wide text-sm">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="games" className="py-32 px-6 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-yellow-400 mb-16 tracking-wider"
                    >
                        GAME SELECT
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className={`border-4 border-yellow-400 bg-gray-900 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{ boxShadow: '8px 8px 0 #0891b2' }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-purple-900 to-cyan-900 flex items-center justify-center border-b-4 border-yellow-400">
                                    <Joystick className="w-20 h-20 text-yellow-400/50" />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-cyan-400">►</span>
                                        <h3 className="text-2xl font-bold text-yellow-400 tracking-wider">
                                            {project.name?.toUpperCase()}
                                        </h3>
                                    </div>
                                    <p className="text-cyan-100 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 border-2 border-cyan-400 text-cyan-400 text-xs uppercase tracking-wider">
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-yellow-400 mb-16 tracking-wider"
                    >
                        QUEST LOG
                    </motion.h2>
                    <div className="space-y-6">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-4 border-cyan-400 p-6 bg-gray-900"
                                style={{ boxShadow: '4px 4px 0 #fbbf24' }}
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-yellow-400">{exp.position}</h3>
                                        <p className="text-magenta-400" style={{ color: '#ff00ff' }}>{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-cyan-400 border border-cyan-400 px-2 py-1">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-cyan-100">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 bg-gray-900/50">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-yellow-400 mb-16 tracking-wider"
                    >
                        TRAINING MODE
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-4 border-yellow-400 p-6 bg-gray-900 text-center"
                                style={{ boxShadow: '4px 4px 0 #0891b2' }}
                            >
                                <h3 className="text-lg font-bold text-yellow-400 mb-1">{edu.degree}</h3>
                                <p className="text-cyan-400 mb-2">{edu.school}</p>
                                <p className="text-sm text-cyan-100">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Gamepad2 className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                        <h2 className="text-5xl font-bold text-yellow-400 mb-4 tracking-wider">CONTINUE?</h2>
                        <motion.p
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-xl text-cyan-400 mb-12"
                        >
                            INSERT COIN TO CONNECT
                        </motion.p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: Mail, href: `mailto:${displayData.email}` },
                            { icon: Github, href: displayData.links.github },
                            { icon: Linkedin, href: displayData.links.linkedin }
                        ].map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 border-4 border-cyan-400 bg-gray-900 hover:bg-cyan-400 hover:text-gray-900 transition-all"
                                style={{ boxShadow: '4px 4px 0 #fbbf24' }}
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
