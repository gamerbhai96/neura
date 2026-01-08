'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Sparkles, Star, Diamond } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Holo Dev",
    role: "Creative Technologist",
    email: "dev@holo.io",
    phone: "+1 555 000 0000",
    location: "Hologram Space",
    bio: "Creating iridescent digital experiences that shift and shimmer like the future.",
    skills: ["React", "WebGL", "Three.js", "Shaders", "CSS Art", "Animation", "AR/VR", "Creative Coding"],
    experience: [{ company: "Prism Labs", position: "Lead Creative", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "MIT Media Lab", degree: "MS Media Technology", field: "Interactive Media", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Prismatic", description: "Color-shifting UI library", technologies: ["React", "CSS"] },
        { name: "Spectrum", description: "AR visualization tool", technologies: ["Three.js", "WebXR"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function HolographicPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-sans overflow-x-hidden">
            {/* Holographic gradient overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-30" style={{
                background: 'linear-gradient(135deg, rgba(255,0,128,0.2) 0%, rgba(0,255,255,0.2) 25%, rgba(255,255,0,0.2) 50%, rgba(0,255,128,0.2) 75%, rgba(128,0,255,0.2) 100%)'
            }} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <Diamond className="w-6 h-6" style={{
                            background: 'linear-gradient(135deg, #ff0080, #00ffff, #ffff00, #00ff80, #8000ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }} />
                        <span style={{
                            background: 'linear-gradient(90deg, #ff0080, #00ffff, #ffff00)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>HOLOGRAPHIC</span>
                    </div>
                    <div className="flex gap-8 text-sm text-white/60">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-sm mb-8"
                        style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))' }}
                    >
                        <Sparkles className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-6"
                        style={{
                            background: 'linear-gradient(90deg, #ff0080, #00ffff, #ffff00, #00ff80, #8000ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}
                    >
                        {displayData.name}
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
                        <a href="#projects" className="px-8 py-4 rounded-full font-bold text-black"
                            style={{ background: 'linear-gradient(90deg, #ff0080, #00ffff)' }}>
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/5 transition-all">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center" style={{
                        background: 'linear-gradient(90deg, #00ffff, #ff0080)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group relative p-8 rounded-2xl border border-white/10 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,0,128,0.05), rgba(0,255,255,0.05), rgba(255,255,0,0.05))'
                                }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1), rgba(255,255,0,0.1))'
                                    }} />
                                <div className="relative">
                                    <div className="aspect-video rounded-xl mb-6 flex items-center justify-center"
                                        style={{ background: 'linear-gradient(135deg, rgba(255,0,128,0.2), rgba(0,255,255,0.2))' }}>
                                        <Star className="w-16 h-16 text-white/30" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 rounded-full text-xs border border-white/20"
                                                style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))' }}>
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

            {/* Skills */}
            <section id="skills" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center" style={{
                        background: 'linear-gradient(90deg, #ffff00, #00ff80)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 rounded-full border border-white/20"
                                style={{ background: 'linear-gradient(90deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1), rgba(255,255,0,0.1))' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center" style={{
                        background: 'linear-gradient(90deg, #8000ff, #ff0080)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Education</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-2xl border border-white/10"
                            style={{ background: 'linear-gradient(135deg, rgba(128,0,255,0.05), rgba(255,0,128,0.05))' }}
                        >
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-white/60">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 rounded-full text-sm border border-white/20">
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
                    <h2 className="text-5xl font-bold mb-8" style={{
                        background: 'linear-gradient(90deg, #ff0080, #00ffff, #ffff00, #00ff80, #8000ff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>Let's Connect</h2>
                    <p className="text-white/60 mb-12">Create something iridescent together</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all"
                                style={{ background: 'linear-gradient(135deg, rgba(255,0,128,0.1), rgba(0,255,255,0.1))' }}>
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all"
                                style={{ background: 'linear-gradient(135deg, rgba(0,255,255,0.1), rgba(255,255,0,0.1))' }}>
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 rounded-xl border border-white/20 hover:bg-white/5 transition-all"
                                style={{ background: 'linear-gradient(135deg, rgba(255,255,0,0.1), rgba(128,0,255,0.1))' }}>
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Iridescent by design.</p>
            </footer>
        </div>
    );
}
