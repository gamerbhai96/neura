'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Droplets, Palette, Brush } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Creative Artist",
    role: "UI/UX Designer & Developer",
    email: "artist@watercolor.io",
    phone: "+1 555 000 0000",
    location: "Art Studio",
    bio: "Painting digital experiences with the fluidity and beauty of watercolors. Every pixel tells a story.",
    skills: ["UI Design", "Figma", "React", "CSS Art", "Illustration", "Branding", "Motion Design", "Typography"],
    experience: [{ company: "Design Studio", position: "Lead Designer", startDate: "2020", endDate: "Present", description: "Creating beautiful interfaces", highlights: [] }],
    education: [
        { school: "Art Institute", degree: "BFA Visual Design", field: "Design", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Aquarelle", description: "Digital painting platform", technologies: ["React", "Canvas API"] },
        { name: "Palette", description: "Color harmony tool", technologies: ["TypeScript", "WebGL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function WatercolorSplashPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-amber-50 to-sky-50 text-gray-800 font-serif overflow-hidden">
            {/* Watercolor splash decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-pink-300/40 to-rose-400/30 rounded-full blur-3xl" />
                <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-sky-300/40 to-blue-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-br from-amber-300/40 to-orange-400/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-violet-300/40 to-purple-400/30 rounded-full blur-3xl" />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/30 border-b border-white/50">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-light tracking-widest text-gray-700 flex items-center gap-2">
                        <Droplets className="w-6 h-6 text-sky-500" />
                        WATERCOLOR
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-gray-600">
                        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-500 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-rose-600 mb-8 border border-rose-200/50"
                    >
                        <Palette className="w-4 h-4" />
                        {displayData.role}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-light mb-8 tracking-tight"
                        style={{
                            background: 'linear-gradient(135deg, #f472b6 0%, #fb923c 25%, #38bdf8 50%, #a78bfa 75%, #f472b6 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundSize: '200% 200%'
                        }}
                    >
                        {displayData.name}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        {displayData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center gap-4 mt-12"
                    >
                        <button className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-medium hover:shadow-lg hover:shadow-rose-300/50 transition-all">
                            View Work
                        </button>
                        <button className="px-8 py-3 bg-white/60 backdrop-blur-sm border border-gray-200 rounded-full font-medium hover:bg-white transition-all">
                            Contact Me
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-square bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200 rounded-3xl" />
                                <div className="absolute inset-4 bg-white/40 backdrop-blur-sm rounded-2xl" />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-light mb-6 text-gray-800">About Me</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                I believe in the power of soft, flowing aesthetics to create memorable digital experiences.
                                My work combines the organic beauty of watercolor art with modern interface design.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Based in {displayData.location}, I specialize in creating interfaces that feel natural,
                                intuitive, and visually stunning.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="py-32 px-6 bg-white/40 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-gray-800"
                    >
                        My Palette
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 bg-gradient-to-r from-rose-100 to-amber-100 rounded-full text-gray-700 font-medium border border-rose-200/50 hover:shadow-lg hover:shadow-rose-200/30 transition-all"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="work" className="py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-gray-800"
                    >
                        Selected Works
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`group bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/80 hover:shadow-xl hover:shadow-rose-200/30 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-video bg-gradient-to-br from-rose-200 via-amber-100 to-sky-200 rounded-2xl mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                                </div>
                                <h3 className="text-2xl font-medium mb-3 text-gray-800 group-hover:text-rose-500 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies?.map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-rose-100/50 text-rose-600 text-sm rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6 bg-white/40 backdrop-blur-sm">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-gray-800"
                    >
                        Experience
                    </motion.h2>
                    <div className="space-y-8">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/80"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-medium text-gray-800">{exp.position}</h3>
                                        <p className="text-rose-500">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-500">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-gray-600">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-gray-800"
                    >
                        Education
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80"
                            >
                                <h3 className="text-lg font-medium text-gray-800 mb-1">{edu.degree}</h3>
                                <p className="text-rose-500 mb-2">{edu.school}</p>
                                <p className="text-sm text-gray-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-gradient-to-br from-rose-100 via-amber-50 to-sky-100">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl font-light mb-8 text-gray-800"
                    >
                        Let's Create Together
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-600 mb-12"
                    >
                        Ready to paint your next digital masterpiece?
                    </motion.p>
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
                                className="p-4 bg-white/60 backdrop-blur-sm rounded-full border border-white/80 hover:shadow-lg hover:shadow-rose-200/30 transition-all text-gray-600 hover:text-rose-500"
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
