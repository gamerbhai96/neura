'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "夜行者",
    role: "Full Stack Developer",
    email: "dev@neon.tokyo",
    phone: "+81 555 000 0000",
    location: "Shibuya, Tokyo",
    bio: "Lost in the neon glow of endless possibilities. Coding through the night in the city that never sleeps.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "Redis", "Docker", "AWS", "GraphQL"],
    experience: [{ company: "Neon Corp", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Building the future, one line at a time", highlights: [] }],
    education: [
        { school: "Tokyo Tech", degree: "BS Computer Science", field: "CS", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "夢", description: "Dream tracking application", technologies: ["React", "Node.js"] },
        { name: "光", description: "Real-time lighting control system", technologies: ["WebSocket", "IoT"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Japanese neon sign text
const NeonText = ({ children, color }: { children: string; color: string }) => (
    <motion.span
        animate={{
            textShadow: [
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
                `0 0 20px ${color}, 0 0 40px ${color}, 0 0 60px ${color}`,
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 40px ${color}`,
            ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color }}
    >
        {children}
    </motion.span>
);

// Rain drop component
const RainDrop = ({ x, delay }: { x: number; delay: number }) => (
    <motion.div
        className="absolute w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        style={{ left: `${x}%`, height: '100px' }}
        initial={{ top: '-100px' }}
        animate={{ top: '110%' }}
        transition={{ duration: 1 + Math.random(), repeat: Infinity, delay, ease: "linear" }}
    />
);

export default function NeonTokyoPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* City background gradient */}
            <div className="fixed inset-0 bg-gradient-to-t from-slate-950 via-slate-900 to-purple-950/50" />

            {/* Rain effect */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(30)].map((_, i) => (
                    <RainDrop key={i} x={i * 3.3 + Math.random() * 2} delay={Math.random() * 2} />
                ))}
            </div>

            {/* Neon reflections on ground */}
            <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" style={{ left: '50%' }} />
            </div>

            {/* Navigation - Japanese signage style */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-sm border-b border-pink-500/20">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <motion.div
                        className="flex items-center gap-3"
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <span className="text-3xl">🍜</span>
                        <div className="flex flex-col">
                            <span className="text-xs text-pink-400 tracking-widest">NEON TOKYO</span>
                            <span className="text-xl font-bold text-cyan-400">ネオン東京</span>
                        </div>
                    </motion.div>
                    <div className="flex gap-6 text-sm">
                        {[
                            { en: 'About', jp: '約' },
                            { en: 'Work', jp: '仕事' },
                            { en: 'Skills', jp: '技' },
                            { en: 'Contact', jp: '連絡' }
                        ].map((item) => (
                            <a key={item.en} href={`#${item.en.toLowerCase()}`} className="group flex flex-col items-center hover:text-pink-400 transition-colors">
                                <span className="text-zinc-400 group-hover:text-pink-400">{item.en}</span>
                                <span className="text-xs text-cyan-500">{item.jp}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero - Neon signage */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                {/* Vertical Japanese text decorations */}
                <div className="absolute left-8 top-1/4 bottom-1/4 flex flex-col text-pink-500/20 text-4xl font-bold" style={{ writingMode: 'vertical-rl' }}>
                    プログラマー・開発者・夢追人
                </div>
                <div className="absolute right-8 top-1/3 bottom-1/3 flex flex-col text-cyan-500/20 text-3xl font-bold" style={{ writingMode: 'vertical-rl' }}>
                    東京の夜に消えない光
                </div>

                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Neon sign frame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative inline-block p-12"
                    >
                        {/* Corner brackets */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-pink-500" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-pink-400 text-sm tracking-[0.5em] uppercase mb-4"
                        >
                            {displayData.role}
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black mb-4"
                        >
                            <NeonText color="#f472b6">{displayData.name}</NeonText>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl text-cyan-400 mb-8"
                            style={{ fontFamily: 'serif' }}
                        >
                            夜行者
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-zinc-400 max-w-xl mx-auto"
                        >
                            {displayData.bio}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-4 mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(244,114,182,0.5)' }}
                            className="px-8 py-4 bg-transparent border-2 border-pink-500 text-pink-400 font-bold tracking-wider relative overflow-hidden group"
                        >
                            <span className="relative z-10">ENTER 入る</span>
                            <div className="absolute inset-0 bg-pink-500 transform -translate-x-full group-hover:translate-x-0 transition-transform" />
                            <span className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity z-20">ENTER 入る</span>
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* About - Japanese room style */}
            <section id="about" className="py-32 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Sliding door frame decoration */}
                        <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 via-transparent to-cyan-500" />
                        <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-transparent to-pink-500" />

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-pink-500/20 p-12">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="text-4xl">🏮</span>
                                <div>
                                    <h2 className="text-3xl font-bold text-pink-400">About</h2>
                                    <span className="text-cyan-400 text-xl">自己紹介</span>
                                </div>
                            </div>
                            <p className="text-zinc-400 leading-relaxed text-lg">
                                In the labyrinth of Tokyo's neon-lit streets, where the old world meets the new,
                                I craft digital experiences that pulse with the city's energy. Like the ever-changing
                                billboards of Shibuya, my work blends tradition with innovation. Currently navigating
                                the digital landscape from {displayData.location}.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Vending machine style */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-pink-400 mb-2">Skills</h2>
                        <span className="text-cyan-400 text-2xl">技術スタック</span>
                    </motion.div>

                    {/* Vending machine grid */}
                    <div className="bg-slate-900 border-4 border-cyan-500/30 p-8 rounded-lg">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {displayData.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${i % 2 === 0 ? 'rgba(244,114,182,0.5)' : 'rgba(34,211,238,0.5)'}` }}
                                    className={`p-4 border-2 ${i % 2 === 0 ? 'border-pink-500/50 bg-pink-500/10' : 'border-cyan-500/50 bg-cyan-500/10'} text-center cursor-pointer`}
                                >
                                    <div className="text-sm text-zinc-500 mb-1">A{i + 1}</div>
                                    <div className={`font-bold ${i % 2 === 0 ? 'text-pink-400' : 'text-cyan-400'}`}>{skill}</div>
                                    <div className="text-xs text-zinc-600 mt-1">¥500</div>
                                </motion.div>
                            ))}
                        </div>
                        {/* Slot */}
                        <div className="mt-6 mx-auto w-48 h-8 bg-slate-800 rounded border border-cyan-500/30 flex items-center justify-center">
                            <span className="text-xs text-cyan-500/50">取り出し口</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="work" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-cyan-400 mb-2">Projects</h2>
                        <span className="text-pink-400 text-2xl">プロジェクト</span>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group relative overflow-hidden border-2 ${i % 2 === 0 ? 'border-pink-500/30' : 'border-cyan-500/30'} bg-slate-900/50 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Neon glow on hover */}
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${i % 2 === 0 ? 'bg-pink-500/10' : 'bg-cyan-500/10'}`} />

                                <div className="aspect-video relative flex items-center justify-center bg-slate-800">
                                    <span className="text-6xl">{i % 2 === 0 ? '🌸' : '⚡'}</span>
                                </div>

                                <div className="p-6 relative">
                                    <h3 className={`text-2xl font-bold mb-2 ${i % 2 === 0 ? 'text-pink-400' : 'text-cyan-400'} group-hover:animate-pulse`}>
                                        {project.name}
                                    </h3>
                                    <p className="text-zinc-500 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className={`px-3 py-1 text-sm border ${i % 2 === 0 ? 'border-pink-500/30 text-pink-400' : 'border-cyan-500/30 text-cyan-400'}`}>
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
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-pink-400 mb-2">Experience</h2>
                        <span className="text-cyan-400 text-2xl">経歴</span>
                    </motion.div>

                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 pb-8 border-l-2 border-pink-500/30"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-pink-500 rounded-full" style={{ boxShadow: '0 0 10px rgba(244,114,182,0.8)' }} />
                            <div className="bg-slate-900/50 border border-pink-500/20 p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-pink-400">{exp.position}</h3>
                                    <span className="text-sm text-cyan-400">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-pink-300 mb-2">{exp.company}</p>
                                <p className="text-zinc-500">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-cyan-400 mb-2">Education</h2>
                        <span className="text-pink-400 text-2xl">学歴</span>
                    </motion.div>

                    <div className="grid gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-900/50 border border-cyan-500/20 p-6"
                            >
                                <h3 className="text-lg font-bold text-cyan-400 mb-1">{edu.degree}</h3>
                                <p className="text-pink-400">{edu.school}</p>
                                <p className="text-sm text-zinc-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-6xl mb-8 block">📱</span>
                        <h2 className="text-4xl font-bold mb-2">
                            <NeonText color="#f472b6">Contact</NeonText>
                        </h2>
                        <span className="text-cyan-400 text-2xl block mb-8">連絡先</span>
                        <p className="text-zinc-500 mb-12">
                            Let's connect in the digital realm
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}` },
                                { icon: Github, href: displayData.links.github },
                                { icon: Linkedin, href: displayData.links.linkedin }
                            ].map(({ icon: Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, boxShadow: i % 2 === 0 ? '0 0 20px rgba(244,114,182,0.8)' : '0 0 20px rgba(34,211,238,0.8)' }}
                                    className={`p-4 border-2 ${i % 2 === 0 ? 'border-pink-500 text-pink-400' : 'border-cyan-500 text-cyan-400'}`}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
