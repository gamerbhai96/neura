'use client';

import { motion } from 'framer-motion';
import { Disc, Mail, Github, Linkedin, Music, Sunset } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Vapor Dev",
    role: "Digital Artist",
    email: "dev@vapor.io",
    phone: "+1 555 000 0000",
    location: "A E S T H E T I C",
    bio: "それは永遠です。Designing nostalgic digital experiences for the future.",
    skills: ["React", "CSS Art", "Animation", "Glitch Art", "Pixel Art", "Retro Design", "WebGL", "Canvas"],
    experience: [{ company: "VHS Studios", position: "Creative Lead", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Future University", degree: "Digital Media Arts", field: "New Media", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Mall Memory", description: "VR shopping experience", technologies: ["Three.js", "WebXR"] },
        { name: "Sunset Drive", description: "Interactive music player", technologies: ["React", "Web Audio"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function VaporwavePage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#1a0033] text-white font-sans overflow-x-hidden">
            {/* Gradient Background */}
            <div className="fixed inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#ff71ce] via-[#01cdfe] to-[#1a0033] opacity-20" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(to bottom, transparent 0%, #1a0033 100%),
                        repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,113,206,0.1) 50px),
                        repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(1,205,254,0.1) 50px)
                    `,
                    backgroundSize: '100% 100%, 50px 50px, 50px 50px'
                }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#1a0033]/80 backdrop-blur-sm border-b border-[#ff71ce]/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-2xl font-bold tracking-widest">
                        <Disc className="w-6 h-6 text-[#ff71ce] animate-spin-slow" />
                        <span className="text-[#ff71ce]">V A P O R</span>
                    </div>
                    <div className="flex gap-8 text-sm tracking-widest text-[#01cdfe]">
                        {['A B O U T', 'W O R K S', 'S K I L L S', 'C O N T A C T'].map((item) => (
                            <a key={item} href={`#${item.replace(/ /g, '').toLowerCase()}`} className="hover:text-[#ff71ce] transition-colors">
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
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <Sunset className="w-24 h-24 mx-auto text-[#ff71ce]" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black tracking-[0.3em] mb-6"
                        style={{ textShadow: '4px 4px 0 #ff71ce, -4px -4px 0 #01cdfe' }}
                    >
                        {displayData.name?.toUpperCase().split('').join(' ')}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl tracking-[0.5em] text-[#01cdfe] mb-8"
                    >
                        {displayData.role?.toUpperCase()}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-[#b967ff] max-w-lg mx-auto mb-12 italic"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#works" className="px-8 py-4 bg-[#ff71ce] text-[#1a0033] font-bold tracking-widest hover:bg-[#01cdfe] transition-all">
                            E X P L O R E
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Works */}
            <section id="works" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-[0.3em] text-center mb-16 text-[#ff71ce]">
                        W O R K S
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group bg-[#1a0033]/80 border-2 border-[#ff71ce]/30 p-8 relative overflow-hidden hover:border-[#01cdfe] transition-all"
                            >
                                {/* Scanlines */}
                                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />

                                <div className="relative">
                                    <div className="aspect-video bg-gradient-to-br from-[#ff71ce]/20 to-[#01cdfe]/20 mb-6 flex items-center justify-center border border-[#ff71ce]/20">
                                        <Music className="w-16 h-16 text-[#ff71ce]/50 group-hover:text-[#01cdfe] transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold tracking-widest mb-2 text-[#01cdfe] group-hover:text-[#ff71ce] transition-colors">
                                        {project.name?.toUpperCase()}
                                    </h3>
                                    <p className="text-[#b967ff] mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 bg-[#ff71ce]/10 border border-[#ff71ce]/30 text-[#ff71ce] text-xs tracking-widest">
                                                {tech.toUpperCase()}
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
                    <h2 className="text-4xl font-bold tracking-[0.3em] text-center mb-16 text-[#01cdfe]">
                        S K I L L S
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-[#1a0033]/80 border-2 border-[#01cdfe]/30 text-[#01cdfe] tracking-widest hover:border-[#ff71ce] hover:text-[#ff71ce] transition-all"
                            >
                                {skill.toUpperCase()}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-[0.3em] text-center mb-16 text-[#b967ff]">
                        E D U C A T I O N
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#1a0033]/80 border-2 border-[#b967ff]/30 p-8 text-center"
                        >
                            <h3 className="text-2xl font-bold tracking-widest text-[#ff71ce] mb-2">
                                {edu.degree?.toUpperCase()}
                            </h3>
                            <p className="text-[#01cdfe] tracking-widest mb-2">{edu.school?.toUpperCase()}</p>
                            <span className="text-[#b967ff] tracking-widest">{edu.startDate} - {edu.endDate}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold tracking-[0.3em] mb-8"
                        style={{ textShadow: '3px 3px 0 #ff71ce, -3px -3px 0 #01cdfe' }}>
                        C O N N E C T
                    </h2>
                    <p className="text-[#b967ff] mb-12 text-xl italic">それは永遠です • Let's create forever</p>
                    <div className="flex justify-center gap-6">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border-2 border-[#ff71ce] text-[#ff71ce] hover:bg-[#ff71ce] hover:text-[#1a0033] transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border-2 border-[#01cdfe] text-[#01cdfe] hover:bg-[#01cdfe] hover:text-[#1a0033] transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border-2 border-[#b967ff] text-[#b967ff] hover:bg-[#b967ff] hover:text-[#1a0033] transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-[#b967ff] text-sm relative z-10 tracking-widest">
                <p>© 2 0 2 4 • {displayData.name?.toUpperCase()} • A E S T H E T I C</p>
            </footer>
        </div>
    );
}
