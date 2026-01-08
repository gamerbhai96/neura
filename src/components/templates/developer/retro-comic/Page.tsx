'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Zap, Star, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Comic Dev",
    role: "Creative Developer",
    email: "dev@comic.io",
    phone: "+1 555 000 0000",
    location: "Panel City",
    bio: "POW! BAM! WHOOSH! Creating web experiences with explosive visual impact!",
    skills: ["React", "CSS Art", "SVG", "Animation", "Illustration", "UI Design", "Canvas", "WebGL"],
    experience: [{ company: "Comic Labs", position: "Creative Lead", startDate: "2020", endDate: "Present", description: "Drawing", highlights: [] }],
    education: [
        { school: "Art Academy", degree: "BFA Illustration", field: "Sequential Art", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Kapow", description: "Comic book reader app", technologies: ["React", "Canvas"] },
        { name: "Splash", description: "Panel layout generator", technologies: ["SVG", "JavaScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function RetroComicPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#fff9e6] text-black font-sans overflow-x-hidden">
            {/* Halftone pattern overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-5" style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '4px 4px'
            }} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#ff3333] border-b-4 border-black">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-black text-white drop-shadow-[2px_2px_0_#000]">
                        COMIC DEV
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-white uppercase">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-yellow-300 transition-colors drop-shadow-[1px_1px_0_#000]">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
                <div className="text-center relative">
                    {/* Speech bubble */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative bg-white border-4 border-black rounded-3xl p-12 max-w-3xl mx-auto"
                        style={{ boxShadow: '8px 8px 0 #000' }}
                    >
                        {/* Bubble tail */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-t-[40px] border-t-black" />
                        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[32px] border-t-white" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 border-2 border-black font-black text-sm mb-6 rotate-2"
                            style={{ boxShadow: '3px 3px 0 #000' }}
                        >
                            <Zap className="w-4 h-4" />
                            {displayData.role?.toUpperCase()}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black mb-6 uppercase"
                            style={{
                                textShadow: '4px 4px 0 #ff3333, 8px 8px 0 #000',
                                fontFamily: 'Impact, sans-serif'
                            }}
                        >
                            {displayData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold max-w-lg mx-auto"
                        >
                            {displayData.bio}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 mt-16"
                    >
                        <a href="#projects" className="px-8 py-4 bg-[#ff3333] text-white font-black uppercase border-4 border-black hover:bg-[#ff6666] transition-all"
                            style={{ boxShadow: '4px 4px 0 #000' }}>
                            POW! See Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-yellow-400 text-black font-black uppercase border-4 border-black hover:bg-yellow-300 transition-all"
                            style={{ boxShadow: '4px 4px 0 #000' }}>
                            ZAP! Contact
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10 bg-[#4a90d9]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-black text-center mb-16 uppercase text-white"
                        style={{ textShadow: '4px 4px 0 #000' }}>
                        WHAM! Projects!
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02, rotate: 0 }}
                                className={`bg-white border-4 border-black p-8 relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{ boxShadow: '6px 6px 0 #000' }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Action burst */}
                                <div className="absolute -top-4 -right-4 bg-yellow-400 border-2 border-black px-3 py-1 font-black text-sm rotate-12"
                                    style={{ boxShadow: '2px 2px 0 #000' }}>
                                    #{String(i + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-3xl font-black mb-4 uppercase">
                                    {project.name}
                                </h3>
                                <p className="text-gray-700 mb-6 font-medium">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-[#ff3333] text-white font-bold text-sm border-2 border-black"
                                            style={{ boxShadow: '2px 2px 0 #000' }}>
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
                    <h2 className="text-5xl font-black text-center mb-16 uppercase"
                        style={{ textShadow: '4px 4px 0 #ff3333' }}>
                        KAPOW! Skills!
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                                className="px-6 py-3 bg-yellow-400 border-4 border-black font-black"
                                style={{ boxShadow: '4px 4px 0 #000' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10 bg-[#ff3333]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-5xl font-black text-center mb-16 uppercase text-white"
                        style={{ textShadow: '4px 4px 0 #000' }}>
                        BOOM! Education!
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white border-4 border-black p-8"
                            style={{ boxShadow: '6px 6px 0 #000' }}
                        >
                            <h3 className="text-2xl font-black uppercase mb-2">{edu.degree}</h3>
                            <p className="text-gray-700 font-bold">{edu.school}</p>
                            <p className="text-sm mt-2 font-bold text-[#ff3333]">{edu.startDate} - {edu.endDate}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-yellow-400 border-4 border-black p-12 inline-block"
                        style={{ boxShadow: '8px 8px 0 #000' }}>
                        <h2 className="text-5xl font-black uppercase mb-4"
                            style={{ textShadow: '3px 3px 0 #ff3333' }}>
                            LET'S TEAM UP!
                        </h2>
                        <p className="font-bold mb-8">Ready to create something AMAZING?</p>
                        <div className="flex justify-center gap-4">
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-4 bg-white border-4 border-black hover:bg-[#ff3333] hover:text-white transition-all"
                                    style={{ boxShadow: '4px 4px 0 #000' }}>
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-4 bg-white border-4 border-black hover:bg-[#ff3333] hover:text-white transition-all"
                                    style={{ boxShadow: '4px 4px 0 #000' }}>
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-4 bg-white border-4 border-black hover:bg-[#ff3333] hover:text-white transition-all"
                                    style={{ boxShadow: '4px 4px 0 #000' }}>
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center font-black text-sm bg-black text-white">
                <p>© 2024 {displayData.name} ★ POW! BAM! WHOOSH!</p>
            </footer>
        </div>
    );
}
