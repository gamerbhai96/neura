'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Circle, Triangle, Square, Hexagon } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Geo Dev",
    role: "Creative Developer",
    email: "dev@geometric.io",
    phone: "+1 555 000 0000",
    location: "Shape Space",
    bio: "Creating harmony through geometric patterns. Where mathematics meets art.",
    skills: ["React", "SVG", "CSS", "Canvas", "WebGL", "D3.js", "Animation", "Generative Art"],
    experience: [{ company: "Shape Labs", position: "Creative Lead", startDate: "2020", endDate: "Present", description: "Designing", highlights: [] }],
    education: [
        { school: "Design College", degree: "MFA Computational Design", field: "Generative Art", startDate: "2017", endDate: "2019" }
    ],
    projects: [
        { name: "Tessellation", description: "Generative pattern library", technologies: ["SVG", "JavaScript"] },
        { name: "Sacred Geometry", description: "Interactive visualization", technologies: ["Canvas", "WebGL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function GeometricArtPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
            {/* Animated Geometric Background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                            rotate: 0,
                            opacity: 0.1
                        }}
                        animate={{
                            rotate: 360,
                            y: [null, Math.random() * 100 - 50]
                        }}
                        transition={{
                            rotate: { duration: 20 + Math.random() * 10, repeat: Infinity, ease: "linear" },
                            y: { duration: 5 + Math.random() * 5, repeat: Infinity, yoyo: true, ease: "easeInOut" }
                        }}
                        className="absolute"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    >
                        {i % 3 === 0 ? (
                            <Circle className={`w-${8 + (i % 4) * 4} h-${8 + (i % 4) * 4} stroke-1`} style={{ color: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7'][i % 4], opacity: 0.2 }} />
                        ) : i % 3 === 1 ? (
                            <Triangle className={`w-${8 + (i % 4) * 4} h-${8 + (i % 4) * 4} stroke-1`} style={{ color: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7'][i % 4], opacity: 0.2 }} />
                        ) : (
                            <Square className={`w-${8 + (i % 4) * 4} h-${8 + (i % 4) * 4} stroke-1`} style={{ color: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7'][i % 4], opacity: 0.2 }} />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Hexagon className="w-8 h-8 text-[#4ecdc4]" />
                        <span className="text-xl font-bold">GEOMETRIC</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-white/60">
                        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#4ecdc4] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
                <div className="text-center relative">
                    {/* Large geometric shape behind text */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-[#4ecdc4]/20 rounded-full"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#ff6b6b]/20"
                        style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative"
                    >
                        <div className="flex justify-center gap-4 mb-8">
                            <Circle className="w-4 h-4 text-[#ff6b6b]" />
                            <Triangle className="w-4 h-4 text-[#4ecdc4]" />
                            <Square className="w-4 h-4 text-[#ffe66d]" />
                        </div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold mb-4"
                        >
                            {displayData.name}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#4ecdc4] mb-8"
                        >
                            {displayData.role}
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-white/60 max-w-md mx-auto mb-12"
                        >
                            {displayData.bio}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex justify-center gap-4"
                        >
                            <a href="#projects" className="px-8 py-4 bg-[#4ecdc4] text-[#0a0a0a] font-bold hover:bg-[#ff6b6b] transition-all">
                                Explore Work
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Hexagon className="w-8 h-8 text-[#ff6b6b]" />
                        <h2 className="text-4xl font-bold">Projects</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group relative bg-white/5 border border-white/10 p-8 hover:border-[#4ecdc4]/50 transition-all"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#4ecdc4]" />
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#ff6b6b]" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#ffe66d]" />
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#a855f7]" />

                                <div className="aspect-video bg-gradient-to-br from-[#ff6b6b]/10 to-[#4ecdc4]/10 mb-6 flex items-center justify-center border border-white/5">
                                    <Hexagon className="w-16 h-16 text-white/10 group-hover:text-[#4ecdc4]/50 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4ecdc4] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-white/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 text-xs">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Triangle className="w-8 h-8 text-[#ffe66d]" />
                        <h2 className="text-4xl font-bold">Skills</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group p-6 bg-white/5 border border-white/10 text-center hover:border-[#4ecdc4]/50 transition-all relative"
                            >
                                <div className="absolute top-2 left-2">
                                    {i % 3 === 0 ? <Circle className="w-3 h-3 text-[#ff6b6b]/50" /> :
                                        i % 3 === 1 ? <Triangle className="w-3 h-3 text-[#4ecdc4]/50" /> :
                                            <Square className="w-3 h-3 text-[#ffe66d]/50" />}
                                </div>
                                <span className="font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Square className="w-8 h-8 text-[#a855f7]" />
                        <h2 className="text-4xl font-bold">Education</h2>
                    </div>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 p-8 relative"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d]" />
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-[#4ecdc4]">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 bg-white/5 border border-white/10 text-sm">
                                    {edu.startDate} - {edu.endDate}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center gap-4 mb-8">
                        <Circle className="w-6 h-6 text-[#ff6b6b]" />
                        <Triangle className="w-6 h-6 text-[#4ecdc4]" />
                        <Square className="w-6 h-6 text-[#ffe66d]" />
                    </div>
                    <h2 className="text-5xl font-bold mb-8">Let's Create</h2>
                    <p className="text-white/60 mb-12">Build beautiful patterns together</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-[#ff6b6b] text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-[#0a0a0a] transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-[#4ecdc4] text-[#4ecdc4] hover:bg-[#4ecdc4] hover:text-[#0a0a0a] transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-[#ffe66d] text-[#ffe66d] hover:bg-[#ffe66d] hover:text-[#0a0a0a] transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Geometric Harmony.</p>
            </footer>
        </div>
    );
}
