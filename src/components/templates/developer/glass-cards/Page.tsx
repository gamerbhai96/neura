'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mail, Github, Linkedin, Star, Hexagon } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Glass Dev",
    role: "UI/UX Developer",
    email: "dev@glass.io",
    phone: "+1 555 000 0000",
    location: "Crystal City",
    bio: "Crafting beautiful, translucent experiences. Where frosted glass meets modern web design.",
    skills: ["React", "TypeScript", "CSS", "Tailwind", "Figma", "Framer Motion", "Next.js", "UI Design"],
    experience: [{ company: "Crystal Studios", position: "Lead Frontend", startDate: "2020", endDate: "Present", description: "Designing", highlights: [] }],
    education: [
        { school: "Design Institute", degree: "MS Design Technology", field: "UI/UX", startDate: "2018", endDate: "2020" }
    ],
    projects: [
        { name: "Frosted UI", description: "Glass design system", technologies: ["React", "CSS"] },
        { name: "Crystal Dashboard", description: "Analytics with blur effects", technologies: ["Next.js", "D3"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function GlassCardsPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden">
            {/* Gradient Background */}
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-cyan-900" />

            {/* Floating orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[50%] right-[10%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]"
                />
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -80, 0] }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[10%] left-[30%] w-[350px] h-[350px] bg-cyan-500/30 rounded-full blur-[100px]"
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50">
                <div className="mx-6 mt-4">
                    <div className="max-w-7xl mx-auto px-6 py-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-xl font-bold">
                                <Hexagon className="w-6 h-6 text-cyan-400" />
                                <span>GLASS</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/70">
                                {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-12 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-8"
                        >
                            <Star className="w-4 h-4 text-yellow-400" />
                            {displayData.role}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-6xl md:text-7xl font-bold mb-6"
                        >
                            {displayData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl text-white/70 max-w-xl mx-auto mb-8"
                        >
                            {displayData.bio}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex justify-center gap-4"
                        >
                            <a href="#projects" className="px-8 py-4 bg-white/20 backdrop-blur border border-white/30 rounded-xl font-medium hover:bg-white/30 transition-all">
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-medium hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                                Contact Me
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-6 transition-all hover:bg-white/15 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                            >
                                <div className="aspect-video bg-gradient-to-br from-white/5 to-white/10 rounded-xl mb-6 flex items-center justify-center border border-white/10">
                                    <Sparkles className="w-12 h-12 text-white/30 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                                <p className="text-white/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/10">
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
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Skills & Expertise</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1 }}
                                className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 font-medium hover:bg-white/20 transition-all cursor-default"
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
                    <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>
                    <div className="space-y-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                        <p className="text-white/70">{edu.school}</p>
                                        {edu.field && <p className="text-cyan-400 text-sm mt-1">{edu.field}</p>}
                                    </div>
                                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
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
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 p-12 text-center"
                    >
                        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
                        <p className="text-white/70 mb-8 max-w-xl mx-auto">
                            Ready to create something beautiful together?
                        </p>
                        <div className="flex justify-center gap-4">
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-4 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Crafted with Glass.</p>
            </footer>
        </div>
    );
}
