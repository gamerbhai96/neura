'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Music2, Play, Rewind, FastForward } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Retro Coder",
    role: "Full Stack Developer",
    email: "dev@cassette.io",
    phone: "+1 555 000 0000",
    location: "Los Angeles, CA",
    bio: "Rewinding to the classics while fast-forwarding innovation. Side A: Code. Side B: Creativity.",
    skills: ["JavaScript", "Python", "React", "Node.js", "MongoDB", "Redis", "GraphQL", "Docker"],
    experience: [{ company: "Mixtape Studios", position: "Senior Developer", startDate: "2019", endDate: "Present", description: "Creating hit applications", highlights: [] }],
    education: [
        { school: "Tech University", degree: "BS Computer Science", field: "CS", startDate: "2015", endDate: "2019" }
    ],
    projects: [
        { name: "Rewind", description: "Music streaming platform", technologies: ["React", "Node.js"] },
        { name: "Mixtape", description: "Playlist sharing app", technologies: ["React Native", "Firebase"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function CassetteTapePage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono overflow-hidden">
            {/* Noise texture */}
            <div className="fixed inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
            }} />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-orange-500/30">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-orange-400 flex items-center gap-2 tracking-widest">
                        <Music2 className="w-6 h-6" />
                        CASSETTE
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-orange-300/80">
                        {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-orange-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-2xl mx-auto"
                >
                    {/* Cassette tape design */}
                    <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-xl p-6 shadow-2xl border border-zinc-700">
                        {/* Label area */}
                        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-6 mb-6 relative">
                            {/* Lined paper effect */}
                            <div className="absolute inset-0 opacity-20" style={{
                                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, #000 20px, #000 21px)'
                            }} />

                            <div className="relative">
                                <p className="text-orange-800 text-xs uppercase tracking-widest mb-2">Side A - Portfolio</p>
                                <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-2" style={{ fontFamily: 'system-ui' }}>
                                    {displayData.name}
                                </h1>
                                <p className="text-orange-700 font-medium">{displayData.role}</p>
                            </div>
                        </div>

                        {/* Tape reels */}
                        <div className="flex justify-center gap-8 mb-6">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-zinc-700 flex items-center justify-center"
                            >
                                <div className="w-8 h-8 bg-zinc-800 rounded-full border-2 border-zinc-600" />
                            </motion.div>
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 rounded-full bg-zinc-950 border-4 border-zinc-700 flex items-center justify-center"
                            >
                                <div className="w-8 h-8 bg-zinc-800 rounded-full border-2 border-zinc-600" />
                            </motion.div>
                        </div>

                        {/* Tape window */}
                        <div className="bg-zinc-950 rounded-lg p-4 mb-6 border border-zinc-700">
                            <div className="h-8 bg-gradient-to-r from-amber-900/50 via-amber-800/50 to-amber-900/50 rounded relative overflow-hidden">
                                <motion.div
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"
                                />
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center gap-4">
                            {[Rewind, Play, FastForward].map((Icon, i) => (
                                <button key={i} className="p-3 bg-zinc-700 hover:bg-zinc-600 rounded-lg transition-colors">
                                    <Icon className="w-5 h-5 text-orange-400" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-center text-orange-300/70 mt-8 text-lg"
                    >
                        {displayData.bio}
                    </motion.p>
                </motion.div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 bg-zinc-900/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg p-8 text-zinc-900"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 24px, rgba(0,0,0,0.05) 24px, rgba(0,0,0,0.05) 25px)'
                        }}
                    >
                        <h2 className="text-3xl font-black mb-6" style={{ fontFamily: 'system-ui' }}>Side B - About</h2>
                        <p className="text-lg leading-relaxed text-zinc-700">
                            Like a well-crafted mixtape, my work combines the best tracks into a cohesive experience.
                            I blend the warmth of analog sensibilities with the precision of digital craftsmanship.
                            Every project I create is like pressing play on your favorite song—it just feels right.
                            Currently spinning tracks in {displayData.location}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-orange-400"
                    >
                        Track List
                    </motion.h2>
                    <div className="space-y-2">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 hover:border-orange-500/50 transition-colors"
                            >
                                <span className="text-orange-400 font-mono w-8">{String(i + 1).padStart(2, '0')}</span>
                                <div className="flex-1 h-px bg-zinc-700" />
                                <span className="text-zinc-300 font-bold">{skill}</span>
                                <div className="flex-1 h-px bg-zinc-700" />
                                <span className="text-zinc-500 text-sm">3:45</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="py-32 px-6 bg-zinc-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-orange-400"
                    >
                        Album Collection
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Mini cassette case */}
                                <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700 group-hover:border-orange-500/50 transition-colors">
                                    <div className="aspect-square bg-gradient-to-br from-zinc-700 to-zinc-800 p-6 flex items-center justify-center">
                                        <div className="w-full aspect-video bg-zinc-900 rounded-lg p-4 border border-zinc-600">
                                            <div className="bg-gradient-to-br from-orange-200 to-amber-200 rounded h-full flex items-center justify-center">
                                                <Music2 className="w-12 h-12 text-orange-600" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-gradient-to-br from-orange-100 to-amber-100 text-zinc-900">
                                        <h3 className="text-2xl font-black mb-2 group-hover:text-orange-700 transition-colors" style={{ fontFamily: 'system-ui' }}>
                                            {project.name}
                                        </h3>
                                        <p className="text-zinc-600 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-zinc-900 text-orange-400 text-sm rounded font-mono">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-orange-400"
                    >
                        Tour Dates
                    </motion.h2>
                    <div className="space-y-6">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900 border border-zinc-800 p-6 rounded-lg"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-orange-300">{exp.position}</h3>
                                        <p className="text-orange-500">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-zinc-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-zinc-400">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 bg-zinc-900/50">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-orange-400"
                    >
                        Training
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-orange-100 to-amber-100 text-zinc-900 rounded-lg p-6"
                            >
                                <h3 className="text-lg font-black mb-1" style={{ fontFamily: 'system-ui' }}>{edu.degree}</h3>
                                <p className="text-orange-700 mb-2">{edu.school}</p>
                                <p className="text-sm text-zinc-600">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Music2 className="w-16 h-16 text-orange-400 mx-auto mb-6" />
                        <h2 className="text-5xl font-black mb-8 text-orange-400">Drop a Beat</h2>
                        <p className="text-xl text-zinc-400 mb-12">
                            Ready to create your next hit project?
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
                                className="p-4 bg-orange-500 text-zinc-950 hover:bg-orange-400 transition-colors rounded-lg"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
