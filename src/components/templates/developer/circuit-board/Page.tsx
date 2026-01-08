'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Cpu, CircuitBoard as CircuitIcon, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Circuit Master",
    role: "Backend Engineer",
    email: "dev@circuit.io",
    phone: "+1 555 000 0000",
    location: "Silicon Valley, CA",
    bio: "Soldering together robust systems, one connection at a time. Building the backbone of technology.",
    skills: ["Rust", "Go", "C++", "FPGA", "Embedded Systems", "Linux", "Docker", "Kubernetes"],
    experience: [{ company: "Hardware Labs", position: "Principal Engineer", startDate: "2017", endDate: "Present", description: "Designing systems", highlights: [] }],
    education: [
        { school: "Stanford", degree: "MS Electrical Engineering", field: "EE", startDate: "2013", endDate: "2015" }
    ],
    projects: [
        { name: "Voltage", description: "High-performance networking library", technologies: ["Rust", "io_uring"] },
        { name: "Trace", description: "PCB design automation tool", technologies: ["C++", "Qt"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function CircuitBoardPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-green-950 text-green-100 font-mono overflow-hidden">
            {/* Circuit pattern background */}
            <div className="fixed inset-0 pointer-events-none opacity-20">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            {/* Horizontal lines */}
                            <line x1="0" y1="25" x2="40" y2="25" stroke="#22c55e" strokeWidth="2" />
                            <line x1="60" y1="25" x2="100" y2="25" stroke="#22c55e" strokeWidth="2" />
                            <line x1="0" y1="75" x2="30" y2="75" stroke="#22c55e" strokeWidth="2" />
                            <line x1="70" y1="75" x2="100" y2="75" stroke="#22c55e" strokeWidth="2" />
                            {/* Vertical lines */}
                            <line x1="50" y1="0" x2="50" y2="20" stroke="#22c55e" strokeWidth="2" />
                            <line x1="50" y1="30" x2="50" y2="70" stroke="#22c55e" strokeWidth="2" />
                            <line x1="50" y1="80" x2="50" y2="100" stroke="#22c55e" strokeWidth="2" />
                            {/* Connection points */}
                            <circle cx="50" cy="25" r="4" fill="#22c55e" />
                            <circle cx="50" cy="75" r="4" fill="#22c55e" />
                            <circle cx="25" cy="50" r="3" fill="#22c55e" />
                            <circle cx="75" cy="50" r="3" fill="#22c55e" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit)" />
                </svg>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-green-950/90 backdrop-blur-md border-b-2 border-green-500/30">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-green-400 flex items-center gap-2 tracking-widest">
                        <CircuitIcon className="w-6 h-6" />
                        CIRCUIT
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-green-300">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-green-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* LED indicator */}
                    <motion.div
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-3 h-3 bg-green-400 rounded-full mx-auto mb-8 shadow-lg shadow-green-400/50"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/50 text-green-400 text-sm mb-8 font-bold tracking-widest"
                    >
                        <Cpu className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mb-8 text-green-400 tracking-wide"
                    >
                        {displayData.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-green-300/70 max-w-2xl mx-auto leading-relaxed"
                    >
                        {displayData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 mt-12"
                    >
                        <button className="px-8 py-3 bg-green-500 text-green-950 font-bold tracking-wider hover:bg-green-400 transition-colors flex items-center gap-2">
                            <Zap className="w-4 h-4" />
                            View Schematics
                        </button>
                        <button className="px-8 py-3 bg-transparent text-green-400 border-2 border-green-500 font-bold tracking-wider hover:bg-green-500/10 transition-colors">
                            Connect
                        </button>
                    </motion.div>

                    {/* Voltage readings */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-12 mt-16 text-sm text-green-500"
                    >
                        <div>VCC: 5.0V</div>
                        <div>GND: 0.0V</div>
                        <div>CLK: 100MHz</div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 bg-green-900/20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="border-2 border-green-500/30 p-12 relative"
                    >
                        {/* Corner LEDs */}
                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-green-400 rounded-full" />
                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-green-400 rounded-full" />
                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-green-400 rounded-full" />
                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-green-400 rounded-full" />

                        <Cpu className="w-12 h-12 text-green-400 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-center mb-8 text-green-400">System Info</h2>
                        <p className="text-lg text-green-300/70 leading-relaxed text-center">
                            Like the intricate traces on a circuit board, I connect different components
                            of a system to create something that works in perfect harmony. My code is
                            precise, efficient, and built to handle high-frequency operations.
                            Currently deployed in {displayData.location}.
                        </p>
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
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        Component Library
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group border-2 border-green-500/30 p-6 bg-green-900/20 hover:border-green-400 transition-colors relative"
                            >
                                {/* Pin indicators */}
                                <div className="absolute top-1/2 -left-2 w-4 h-2 bg-amber-500 -translate-y-1/2" />
                                <div className="absolute top-1/2 -right-2 w-4 h-2 bg-amber-500 -translate-y-1/2" />
                                <div className="text-center">
                                    <div className="text-xs text-green-500/50 mb-2">U{i + 1}</div>
                                    <span className="text-green-300 font-bold">{skill}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 bg-green-900/20">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        Project Designs
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group border-2 border-green-500/30 bg-green-950/50 hover:border-green-400 transition-colors ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-green-900/30 flex items-center justify-center relative border-b-2 border-green-500/30">
                                    <CircuitIcon className="w-20 h-20 text-green-500/30 group-hover:text-green-400/50 transition-colors" />
                                    {/* Status LED */}
                                    <motion.div
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold mb-3 text-green-300 group-hover:text-green-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-green-400/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 border border-green-500/30 text-green-400 text-sm">
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
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        Version History
                    </motion.h2>
                    <div className="space-y-6">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-l-4 border-green-500 pl-8 py-4 bg-green-900/20"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-green-300">{exp.position}</h3>
                                        <p className="text-green-500">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-green-500/60 font-mono">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-green-400/60">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 bg-green-900/20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        Certifications
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-2 border-green-500/30 p-6 bg-green-950/50"
                            >
                                <h3 className="text-lg font-bold text-green-300 mb-1">{edu.degree}</h3>
                                <p className="text-green-500 mb-2">{edu.school}</p>
                                <p className="text-sm text-green-500/60 font-mono">{edu.startDate} - {edu.endDate}</p>
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
                        <Cpu className="w-16 h-16 text-green-400 mx-auto mb-6" />
                        <h2 className="text-4xl font-bold mb-8 text-green-400">Establish Connection</h2>
                        <p className="text-xl text-green-300/60 mb-12">
                            Ready to solder together something amazing?
                        </p>
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
                                className="p-4 bg-green-500 text-green-950 hover:bg-green-400 transition-colors"
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
