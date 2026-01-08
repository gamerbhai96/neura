'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Layers, Mountain, Eye, MapPin } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Vista Dev",
    role: "Frontend Architect",
    email: "dev@parallax.io",
    phone: "+1 555 000 0000",
    location: "Mountain View",
    bio: "Creating layered experiences with depth and perspective.",
    skills: ["React", "TypeScript", "WebGL", "Three.js", "GSAP", "Framer Motion", "CSS", "Canvas"],
    experience: [{ company: "Depth Labs", position: "Senior Engineer", startDate: "2020", endDate: "Present", description: "Building immersive experiences", highlights: [] }],
    education: [
        { school: "Tech University", degree: "MS Computer Science", field: "Graphics", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Parallax", description: "Scroll-based animation library", technologies: ["GSAP", "React"] },
        { name: "Depth", description: "3D layering toolkit", technologies: ["Three.js", "WebGL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Simple cloud shape
const Cloud = ({ className = '' }: { className?: string }) => (
    <svg viewBox="0 0 100 50" className={className} fill="white">
        <ellipse cx="25" cy="35" rx="20" ry="15" />
        <ellipse cx="50" cy="30" rx="25" ry="20" />
        <ellipse cx="75" cy="35" rx="20" ry="15" />
        <ellipse cx="40" cy="40" rx="20" ry="12" />
        <ellipse cx="60" cy="40" rx="20" ry="12" />
    </svg>
);

// Mountain silhouette
const MountainSilhouette = ({ color, className = '' }: { color: string; className?: string }) => (
    <svg viewBox="0 0 1440 200" className={className} preserveAspectRatio="none">
        <path
            d="M0,200 L0,120 L200,60 L400,140 L600,40 L800,100 L1000,30 L1200,90 L1440,60 L1440,200 Z"
            fill={color}
        />
    </svg>
);

export default function ParallaxScrollPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden">
            {/* Fixed sky background */}
            <div className="fixed inset-0 bg-gradient-to-b from-sky-400 via-sky-300 to-amber-200" />

            {/* Sun */}
            <motion.div
                className="fixed top-20 right-1/4 w-32 h-32 rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, #fff9c4 0%, #ffeb3b 50%, #ff9800 100%)',
                    boxShadow: '0 0 60px rgba(255,235,59,0.6), 0 0 120px rgba(255,152,0,0.4)'
                }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Clouds */}
            <motion.div
                className="fixed top-[10%] left-[10%] w-24 opacity-80 pointer-events-none"
                animate={{ x: [0, 30, 0] }}
                transition={{ duration: 20, repeat: Infinity }}
            >
                <Cloud />
            </motion.div>
            <motion.div
                className="fixed top-[15%] right-[20%] w-32 opacity-90 pointer-events-none"
                animate={{ x: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity }}
            >
                <Cloud />
            </motion.div>
            <motion.div
                className="fixed top-[8%] left-[50%] w-20 opacity-70 pointer-events-none"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 25, repeat: Infinity }}
            >
                <Cloud />
            </motion.div>

            {/* Mountain layers - fixed at bottom */}
            <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 5 }}>
                <MountainSilhouette color="#6366f1" className="absolute bottom-0 w-full h-48" />
            </div>
            <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 6 }}>
                <MountainSilhouette color="#4f46e5" className="absolute bottom-0 w-full h-40" />
            </div>
            <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 7 }}>
                <MountainSilhouette color="#4338ca" className="absolute bottom-0 w-full h-32" />
            </div>
            <div className="fixed bottom-0 left-0 right-0 pointer-events-none" style={{ zIndex: 8 }}>
                <MountainSilhouette color="#3730a3" className="absolute bottom-0 w-full h-24" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="bg-white/90 backdrop-blur-xl px-8 py-4 rounded-full shadow-2xl"
                >
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <Mountain className="w-6 h-6 text-indigo-600" />
                            <span className="text-lg font-bold text-indigo-900">VISTA</span>
                        </div>
                        <div className="flex gap-6 text-sm font-medium text-zinc-600">
                            {['Summit', 'Trail', 'Base', 'Camp'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative z-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        {/* Viewfinder frame */}
                        <motion.div
                            className="relative w-48 h-48 mx-auto mb-12 border-4 border-white/80 rounded-full bg-white/10 backdrop-blur"
                            style={{ boxShadow: '0 0 40px rgba(255,255,255,0.5)' }}
                        >
                            {/* Crosshairs */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-0.5 bg-white/50" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-0.5 bg-white/50" />
                            </div>
                            <div className="absolute inset-8 rounded-full border-2 border-white/30" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Eye className="w-12 h-12 text-white/80" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/90 rounded-full mb-8"
                        >
                            <MapPin className="w-5 h-5 text-indigo-600" />
                            <span className="text-indigo-800 font-medium">{displayData.role}</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-white/90 max-w-xl mx-auto mb-12 drop-shadow">
                            {displayData.bio}
                        </p>

                        <a
                            href="#trail"
                            className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg"
                        >
                            Explore →
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Content sections */}
            <div className="relative z-30 bg-gradient-to-b from-indigo-900 via-indigo-950 to-zinc-900">
                {/* About */}
                <section id="summit" className="py-32 px-6">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <Layers className="w-10 h-10 text-indigo-400" />
                                <h2 className="text-3xl font-bold text-white">The View From Here</h2>
                            </div>
                            <p className="text-indigo-100/70 leading-relaxed text-lg">
                                Like the layers of a landscape that shift as you move, I create interfaces
                                with depth and dimension. Every scroll reveals new perspectives, every
                                interaction tells a story. I believe the best experiences unfold naturally,
                                like a vista opening before your eyes. Currently exploring from {displayData.location}.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Skills */}
                <section id="trail" className="py-32 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16 text-white"
                        >
                            Trail Markers
                        </motion.h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {displayData.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/10 cursor-pointer"
                                >
                                    <div className="text-3xl mb-3">
                                        {['⛰️', '🏔️', '🌲', '🗻', '🌄', '⛺', '🥾', '🧭'][i % 8]}
                                    </div>
                                    <span className="font-bold text-white/90">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section id="base" className="py-32 px-6">
                    <div className="max-w-5xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16 text-white"
                        >
                            Expeditions
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {displayData.projects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -10 }}
                                    className={`group bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                    onClick={() => {
                                        const url = project.url || project.github;
                                        if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    <div className="h-40 relative overflow-hidden" style={{
                                        background: i === 0
                                            ? 'linear-gradient(180deg, #7dd3fc, #6366f1)'
                                            : 'linear-gradient(180deg, #fcd34d, #f97316)'
                                    }}>
                                        <MountainSilhouette color="rgba(0,0,0,0.2)" className="absolute bottom-0 w-full h-20" />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-indigo-100/60 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-sm text-indigo-300 bg-indigo-500/20 rounded-full border border-indigo-400/20">
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
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16 text-white"
                        >
                            Journey
                        </motion.h2>
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-indigo-500/30 text-indigo-300 rounded-full text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-indigo-400 mb-2">{exp.company}</p>
                                <p className="text-indigo-100/60">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Education */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-center mb-16 text-white"
                        >
                            Base Camp Training
                        </motion.h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {displayData.education.map((edu, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                                >
                                    <span className="text-3xl mb-4 block">🎓</span>
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-indigo-400">{edu.school}</p>
                                    <p className="text-sm text-indigo-300/50">{edu.startDate} - {edu.endDate}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact */}
                <section id="camp" className="py-32 px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10"
                        >
                            <span className="text-6xl block mb-8">🏕️</span>
                            <h2 className="text-4xl font-bold mb-6 text-white">Set Up Camp</h2>
                            <p className="text-indigo-100/60 mb-8">
                                Ready to explore new horizons together?
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
                                        className="p-4 bg-indigo-500/30 rounded-xl border border-indigo-400/30"
                                    >
                                        <Icon className="w-6 h-6 text-indigo-300" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}
