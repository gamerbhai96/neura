'use client';

import { motion } from 'framer-motion';
import { Palette, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Gradient Dev",
    role: "Creative Developer",
    email: "dev@gradient.io",
    phone: "+1 555 000 0000",
    location: "Color Space",
    bio: "Painting the web with complex gradients and mesh art. Every color tells a story.",
    skills: ["React", "CSS", "SVG", "WebGL", "Canvas", "Animation", "UI Design", "Figma"],
    experience: [{ company: "Color Labs", position: "Lead Creative", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Art Institute", degree: "MFA Digital Design", field: "Visual Arts", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Chromatic", description: "Color palette generator", technologies: ["React", "Canvas"] },
        { name: "Mesh Studio", description: "Gradient mesh tool", technologies: ["SVG", "JavaScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function GradientMeshPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden">
            {/* Animated Mesh Gradient Background */}
            <div className="fixed inset-0">
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <motion.div
                    animate={{
                        background: [
                            'radial-gradient(circle at 0% 0%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 100% 0%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 100% 100%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ffe66d 0%, transparent 50%)',
                            'radial-gradient(circle at 100% 0%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 0% 100%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 0% 0%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 100% 100%, #ffe66d 0%, transparent 50%)',
                            'radial-gradient(circle at 50% 50%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 100% 100%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 0% 0%, #ffe66d 0%, transparent 50%)',
                            'radial-gradient(circle at 0% 0%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 100% 0%, #4ecdc4 0%, transparent 50%), radial-gradient(circle at 100% 100%, #ff6b6b 0%, transparent 50%), radial-gradient(circle at 0% 100%, #ffe66d 0%, transparent 50%)',
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-30"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_70%)]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <Palette className="w-6 h-6 text-[#ff6b6b]" />
                        <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d] bg-clip-text text-transparent">
                            GRADIENT
                        </span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-white/60">
                        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
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
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-[#ffe66d]" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-9xl font-black mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d] bg-clip-text text-transparent">
                            {displayData.name}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60 max-w-xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d] rounded-full font-bold text-black hover:shadow-[0_0_40px_rgba(255,107,107,0.4)] transition-all">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-[#ff6b6b] to-[#4ecdc4] bg-clip-text text-transparent">
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
                                transition={{ delay: i * 0.1 }}
                                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-8 overflow-hidden hover:border-white/20 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Gradient orb */}
                                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#ff6b6b] to-[#4ecdc4] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />

                                <div className="relative">
                                    <div className="aspect-video bg-gradient-to-br from-[#ff6b6b]/20 via-[#4ecdc4]/20 to-[#ffe66d]/20 rounded-2xl mb-6 flex items-center justify-center">
                                        <Palette className="w-16 h-16 text-white/20 group-hover:text-white/40 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:bg-gradient-to-r group-hover:from-[#ff6b6b] group-hover:to-[#4ecdc4] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
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
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-[#4ecdc4] to-[#ffe66d] bg-clip-text text-transparent">
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
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 bg-gradient-to-r from-white/5 to-white/10 rounded-full border border-white/10 font-medium hover:border-[#ff6b6b]/50 transition-all cursor-default"
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
                        <span className="bg-gradient-to-r from-[#ffe66d] to-[#ff6b6b] bg-clip-text text-transparent">
                            Education
                        </span>
                    </h2>
                    <div className="space-y-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d]" />
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                        <p className="text-white/60">{edu.school}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-gradient-to-r from-[#ff6b6b]/20 to-[#4ecdc4]/20 rounded-full text-sm border border-white/10">
                                        {edu.startDate} - {edu.endDate}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8">
                        <span className="bg-gradient-to-r from-[#ff6b6b] via-[#4ecdc4] to-[#ffe66d] bg-clip-text text-transparent">
                            Let's Create Together
                        </span>
                    </h2>
                    <p className="text-white/60 mb-12 text-xl">Paint the web with vibrant colors</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#ff6b6b]/50 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#4ecdc4]/50 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-[#ffe66d]/50 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Painted with Gradients.</p>
            </footer>
        </div>
    );
}
