'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Waves, Zap, Activity } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Fluid Dev",
    role: "Full Stack Developer",
    email: "dev@fluid.io",
    phone: "+1 555 000 0000",
    location: "Flow State",
    bio: "Creating frictionless user experiences that adapt and evolve. Liquid interfaces for the modern web.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind", "Framer Motion", "Three.js", "PostgreSQL", "Docker", "AWS", "Figma"],
    experience: [{ company: "Flow Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Flowing", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Liquid Flow 1", description: "Adaptive interface with fluid animations", technologies: ["React", "Framer Motion"] },
        { name: "Liquid Flow 2", description: "State management system", technologies: ["Next.js", "GraphQL"] },
        { name: "Liquid Flow 3", description: "Responsive design framework", technologies: ["Tailwind", "TypeScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function LiquidFluidPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-[#0F172A] text-white font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
            {/* Fluid Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
                <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-2000" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        <Droplets className="w-6 h-6 text-blue-400" />
                        <span>FLUID.IO</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-slate-300">
                        {['Work', 'Education', 'About', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center px-6 pt-20 relative">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-blue-300 text-sm font-medium"
                        >
                            <Waves className="w-4 h-4" />
                            <span>Flow State Development</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl lg:text-8xl font-bold leading-tight tracking-tight"
                        >
                            Seamless
                            <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                                Digital Flow
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-400 max-w-lg leading-relaxed"
                        >
                            Creating frictionless user experiences that adapt and evolve.
                            Liquid interfaces for the modern web.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-bold hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all hover:scale-105">
                                Explore Work
                            </button>
                        </motion.div>
                    </div>

                    <div className="relative hidden lg:block h-[600px]">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" />
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative z-10 w-full h-full bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 p-8 shadow-2xl"
                        >
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob" />
                                <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob animation-delay-2000" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 md:order-1">
                        <div className="aspect-square rounded-[3rem] overflow-hidden relative bg-white/5 border border-white/10 backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                            <img
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=800&fit=crop"
                                alt="Profile"
                                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                            />
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                            Fluid Intelligence
                        </h2>
                        <p className="text-xl text-slate-400 leading-relaxed mb-8">
                            I adapt to challenges like water. My approach to development is fluid, responsive, and constantly evolving.
                            I don't just write code; I create living, breathing digital ecosystems.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">Years Flowing</div>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                                <div className="text-sm text-slate-500 uppercase tracking-wider">Fluidity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold mb-4">Tech Stream</h2>
                        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind', 'Framer Motion', 'Three.js', 'PostgreSQL', 'Docker', 'AWS', 'Figma'].map((skill, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1 }}
                                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-blue-400/50 transition-all cursor-default"
                            >
                                <span className="font-medium text-blue-100">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="work" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className={`group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-black/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Activity className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-slate-400 mb-6">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="text-xs text-blue-300 bg-blue-500/10 px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-blue-400">
                                        <span>View Case Study</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-32 px-6 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Education</h2>
                            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                    </div>

                    <div className="space-y-6">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.01 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-md flex flex-col md:flex-row justify-between items-center gap-6 group hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Zap className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                                        <p className="text-slate-400 text-lg">{edu.school}</p>
                                    </div>
                                </div>
                                <div className="px-6 py-2 rounded-full bg-white/10 border border-white/10 font-mono text-blue-300">
                                    {edu.year}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Start the Flow
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
                        Ready to create something fluid? Let's build the future of the web together.
                    </p>
                    <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                        Get in Touch
                    </button>
                </div>
            </section>
        </div >
    );
}
