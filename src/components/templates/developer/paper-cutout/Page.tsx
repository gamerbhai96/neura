'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Scissors, FileText, Layers } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Paper Dev",
    role: "Creative Developer",
    email: "dev@paper.io",
    phone: "+1 555 000 0000",
    location: "Craft Studio",
    bio: "Bringing digital experiences to life with handcrafted aesthetics and layered depth.",
    skills: ["React", "CSS Art", "SVG", "Animation", "Illustration", "UI Design", "Framer Motion", "Figma"],
    experience: [{ company: "Craft Labs", position: "Creative Lead", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Art Institute", degree: "BFA Illustration", field: "Digital Arts", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Papercraft UI", description: "Layered design system", technologies: ["React", "CSS"] },
        { name: "Origami App", description: "Folding animation library", technologies: ["SVG", "GSAP"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function PaperCutoutPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const paperColors = ['#fef3c7', '#fde68a', '#fbbf24', '#f59e0b'];

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd] text-gray-800 font-sans overflow-x-hidden">
            {/* Paper texture overlay */}
            <div className="fixed inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50">
                <div className="m-6">
                    <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-2xl border border-gray-200 px-6 py-4 flex justify-between items-center"
                        style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
                        <div className="flex items-center gap-2">
                            <Layers className="w-6 h-6 text-amber-500" />
                            <span className="text-xl font-bold text-gray-800">PAPER</span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium text-gray-600">
                            {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-600 transition-colors">
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative z-10">
                <div className="max-w-4xl mx-auto relative">
                    {/* Background paper layers */}
                    <div className="absolute -inset-10 bg-amber-100 rounded-lg rotate-2" style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.1)' }} />
                    <div className="absolute -inset-8 bg-yellow-100 rounded-lg -rotate-1" style={{ boxShadow: '0 6px 0 rgba(0,0,0,0.08)' }} />
                    <div className="absolute -inset-6 bg-orange-50 rounded-lg rotate-1" style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.06)' }} />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative bg-white rounded-lg p-12 text-center"
                        style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.15)' }}
                    >
                        <div className="flex justify-center mb-8">
                            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center"
                                style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}>
                                <Scissors className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <div className="text-sm text-amber-600 font-medium mb-4 tracking-wider uppercase">
                            {displayData.role}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800">
                            {displayData.name}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-xl mx-auto mb-8">
                            {displayData.bio}
                        </p>
                        <div className="flex justify-center gap-4">
                            <a href="#projects" className="px-8 py-4 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-all"
                                style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}>
                                View Projects
                            </a>
                            <a href="#contact" className="px-8 py-4 bg-white border-2 border-gray-200 font-bold rounded-lg hover:border-amber-500 transition-all"
                                style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -1 : 1 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, y: -5 }}
                                className={`relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Paper shadow layers */}
                                <div className="absolute inset-0 bg-amber-200 rounded-lg translate-x-2 translate-y-2" />
                                <div className="relative bg-white rounded-lg p-8 border-2 border-gray-100"
                                    style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
                                    <div className="aspect-video mb-6 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: paperColors[i % paperColors.length] }}>
                                        <FileText className="w-16 h-16 text-white/60" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2 text-gray-800">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
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

            {/* Skills */}
            <section id="skills" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Skills</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -3, rotate: Math.random() * 4 - 2 }}
                                className="px-6 py-3 bg-white border-2 border-gray-100 rounded-lg font-medium"
                                style={{ boxShadow: '0 3px 0 rgba(0,0,0,0.1)' }}
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
                    <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">Education</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-amber-200 rounded-lg translate-x-2 translate-y-2" />
                            <div className="relative bg-white rounded-lg p-8 border-2 border-gray-100"
                                style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-800">{edu.degree}</h3>
                                        <p className="text-amber-600">{edu.school}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-medium">
                                        {edu.startDate} - {edu.endDate}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 bg-amber-300 rounded-lg rotate-1" style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.15)' }} />
                        <div className="relative bg-white rounded-lg p-12 text-center"
                            style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.1)' }}>
                            <h2 className="text-4xl font-bold mb-4 text-gray-800">Let's Connect</h2>
                            <p className="text-gray-600 mb-8">Ready to craft something together?</p>
                            <div className="flex justify-center gap-4">
                                {displayData.email && (
                                    <a href={`mailto:${displayData.email}`} className="p-4 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all"
                                        style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}>
                                        <Mail className="w-6 h-6" />
                                    </a>
                                )}
                                {displayData.links?.github && (
                                    <a href={displayData.links.github} className="p-4 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all"
                                        style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}>
                                        <Github className="w-6 h-6" />
                                    </a>
                                )}
                                {displayData.links?.linkedin && (
                                    <a href={displayData.links.linkedin} className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all"
                                        style={{ boxShadow: '0 4px 0 rgba(0,0,0,0.2)' }}>
                                        <Linkedin className="w-6 h-6" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-sm relative z-10">
                <p>© 2024 {displayData.name}. Handcrafted with care.</p>
            </footer>
        </div>
    );
}
