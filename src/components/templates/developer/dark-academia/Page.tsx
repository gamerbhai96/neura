'use client';

import { motion } from 'framer-motion';
import { BookOpen, Feather, Mail, Github, Linkedin, Moon, Library } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Scholar Dev",
    role: "Software Engineer & Researcher",
    email: "dev@academia.io",
    phone: "+1 555 000 0000",
    location: "The Library",
    bio: "Pursuing knowledge through elegant code. Where classical aesthetics meet modern technology.",
    skills: ["Python", "Machine Learning", "TensorFlow", "React", "TypeScript", "Research", "Technical Writing", "Data Analysis"],
    experience: [{ company: "Research Labs", position: "Senior Researcher", startDate: "2019", endDate: "Present", description: "Research", highlights: [] }],
    education: [
        { school: "Oxford University", degree: "PhD Computer Science", field: "Machine Learning", startDate: "2016", endDate: "2020" },
        { school: "Cambridge University", degree: "MSc Computer Science", field: "AI", startDate: "2014", endDate: "2016" }
    ],
    projects: [
        { name: "Neural Codex", description: "Deep learning research framework", technologies: ["Python", "PyTorch"] },
        { name: "Episteme", description: "Knowledge management system", technologies: ["React", "GraphQL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function DarkAcademiaPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#1a1710] text-[#e8e0d0] font-serif">
            {/* Texture overlay */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')]" />

            {/* Vignette */}
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(20,18,12,0.8)_100%)]" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#1a1710]/90 backdrop-blur-sm border-b border-[#3d3528]">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Library className="w-5 h-5 text-[#c4a35a]" />
                        <span className="text-lg font-medium tracking-wide text-[#c4a35a]">ACADEMIA</span>
                    </div>
                    <div className="flex gap-8 text-sm tracking-widest uppercase text-[#8a8070]">
                        {['About', 'Works', 'Studies', 'Credentials', 'Correspondence'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#c4a35a] transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex justify-center mb-8"
                    >
                        <Feather className="w-12 h-12 text-[#c4a35a]" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm tracking-[0.3em] uppercase text-[#8a8070] mb-6"
                    >
                        {displayData.role}
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-light mb-8 tracking-tight text-[#e8e0d0]"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        {displayData.name}
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-px bg-[#c4a35a] mx-auto mb-8"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-[#a09080] leading-relaxed max-w-2xl mx-auto mb-12 italic"
                    >
                        "{displayData.bio}"
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center gap-6"
                    >
                        <a href="#works" className="px-8 py-3 bg-[#c4a35a] text-[#1a1710] font-medium tracking-wider hover:bg-[#d4b36a] transition-all">
                            View Portfolio
                        </a>
                        <a href="#correspondence" className="px-8 py-3 border border-[#3d3528] text-[#c4a35a] font-medium tracking-wider hover:bg-[#252015] transition-all">
                            Contact
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 border-t border-[#3d3528]">
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="aspect-[3/4] bg-[#252015] border border-[#3d3528] relative overflow-hidden">
                                <div className="absolute inset-4 border border-[#c4a35a]/20" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BookOpen className="w-24 h-24 text-[#c4a35a]/20" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-light mb-6 text-[#c4a35a]">About the Scholar</h2>
                            <p className="text-[#a09080] leading-relaxed mb-6">
                                In the pursuit of knowledge and elegant solutions, I traverse the realms of computer science
                                and software engineering. My work is guided by classical principles applied to modern problems.
                            </p>
                            <p className="text-[#a09080] leading-relaxed">
                                Every line of code is written with intention, every system designed with purpose.
                                I believe in the beauty of well-crafted software.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects/Works */}
            <section id="works" className="py-32 px-6 bg-[#151210] border-t border-[#3d3528]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light mb-4 text-[#c4a35a]">Selected Works</h2>
                        <div className="w-16 h-px bg-[#c4a35a] mx-auto" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group bg-[#1a1710] border border-[#3d3528] p-8 hover:border-[#c4a35a]/50 transition-all"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <span className="text-[#c4a35a] text-sm tracking-widest">OPUS {i + 1}</span>
                                    <Moon className="w-5 h-5 text-[#3d3528] group-hover:text-[#c4a35a] transition-colors" />
                                </div>
                                <h3 className="text-2xl font-light mb-3 text-[#e8e0d0] group-hover:text-[#c4a35a] transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-[#8a8070] mb-6 italic">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech, j) => (
                                        <span key={j} className="px-3 py-1 bg-[#252015] border border-[#3d3528] text-[#a09080] text-xs tracking-wider">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills/Studies */}
            <section id="studies" className="py-32 px-6 border-t border-[#3d3528]">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light mb-4 text-[#c4a35a]">Fields of Study</h2>
                        <div className="w-16 h-px bg-[#c4a35a] mx-auto" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-[#252015] border border-[#3d3528] text-[#a09080] tracking-wider hover:border-[#c4a35a] hover:text-[#c4a35a] transition-all cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education/Credentials */}
            <section id="credentials" className="py-32 px-6 bg-[#151210] border-t border-[#3d3528]">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-light mb-4 text-[#c4a35a]">Academic Credentials</h2>
                        <div className="w-16 h-px bg-[#c4a35a] mx-auto" />
                    </div>
                    <div className="space-y-8">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-l-2 border-[#c4a35a] pl-8 py-4"
                            >
                                <div className="text-sm text-[#c4a35a] tracking-widest mb-2">
                                    {edu.startDate} — {edu.endDate}
                                </div>
                                <h3 className="text-2xl font-light text-[#e8e0d0] mb-2">{edu.degree}</h3>
                                <p className="text-[#8a8070] italic">{edu.school}</p>
                                {edu.field && <p className="text-[#8a8070] text-sm mt-1">Field: {edu.field}</p>}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact/Correspondence */}
            <section id="correspondence" className="py-32 px-6 border-t border-[#3d3528]">
                <div className="max-w-4xl mx-auto text-center">
                    <Feather className="w-10 h-10 text-[#c4a35a] mx-auto mb-8" />
                    <h2 className="text-4xl font-light mb-6 text-[#e8e0d0]">Correspondence</h2>
                    <p className="text-[#8a8070] mb-12 italic max-w-xl mx-auto">
                        "The beginning of wisdom is the definition of terms." — Socrates
                    </p>
                    <div className="flex justify-center gap-6">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="p-4 border border-[#3d3528] text-[#c4a35a] hover:bg-[#252015] transition-all">
                                <Mail className="w-5 h-5" />
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="p-4 border border-[#3d3528] text-[#c4a35a] hover:bg-[#252015] transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="p-4 border border-[#3d3528] text-[#c4a35a] hover:bg-[#252015] transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-[#5a5040] text-sm border-t border-[#3d3528]">
                <p>© MMXXIV {displayData.name}. Ad astra per aspera.</p>
            </footer>
        </div>
    );
}
