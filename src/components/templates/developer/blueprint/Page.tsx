'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Ruler, Compass, FileText } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Engineer Dev",
    role: "Software Architect",
    email: "dev@blueprint.io",
    phone: "+1 555 000 0000",
    location: "Engineering Bay",
    bio: "Precision engineering meets software design. Building architectures that stand the test of time.",
    skills: ["React", "TypeScript", "System Design", "Architecture", "AWS", "Microservices", "Docker", "Kubernetes"],
    experience: [{ company: "Architecture Co", position: "Principal Engineer", startDate: "2018", endDate: "Present", description: "Architecting", highlights: [] }],
    education: [
        { school: "Stanford", degree: "MS Computer Science", field: "Distributed Systems", startDate: "2014", endDate: "2016" }
    ],
    projects: [
        { name: "System Blueprint", description: "Architecture visualization", technologies: ["React", "D3.js"] },
        { name: "Scale Engine", description: "Auto-scaling infrastructure", technologies: ["Go", "Kubernetes"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function BlueprintPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#1a3a5c] text-white font-mono">
            {/* Blueprint grid background */}
            <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
            }} />
            <div className="fixed inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px'
            }} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#1a3a5c]/90 backdrop-blur-sm border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Compass className="w-6 h-6 text-cyan-400" />
                        <span className="text-lg tracking-widest">BLUEPRINT</span>
                    </div>
                    <div className="flex gap-8 text-xs tracking-widest text-white/60">
                        {['SPEC', 'PROJECTS', 'STACK', 'EDUCATION', 'CONTACT'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Corner markers */}
                    <div className="absolute -top-8 -left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute -top-8 -right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400/50" />
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-400/50" />
                    <div className="absolute -bottom-8 -right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50" />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs tracking-[0.5em] text-cyan-400 mb-4"
                    >
                        REV. 2024.01 | {displayData.role?.toUpperCase()}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-8 tracking-tight"
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-32 h-px bg-cyan-400 mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-white/70 max-w-xl mx-auto mb-12 leading-relaxed"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-3 bg-cyan-500 text-[#1a3a5c] font-bold tracking-wider hover:bg-cyan-400 transition-all">
                            VIEW_PROJECTS
                        </a>
                        <a href="#contact" className="px-8 py-3 border border-cyan-500 text-cyan-400 font-bold tracking-wider hover:bg-cyan-500/10 transition-all">
                            CONTACT
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Ruler className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl tracking-widest">PROJECTS</h2>
                        <div className="flex-1 h-px bg-white/20" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group border border-white/20 p-8 relative hover:border-cyan-400/50 transition-colors"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-400" />
                                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-400" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-400" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-400" />

                                <div className="text-xs text-cyan-400 mb-2 tracking-widest">PROJECT_{String(i + 1).padStart(2, '0')}</div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                                <p className="text-white/60 mb-6">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 border border-white/20 text-xs tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills/Stack */}
            <section id="stack" className="py-32 px-6 relative z-10 bg-[#143050]">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <FileText className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl tracking-widest">TECH_STACK</h2>
                        <div className="flex-1 h-px bg-white/20" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="border border-white/20 p-4 text-center hover:border-cyan-400 transition-colors"
                            >
                                <div className="text-xs text-cyan-400 mb-1">MODULE_{String(i + 1).padStart(2, '0')}</div>
                                <div className="font-medium">{skill}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Compass className="w-6 h-6 text-cyan-400" />
                        <h2 className="text-2xl tracking-widest">EDUCATION</h2>
                        <div className="flex-1 h-px bg-white/20" />
                    </div>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border border-white/20 p-8 relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400" />
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-cyan-400">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 border border-white/20 text-sm tracking-wider">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10 bg-[#143050]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4 tracking-wider">INITIATE_CONTACT</h2>
                    <p className="text-white/60 mb-12">Ready to architect the future?</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-xs tracking-widest relative z-10 border-t border-white/10">
                <p>© 2024 {displayData.name} | PRECISION ENGINEERING</p>
            </footer>
        </div>
    );
}
