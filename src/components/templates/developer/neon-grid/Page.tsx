'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Grid, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Grid Dev",
    role: "Full Stack Developer",
    email: "dev@grid.io",
    phone: "+1 555 000 0000",
    location: "The Grid",
    bio: "Building the future on a foundation of glowing lines. Precision meets neon.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Redis"],
    experience: [{ company: "Grid Systems", position: "Lead Developer", startDate: "2019", endDate: "Present", description: "Developing", highlights: [] }],
    education: [
        { school: "Tech Institute", degree: "MS Computer Science", field: "Systems", startDate: "2015", endDate: "2017" }
    ],
    projects: [
        { name: "GridForge", description: "Infrastructure automation", technologies: ["Go", "Terraform"] },
        { name: "NeonAPI", description: "High-performance API gateway", technologies: ["Rust", "Redis"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function NeonGridPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-mono overflow-x-hidden">
            {/* Neon Grid Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(0,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px'
                }} />
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,0,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,0,255,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: '200px 200px'
                }} />
                {/* Glow effects */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[100px]" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-sm border-b border-cyan-500/20">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold text-cyan-400">
                        <Grid className="w-6 h-6" />
                        <span>GRID</span>
                    </div>
                    <div className="flex gap-8 text-sm text-cyan-400/70">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
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
                        className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 text-cyan-400 text-sm mb-8"
                    >
                        <Zap className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-6"
                        style={{ textShadow: '0 0 40px rgba(0,255,255,0.5), 0 0 80px rgba(0,255,255,0.3)' }}
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-fuchsia-400 max-w-xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-cyan-500 text-black font-bold hover:bg-cyan-400 transition-all"
                            style={{ boxShadow: '0 0 20px rgba(0,255,255,0.5)' }}>
                            VIEW_PROJECTS
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-fuchsia-500 text-fuchsia-400 font-bold hover:bg-fuchsia-500/10 transition-all">
                            CONNECT
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400"
                        style={{ textShadow: '0 0 20px rgba(0,255,255,0.5)' }}>
                        &lt;PROJECTS/&gt;
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group border border-cyan-500/30 p-8 relative overflow-hidden hover:border-fuchsia-500/50 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative">
                                    <div className="text-xs text-cyan-400 mb-2">&gt; PROJECT_{String(i + 1).padStart(2, '0')}</div>
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-fuchsia-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 border border-cyan-500/30 text-cyan-400 text-xs">
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
                    <h2 className="text-4xl font-bold mb-16 text-center text-fuchsia-400"
                        style={{ textShadow: '0 0 20px rgba(255,0,255,0.5)' }}>
                        &lt;SKILLS/&gt;
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-4 border border-fuchsia-500/30 text-center hover:border-cyan-500 hover:bg-cyan-500/5 transition-all"
                            >
                                <span className="text-sm">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-cyan-400">
                        &lt;EDUCATION/&gt;
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border border-cyan-500/30 p-8"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-fuchsia-400">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 border border-cyan-500/30 text-cyan-400 text-sm">
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
                    <h2 className="text-5xl font-bold mb-8 text-cyan-400" style={{ textShadow: '0 0 40px rgba(0,255,255,0.5)' }}>
                        CONNECT
                    </h2>
                    <p className="text-fuchsia-400 mb-12">Enter the grid</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
                                style={{ boxShadow: '0 0 15px rgba(0,255,255,0.3)' }}>
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-black transition-all"
                                style={{ boxShadow: '0 0 15px rgba(255,0,255,0.3)' }}>
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
                                style={{ boxShadow: '0 0 15px rgba(0,255,255,0.3)' }}>
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-cyan-400/60 text-sm relative z-10 border-t border-cyan-500/20">
                <p>© 2024 {displayData.name} // GRID_SYSTEMS</p>
            </footer>
        </div>
    );
}
