'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Zap, Shield, Cpu } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "V",
    role: "Netrunner // Full Stack Dev",
    email: "v@nightcity.io",
    phone: "+1 555 000 0000",
    location: "Night City",
    bio: "In 2077, what makes someone a criminal? Getting caught. Building the future one line at a time.",
    skills: ["React", "TypeScript", "Python", "Rust", "Blockchain", "AI/ML", "Cybersecurity", "WebGL"],
    experience: [{ company: "Arasaka", position: "Senior Netrunner", startDate: "2075", endDate: "Present", description: "Hacking", highlights: [] }],
    education: [
        { school: "Night City Institute", degree: "Neural Engineering", field: "Cyber Enhancement", startDate: "2070", endDate: "2074" }
    ],
    projects: [
        { name: "Breach Protocol", description: "Network intrusion toolkit", technologies: ["Python", "Rust"] },
        { name: "Quickhack", description: "Real-time code compiler", technologies: ["WebAssembly", "React"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function Cyberpunk2077Page({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#0a0a0f] text-white font-mono overflow-x-hidden">
            {/* Glitch overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.1)_2px,rgba(255,255,255,0.1)_4px)]" />

            {/* Accent lines */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fcee0a] via-[#00f6ff] to-[#ff003c]" />
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff003c] via-[#00f6ff] to-[#fcee0a]" />

            {/* Navigation */}
            <nav className="fixed top-1 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-[#fcee0a]/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Cpu className="w-6 h-6 text-[#00f6ff]" />
                        <span className="text-xl font-bold text-[#fcee0a]">NETRUNNER_V2.077</span>
                    </div>
                    <div className="flex gap-8 text-sm text-[#00f6ff]">
                        {['//ABOUT', '//GIGS', '//SKILLS', '//CONTACT'].map((item) => (
                            <a key={item} href={`#${item.replace('//', '').toLowerCase()}`} className="hover:text-[#fcee0a] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative pt-20">
                <div className="text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#fcee0a]/10 border border-[#fcee0a]/30 text-[#fcee0a] text-sm mb-8"
                    >
                        <Shield className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-9xl font-black mb-6"
                        style={{
                            textShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 40px #00f6ff',
                            WebkitTextStroke: '1px #00f6ff'
                        }}
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[#ff003c] max-w-xl mx-auto mb-12 text-lg"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#gigs" className="px-8 py-4 bg-[#fcee0a] text-black font-bold hover:bg-[#00f6ff] transition-all flex items-center gap-2">
                            <Zap className="w-4 h-4" /> VIEW_GIGS
                        </a>
                        <a href="#contact" className="px-8 py-4 border border-[#00f6ff] text-[#00f6ff] font-bold hover:bg-[#00f6ff]/10 transition-all">
                            JACK_IN
                        </a>
                    </motion.div>
                </div>

                {/* Decorative circuit lines */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <svg className="absolute bottom-0 left-0 w-full h-1/2 opacity-10" viewBox="0 0 100 50">
                        <line x1="0" y1="50" x2="50" y2="25" stroke="#00f6ff" strokeWidth="0.2" />
                        <line x1="50" y1="25" x2="100" y2="50" stroke="#fcee0a" strokeWidth="0.2" />
                        <line x1="25" y1="50" x2="75" y2="0" stroke="#ff003c" strokeWidth="0.2" />
                    </svg>
                </div>
            </section>

            {/* Projects/Gigs */}
            <section id="gigs" className="py-32 px-6 relative z-10 bg-[#0f0f15]">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-[#fcee0a]">
                        {'>'} COMPLETED_GIGS
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="group bg-[#0a0a0f] border border-[#00f6ff]/30 p-6 relative overflow-hidden hover:border-[#fcee0a] transition-colors"
                            >
                                {/* Corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#ff003c]" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#00f6ff]" />

                                <div className="text-xs text-[#00f6ff] mb-2">MISSION_{String(i + 1).padStart(2, '0')}</div>
                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-[#fcee0a] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[#888] mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-2 py-1 bg-[#ff003c]/10 border border-[#ff003c]/30 text-[#ff003c] text-xs">
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
                    <h2 className="text-4xl font-bold mb-16 text-[#00f6ff]">
                        {'>'} INSTALLED_CYBERWARE
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="p-4 bg-[#0f0f15] border border-[#00f6ff]/20 text-center hover:border-[#fcee0a] hover:bg-[#fcee0a]/5 transition-all"
                            >
                                <Cpu className="w-6 h-6 mx-auto mb-2 text-[#00f6ff]" />
                                <span className="text-sm">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10 bg-[#0f0f15]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-[#ff003c]">
                        {'>'} NEURAL_TRAINING
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border border-[#ff003c]/30 p-6 relative"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff003c] to-transparent" />
                            <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                            <p className="text-[#00f6ff]">{edu.school}</p>
                            <p className="text-[#888] text-sm mt-2">{edu.startDate} - {edu.endDate}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8 text-[#fcee0a]" style={{ textShadow: '0 0 20px #fcee0a' }}>
                        JACK_IN
                    </h2>
                    <p className="text-[#888] mb-12 text-lg">Ready to flatline the competition?</p>
                    <div className="flex justify-center gap-4">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-[#fcee0a] text-[#fcee0a] hover:bg-[#fcee0a] hover:text-black transition-all">
                                <Mail className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-[#00f6ff] text-[#00f6ff] hover:bg-[#00f6ff] hover:text-black transition-all">
                                <Github className="w-6 h-6" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-[#ff003c] text-[#ff003c] hover:bg-[#ff003c] hover:text-black transition-all">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-[#888] text-sm relative z-10 border-t border-[#00f6ff]/10">
                <p>© 2077 {displayData.name} // NIGHT CITY NEVER SLEEPS</p>
            </footer>
        </div>
    );
}
