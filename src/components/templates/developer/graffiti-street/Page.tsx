'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Sparkles, Palette, Brush } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "STREET CODER",
    role: "Urban Developer",
    email: "dev@graffiti.io",
    phone: "+1 555 000 0000",
    location: "Brooklyn, NY",
    bio: "Dropping code like paint on concrete. Making the digital streets beautiful.",
    skills: ["React", "Node.js", "Python", "GraphQL", "MongoDB", "Docker", "AWS", "TypeScript"],
    experience: [{ company: "Underground Labs", position: "Lead Developer", startDate: "2020", endDate: "Present", description: "Painting the web with fire", highlights: [] }],
    education: [
        { school: "Brooklyn Tech", degree: "BS Computer Science", field: "CS", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "WILDSTYLE", description: "Generative art platform", technologies: ["Canvas", "WebGL"] },
        { name: "THROW UP", description: "Quick deploy CLI tool", technologies: ["Node.js", "Go"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Spray paint drip effect
const PaintDrip = ({ color, x, delay }: { color: string; x: string; delay: number }) => (
    <motion.div
        className="absolute top-0"
        style={{ left: x }}
        initial={{ height: 0 }}
        animate={{ height: [0, 100, 150, 100] }}
        transition={{ duration: 3, delay, repeat: Infinity }}
    >
        <div
            className="w-4 rounded-b-full"
            style={{
                height: '100%',
                background: `linear-gradient(180deg, ${color}, ${color}00)`
            }}
        />
        {/* Drip ball */}
        <motion.div
            className="w-4 h-4 rounded-full -mt-1"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.2, 0] }}
            transition={{ duration: 1, delay: delay + 2, repeat: Infinity }}
        />
    </motion.div>
);

// Graffiti letter effect
const GraffitiLetter = ({ letter, color, delay }: { letter: string; color: string; delay: number }) => (
    <motion.span
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: Math.random() * 10 - 5 }}
        transition={{ delay, type: "spring", bounce: 0.5 }}
        className="inline-block relative"
        style={{
            color,
            textShadow: `
                4px 4px 0 #000,
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                4px 0 0 #000,
                0 4px 0 #000,
                ${Math.random() > 0.5 ? '8px 8px 0 rgba(0,0,0,0.3)' : ''}
            `
        }}
    >
        {letter}
    </motion.span>
);

export default function GraffitiStreetPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const graffitiColors = ['#ff006e', '#fb5607', '#ffbe0b', '#8338ec', '#3a86ff', '#06d6a0'];

    return (
        <div className="min-h-screen overflow-hidden" style={{
            background: '#1a1a1a'
        }}>
            {/* Brick wall texture */}
            <div className="fixed inset-0 pointer-events-none opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 16h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-16h12v6H56v-6zm14 8h12v6H70v-6zm0 16h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23555' fill-opacity='0.5' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }} />

            {/* Spray can splatter decorations */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {graffitiColors.map((color, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full blur-3xl opacity-20"
                        style={{
                            background: color,
                            width: `${200 + Math.random() * 300}px`,
                            height: `${200 + Math.random() * 300}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                        }}
                    />
                ))}
            </div>

            {/* Paint drips at top */}
            <div className="fixed top-0 left-0 right-0 h-40 pointer-events-none">
                {graffitiColors.map((color, i) => (
                    <PaintDrip key={i} color={color} x={`${10 + i * 15}%`} delay={i * 0.5} />
                ))}
            </div>

            {/* Navigation - Spray paint style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6">
                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    className="max-w-4xl mx-auto bg-black/80 backdrop-blur-sm px-8 py-4 border-4 border-white transform -rotate-1"
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Sparkles className="w-8 h-8 text-pink-500" />
                            <span
                                className="text-2xl font-black text-white uppercase"
                                style={{
                                    textShadow: '3px 3px 0 #ff006e, -1px -1px 0 #ff006e'
                                }}
                            >
                                GRAFFITI
                            </span>
                        </div>
                        <div className="flex gap-6 text-sm font-bold uppercase tracking-wider">
                            {['Walls', 'Tags', 'Crew', 'Link'].map((item, i) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:-rotate-3 transition-transform"
                                    style={{ color: graffitiColors[i] }}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </nav>

            {/* Hero - Giant tag/piece */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
                <div className="text-center max-w-5xl mx-auto">
                    {/* Role badge */}
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 5 }}
                        className="inline-block mb-8"
                    >
                        <div
                            className="px-6 py-3 bg-black border-4 border-white transform"
                            style={{ textShadow: '2px 2px 0 #000' }}
                        >
                            <span className="text-yellow-400 font-black tracking-widest uppercase">
                                {displayData.role}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main name as graffiti */}
                    <motion.h1
                        className="text-6xl md:text-9xl font-black mb-8 tracking-tight"
                        style={{ fontFamily: 'Impact, sans-serif' }}
                    >
                        {displayData.name?.split('').map((letter, i) => (
                            <GraffitiLetter
                                key={i}
                                letter={letter === ' ' ? '\u00A0' : letter}
                                color={graffitiColors[i % graffitiColors.length]}
                                delay={i * 0.05}
                            />
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-xl text-white/70 max-w-xl mx-auto bg-black/50 p-4"
                    >
                        {displayData.bio}
                    </motion.p>

                    {/* Location tag */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="mt-8 inline-block"
                    >
                        <span className="text-white font-bold px-4 py-2 bg-pink-600 transform -rotate-2 inline-block">
                            📍 {displayData.location}
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* About - On a "wall" */}
            <section id="walls" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-zinc-800 p-12 border-8 border-zinc-700 transform -rotate-1"
                    >
                        {/* Stencil-style text */}
                        <div className="flex items-center gap-4 mb-8">
                            <Palette className="w-12 h-12 text-pink-500" />
                            <h2
                                className="text-4xl font-black text-white uppercase"
                                style={{
                                    textShadow: '4px 4px 0 #ff006e'
                                }}
                            >
                                MY STORY
                            </h2>
                        </div>

                        {/* Paint splatters */}
                        <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-80" style={{ background: graffitiColors[0] }} />
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-60" style={{ background: graffitiColors[3] }} />

                        <p className="text-white/80 leading-relaxed text-lg relative z-10">
                            Started on the streets, now I code for the world. Just like a good piece takes planning,
                            sketching, and execution, my code is built layer by layer with intention and style.
                            Every project is my wall, every function is my tag. I don't just write code—I bomb
                            the digital landscape with creativity. Currently repping {displayData.location}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Spray cans */}
            <section id="crew" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl font-black text-center mb-4 text-white uppercase"
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '4px 4px 0 #ff006e, 8px 8px 0 rgba(0,0,0,0.3)'
                        }}
                    >
                        MY CANS
                    </motion.h2>
                    <p className="text-center text-white/50 mb-16 uppercase tracking-widest">THE TOOLS OF THE TRADE</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 30, rotate: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotate: Math.random() * 6 - 3 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 0 }}
                                className="relative cursor-pointer group"
                            >
                                {/* Spray can shape */}
                                <div className="relative">
                                    {/* Cap */}
                                    <div
                                        className="w-8 h-6 mx-auto rounded-t-lg"
                                        style={{ backgroundColor: graffitiColors[i % graffitiColors.length] }}
                                    />
                                    {/* Body */}
                                    <div
                                        className="h-32 rounded-lg border-4 border-black flex items-center justify-center relative overflow-hidden"
                                        style={{ backgroundColor: `${graffitiColors[i % graffitiColors.length]}cc` }}
                                    >
                                        {/* Label */}
                                        <div className="absolute inset-x-2 bg-white/90 py-4">
                                            <span className="text-black font-black text-center block uppercase text-sm">
                                                {skill}
                                            </span>
                                        </div>
                                        {/* Shine */}
                                        <div className="absolute left-1 top-0 bottom-0 w-3 bg-white/20 rounded-l" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Tagged walls */}
            <section id="tags" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl font-black text-center mb-16 text-white uppercase"
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '4px 4px 0 #3a86ff'
                        }}
                    >
                        PIECES
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className={`group relative bg-zinc-900 border-8 border-black overflow-hidden transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Graffiti header */}
                                <div
                                    className="h-40 flex items-center justify-center relative"
                                    style={{
                                        background: `linear-gradient(135deg, ${graffitiColors[i * 2]}40, ${graffitiColors[i * 2 + 1]}40)`
                                    }}
                                >
                                    {/* Project name as graffiti */}
                                    <span
                                        className="text-4xl font-black text-white uppercase relative z-10"
                                        style={{
                                            fontFamily: 'Impact, sans-serif',
                                            textShadow: `3px 3px 0 ${graffitiColors[i * 2]}, 6px 6px 0 #000`
                                        }}
                                    >
                                        {project.name}
                                    </span>
                                    {/* Drips */}
                                    <div className="absolute bottom-0 left-0 right-0 h-8">
                                        {[...Array(8)].map((_, j) => (
                                            <div
                                                key={j}
                                                className="absolute bottom-0 w-2 rounded-b-full"
                                                style={{
                                                    left: `${10 + j * 12}%`,
                                                    height: `${20 + Math.random() * 30}px`,
                                                    background: graffitiColors[(i + j) % graffitiColors.length]
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="p-8">
                                    <p className="text-white/70 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 font-bold text-white text-sm uppercase transform -rotate-1"
                                                style={{ backgroundColor: graffitiColors[(i + j) % graffitiColors.length] }}
                                            >
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
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl font-black text-center mb-16 text-white uppercase"
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '4px 4px 0 #ffbe0b'
                        }}
                    >
                        HISTORY
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-8"
                            style={{ borderColor: graffitiColors[i % graffitiColors.length] }}
                        >
                            <div
                                className="absolute left-0 top-0 -translate-x-[20px] w-8 h-8 rounded-full"
                                style={{ backgroundColor: graffitiColors[i % graffitiColors.length] }}
                            />
                            <div className="bg-black/80 border-4 border-white p-6 transform -rotate-1">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-black text-white uppercase">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-pink-600 text-white text-sm">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-yellow-400 font-bold mb-2">{exp.company}</p>
                                <p className="text-white/60">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl font-black text-center mb-16 text-white uppercase"
                        style={{
                            fontFamily: 'Impact, sans-serif',
                            textShadow: '4px 4px 0 #06d6a0'
                        }}
                    >
                        SCHOOL
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, rotate: -5 }}
                                whileInView={{ opacity: 1, rotate: Math.random() * 4 - 2 }}
                                viewport={{ once: true }}
                                className="bg-black/80 border-4 border-white p-6"
                            >
                                <Brush className="w-8 h-8 text-pink-500 mb-4" />
                                <h3 className="text-lg font-black text-white uppercase">{edu.degree}</h3>
                                <p className="text-yellow-400">{edu.school}</p>
                                <p className="text-sm text-white/50">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="link" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Sparkles className="w-20 h-20 text-pink-500 mx-auto mb-8" />
                        </motion.div>
                        <h2
                            className="text-5xl font-black mb-6 text-white uppercase"
                            style={{
                                fontFamily: 'Impact, sans-serif',
                                textShadow: '4px 4px 0 #ff006e'
                            }}
                        >
                            HIT ME UP
                        </h2>
                        <p className="text-white/50 mb-12 uppercase tracking-widest">
                            Let's make something dope
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, color: graffitiColors[0] },
                                { icon: Github, href: displayData.links.github, color: graffitiColors[3] },
                                { icon: Linkedin, href: displayData.links.linkedin, color: graffitiColors[4] }
                            ].map(({ icon: Icon, href, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="p-4 border-4 border-black transform"
                                    style={{
                                        backgroundColor: color,
                                        rotate: `${Math.random() * 10 - 5}deg`
                                    }}
                                >
                                    <Icon className="w-8 h-8 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
