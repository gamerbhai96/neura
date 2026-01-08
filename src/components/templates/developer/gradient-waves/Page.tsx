'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Waves, Anchor, Shell, Sun } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Wave Dev",
    role: "Web Developer",
    email: "dev@ocean.io",
    phone: "+1 555 000 0000",
    location: "Coastal City",
    bio: "Riding the waves of modern web development.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "GraphQL", "AWS"],
    experience: [{ company: "Ocean Studios", position: "Senior Dev", startDate: "2020", endDate: "Present", description: "Building fluid web experiences", highlights: [] }],
    education: [
        { school: "Coastal University", degree: "BS Computer Science", field: "CS", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Tidal", description: "Real-time dashboard framework", technologies: ["React", "WebSockets"] },
        { name: "Current", description: "Data streaming platform", technologies: ["Node.js", "Kafka"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Animated wave SVG
const OceanWave = ({ color, y, duration, delay = 0 }: { color: string; y: string; duration: number; delay?: number }) => (
    <motion.div
        className="absolute left-0 right-0 pointer-events-none"
        style={{ bottom: y }}
        animate={{ x: ['-50%', '0%'] }}
        transition={{ duration, repeat: Infinity, ease: "linear", delay }}
    >
        <svg viewBox="0 0 2400 100" className="w-[200%] h-16" preserveAspectRatio="none">
            <path
                d={`M0,50 
                    Q150,10 300,50 T600,50 T900,50 T1200,50 T1500,50 T1800,50 T2100,50 T2400,50
                    L2400,100 L0,100 Z`}
                fill={color}
            />
        </svg>
    </motion.div>
);

// Beach hut style card
const BeachCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        {/* Wooden texture */}
        <div
            className="bg-amber-900/90 rounded-lg overflow-hidden border-4 border-amber-800"
            style={{
                boxShadow: '0 10px 40px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.1)'
            }}
        >
            {/* Horizontal wood planks */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <div key={i} className="border-b border-black/20" style={{ height: '10%' }} />
                ))}
            </div>
            <div className="relative z-10 p-6">{children}</div>
        </div>
    </div>
);

// Floating beach elements
const BeachElements = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Sun */}
        <motion.div
            className="absolute top-20 right-[15%] w-24 h-24 rounded-full"
            style={{
                background: 'radial-gradient(circle, #fcd34d 0%, #f59e0b 70%, #f59e0b00 100%)',
                boxShadow: '0 0 60px rgba(251, 191, 36, 0.5)'
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
        />

        {/* Beach ball */}
        <motion.div
            className="absolute top-1/3 left-[8%] w-16 h-16 rounded-full overflow-hidden"
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            <div className="absolute inset-0" style={{
                background: 'conic-gradient(from 0deg, #ef4444, #fbbf24, #22c55e, #3b82f6, #a855f7, #ef4444)'
            }} />
            <div className="absolute inset-2 rounded-full bg-white/30" />
        </motion.div>

        {/* Seagull */}
        <motion.div
            className="absolute top-[15%] left-[30%] text-zinc-700/60"
            animate={{ x: [0, 50, 0], y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
        >
            <svg width="30" height="12" viewBox="0 0 30 12">
                <path d="M0,12 Q7,0 15,6 Q23,0 30,12" stroke="currentColor" fill="none" strokeWidth="2" />
            </svg>
        </motion.div>
    </div>
);

// Palm tree
const PalmTree = ({ x, flip = false }: { x: string; flip?: boolean }) => (
    <div
        className="absolute bottom-40 pointer-events-none"
        style={{ left: x, transform: flip ? 'scaleX(-1)' : 'none' }}
    >
        {/* Trunk */}
        <div className="w-4 h-32 mx-auto rounded" style={{
            background: 'linear-gradient(90deg, #92400e, #78350f, #92400e)',
        }}>
            {/* Trunk segments */}
            {[...Array(8)].map((_, i) => (
                <div key={i} className="w-full h-4 border-b border-amber-950/30" />
            ))}
        </div>
        {/* Leaves */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            {[-60, -30, 0, 30, 60].map((angle, i) => (
                <motion.div
                    key={i}
                    className="absolute origin-bottom"
                    style={{
                        width: 80,
                        height: 8,
                        background: 'linear-gradient(90deg, #15803d, #22c55e)',
                        borderRadius: '50%',
                        transform: `rotate(${angle}deg)`,
                        left: -40
                    }}
                    animate={{ rotate: [angle - 3, angle + 3, angle - 3] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                />
            ))}
        </div>
    </div>
);

// Surfboard
const Surfboard = ({ x, color, rotation }: { x: string; color: string; rotation: number }) => (
    <motion.div
        className="absolute bottom-28 pointer-events-none"
        style={{ left: x }}
        animate={{ rotate: [rotation - 2, rotation + 2, rotation - 2] }}
        transition={{ duration: 3, repeat: Infinity }}
    >
        <div
            className="w-4 h-24 rounded-full"
            style={{
                background: color,
                boxShadow: '2px 0 0 rgba(0,0,0,0.2)'
            }}
        />
        {/* Stripe */}
        <div
            className="absolute top-1/3 left-0 right-0 h-8 rounded"
            style={{ background: 'rgba(255,255,255,0.3)' }}
        />
    </motion.div>
);

export default function GradientWavesPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden" style={{
            background: 'linear-gradient(180deg, #0ea5e9 0%, #38bdf8 30%, #7dd3fc 60%, #bae6fd 100%)'
        }}>
            {/* Beach elements */}
            <BeachElements />

            {/* Palm trees */}
            <PalmTree x="5%" />
            <PalmTree x="90%" flip />

            {/* Surfboards */}
            <Surfboard x="15%" color="#ef4444" rotation={-15} />
            <Surfboard x="82%" color="#fbbf24" rotation={10} />
            <Surfboard x="88%" color="#22c55e" rotation={-8} />

            {/* Ocean waves */}
            <div className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none">
                <OceanWave color="#0284c7" y="80px" duration={8} />
                <OceanWave color="#0369a1" y="50px" duration={10} delay={1} />
                <OceanWave color="#075985" y="20px" duration={12} delay={2} />
                <OceanWave color="#0c4a6e" y="0px" duration={14} delay={3} />
            </div>

            {/* Sand */}
            <div
                className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{ background: 'linear-gradient(0deg, #fbbf24, #fcd34d)' }}
            />

            {/* Navigation - Beach bar style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <BeachCard>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Anchor className="w-7 h-7 text-amber-300" />
                                <span className="text-xl font-bold text-amber-200 tracking-wider">WAVE</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-amber-200/80">
                                {['Shore', 'Sail', 'Dive', 'Dock'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-100 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </BeachCard>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-40 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-8"
                        >
                            <Sun className="w-5 h-5 text-amber-300" />
                            <span className="text-white font-medium">{displayData.role}</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-lg">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-white/80 max-w-xl mx-auto mb-12 drop-shadow">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#dive"
                                className="px-8 py-4 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-400 transition-all shadow-lg"
                            >
                                Dive In
                            </a>
                            <a
                                href="#dock"
                                className="px-8 py-4 bg-white/20 backdrop-blur-sm rounded-full font-bold text-white hover:bg-white/30 transition-all"
                            >
                                Get In Touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="shore" className="py-32 px-6 relative z-20 bg-gradient-to-b from-sky-700 to-sky-800">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <BeachCard>
                            <div className="flex items-center gap-4 mb-6">
                                <Shell className="w-8 h-8 text-amber-300" />
                                <h2 className="text-2xl font-bold text-amber-200">About Me</h2>
                            </div>
                            <p className="text-amber-100/80 leading-relaxed text-lg">
                                Like the ocean's waves, technology never stops evolving, and neither do I.
                                I ride the currents of modern web development, crafting experiences that flow
                                as naturally as the tide. Every project is a new adventure, every challenge
                                a wave to conquer. Currently catching waves from {displayData.location}. 🌊
                            </p>
                        </BeachCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="sail" className="py-32 px-6 relative z-20 bg-sky-800">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-amber-300"
                    >
                        My Toolkit
                    </motion.h2>
                    <p className="text-center text-sky-200/60 mb-16">Technologies I ride daily</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <BeachCard className="text-center cursor-pointer">
                                    <Waves className="w-8 h-8 text-amber-300 mx-auto mb-3" />
                                    <span className="font-bold text-amber-100">{skill}</span>
                                </BeachCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="dive" className="py-32 px-6 relative z-20 bg-gradient-to-b from-sky-800 to-sky-900">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-300"
                    >
                        Featured Projects
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={project.url || project.github ? 'cursor-pointer' : ''}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <BeachCard className="group h-full">
                                    {/* Wave preview */}
                                    <div className="h-32 bg-sky-600 rounded-lg mb-6 overflow-hidden relative">
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0"
                                            animate={{ x: ['-50%', '0%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        >
                                            <svg viewBox="0 0 400 50" className="w-[200%] h-12" preserveAspectRatio="none">
                                                <path d="M0,25 Q50,10 100,25 T200,25 T300,25 T400,25 L400,50 L0,50 Z" fill="#0284c7" />
                                            </svg>
                                        </motion.div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-amber-200 mb-3 group-hover:text-amber-100 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-amber-100/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-amber-300 bg-amber-500/20 rounded border border-amber-500/30">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </BeachCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6 relative z-20 bg-sky-900">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-300"
                    >
                        Experience
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <BeachCard>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-amber-200">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-sky-600 text-sky-100 rounded-full text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-amber-100/60">{exp.description}</p>
                            </BeachCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-20 bg-gradient-to-b from-sky-900 to-sky-950">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-300"
                    >
                        Education
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <BeachCard>
                                    <Anchor className="w-8 h-8 text-amber-300 mb-4" />
                                    <h3 className="text-lg font-bold text-amber-200 mb-1">{edu.degree}</h3>
                                    <p className="text-amber-400">{edu.school}</p>
                                    <p className="text-sm text-amber-100/50">{edu.startDate} - {edu.endDate}</p>
                                </BeachCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="dock" className="py-32 px-6 relative z-20 bg-sky-950">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <BeachCard>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Waves className="w-16 h-16 text-amber-300 mx-auto mb-8" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 text-amber-200">Let's Connect</h2>
                            <p className="text-amber-100/60 mb-8">
                                Ready to make waves together?
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
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="p-4 bg-sky-700 rounded-xl border border-amber-500/30"
                                    >
                                        <Icon className="w-6 h-6 text-amber-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </BeachCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
