'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Sparkles, Hexagon, CircleDot, Droplet } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Glass Dev",
    role: "UI Engineer",
    email: "dev@glass.io",
    phone: "+1 555 000 0000",
    location: "Frosted City",
    bio: "Crafting transparent elegance with depth and blur.",
    skills: ["React", "TypeScript", "CSS", "Motion", "Three.js", "Tailwind", "Figma", "Design Systems"],
    experience: [{ company: "Frost Labs", position: "Design Engineer", startDate: "2020", endDate: "Present", description: "Building frosted interfaces", highlights: [] }],
    education: [
        { school: "Design Academy", degree: "BFA Interface Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "FrostUI", description: "Glassmorphism component lib", technologies: ["React", "CSS"] },
        { name: "BlurBox", description: "Frosted glass toolkit", technologies: ["Tailwind", "Motion"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Floating orb with glow
const FloatingOrb = ({ color, size, x, y, blur, delay }: {
    color: string; size: number; x: string; y: string; blur: number; delay: number
}) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            background: color,
            filter: `blur(${blur}px)`
        }}
        animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
            duration: 15 + delay * 3,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    />
);

// Frosted glass panel
const FrostPanel = ({ children, className = '', intensity = 'medium' }: {
    children: React.ReactNode;
    className?: string;
    intensity?: 'light' | 'medium' | 'strong';
}) => {
    const blurMap = { light: 'blur-lg', medium: 'blur-xl', strong: 'blur-2xl' };
    const opacityMap = { light: '0.1', medium: '0.15', strong: '0.2' };

    return (
        <div className={`relative ${className}`}>
            {/* Glass effect */}
            <div
                className={`absolute inset-0 ${blurMap[intensity]} rounded-[inherit]`}
                style={{
                    background: `rgba(255,255,255,${opacityMap[intensity]})`,
                    backdropFilter: 'blur(20px) saturate(180%)'
                }}
            />
            {/* Border glow */}
            <div
                className="absolute inset-0 rounded-[inherit] pointer-events-none"
                style={{
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 10px 40px -10px rgba(0,0,0,0.3)'
                }}
            />
            {/* Top highlight */}
            <div
                className="absolute top-0 left-[10%] right-[10%] h-px rounded-[inherit]"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

// Hexagonal pattern background
const HexPattern = () => (
    <div className="fixed inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%">
            <defs>
                <pattern id="hexagons" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                    <polygon
                        points="28,1 54,15 54,43 28,57 2,43 2,15"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                    <polygon
                        points="28,57 54,71 54,99 28,113 2,99 2,71"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                    />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
    </div>
);

// Water droplet decoration
const WaterDroplet = ({ x, delay }: { x: string; delay: number }) => (
    <motion.div
        className="absolute top-0 pointer-events-none"
        style={{ left: x }}
        initial={{ y: -20, opacity: 0 }}
        animate={{
            y: [0, 100],
            opacity: [0, 1, 1, 0]
        }}
        transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            repeatDelay: 5
        }}
    >
        <Droplet className="w-4 h-4 text-white/30 fill-white/10" />
    </motion.div>
);

export default function GlassmorphismPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden" style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 25%, #4c1d95 50%, #581c87 75%, #701a75 100%)'
        }}>
            {/* Floating orbs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <FloatingOrb color="#8b5cf6" size={400} x="-5%" y="10%" blur={80} delay={0} />
                <FloatingOrb color="#ec4899" size={350} x="70%" y="5%" blur={70} delay={2} />
                <FloatingOrb color="#06b6d4" size={300} x="20%" y="60%" blur={60} delay={1} />
                <FloatingOrb color="#f97316" size={250} x="75%" y="55%" blur={50} delay={3} />
                <FloatingOrb color="#22c55e" size={200} x="40%" y="30%" blur={40} delay={1.5} />
            </div>

            {/* Hex pattern */}
            <HexPattern />

            {/* Water droplets */}
            <div className="fixed inset-0 pointer-events-none">
                <WaterDroplet x="15%" delay={0} />
                <WaterDroplet x="45%" delay={2} />
                <WaterDroplet x="75%" delay={4} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <FrostPanel className="rounded-2xl px-8 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 360] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Hexagon className="w-8 h-8 text-white/80" />
                                </motion.div>
                                <span className="text-2xl font-bold tracking-wider text-white">FROST</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/60">
                                {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </FrostPanel>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Frosted circular frame */}
                        <motion.div
                            className="w-48 h-48 mx-auto mb-12 relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <FrostPanel className="absolute inset-0 rounded-full" intensity="strong">
                                <div className="w-full h-full flex items-center justify-center">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Sparkles className="w-16 h-16 text-white/70" />
                                    </motion.div>
                                </div>
                            </FrostPanel>
                            {/* Orbiting dots */}
                            {[0, 1, 2, 3].map((i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-3 h-3 bg-white/60 rounded-full"
                                    style={{
                                        top: '50%',
                                        left: '50%',
                                        marginTop: -6,
                                        marginLeft: -6
                                    }}
                                    animate={{
                                        x: [
                                            Math.cos((i * Math.PI) / 2) * 80,
                                            Math.cos((i * Math.PI) / 2 + Math.PI) * 80
                                        ],
                                        y: [
                                            Math.sin((i * Math.PI) / 2) * 80,
                                            Math.sin((i * Math.PI) / 2 + Math.PI) * 80
                                        ]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: i * 0.5 }}
                                />
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <FrostPanel className="inline-block rounded-full px-6 py-3 mb-8">
                                <div className="flex items-center gap-2">
                                    <CircleDot className="w-4 h-4 text-purple-300" />
                                    <span className="text-purple-200">{displayData.role}</span>
                                </div>
                            </FrostPanel>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-white drop-shadow-2xl">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-white/70 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <motion.a
                                href="#work"
                                className="px-8 py-4 bg-white/20 backdrop-blur-xl rounded-full font-bold hover:bg-white/30 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                View Projects
                            </motion.a>
                            <motion.a
                                href="#contact"
                                className="px-8 py-4 border border-white/30 rounded-full font-bold hover:bg-white/10 transition-all"
                                whileHover={{ scale: 1.05 }}
                            >
                                Contact
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <FrostPanel className="rounded-3xl p-12" intensity="medium">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur">
                                    <Droplet className="w-6 h-6 text-white/80" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">Behind The Glass</h2>
                            </div>
                            <p className="text-white/70 leading-relaxed text-lg">
                                Like morning frost on a window, I find beauty in the interplay of clarity and blur.
                                My designs layer transparency and depth to create interfaces that feel ethereal yet
                                grounded. Every frosted panel, every subtle glow is crafted to guide users through
                                an experience that's both modern and timeless. Currently crafting from {displayData.location}.
                            </p>
                            {/* Decorative line */}
                            <div className="mt-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </FrostPanel>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Frosted tiles */}
            <section id="skills" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Tech Stack
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <FrostPanel className="rounded-2xl p-6 text-center cursor-pointer h-full" intensity="light">
                                    <motion.div
                                        className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center"
                                        whileHover={{ rotate: 10 }}
                                    >
                                        <span className="text-xl">{['⚛️', '📘', '🎨', '✨', '🔮', '💨', '🎯', '📐'][i % 8]}</span>
                                    </motion.div>
                                    <span className="font-bold text-white/90">{skill}</span>
                                </FrostPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="work" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Selected Work
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={project.url || project.github ? 'cursor-pointer' : ''}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <FrostPanel className="rounded-3xl overflow-hidden group" intensity="medium">
                                    {/* Preview area */}
                                    <div
                                        className="h-48 relative overflow-hidden"
                                        style={{
                                            background: i === 0
                                                ? 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(236,72,153,0.4))'
                                                : 'linear-gradient(135deg, rgba(6,182,212,0.4), rgba(34,197,94,0.4))'
                                        }}
                                    >
                                        {/* Floating shapes */}
                                        <motion.div
                                            className="absolute w-32 h-32 rounded-full bg-white/10 backdrop-blur-xl"
                                            style={{ top: '20%', left: '20%' }}
                                            animate={{ y: [0, -20, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        />
                                        <motion.div
                                            className="absolute w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-xl"
                                            style={{ bottom: '10%', right: '20%' }}
                                            animate={{ y: [0, 20, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        />
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-white/60 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-sm text-white/80 bg-white/10 rounded-full backdrop-blur">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </FrostPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white"
                    >
                        Experience
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <FrostPanel className="rounded-2xl p-6" intensity="light">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <div className="px-4 py-1 bg-white/10 rounded-full backdrop-blur text-white/70 text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </div>
                                </div>
                                <p className="text-purple-300 mb-2">{exp.company}</p>
                                <p className="text-white/60">{exp.description}</p>
                            </FrostPanel>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white"
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
                            >
                                <FrostPanel className="rounded-2xl p-6" intensity="light">
                                    <span className="text-3xl block mb-4">🎓</span>
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-purple-300">{edu.school}</p>
                                    <p className="text-sm text-white/50">{edu.startDate} - {edu.endDate}</p>
                                </FrostPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <FrostPanel className="rounded-3xl p-12" intensity="medium">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Droplet className="w-16 h-16 text-white/70 mx-auto mb-8" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 text-white">Get In Touch</h2>
                            <p className="text-white/60 mb-8">
                                Ready to create something beautifully transparent?
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
                                        whileHover={{ scale: 1.1, y: -5 }}
                                    >
                                        <FrostPanel className="p-4 rounded-xl" intensity="light">
                                            <Icon className="w-6 h-6 text-white/80" />
                                        </FrostPanel>
                                    </motion.a>
                                ))}
                            </div>
                        </FrostPanel>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
