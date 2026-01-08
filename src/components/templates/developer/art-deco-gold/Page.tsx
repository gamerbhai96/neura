'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Crown, Diamond, Star } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Gatsby Developer",
    role: "Senior Frontend Engineer",
    email: "dev@artdeco.io",
    phone: "+1 555 000 0000",
    location: "Manhattan, NY",
    bio: "Crafting digital experiences with the elegance and grandeur of the roaring twenties. Every detail matters.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Figma", "Motion Design", "GSAP", "WebGL"],
    experience: [{ company: "Golden Studios", position: "Lead Developer", startDate: "2019", endDate: "Present", description: "Building luxurious interfaces", highlights: [] }],
    education: [
        { school: "Design Academy", degree: "MFA Digital Design", field: "Design", startDate: "2015", endDate: "2017" }
    ],
    projects: [
        { name: "Luxe", description: "High-end e-commerce platform", technologies: ["Next.js", "Stripe"] },
        { name: "Gilded", description: "Premium portfolio builder", technologies: ["React", "Framer Motion"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function ArtDecoGoldPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-stone-950 text-amber-50 font-serif overflow-hidden">
            {/* Art deco pattern background */}
            <div className="fixed inset-0 pointer-events-none opacity-5">
                <svg width="100%" height="100%">
                    <defs>
                        <pattern id="artdeco" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#d4a574" strokeWidth="1" />
                            <circle cx="30" cy="30" r="5" fill="none" stroke="#d4a574" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#artdeco)" />
                </svg>
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-amber-600/30">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-[0.3em] text-amber-400 flex items-center gap-3">
                        <Diamond className="w-5 h-5" />
                        ART DECO
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-amber-200/70 tracking-widest uppercase">
                        {['About', 'Portfolio', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                {/* Decorative lines */}
                <div className="absolute top-32 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-amber-600/50 to-transparent" />
                <div className="absolute top-32 right-1/4 w-px h-40 bg-gradient-to-b from-transparent via-amber-600/50 to-transparent" />

                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Top decoration */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <div className="w-24 h-px bg-gradient-to-r from-transparent to-amber-600" />
                        <Crown className="w-8 h-8 text-amber-500" />
                        <div className="w-24 h-px bg-gradient-to-l from-transparent to-amber-600" />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-amber-500 tracking-[0.4em] uppercase text-sm mb-4"
                    >
                        {displayData.role}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-6xl md:text-8xl font-light mb-8 tracking-wide"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        <span className="text-amber-400">{displayData.name}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-amber-100/60 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        {displayData.bio}
                    </motion.p>

                    {/* Bottom decoration */}
                    <motion.div
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center justify-center gap-4 mt-12"
                    >
                        <div className="w-16 h-px bg-amber-600" />
                        <Star className="w-4 h-4 text-amber-500" />
                        <div className="w-16 h-px bg-amber-600" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center gap-6 mt-12"
                    >
                        <button className="px-10 py-4 bg-amber-600 text-stone-950 font-bold tracking-widest uppercase hover:bg-amber-500 transition-colors">
                            View Portfolio
                        </button>
                        <button className="px-10 py-4 border-2 border-amber-600 text-amber-400 font-bold tracking-widest uppercase hover:bg-amber-600/10 transition-colors">
                            Contact
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent" style={{ left: '10%' }} />
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber-600/30 to-transparent" style={{ right: '10%' }} />

                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-16 h-px bg-amber-600" />
                            <h2 className="text-4xl font-light tracking-widest text-amber-400 uppercase">About</h2>
                            <div className="w-16 h-px bg-amber-600" />
                        </div>
                        <p className="text-lg text-amber-100/70 leading-relaxed max-w-2xl mx-auto">
                            In the tradition of the great artisans of the Art Deco era, I believe that
                            form and function must work in perfect harmony. Every interface I create
                            is a testament to timeless elegance and modern innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6 bg-stone-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-16 h-px bg-amber-600" />
                            <h2 className="text-4xl font-light tracking-widest text-amber-400 uppercase">Expertise</h2>
                            <div className="w-16 h-px bg-amber-600" />
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group border border-amber-600/30 p-8 text-center hover:border-amber-500 hover:bg-amber-600/5 transition-all"
                            >
                                <span className="text-amber-200/80 font-light tracking-widest uppercase text-sm group-hover:text-amber-400 transition-colors">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="portfolio" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-16 h-px bg-amber-600" />
                            <h2 className="text-4xl font-light tracking-widest text-amber-400 uppercase">Portfolio</h2>
                            <div className="w-16 h-px bg-amber-600" />
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group border border-amber-600/30 overflow-hidden hover:border-amber-500 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/30 to-stone-900 relative flex items-center justify-center border-b border-amber-600/30">
                                    <Diamond className="w-16 h-16 text-amber-600/30 group-hover:text-amber-500/50 transition-colors" />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-light mb-3 text-amber-200 group-hover:text-amber-400 transition-colors tracking-wide">
                                        {project.name}
                                    </h3>
                                    <p className="text-amber-100/50 mb-6 font-light">{project.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-4 py-1 border border-amber-600/30 text-amber-400/80 text-xs uppercase tracking-widest">
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
            <section className="py-32 px-6 bg-stone-900/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-16 h-px bg-amber-600" />
                            <h2 className="text-4xl font-light tracking-widest text-amber-400 uppercase">Experience</h2>
                            <div className="w-16 h-px bg-amber-600" />
                        </div>
                    </motion.div>
                    <div className="space-y-8">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-amber-600/30 p-8"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-light text-amber-200 tracking-wide">{exp.position}</h3>
                                        <p className="text-amber-500">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-amber-400/60 tracking-widest">{exp.startDate} — {exp.endDate}</span>
                                </div>
                                <p className="text-amber-100/50 font-light">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-16 h-px bg-amber-600" />
                            <h2 className="text-4xl font-light tracking-widest text-amber-400 uppercase">Education</h2>
                            <div className="w-16 h-px bg-amber-600" />
                        </div>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="border border-amber-600/30 p-6 text-center"
                            >
                                <h3 className="text-lg font-light text-amber-200 mb-1 tracking-wide">{edu.degree}</h3>
                                <p className="text-amber-500 mb-2">{edu.school}</p>
                                <p className="text-sm text-amber-400/60">{edu.startDate} — {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-gradient-to-t from-amber-950/30 to-stone-950">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-24 h-px bg-amber-600" />
                            <Crown className="w-8 h-8 text-amber-500" />
                            <div className="w-24 h-px bg-amber-600" />
                        </div>
                        <h2 className="text-5xl font-light mb-8 text-amber-400 tracking-wide">Let's Collaborate</h2>
                        <p className="text-xl text-amber-100/50 mb-12 font-light">
                            Ready to create something extraordinary?
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: Mail, href: `mailto:${displayData.email}` },
                            { icon: Github, href: displayData.links.github },
                            { icon: Linkedin, href: displayData.links.linkedin }
                        ].map(({ icon: Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 border border-amber-600/50 hover:bg-amber-600 hover:border-amber-500 transition-all group"
                            >
                                <Icon className="w-6 h-6 text-amber-400 group-hover:text-stone-950" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
