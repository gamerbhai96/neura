'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Sparkles, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Aurora Dev",
    role: "Creative Developer",
    email: "dev@aurora.io",
    phone: "+1 555 000 0000",
    location: "Northern Lights",
    bio: "Creating magical experiences inspired by nature's most beautiful phenomenon.",
    skills: ["React", "Next.js", "TypeScript", "Three.js", "WebGL", "Tailwind", "Node.js", "Python"],
    experience: [{ company: "Aurora Labs", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Tech University", degree: "MS Computer Science", field: "CS", startDate: "2018", endDate: "2020" }
    ],
    projects: [
        { name: "Northern Lights", description: "Interactive aurora visualization", technologies: ["Three.js", "WebGL"] },
        { name: "Polar Dashboard", description: "Analytics platform", technologies: ["React", "D3.js"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function AuroraBorealisPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let time = 0;
        const colors = ['#00ff87', '#60efff', '#ff00ff', '#7b2ff7'];

        const animate = () => {
            time += 0.005;
            ctx.fillStyle = 'rgba(0, 10, 20, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(0, canvas.height * 0.3);

                for (let x = 0; x <= canvas.width; x += 10) {
                    const y = canvas.height * 0.3 +
                        Math.sin(x * 0.01 + time + i) * 50 +
                        Math.sin(x * 0.02 + time * 1.5 + i) * 30;
                    ctx.lineTo(x, y);
                }

                ctx.lineTo(canvas.width, 0);
                ctx.lineTo(0, 0);
                ctx.closePath();

                const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
                gradient.addColorStop(0, colors[i % colors.length] + '40');
                gradient.addColorStop(0.5, colors[(i + 1) % colors.length] + '60');
                gradient.addColorStop(1, colors[(i + 2) % colors.length] + '40');
                ctx.fillStyle = gradient;
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-[#000a14] text-white font-sans overflow-x-hidden">
            <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-70" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <Sparkles className="w-6 h-6 text-emerald-400" />
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            {displayData.name}
                        </span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-white/60">
                        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-emerald-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-8"
                    >
                        <Sparkles className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black mb-6 leading-tight"
                    >
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {displayData.name}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/60 max-w-2xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-bold hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] transition-all">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                            Featured Projects
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-emerald-500/30 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-xl mb-6 flex items-center justify-center">
                                    <Sparkles className="w-12 h-12 text-emerald-400/50 group-hover:text-emerald-400 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-white/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs">
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
                    <h2 className="text-4xl font-bold mb-16 text-center">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Skills & Technologies
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
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-white/10 rounded-full font-medium hover:border-emerald-500/30 transition-all cursor-default"
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
                        <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
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
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                        <p className="text-white/60">{edu.school}</p>
                                        {edu.field && <p className="text-purple-400 text-sm mt-1">{edu.field}</p>}
                                    </div>
                                    <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm">
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
                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            Let's Connect
                        </span>
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                        Ready to create something magical together?
                    </p>
                    <div className="flex justify-center gap-6">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/40 text-sm relative z-10 border-t border-white/5">
                <p>© 2024 {displayData.name}. Inspired by the Aurora Borealis.</p>
            </footer>
        </div>
    );
}
