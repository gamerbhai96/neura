'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Circle, ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Mono Dev",
    role: "Design Engineer",
    email: "dev@mono.io",
    phone: "+1 555 000 0000",
    location: "Black & White",
    bio: "Elegance in simplicity. Timeless design through monochromatic excellence.",
    skills: ["React", "TypeScript", "Design Systems", "CSS", "Figma", "Animation", "UX Research", "Accessibility"],
    experience: [{ company: "Mono Studio", position: "Design Lead", startDate: "2019", endDate: "Present", description: "Designing", highlights: [] }],
    education: [
        { school: "Design Academy", degree: "MFA Design", field: "Visual Communication", startDate: "2015", endDate: "2017" }
    ],
    projects: [
        { name: "Minimal", description: "Design system framework", technologies: ["React", "TypeScript"] },
        { name: "Contrast", description: "Accessibility toolkit", technologies: ["CSS", "JavaScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function MonochromeElegantPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-white text-black font-sans">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-black/5">
                <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Circle className="w-3 h-3 fill-current" />
                        <span className="text-sm font-medium tracking-widest">{displayData.name?.toUpperCase()}</span>
                    </div>
                    <div className="flex gap-10 text-sm text-gray-500">
                        {['Work', 'About', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-black transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center px-6 pt-24">
                <div className="max-w-6xl mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="text-sm text-gray-400 mb-6">{displayData.role}</div>
                        <h1 className="text-6xl md:text-8xl font-light leading-[1.1] tracking-tight mb-8">
                            {displayData.name}
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl mb-12">
                            {displayData.bio}
                        </p>
                        <div className="flex gap-6">
                            <a href="#work" className="text-sm font-medium flex items-center gap-2 group">
                                View Work
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="#contact" className="text-sm text-gray-500 hover:text-black transition-colors">
                                Get in touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Work */}
            <section id="work" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-sm text-gray-400 tracking-widest mb-4">SELECTED WORK</h2>
                        <div className="h-px bg-black/10" />
                    </div>
                    <div className="space-y-20">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="group"
                            >
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-400 mb-4">0{i + 1}</div>
                                        <h3 className="text-4xl font-light mb-4">{project.name}</h3>
                                        <p className="text-gray-600 mb-6">{project.description}</p>
                                        <div className="flex gap-4 text-sm text-gray-400">
                                            {project.technologies?.map((tech, j) => (
                                                <span key={j}>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About/Skills */}
            <section id="about" className="py-32 px-6 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-sm text-gray-400 tracking-widest mb-8">ABOUT</h2>
                            <p className="text-2xl font-light leading-relaxed text-gray-800">
                                I believe in the power of simplicity. Great design speaks through restraint,
                                finding beauty in the essential and eliminating the superfluous.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-sm text-gray-400 tracking-widest mb-8">EXPERTISE</h2>
                            <div className="space-y-4">
                                {displayData.skills.map((skill, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.05 }}
                                        className="py-3 border-b border-black/10 text-gray-600 hover:text-black transition-colors"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-sm text-gray-400 tracking-widest mb-12">EDUCATION</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="py-8 border-t border-black/10"
                        >
                            <div className="flex justify-between items-baseline flex-wrap gap-4">
                                <div>
                                    <h3 className="text-2xl font-light mb-2">{edu.degree}</h3>
                                    <p className="text-gray-500">{edu.school}</p>
                                </div>
                                <span className="text-sm text-gray-400">{edu.startDate}—{edu.endDate}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-black text-white">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-5xl font-light mb-6">Let's work together</h2>
                            <p className="text-gray-400">{displayData.email}</p>
                        </div>
                        <div className="flex gap-6 justify-start md:justify-end">
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-4 border border-white/20 hover:border-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-4 border border-white/20 hover:border-white transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-4 border border-white/20 hover:border-white transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-6 text-center text-gray-400 text-sm bg-black">
                <p>© 2024 {displayData.name}</p>
            </footer>
        </div>
    );
}
