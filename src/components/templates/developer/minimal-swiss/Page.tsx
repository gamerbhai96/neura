'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Swiss Dev",
    role: "Design Engineer",
    email: "dev@swiss.io",
    phone: "+1 555 000 0000",
    location: "Zürich",
    bio: "Form follows function. Less is more. Precision in every pixel.",
    skills: ["React", "TypeScript", "CSS", "Design Systems", "Figma", "UI/UX", "Accessibility", "Performance"],
    experience: [{ company: "Swiss Design Co", position: "Lead Designer", startDate: "2020", endDate: "Present", description: "Designing", highlights: [] }],
    education: [
        { school: "ETH Zürich", degree: "MSc Computer Science", field: "HCI", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Grid System", description: "Modular grid framework", technologies: ["CSS", "React"] },
        { name: "Type Scale", description: "Typography system", technologies: ["TypeScript", "Design"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function MinimalSwissPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white border-b border-black/10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    <div className="text-2xl font-bold tracking-tighter">
                        {displayData.name?.split(' ')[0]?.toUpperCase() || 'DEV'}
                    </div>
                    <div className="flex gap-12 text-sm font-medium tracking-wide">
                        {['About', 'Work', 'Skills', 'Education', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-red-600 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center px-6 relative pt-24">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 items-center">
                    <div className="col-span-12 lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm font-medium tracking-[0.3em] uppercase text-red-600 mb-6"
                        >
                            {displayData.role}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-7xl md:text-9xl font-bold leading-[0.9] tracking-tighter mb-12"
                        >
                            {displayData.name?.toUpperCase()}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-500 max-w-xl leading-relaxed mb-12"
                        >
                            {displayData.bio}
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <a href="#work" className="inline-flex items-center gap-4 text-lg font-medium group">
                                View Work
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 hidden lg:block">
                        <div className="aspect-square bg-red-600" />
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 border-t border-black/10">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-red-600">About</h2>
                    </div>
                    <div className="col-span-12 md:col-span-8">
                        <p className="text-3xl font-light leading-relaxed text-gray-800 mb-8">
                            I believe in the power of restraint. Every element on the screen should serve a purpose.
                            Good design is invisible—it just works.
                        </p>
                        <p className="text-lg text-gray-500 leading-relaxed">
                            With a foundation in Swiss design principles, I create digital experiences that prioritize
                            clarity, hierarchy, and functionality. Typography is not decoration—it is communication.
                        </p>
                    </div>
                </div>
            </section>

            {/* Work/Projects */}
            <section id="work" className="py-32 px-6 bg-gray-50 border-t border-black/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-red-600 mb-4">Selected Work</h2>
                        <div className="h-px bg-black/10" />
                    </div>
                    <div className="space-y-0">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="group py-12 border-b border-black/10 hover:bg-white transition-colors cursor-pointer"
                            >
                                <div className="grid grid-cols-12 gap-6 items-center">
                                    <div className="col-span-1">
                                        <span className="text-sm text-gray-400 font-mono">0{i + 1}</span>
                                    </div>
                                    <div className="col-span-5">
                                        <h3 className="text-3xl font-medium group-hover:text-red-600 transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <div className="col-span-4">
                                        <p className="text-gray-500">{project.description}</p>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <ArrowRight className="inline-block w-6 h-6 text-gray-400 group-hover:text-red-600 group-hover:translate-x-2 transition-all" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6 border-t border-black/10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-red-600 mb-4">Expertise</h2>
                        <div className="h-px bg-black/10" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="py-6 border-b border-black/10 hover:border-red-600 transition-colors"
                            >
                                <span className="text-lg font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 bg-gray-50 border-t border-black/10">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12">
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="text-sm font-medium tracking-[0.3em] uppercase text-red-600">Education</h2>
                    </div>
                    <div className="col-span-12 md:col-span-8 space-y-12">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border-b border-black/10 pb-12"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-medium">{edu.degree}</h3>
                                    <span className="text-sm text-gray-400 font-mono">{edu.startDate}—{edu.endDate}</span>
                                </div>
                                <p className="text-gray-500">{edu.school}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-black text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-12 gap-12 items-center">
                    <div className="col-span-12 md:col-span-8">
                        <h2 className="text-6xl font-bold tracking-tight mb-6">Let's work together.</h2>
                        <p className="text-xl text-gray-400">{displayData.email}</p>
                    </div>
                    <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end gap-6">
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-white/20 hover:bg-white hover:text-black transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-white/20 hover:bg-white hover:text-black transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-white/20 hover:bg-white hover:text-black transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-400 text-sm bg-black">
                <p>© 2024 {displayData.name}. Swiss Design Principles.</p>
            </footer>
        </div>
    );
}
