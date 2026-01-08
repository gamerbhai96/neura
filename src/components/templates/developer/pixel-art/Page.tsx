'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Gamepad2, Heart, Star } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Pixel Dev",
    role: "Game Developer",
    email: "dev@pixel.io",
    phone: "+1 555 000 0000",
    location: "8-Bit World",
    bio: "PRESS START! Building digital worlds one pixel at a time. Retro vibes, modern code.",
    skills: ["React", "TypeScript", "Unity", "Godot", "Pixel Art", "Game Design", "WebGL", "Canvas"],
    experience: [{ company: "Pixel Studios", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Game Academy", degree: "BS Game Development", field: "Interactive Media", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Dungeon Quest", description: "Roguelike adventure game", technologies: ["Unity", "C#"] },
        { name: "Retro Runner", description: "Endless runner game", technologies: ["JavaScript", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function PixelArtPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#1a1c2c] text-white overflow-x-hidden" style={{ fontFamily: '"Press Start 2P", monospace' }}>
            {/* Load pixel font */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
                .pixel-border {
                    box-shadow: 
                        4px 0 0 0 #5a6988,
                        -4px 0 0 0 #5a6988,
                        0 4px 0 0 #5a6988,
                        0 -4px 0 0 #5a6988;
                }
            `}</style>

            {/* Scanlines */}
            <div className="fixed inset-0 pointer-events-none opacity-10 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#1a1c2c]/95 border-b-4 border-[#5a6988]">
                <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-[#f4f4f4]">
                        <Gamepad2 className="w-6 h-6 text-[#3b5dc9]" />
                        <span className="text-xs">PIXEL_DEV</span>
                    </div>
                    <div className="flex gap-6 text-[8px] text-[#5a6988]">
                        {['ABOUT', 'QUESTS', 'STATS', 'CONTACT'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#f4f4f4] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mb-8"
                    >
                        <div className="inline-block px-4 py-2 bg-[#3b5dc9] text-[8px] pixel-border">
                            {displayData.role?.toUpperCase()}
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl md:text-5xl mb-8 text-[#f4f4f4]"
                    >
                        {displayData.name?.toUpperCase()}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-2 mb-8"
                    >
                        {[...Array(3)].map((_, i) => (
                            <Heart key={i} className="w-6 h-6 text-[#b13e53]" fill="#b13e53" />
                        ))}
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-[10px] text-[#5a6988] max-w-md mx-auto mb-12 leading-loose"
                    >
                        {displayData.bio}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-4"
                    >
                        <a href="#quests" className="px-6 py-3 bg-[#38b764] text-[8px] pixel-border hover:bg-[#257953] transition-colors">
                            &gt; VIEW QUESTS
                        </a>
                        <a href="#contact" className="px-6 py-3 bg-[#b13e53] text-[8px] pixel-border hover:bg-[#73172d] transition-colors">
                            &gt; CONTACT
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Projects/Quests */}
            <section id="quests" className="py-32 px-6 relative z-10 bg-[#2a2d3a]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl text-center mb-16 text-[#f4f4f4]">ACTIVE QUESTS</h2>
                    <div className="space-y-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`bg-[#1a1c2c] p-6 pixel-border ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-[#3b5dc9] flex items-center justify-center pixel-border">
                                        <Star className="w-6 h-6 text-[#ffcd75]" fill="#ffcd75" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-sm text-[#f4f4f4] mb-2">
                                            {project.name?.toUpperCase()}
                                        </h3>
                                        <p className="text-[8px] text-[#5a6988] mb-4 leading-loose">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech, j) => (
                                                <span key={j} className="px-2 py-1 bg-[#41a6f6] text-[6px]">
                                                    {tech.toUpperCase()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills/Stats */}
            <section id="stats" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl text-center mb-16 text-[#f4f4f4]">PLAYER STATS</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-[#2a2d3a] p-4 pixel-border text-center"
                            >
                                <div className="text-[8px] text-[#5a6988] mb-2">LVL 99</div>
                                <div className="text-[8px] text-[#f4f4f4]">{skill.toUpperCase()}</div>
                                <div className="mt-2 h-2 bg-[#1a1c2c] relative">
                                    <div className="absolute inset-y-0 left-0 bg-[#38b764]" style={{ width: `${80 + Math.random() * 20}%` }} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10 bg-[#2a2d3a]">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-xl text-center mb-16 text-[#f4f4f4]">TRAINING GROUNDS</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#1a1c2c] p-6 pixel-border"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-4">
                                <div>
                                    <h3 className="text-sm text-[#f4f4f4] mb-2">{edu.degree?.toUpperCase()}</h3>
                                    <p className="text-[8px] text-[#41a6f6]">{edu.school?.toUpperCase()}</p>
                                </div>
                                <span className="px-3 py-1 bg-[#3b5dc9] text-[6px]">
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
                    <div className="bg-[#2a2d3a] p-12 pixel-border inline-block">
                        <h2 className="text-xl mb-8 text-[#f4f4f4]">JOIN PARTY?</h2>
                        <p className="text-[8px] text-[#5a6988] mb-8">PRESS A BUTTON TO CONNECT</p>
                        <div className="flex justify-center gap-4">
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-4 bg-[#b13e53] pixel-border hover:bg-[#73172d] transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-4 bg-[#3b5dc9] pixel-border hover:bg-[#2a4db9] transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-4 bg-[#38b764] pixel-border hover:bg-[#257953] transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-[6px] text-[#5a6988] border-t-4 border-[#5a6988]">
                <p>© 2024 {displayData.name?.toUpperCase()} ★ GAME OVER? NEVER!</p>
            </footer>
        </div>
    );
}
