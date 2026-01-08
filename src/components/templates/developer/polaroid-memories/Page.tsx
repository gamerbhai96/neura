'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Camera, Heart, Image } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Snapshot Dev",
    role: "Creative Developer",
    email: "dev@polaroid.io",
    phone: "+1 555 000 0000",
    location: "Brooklyn, NY",
    bio: "Capturing moments in code. Every project is a memory worth preserving forever.",
    skills: ["React", "Vue.js", "TypeScript", "CSS", "Photography", "Figma", "Video Editing", "Motion Graphics"],
    experience: [{ company: "Memory Studios", position: "Creative Developer", startDate: "2020", endDate: "Present", description: "Building visual experiences", highlights: [] }],
    education: [
        { school: "Visual Arts College", degree: "BFA Photography", field: "Visual Arts", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Frames", description: "Photo gallery application", technologies: ["React", "Cloudinary"] },
        { name: "Memories", description: "Digital scrapbook platform", technologies: ["Vue.js", "Firebase"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function PolaroidMemoriesPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-amber-50 text-stone-800 font-sans overflow-hidden">
            {/* Cork board texture */}
            <div className="fixed inset-0 pointer-events-none opacity-20" style={{
                backgroundColor: '#c4a574',
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`
            }} />

            {/* String lights decoration */}
            <div className="fixed top-0 left-0 right-0 h-20 pointer-events-none flex justify-around items-start pt-2">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="w-3 h-3 rounded-full bg-amber-400 shadow-lg shadow-amber-400/50"
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold text-stone-700 flex items-center gap-2" style={{ fontFamily: 'Caveat, cursive' }}>
                        <Camera className="w-5 h-5 text-rose-500" />
                        Polaroid
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-stone-600">
                        {['About', 'Gallery', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-500 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
                <div className="max-w-5xl mx-auto relative">
                    {/* Main polaroid frame */}
                    <motion.div
                        initial={{ opacity: 0, rotate: -5, y: 50 }}
                        animate={{ opacity: 1, rotate: -3, y: 0 }}
                        className="bg-white p-4 pb-16 shadow-2xl relative"
                        style={{ maxWidth: '500px', margin: '0 auto' }}
                    >
                        {/* Photo area */}
                        <div className="aspect-square bg-gradient-to-br from-rose-100 to-amber-100 flex items-center justify-center">
                            <Camera className="w-24 h-24 text-rose-300" />
                        </div>

                        {/* Handwritten text area */}
                        <div className="mt-4 text-center" style={{ fontFamily: 'Caveat, cursive' }}>
                            <h1 className="text-4xl md:text-5xl text-stone-800 mb-2">{displayData.name}</h1>
                            <p className="text-xl text-rose-500">{displayData.role}</p>
                        </div>

                        {/* Tape decoration */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-200/80 rotate-2" />
                    </motion.div>

                    {/* Side polaroids */}
                    <motion.div
                        initial={{ opacity: 0, rotate: 10 }}
                        animate={{ opacity: 1, rotate: 8 }}
                        transition={{ delay: 0.2 }}
                        className="absolute -right-20 top-10 bg-white p-3 pb-12 shadow-lg hidden md:block"
                        style={{ width: '180px' }}
                    >
                        <div className="aspect-square bg-gradient-to-br from-sky-100 to-teal-100" />
                        <p className="text-center mt-2 text-sm text-stone-600" style={{ fontFamily: 'Caveat, cursive' }}>Coding ✨</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: -15 }}
                        animate={{ opacity: 1, rotate: -12 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -left-16 top-20 bg-white p-3 pb-12 shadow-lg hidden md:block"
                        style={{ width: '160px' }}
                    >
                        <div className="aspect-square bg-gradient-to-br from-violet-100 to-pink-100" />
                        <p className="text-center mt-2 text-sm text-stone-600" style={{ fontFamily: 'Caveat, cursive' }}>Design 💕</p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-20 left-1/2 -translate-x-1/2 text-lg text-stone-600 text-center max-w-xl px-6"
                    style={{ fontFamily: 'Caveat, cursive', fontSize: '1.5rem' }}
                >
                    {displayData.bio}
                </motion.p>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 bg-white/50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl text-stone-800 mb-8" style={{ fontFamily: 'Caveat, cursive' }}>About Me</h2>
                        <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                            Just like a Polaroid captures a moment in time, I capture ideas in code.
                            Every project is a snapshot of creativity, preserved for the digital world.
                            Based in {displayData.location}, I love turning creative visions into tangible experiences.
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
                        className="text-4xl text-center text-stone-800 mb-16"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        My Skills 📸
                    </motion.h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, rotate: 0 }}
                                className="bg-white px-6 py-3 shadow-md"
                                style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="gallery" className="py-32 px-6 bg-white/50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl text-center text-stone-800 mb-16"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Project Gallery 🖼️
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, rotate: i % 2 === 0 ? -5 : 5, y: 30 }}
                                whileInView={{ opacity: 1, rotate: i % 2 === 0 ? -3 : 3, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className={`bg-white p-4 pb-16 shadow-xl ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="aspect-square bg-gradient-to-br from-rose-100 via-amber-50 to-sky-100 flex items-center justify-center">
                                    <Image className="w-16 h-16 text-rose-300" />
                                </div>
                                <div className="mt-4 text-center" style={{ fontFamily: 'Caveat, cursive' }}>
                                    <h3 className="text-2xl text-stone-800 mb-1">{project.name}</h3>
                                    <p className="text-stone-600 mb-3">{project.description}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-rose-100 text-rose-600 text-sm rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {/* Tape */}
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 bg-amber-200/80" style={{ transform: `translateX(-50%) rotate(${i % 2 === 0 ? -5 : 5}deg)` }} />
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
                        className="text-4xl text-center text-stone-800 mb-16"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Work Experience 💼
                    </motion.h2>
                    <div className="space-y-6">
                        {displayData.experience.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 shadow-md rounded-lg"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4 mb-2">
                                    <div>
                                        <h3 className="text-xl font-medium text-stone-800">{exp.position}</h3>
                                        <p className="text-rose-500">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-stone-500">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-stone-600">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 bg-white/50">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl text-center text-stone-800 mb-16"
                        style={{ fontFamily: 'Caveat, cursive' }}
                    >
                        Education 🎓
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 shadow-md rounded-lg text-center"
                            >
                                <h3 className="text-lg font-medium text-stone-800 mb-1">{edu.degree}</h3>
                                <p className="text-rose-500 mb-2">{edu.school}</p>
                                <p className="text-sm text-stone-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 bg-gradient-to-t from-rose-100 to-amber-50">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6" />
                        <h2 className="text-5xl text-stone-800 mb-8" style={{ fontFamily: 'Caveat, cursive' }}>Let's Create Memories!</h2>
                        <p className="text-xl text-stone-600 mb-12">
                            Ready to capture your next project together?
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
                                className="p-4 bg-white shadow-md rounded-full hover:shadow-lg hover:bg-rose-50 transition-all"
                            >
                                <Icon className="w-6 h-6 text-rose-500" />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
