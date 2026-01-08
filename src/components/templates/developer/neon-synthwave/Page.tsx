'use client';

import { motion } from 'framer-motion';
import { Sun, Moon, Mail, Github, Linkedin, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Synthwave Dev",
    role: "Creative Developer",
    email: "dev@synthwave.io",
    phone: "+1 555 000 0000",
    location: "Neon City",
    bio: "Riding the digital sunset. Building retro-futuristic experiences for the modern web.",
    skills: ["React", "TypeScript", "Three.js", "WebGL", "Node.js", "Tailwind", "Framer Motion", "Figma"],
    experience: [{ company: "Outrun Studios", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Neon Academy", degree: "Digital Arts & CS", field: "Creative Tech", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Outrun", description: "Retro racing experience", technologies: ["Three.js", "WebGL"] },
        { name: "Neon Dreams", description: "Generative art platform", technologies: ["React", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function NeonSynthwavePage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#0d0221] text-white font-sans overflow-x-hidden">
            {/* Gradient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff00ff]/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#ff6b35]/30 to-transparent" />
                {/* Sun */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-t from-[#ff6b35] via-[#ff00ff] to-[#00ffff] opacity-80 blur-sm" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-t from-[#ff6b35] to-[#ff00ff]" />
                    {/* Horizontal lines through sun */}
                    {[...Array(8)].map((_, i) => (
                        <div key={i} className="absolute w-full h-[2px] bg-[#0d0221]" style={{ top: `${20 + i * 10}%` }} />
                    ))}
                </div>
                {/* Grid floor */}
                <div className="absolute bottom-0 left-0 right-0 h-[40%] overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-60"
                        style={{
                            backgroundImage: `
                                linear-gradient(to bottom, transparent 0%, #ff00ff 100%),
                                linear-gradient(90deg, #ff00ff 1px, transparent 1px),
                                linear-gradient(0deg, #ff00ff 1px, transparent 1px)
                            `,
                            backgroundSize: '100% 100%, 40px 40px, 40px 40px',
                            transform: 'perspective(200px) rotateX(60deg)',
                            transformOrigin: 'top'
                        }}
                    />
                </div>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0d0221]/80 backdrop-blur-md border-b border-[#ff00ff]/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-2xl font-black tracking-tighter">
                        <Sun className="w-6 h-6 text-[#ff6b35]" />
                        <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                            SYNTHWAVE
                        </span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-white/60">
                        {['About', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#ff00ff] transition-colors">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff00ff]/10 border border-[#ff00ff]/30 text-[#ff00ff] text-sm mb-8"
                    >
                        <Zap className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-9xl font-black mb-6 tracking-tighter"
                        style={{
                            textShadow: '0 0 40px rgba(255, 0, 255, 0.5), 0 0 80px rgba(255, 107, 53, 0.3)'
                        }}
                    >
                        <span className="bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#ff6b35] bg-clip-text text-transparent">
                            {displayData.name?.toUpperCase()}
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
                        <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-[#ff00ff] to-[#ff6b35] rounded font-bold hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition-all">
                            Explore Work
                        </a>
                        <a href="#contact" className="px-8 py-4 border-2 border-[#00ffff] text-[#00ffff] rounded font-bold hover:bg-[#00ffff]/10 transition-all">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-black mb-16 text-center">
                        <span className="bg-gradient-to-r from-[#00ffff] to-[#ff00ff] bg-clip-text text-transparent">
                            PROJECTS
                        </span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group bg-[#0d0221]/80 backdrop-blur-sm border-2 border-[#ff00ff]/30 p-8 hover:border-[#00ffff] transition-all hover:shadow-[0_0_30px_rgba(0,255,255,0.2)] ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-[#ff00ff]/20 to-[#00ffff]/20 mb-6 flex items-center justify-center">
                                    <Zap className="w-16 h-16 text-[#ff00ff]/50 group-hover:text-[#00ffff] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#00ffff] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-white/60 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-[#ff00ff]/10 border border-[#ff00ff]/30 text-[#ff00ff] text-sm">
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
                    <h2 className="text-5xl font-black mb-16 text-center">
                        <span className="bg-gradient-to-r from-[#ff6b35] to-[#ff00ff] bg-clip-text text-transparent">
                            SKILLS
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
                                className="px-6 py-3 bg-gradient-to-r from-[#ff00ff]/10 to-[#00ffff]/10 border-2 border-[#ff00ff]/30 font-bold hover:border-[#00ffff] transition-all cursor-default"
                                style={{ textShadow: '0 0 10px rgba(255, 0, 255, 0.5)' }}
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
                    <h2 className="text-5xl font-black mb-16 text-center">
                        <span className="bg-gradient-to-r from-[#00ffff] to-[#ff6b35] bg-clip-text text-transparent">
                            EDUCATION
                        </span>
                    </h2>
                    <div className="space-y-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#0d0221]/80 border-2 border-[#ff00ff]/30 p-8 hover:border-[#ff6b35] transition-all"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                                        <p className="text-[#ff00ff]">{edu.school}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-[#ff6b35]/20 border border-[#ff6b35] text-[#ff6b35] font-mono">
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
                    <h2 className="text-6xl font-black mb-8">
                        <span className="bg-gradient-to-r from-[#ff6b35] via-[#ff00ff] to-[#00ffff] bg-clip-text text-transparent">
                            LET'S CONNECT
                        </span>
                    </h2>
                    <p className="text-white/60 mb-12 text-xl">Ride the synthwave together</p>
                    <div className="flex justify-center gap-6">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border-2 border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff]/10 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35]/10 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-[#ff00ff]/40 text-sm relative z-10 border-t border-[#ff00ff]/10">
                <p>© 2024 {displayData.name} // SYNTHWAVE FOREVER</p>
            </footer>
        </div>
    );
}
