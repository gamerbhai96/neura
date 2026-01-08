'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Star, Sparkles, Zap } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Memphis Dev",
    role: "Creative Developer",
    email: "dev@memphis.io",
    phone: "+1 555 000 0000",
    location: "Memphis, TN",
    bio: "Bold, geometric, and unapologetically fun. Breaking design rules since the 80s.",
    skills: ["React", "JavaScript", "CSS", "Animation", "Creative Coding", "UI Design", "Illustration", "Branding"],
    experience: [{ company: "Design Co", position: "Creative Lead", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Art School", degree: "BFA Graphic Design", field: "Visual Design", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Squiggle", description: "Pattern generation tool", technologies: ["Canvas", "JavaScript"] },
        { name: "Dotty", description: "Geometric design app", technologies: ["React", "SVG"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function MemphisDesignPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a855f7', '#ff9f43'];

    return (
        <div className="min-h-screen bg-[#fef3c7] text-black font-sans overflow-x-hidden">
            {/* Decorative shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Squiggles and dots */}
                <svg className="absolute top-20 left-10 w-32 h-32 text-[#ff6b6b]" viewBox="0 0 100 100">
                    <path d="M10,50 Q25,20 40,50 T70,50 T100,50" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <svg className="absolute top-40 right-20 w-24 h-24 text-[#4ecdc4]" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="5" fill="currentColor" />
                    <circle cx="30" cy="30" r="5" fill="currentColor" />
                    <circle cx="70" cy="70" r="5" fill="currentColor" />
                </svg>
                <div className="absolute bottom-20 left-20 w-16 h-16 bg-[#ffe66d] rotate-45" />
                <div className="absolute top-1/2 right-10 w-20 h-20 border-4 border-[#a855f7] rounded-full" />
                <svg className="absolute bottom-40 right-1/4 w-40 h-40 text-[#ff9f43]" viewBox="0 0 100 100">
                    <path d="M10,80 Q30,20 50,80 T90,80" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-[#ff6b6b]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#fef3c7]/90 backdrop-blur-sm border-b-4 border-black">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-black flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#ff6b6b] rounded-full" />
                        <div className="w-4 h-4 bg-[#4ecdc4]" />
                        <div className="w-4 h-4 bg-[#ffe66d]" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
                        <span className="ml-2">MEMPHIS</span>
                    </div>
                    <div className="flex gap-8 text-sm font-bold uppercase">
                        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#ff6b6b] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff6b6b] text-white font-bold mb-8 rotate-[-2deg]"
                    >
                        <Sparkles className="w-5 h-5" />
                        {displayData.role?.toUpperCase()}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-9xl font-black mb-8"
                        style={{ textShadow: '6px 6px 0 #4ecdc4, 12px 12px 0 #ffe66d' }}
                    >
                        {displayData.name?.toUpperCase()}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl max-w-lg mx-auto mb-12 font-medium"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#work" className="px-8 py-4 bg-black text-white font-bold hover:bg-[#a855f7] transition-all transform hover:rotate-2">
                            SEE MY WORK!
                        </a>
                        <a href="#contact" className="px-8 py-4 border-4 border-black font-bold hover:bg-[#ffe66d] transition-all transform hover:-rotate-2">
                            SAY HI!
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Work */}
            <section id="work" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-black mb-16 text-center" style={{ textShadow: '4px 4px 0 #ff6b6b' }}>
                        MY WORK!
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotate: -2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? 2 : -2 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className={`bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_black] ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video mb-6 flex items-center justify-center" style={{ backgroundColor: colors[i % colors.length] }}>
                                    <Star className="w-16 h-16 text-white" />
                                </div>
                                <h3 className="text-3xl font-black mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 font-bold text-sm" style={{ backgroundColor: colors[(i + j) % colors.length], color: 'white' }}>
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
            <section id="skills" className="py-32 px-6 bg-[#4ecdc4] relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-5xl font-black mb-16 text-center text-white" style={{ textShadow: '4px 4px 0 #ffe66d' }}>
                        SKILLS!
                    </h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
                                className="px-6 py-3 bg-white border-4 border-black font-black shadow-[4px_4px_0_0_black]"
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
                    <h2 className="text-5xl font-black mb-16 text-center" style={{ textShadow: '4px 4px 0 #a855f7' }}>
                        EDUCATION!
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#a855f7] text-white p-8 border-4 border-black shadow-[8px_8px_0_0_black] rotate-1"
                        >
                            <h3 className="text-3xl font-black mb-2">{edu.degree}</h3>
                            <p className="text-white/80 font-bold">{edu.school}</p>
                            <p className="text-white/60 mt-2">{edu.startDate} - {edu.endDate}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-[#ff6b6b] relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-black mb-8 text-white" style={{ textShadow: '4px 4px 0 #ffe66d' }}>
                        LET'S TALK!
                    </h2>
                    <p className="text-white/80 mb-12 text-xl font-bold">Ready to make something fun?</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 bg-white border-4 border-black shadow-[4px_4px_0_0_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 bg-[#ffe66d] border-4 border-black shadow-[4px_4px_0_0_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 bg-[#4ecdc4] border-4 border-black shadow-[4px_4px_0_0_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center font-bold border-t-4 border-black relative z-10">
                <p>© 2024 {displayData.name} ★ MADE WITH FUN!</p>
            </footer>
        </div>
    );
}
