'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Waves } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Wave Dev",
    role: "Frontend Developer",
    email: "dev@waves.io",
    phone: "+1 555 000 0000",
    location: "Ocean View",
    bio: "Riding the waves of modern web development. Creating fluid, dynamic experiences.",
    skills: ["React", "TypeScript", "CSS", "Animation", "Three.js", "Framer Motion", "Next.js", "Tailwind"],
    experience: [{ company: "Wave Labs", position: "Senior Developer", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Tech University", degree: "BS Computer Science", field: "Web Development", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Tide", description: "Flow-based design tool", technologies: ["React", "Canvas"] },
        { name: "Current", description: "Real-time data streams", technologies: ["WebSocket", "D3.js"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function GradientWavesPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#667eea] via-[#764ba2] to-[#f093fb] text-white font-sans overflow-x-hidden">
            {/* Animated wave layers */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <svg className="absolute bottom-0 w-full h-64 opacity-30" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <motion.path
                        animate={{
                            d: [
                                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,202.7C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,197.3C672,203,768,181,864,165.3C960,149,1056,139,1152,154.7C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ]
                        }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        fill="rgba(255,255,255,0.1)"
                    />
                </svg>
                <svg className="absolute bottom-0 w-full h-48 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
                    <motion.path
                        animate={{
                            d: [
                                "M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,186.7C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                                "M0,224L48,218.7C96,213,192,203,288,218.7C384,235,480,277,576,272C672,267,768,213,864,181.3C960,149,1056,139,1152,160C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            ]
                        }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        fill="rgba(255,255,255,0.15)"
                    />
                </svg>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold">
                        <Waves className="w-6 h-6" />
                        <span>WAVES</span>
                    </div>
                    <div className="flex gap-8 text-sm text-white/80">
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
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm mb-8"
                    >
                        <Waves className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-bold mb-6"
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 max-w-xl mx-auto mb-12"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#projects" className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:bg-white/90 transition-all">
                            View Projects
                        </a>
                        <a href="#contact" className="px-8 py-4 bg-white/10 border border-white/30 rounded-full font-bold hover:bg-white/20 transition-all">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20 p-8 hover:bg-white/20 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl mb-6 flex items-center justify-center">
                                    <Waves className="w-16 h-16 text-white/30 group-hover:text-white/50 transition-colors" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-white/70 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">
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
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-white/10 backdrop-blur rounded-full border border-white/20 hover:bg-white/20 transition-all"
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
                    <h2 className="text-4xl font-bold mb-16 text-center">Education</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur rounded-2xl border border-white/20 p-8"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                                    <p className="text-white/70">{edu.school}</p>
                                </div>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm border border-white/20">
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
                    <h2 className="text-5xl font-bold mb-8">Let's Connect</h2>
                    <p className="text-white/70 mb-12">Ride the wave together</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-white/60 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Flowing with creativity.</p>
            </footer>
        </div>
    );
}
