'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Mail, Github, Linkedin, Star, Moon, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Cosmic Dev",
    role: "Full Stack Developer",
    email: "dev@cosmos.io",
    phone: "+1 555 000 0000",
    location: "The Universe",
    bio: "Exploring the infinite possibilities of code. Building experiences that are out of this world.",
    skills: ["React", "TypeScript", "Python", "Three.js", "Node.js", "GraphQL", "Docker", "AWS"],
    experience: [{ company: "Space Labs", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "MIT", degree: "MS Computer Science", field: "Distributed Systems", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Nebula", description: "Cloud infrastructure tool", technologies: ["Go", "Kubernetes"] },
        { name: "Starlight", description: "Real-time collaboration", technologies: ["React", "WebRTC"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function CosmicGalaxyPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const starsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!starsRef.current) return;
        const container = starsRef.current;
        container.innerHTML = '';

        for (let i = 0; i < 200; i++) {
            const star = document.createElement('div');
            star.className = 'absolute rounded-full bg-white';
            star.style.width = `${Math.random() * 3}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.opacity = `${Math.random() * 0.8 + 0.2}`;
            star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
            star.style.animationDelay = `${Math.random() * 2}s`;
            container.appendChild(star);
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#0a0a1a] text-white font-sans overflow-x-hidden">
            <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; }
                    50% { opacity: 1; }
                }
            `}</style>

            {/* Starfield */}
            <div ref={starsRef} className="fixed inset-0 pointer-events-none" />

            {/* Nebula effect */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[150px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a1a]/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <Star className="w-6 h-6 text-purple-400" />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            COSMIC
                        </span>
                    </div>
                    <div className="flex gap-8 text-sm text-white/60">
                        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-6"
                    >
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            {displayData.name}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60 max-w-xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all">
                            Explore Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:border-purple-500/30 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl mb-6 flex items-center justify-center">
                                    <Moon className="w-16 h-16 text-purple-400/50 group-hover:text-purple-400 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-white/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs rounded-full">
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
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:border-purple-400/30 hover:bg-purple-500/5 transition-all cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-purple-400">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400">
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
                    <h2 className="text-5xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="text-white/60 mb-12">Reach for the stars together</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-purple-500/30 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-purple-500/30 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 bg-white/5 border border-white/10 rounded-full hover:border-purple-500/30 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Written in the stars.</p>
            </footer>
        </div>
    );
}
