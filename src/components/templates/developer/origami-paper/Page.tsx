'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Paper Artist",
    role: "Frontend Developer",
    email: "dev@origami.io",
    phone: "+1 555 000 0000",
    location: "Kyoto, Japan",
    bio: "Folding code into beautiful digital creations. Every crease tells a story.",
    skills: ["React", "Vue", "TypeScript", "CSS", "Figma", "Three.js", "GSAP", "Tailwind"],
    experience: [{ company: "Paper Studios", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Crafting delicate interfaces", highlights: [] }],
    education: [
        { school: "Tokyo University", degree: "BFA Digital Art", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Fold", description: "Interactive origami tutorial app", technologies: ["React", "Three.js"] },
        { name: "Crease", description: "Paper-inspired design system", technologies: ["CSS", "Storybook"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Origami crane SVG component
const OrigamiCrane = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
        <polygon points="50,10 90,50 50,90 10,50" opacity="0.3" />
        <polygon points="50,20 80,50 50,80 20,50" opacity="0.5" />
        <polygon points="50,30 70,50 50,70 30,50" opacity="0.8" />
    </svg>
);

export default function OrigamiPaperPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const foldColors = ['#fce7f3', '#fbcfe8', '#f9a8d4', '#f472b6', '#ec4899'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 text-stone-800 overflow-hidden">
            {/* Washi paper texture */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f9a8d4' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Floating origami elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + (i % 3) * 25}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.5
                        }}
                    >
                        <OrigamiCrane className={`w-8 h-8 text-pink-${300 + (i % 3) * 100}`} />
                    </motion.div>
                ))}
            </div>

            {/* Navigation - Paper strip style */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="bg-white/80 backdrop-blur-sm px-8 py-3 shadow-lg"
                    style={{
                        clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)'
                    }}
                >
                    <div className="flex gap-8 text-sm font-medium text-stone-600">
                        {['About', 'Work', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-pink-500 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </nav>

            {/* Hero - Giant folded paper */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="max-w-4xl mx-auto text-center relative">
                    {/* Layered paper effect */}
                    <motion.div
                        initial={{ scale: 0, rotate: 45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]"
                    >
                        {foldColors.map((color, i) => (
                            <motion.div
                                key={i}
                                className="absolute inset-0"
                                style={{
                                    backgroundColor: color,
                                    transform: `rotate(${i * 15}deg) scale(${1 - i * 0.1})`,
                                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                                }}
                                animate={{ rotate: [i * 15, i * 15 + 5, i * 15] }}
                                transition={{ duration: 4, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </motion.div>

                    <div className="relative z-10">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-pink-500 font-medium mb-4 tracking-widest uppercase text-sm"
                        >
                            {displayData.role}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-light mb-6 text-stone-800"
                            style={{ fontFamily: 'Georgia, serif' }}
                        >
                            {displayData.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-stone-600 max-w-md mx-auto"
                        >
                            {displayData.bio}
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* About - Folded card */}
            <section id="about" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, rotateY: -30 }}
                        whileInView={{ opacity: 1, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                        style={{ perspective: '1000px' }}
                    >
                        {/* Folded corner effect */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-pink-200 to-pink-300 z-10"
                            style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                        />
                        <div className="bg-white p-12 shadow-2xl relative"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 6rem) 0, 100% 6rem, 100% 100%, 0 100%)' }}
                        >
                            <h2 className="text-3xl font-light mb-6 text-stone-800" style={{ fontFamily: 'Georgia, serif' }}>
                                The Art of Folding
                            </h2>
                            <p className="text-stone-600 leading-relaxed text-lg">
                                Like the ancient art of origami, I believe in creating beauty through careful, deliberate folds.
                                Each project begins as a blank sheet—full of possibility. Through patience and precision,
                                I transform ideas into digital experiences that are both elegant and functional.
                                Based in {displayData.location}, I bring Eastern aesthetics to Western technology.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Paper strips */}
            <section id="skills" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-stone-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Paper Strips
                    </motion.h2>
                    <div className="space-y-3">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative"
                            >
                                <div
                                    className="py-4 px-8 text-stone-700 font-medium shadow-md"
                                    style={{
                                        background: `linear-gradient(135deg, ${foldColors[i % foldColors.length]}, ${foldColors[(i + 1) % foldColors.length]})`,
                                        clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%, 20px 50%)',
                                        marginLeft: `${(i % 3) * 40}px`
                                    }}
                                >
                                    {skill}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Origami cards */}
            <section id="work" className="py-32 px-6 bg-white/50">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-stone-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Crafted Works
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                whileHover={{ y: -10, rotateZ: i % 2 === 0 ? 2 : -2 }}
                                className={`group relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Multi-layer paper effect */}
                                <div className="absolute inset-0 bg-pink-100 transform rotate-3 shadow-lg" />
                                <div className="absolute inset-0 bg-rose-50 transform -rotate-1 shadow-lg" />
                                <div className="relative bg-white p-8 shadow-xl">
                                    {/* Folded corner */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-200"
                                        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                    />

                                    <div className="mb-6">
                                        <OrigamiCrane className="w-16 h-16 text-pink-300 group-hover:text-pink-500 transition-colors" />
                                    </div>
                                    <h3 className="text-2xl font-light mb-3 text-stone-800 group-hover:text-pink-600 transition-colors"
                                        style={{ fontFamily: 'Georgia, serif' }}>
                                        {project.name}
                                    </h3>
                                    <p className="text-stone-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-pink-50 text-pink-600 text-sm border border-pink-200">
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
            <section className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-stone-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Journey
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-8 border-l-2 border-pink-200 pb-8"
                        >
                            <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-pink-400 transform rotate-45" />
                            <div className="bg-white p-6 shadow-lg">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-medium text-stone-800">{exp.position}</h3>
                                    <span className="text-sm text-pink-500">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-pink-600 mb-2">{exp.company}</p>
                                <p className="text-stone-600">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 bg-white/50">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-stone-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Education
                    </motion.h2>
                    <div className="grid gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 shadow-lg relative"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 2rem) 0, 100% 2rem, 100% 100%, 0 100%)' }}
                            >
                                <div className="absolute top-0 right-0 w-8 h-8 bg-pink-100"
                                    style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                                />
                                <h3 className="text-lg font-medium text-stone-800">{edu.degree}</h3>
                                <p className="text-pink-600">{edu.school}</p>
                                <p className="text-sm text-stone-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <OrigamiCrane className="w-24 h-24 text-pink-400 mx-auto mb-8" />
                        <h2 className="text-4xl font-light mb-6 text-stone-800" style={{ fontFamily: 'Georgia, serif' }}>
                            Let's Create Together
                        </h2>
                        <p className="text-stone-600 mb-8">
                            Every masterpiece begins with a single fold
                        </p>
                        <div className="flex justify-center gap-4">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}` },
                                { icon: Github, href: displayData.links.github },
                                { icon: Linkedin, href: displayData.links.linkedin }
                            ].map(({ icon: Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -5, rotate: 5 }}
                                    className="p-4 bg-white shadow-lg hover:shadow-xl transition-shadow"
                                    style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                                >
                                    <Icon className="w-5 h-5 text-pink-500" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
