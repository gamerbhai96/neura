'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Terminal, Mail, Github, Linkedin, Code } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Matrix Dev",
    role: "Full Stack Developer",
    email: "dev@matrix.io",
    phone: "+1 555 000 0000",
    location: "The Matrix",
    bio: "Building the future one line of code at a time. Follow the white rabbit.",
    skills: ["React", "Node.js", "Python", "TypeScript", "MongoDB", "Redis", "Docker", "AWS"],
    experience: [{ company: "Nebuchadnezzar", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Zion University", degree: "Master of Computer Science", field: "CS", startDate: "2018", endDate: "2020" }
    ],
    projects: [
        { name: "Red Pill", description: "Reality-bending application", technologies: ["React", "WebGL"] },
        { name: "Construct", description: "Virtual environment builder", technologies: ["Three.js", "Node.js"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function MatrixRainPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = [];

        for (let i = 0; i < columns; i++) {
            drops[i] = Math.random() * -100;
        }

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#00ff41';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.5})`;
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono">
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-500/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold text-green-400">
                        <Terminal className="w-6 h-6" />
                        <span>MATRIX://</span>
                    </div>
                    <div className="flex gap-8 text-sm text-green-400/70">
                        {['_about', '_projects', '_skills', '_education', '_contact'].map((item) => (
                            <a key={item} href={`#${item.substring(1)}`} className="hover:text-green-400 transition-colors">
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
                        className="text-green-500/50 text-sm mb-4 font-mono"
                    >
                        {'>'} initializing system...
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-6xl md:text-8xl font-bold mb-6 text-green-400"
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xl text-green-500/70 mb-8"
                    >
                        [{displayData.role}]
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="text-green-400/60 max-w-xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-green-500/10 border border-green-500 rounded text-green-400 hover:bg-green-500/20 transition-all">
                            ./view_projects
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-green-500/30 rounded text-green-400/70 hover:border-green-500 transition-all">
                            ./contact_me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-green-400">
                        {'>'} projects.list()
                    </h2>
                    <div className="h-px bg-green-500/30 mb-16" />
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`bg-black/50 border border-green-500/30 p-6 hover:border-green-500 transition-all group ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="text-green-500/50 text-xs mb-2">// project_{i + 1}</div>
                                <h3 className="text-2xl font-bold mb-2 text-green-400 group-hover:text-green-300 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-green-400/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs">
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
                    <h2 className="text-4xl font-bold mb-4 text-green-400">
                        {'>'} skills.load()
                    </h2>
                    <div className="h-px bg-green-500/30 mb-16" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-black/50 border border-green-500/20 p-4 text-center hover:border-green-500 hover:bg-green-500/5 transition-all"
                            >
                                <Code className="w-6 h-6 mx-auto mb-2 text-green-500/50" />
                                <span className="text-green-400">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4 text-green-400">
                        {'>'} education.history()
                    </h2>
                    <div className="h-px bg-green-500/30 mb-16" />
                    <div className="space-y-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="bg-black/50 border border-green-500/30 p-6"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <div className="text-green-500/50 text-xs mb-1">// degree</div>
                                        <h3 className="text-2xl font-bold text-green-400">{edu.degree}</h3>
                                        <p className="text-green-400/60">{edu.school}</p>
                                    </div>
                                    <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-mono">
                                        {edu.startDate}-{edu.endDate}
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
                    <h2 className="text-5xl font-bold mb-8 text-green-400">
                        {'>'} connect()
                    </h2>
                    <p className="text-green-400/60 mb-12">Wake up, Neo... Let's build something together.</p>
                    <div className="flex justify-center gap-6">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-green-500/30 hover:border-green-500 hover:bg-green-500/10 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-green-500/40 text-sm relative z-10 border-t border-green-500/10">
                <p>© 2024 {displayData.name} // system.exit(0)</p>
            </footer>
        </div>
    );
}
