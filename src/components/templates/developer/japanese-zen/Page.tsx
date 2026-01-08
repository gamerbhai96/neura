'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Leaf } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "禅 Dev",
    role: "Mindful Developer",
    email: "dev@zen.io",
    phone: "+1 555 000 0000",
    location: "Kyoto",
    bio: "静寂の中に美がある。Finding beauty in simplicity. Code is poetry.",
    skills: ["React", "TypeScript", "Minimalism", "Performance", "Accessibility", "Clean Code", "Architecture", "Design"],
    experience: [{ company: "Zen Labs", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Tokyo Institute", degree: "MS Computer Science", field: "HCI", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Ikigai", description: "Purpose-driven task manager", technologies: ["React", "Redux"] },
        { name: "Wabi-Sabi", description: "Imperfect beauty portfolio", technologies: ["Next.js", "CSS"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function JapaneseZenPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#faf8f5] text-[#2d2d2d] font-sans">
            {/* Subtle texture */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#faf8f5]/80 backdrop-blur-md">
                <div className="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-lg font-light tracking-widest">
                        <span>禅</span>
                    </div>
                    <div className="flex gap-12 text-xs tracking-[0.2em] uppercase text-[#666]">
                        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#2d2d2d] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero - Traditional Zen aesthetic */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="text-[120px] font-light text-[#e5e0db] mb-[-40px] select-none"
                    >
                        禅
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-5xl md:text-6xl font-light tracking-tight mb-6"
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="w-12 h-px bg-[#2d2d2d] mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="text-lg text-[#666] font-light leading-relaxed mb-4"
                    >
                        {displayData.role}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="text-[#999] italic"
                    >
                        {displayData.bio}
                    </motion.p>
                </div>
            </section>

            {/* About - Minimalist with negative space */}
            <section id="about" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="text-xs tracking-[0.3em] uppercase text-[#999] mb-8">About</div>
                        <p className="text-2xl font-light leading-relaxed text-[#444]">
                            In the spirit of <span className="italic">wabi-sabi</span>, I embrace imperfection and
                            find beauty in simplicity. Each line of code is written with intention,
                            each interface designed for tranquility.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects - Clean cards with ample whitespace */}
            <section id="work" className="py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-xs tracking-[0.3em] uppercase text-[#999] mb-16 text-center">Selected Work</div>
                    <div className="space-y-24">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`group ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="flex items-baseline justify-between mb-4">
                                    <span className="text-xs text-[#999] tracking-widest">0{i + 1}</span>
                                    <div className="flex-1 mx-4 h-px bg-[#e5e0db]" />
                                </div>
                                <h3 className="text-3xl font-light mb-4 group-hover:text-[#666] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[#888] mb-6">{project.description}</p>
                                <div className="flex gap-4">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="text-xs tracking-widest uppercase text-[#aaa]">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills - Flowing arrangement */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-xs tracking-[0.3em] uppercase text-[#999] mb-16 text-center">Disciplines</div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="text-xl font-light text-[#666] hover:text-[#2d2d2d] transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="education" className="py-32 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-xs tracking-[0.3em] uppercase text-[#999] mb-16 text-center">Education</div>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <div className="text-3xl font-light mb-2">{edu.degree}</div>
                            <div className="text-[#888] mb-1">{edu.school}</div>
                            <div className="text-xs tracking-widest text-[#aaa]">{edu.startDate} — {edu.endDate}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact - Peaceful, centered */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <Leaf className="w-8 h-8 mx-auto mb-8 text-[#c9c4be]" />
                        <h2 className="text-4xl font-light mb-4">Let's Connect</h2>
                        <p className="text-[#888] mb-12">一期一会 — One chance, one encounter</p>
                        <div className="flex justify-center gap-6">
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-3 text-[#999] hover:text-[#2d2d2d] transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                            )}
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-3 text-[#999] hover:text-[#2d2d2d] transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-3 text-[#999] hover:text-[#2d2d2d] transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center text-xs tracking-widest text-[#ccc]">
                <p>© 2024 {displayData.name}</p>
            </footer>
        </div>
    );
}
