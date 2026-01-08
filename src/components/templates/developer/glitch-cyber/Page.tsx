'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Cpu, Wifi, Disc } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Cyber Dev",
    role: "Full Stack Engineer",
    email: "dev@cyber.io",
    phone: "+1 555 000 0000",
    location: "The Grid",
    bio: "Architecting the digital landscape with next-gen technologies.",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "Rust", "WebGL", "Docker", "AWS", "Git", "Linux"],
    experience: [{ company: "Tech Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Building future", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "CYBER_PROJECT_1", description: "High-performance web application", technologies: ["Next.js", "WebGL"] },
        { name: "CYBER_PROJECT_2", description: "Real-time data processing", technologies: ["React", "Node.js"] },
        { name: "CYBER_PROJECT_3", description: "Distributed system", technologies: ["Rust", "Docker"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function GlitchCyberPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-black text-white font-mono overflow-x-hidden selection:bg-cyan-500 selection:text-black">
            {/* Glitch Overlay */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-10 mix-blend-overlay bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')]" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-40 border-b border-cyan-500/30 bg-black/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-black tracking-tighter text-cyan-500 uppercase glitch-text" data-text="CYBER.DEV">
                        CYBER.DEV
                    </div>
                    <div className="flex gap-8 text-sm font-bold uppercase tracking-widest text-cyan-500/70">
                        {['System', 'About', 'Skills', 'Data', 'Memory', 'Link'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 hover:shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="system" className="min-h-screen flex items-center justify-center relative px-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_70%)]" />

                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 inline-block border border-cyan-500/50 px-4 py-1 rounded bg-cyan-900/20 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        System Online
                    </motion.div>

                    <h1 className="text-6xl md:text-9xl font-black mb-8 leading-none tracking-tighter relative">
                        <span className="absolute top-0 left-0 -ml-1 text-red-500 opacity-70 animate-pulse">FUTURE</span>
                        <span className="absolute top-0 left-0 ml-1 text-blue-500 opacity-70 animate-pulse delay-75">FUTURE</span>
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-pink-500">
                            FUTURE
                            <br />
                            READY
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-cyan-100/60 max-w-2xl mx-auto mb-12 font-light">
                        Architecting the digital landscape with next-gen technologies.
                        <span className="block text-cyan-500 font-bold mt-2">React • Three.js • WebGL</span>
                    </p>

                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-4 bg-cyan-500 text-black font-black uppercase tracking-wider hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.8)] transition-all clip-path-polygon">
                            Initialize
                        </button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 border-y border-cyan-500/20 bg-cyan-900/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { label: 'Uptime', value: '99.9%' },
                        { label: 'Projects', value: '42+' },
                        { label: 'Commits', value: '1.2k' },
                        { label: 'Latency', value: '<50ms' },
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                            <div className="text-4xl font-black text-white">{stat.value}</div>
                            <div className="text-sm font-bold text-cyan-500/50 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>



            {/* About Section */}
            <section id="about" className="py-32 px-6 relative border-b border-cyan-500/20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-cyan-500/20 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                        <div className="relative z-10 border border-cyan-500 bg-black p-8">
                            <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500" />
                            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500" />

                            <div className="aspect-square bg-gray-900 overflow-hidden relative">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=800&fit=crop"
                                    alt="Profile"
                                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-16 text-cyan-500 uppercase tracking-tighter flex items-center gap-4">
                        <Cpu className="w-8 h-8" />
                        Tech_Matrix
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <div key={i} className="group relative bg-gray-900 border border-cyan-500/30 p-4 hover:bg-cyan-500/10 transition-colors cursor-crosshair">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-cyan-100 group-hover:text-cyan-400">{skill}</span>
                                    <span className="text-xs text-cyan-500/50 group-hover:text-cyan-500">v{Math.floor(Math.random() * 10)}.0</span>
                                </div>
                                <div className="absolute bottom-0 left-0 h-0.5 bg-cyan-500 w-0 group-hover:w-full transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="data" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-16 text-cyan-500 uppercase tracking-tighter flex items-center gap-4">
                        <Cpu className="w-8 h-8" />
                        Project Database
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`group relative bg-gray-900 border border-cyan-500/30 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-black relative overflow-hidden">
                                    <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:bg-pink-500/20 transition-colors" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Disc className="w-16 h-16 text-cyan-500/50 animate-spin-slow" />
                                    </div>
                                </div>
                                <div className="p-6 relative">
                                    <div className="absolute top-0 right-0 p-2 bg-cyan-500 text-black text-xs font-bold uppercase">
                                        v2.0.{i + 1}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="text-xs text-cyan-500/70 border border-cyan-500/30 px-2 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-cyan-500 font-bold text-sm uppercase">
                                        <span>Access Data</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="memory" className="py-32 px-6 border-t border-cyan-500/20">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-black mb-16 text-cyan-500 uppercase tracking-tighter flex items-center gap-4">
                        <Zap className="w-8 h-8" />
                        Memory Banks
                    </h2>

                    <div className="space-y-8">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <div key={i} className="bg-gray-900/50 border border-cyan-500/30 p-8 relative overflow-hidden group hover:border-cyan-500 transition-colors">
                                <div className="absolute top-0 right-0 p-2 text-xs font-bold text-cyan-500/50 uppercase tracking-widest">
                                    [MEMORY_BLOCK_0{i + 1}]
                                </div>
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                                        <p className="text-cyan-500/70 font-mono">{edu.school}</p>
                                    </div>
                                    <span className="text-pink-500 font-bold font-mono">
                                        {'<'} {edu.year} {'/>'}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-cyan-500/5 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="link" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-transparent" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Wifi className="w-16 h-16 text-cyan-500 mx-auto mb-8 animate-pulse" />
                    <h2 className="text-5xl md:text-7xl font-black mb-8 uppercase tracking-tighter">
                        Establish
                        <br />
                        Connection
                    </h2>
                    <div className="flex justify-center gap-4">
                        <button className="px-8 py-4 border border-cyan-500 text-cyan-500 font-bold uppercase tracking-wider hover:bg-cyan-500 hover:text-black transition-all">
                            Send Signal
                        </button>
                    </div>
                </div>
            </section>
        </div >
    );
}
