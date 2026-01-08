'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Droplets, Waves, Beaker, FlaskConical } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Fluid Dev",
    role: "Creative Engineer",
    email: "dev@liquid.io",
    phone: "+1 555 000 0000",
    location: "Flow State",
    bio: "Creating interfaces that flow like water. Smooth, natural, unstoppable.",
    skills: ["React", "Animation", "WebGL", "Three.js", "GSAP", "Framer Motion", "CSS", "Canvas"],
    experience: [{ company: "Flow Labs", position: "Motion Engineer", startDate: "2020", endDate: "Present", description: "Building fluid experiences", highlights: [] }],
    education: [
        { school: "Motion University", degree: "BA Interactive Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Ripple", description: "Fluid interaction library", technologies: ["WebGL", "GLSL"] },
        { name: "Stream", description: "Real-time data flow viz", technologies: ["D3", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Oil/lava lamp blob
const LiquidBlob = ({ color, size, x, y, speed }: {
    color: string; size: number; x: string; y: string; speed: number
}) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            background: color,
            filter: 'blur(2px)'
        }}
        animate={{
            y: [0, -100, 0],
            scale: [1, 1.3, 0.8, 1.1, 1],
            borderRadius: ['50%', '40% 60% 60% 40%', '60% 40% 40% 60%', '50%']
        }}
        transition={{
            duration: speed,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

// Bubble rising effect
const Bubble = ({ delay, x }: { delay: number; x: string }) => (
    <motion.div
        className="absolute bottom-0 rounded-full pointer-events-none"
        style={{
            left: x,
            width: 10 + Math.random() * 20,
            height: 10 + Math.random() * 20,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,255,255,0.1))',
            border: '1px solid rgba(255,255,255,0.2)'
        }}
        animate={{
            y: [0, '-100vh'],
            x: [0, Math.sin(delay) * 30, 0],
            scale: [0.5, 1, 0.8, 1]
        }}
        transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay,
            ease: "easeOut"
        }}
    />
);

// Metaball SVG filter
const MetaballFilter = () => (
    <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
            <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            </filter>
        </defs>
    </svg>
);

// Liquid container
const LiquidTank = ({ children, fillColor, level }: {
    children: React.ReactNode; fillColor: string; level: string
}) => (
    <div className="relative rounded-3xl overflow-hidden border-4 border-white/10"
        style={{ background: 'rgba(0,0,0,0.3)' }}>
        {/* Liquid fill */}
        <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{
                height: level,
                background: fillColor,
            }}
            animate={{
                height: [level, `calc(${level} + 2%)`, level]
            }}
            transition={{ duration: 3, repeat: Infinity }}
        >
            {/* Wave surface */}
            <svg className="absolute top-0 left-0 w-full h-8 -translate-y-1/2" viewBox="0 0 1200 50" preserveAspectRatio="none">
                <motion.path
                    d="M0,25 Q150,50 300,25 T600,25 T900,25 T1200,25 L1200,50 L0,50 Z"
                    fill={fillColor}
                    animate={{
                        d: [
                            "M0,25 Q150,50 300,25 T600,25 T900,25 T1200,25 L1200,50 L0,50 Z",
                            "M0,25 Q150,0 300,25 T600,25 T900,25 T1200,25 L1200,50 L0,50 Z"
                        ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
            </svg>
        </motion.div>
        <div className="relative z-10">{children}</div>
    </div>
);

// Drip animation
const Drip = ({ color, x, delay }: { color: string; x: string; delay: number }) => (
    <motion.div
        className="absolute top-0 pointer-events-none"
        style={{ left: x }}
        initial={{ y: 0, scaleY: 1 }}
        animate={{
            y: [0, 20, 100],
            scaleY: [1, 1.5, 0.5],
            opacity: [1, 1, 0]
        }}
        transition={{
            duration: 2,
            repeat: Infinity,
            delay,
            repeatDelay: 3
        }}
    >
        <div
            className="w-3 h-8 rounded-full"
            style={{ background: color }}
        />
    </motion.div>
);

export default function LiquidFluidPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2a 100%)'
        }}>
            {/* Metaball filter */}
            <MetaballFilter />

            {/* Large liquid blobs in background */}
            <div className="fixed inset-0 pointer-events-none" style={{ filter: 'url(#goo)' }}>
                <LiquidBlob color="rgba(59, 130, 246, 0.4)" size={300} x="5%" y="10%" speed={12} />
                <LiquidBlob color="rgba(168, 85, 247, 0.4)" size={250} x="70%" y="20%" speed={15} />
                <LiquidBlob color="rgba(236, 72, 153, 0.4)" size={200} x="30%" y="60%" speed={10} />
                <LiquidBlob color="rgba(34, 211, 238, 0.4)" size={280} x="80%" y="50%" speed={14} />
            </div>

            {/* Rising bubbles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <Bubble key={i} delay={i * 0.5} x={`${Math.random() * 100}%`} />
                ))}
            </div>

            {/* Dripping effect from top */}
            <div className="fixed top-0 left-0 right-0 pointer-events-none">
                <Drip color="rgba(59, 130, 246, 0.8)" x="15%" delay={0} />
                <Drip color="rgba(168, 85, 247, 0.8)" x="45%" delay={1.5} />
                <Drip color="rgba(236, 72, 153, 0.8)" x="75%" delay={3} />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <LiquidTank fillColor="rgba(59, 130, 246, 0.3)" level="100%">
                        <div className="px-8 py-4">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <motion.div
                                        animate={{ rotate: [0, 360] }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Droplets className="w-8 h-8 text-blue-400" />
                                    </motion.div>
                                    <span className="text-2xl font-bold tracking-wider text-blue-300">LIQUID</span>
                                </div>
                                <div className="flex gap-8 text-sm font-medium text-white/60">
                                    {['Flow', 'Mix', 'Pour', 'Fill'].map((item) => (
                                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </LiquidTank>
                </div>
            </nav>

            {/* Hero - Beaker/flask style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Flask decoration */}
                        <motion.div
                            className="w-40 h-56 mx-auto mb-12 relative"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            {/* Flask body */}
                            <div className="absolute bottom-0 w-full h-40 rounded-b-full bg-white/5 border-2 border-white/20 overflow-hidden">
                                {/* Liquid fill */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0"
                                    style={{
                                        height: '60%',
                                        background: 'linear-gradient(0deg, #3b82f6, #a855f7)'
                                    }}
                                    animate={{ height: ['55%', '65%', '55%'] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    {/* Bubbles in liquid */}
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-2 h-2 rounded-full bg-white/30"
                                            style={{ left: `${20 + i * 15}%`, bottom: '10%' }}
                                            animate={{ y: [0, -40], opacity: [1, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                            {/* Flask neck */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-white/5 border-2 border-white/20 border-b-0 rounded-t-lg" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/20 rounded-full border border-blue-400/30 mb-8"
                        >
                            <Beaker className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-300">{displayData.role}</span>
                        </motion.div>

                        <h1
                            className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #3b82f6, #a855f7, #ec4899)',
                                backgroundSize: '200% 200%',
                                animation: 'liquid-flow 4s ease infinite'
                            }}
                        >
                            {displayData.name}
                        </h1>

                        <style jsx>{`
                            @keyframes liquid-flow {
                                0%, 100% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                            }
                        `}</style>

                        <p className="text-xl text-blue-100/60 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#pour"
                                className="px-8 py-4 rounded-full font-bold text-white"
                                style={{ background: 'linear-gradient(90deg, #3b82f6, #a855f7)' }}
                            >
                                View Work
                            </a>
                            <a
                                href="#fill"
                                className="px-8 py-4 rounded-full font-bold border border-blue-400/30 hover:bg-blue-500/20 transition-all"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="flow" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <LiquidTank fillColor="rgba(168, 85, 247, 0.3)" level="40%">
                            <div className="p-12">
                                <div className="flex items-center gap-4 mb-8">
                                    <FlaskConical className="w-10 h-10 text-purple-400" />
                                    <h2 className="text-3xl font-bold text-purple-300">The Flow State</h2>
                                </div>
                                <p className="text-purple-100/60 leading-relaxed text-lg">
                                    Like water finding its path, I create interfaces that flow naturally and
                                    effortlessly. My approach blends fluid animations with intuitive interactions,
                                    creating experiences that feel alive and responsive. Every transition is
                                    deliberate, every motion purposeful. Currently flowing from {displayData.location}.
                                </p>
                            </div>
                        </LiquidTank>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Test tubes */}
            <section id="mix" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-blue-300"
                    >
                        The Mix
                    </motion.h2>
                    <p className="text-center text-blue-400/50 mb-16">Ingredients in my formula</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => {
                            const colors = ['#3b82f6', '#a855f7', '#ec4899', '#22d3ee', '#14b8a6', '#f59e0b', '#ef4444', '#10b981'];
                            return (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -10 }}
                                    className="text-center cursor-pointer"
                                >
                                    {/* Test tube */}
                                    <div className="w-16 h-32 mx-auto mb-4 relative">
                                        <div className="absolute inset-0 rounded-b-full bg-white/5 border-2 border-white/20 overflow-hidden">
                                            <motion.div
                                                className="absolute bottom-0 left-0 right-0 rounded-b-full"
                                                style={{
                                                    height: `${50 + Math.random() * 40}%`,
                                                    background: colors[i % colors.length]
                                                }}
                                                animate={{
                                                    height: [`${50 + Math.random() * 30}%`, `${60 + Math.random() * 30}%`]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                                            />
                                        </div>
                                        {/* Cap */}
                                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-white/10 rounded-t-lg border-2 border-white/20 border-b-0" />
                                    </div>
                                    <span className="font-bold text-white/80">{skill}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="pour" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-purple-300"
                    >
                        Poured Work
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
                                <LiquidTank
                                    fillColor={i === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(236, 72, 153, 0.4)'}
                                    level="30%"
                                >
                                    <div className="p-8 group">
                                        <Waves className="w-12 h-12 text-white/30 mb-6 group-hover:text-white/50 transition-colors" />
                                        <h3
                                            className="text-2xl font-bold mb-3 text-transparent bg-clip-text"
                                            style={{ backgroundImage: i === 0 ? 'linear-gradient(90deg, #3b82f6, #a855f7)' : 'linear-gradient(90deg, #ec4899, #f59e0b)' }}
                                        >
                                            {project.name}
                                        </h3>
                                        <p className="text-blue-100/50 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 text-sm text-blue-300 bg-blue-500/20 rounded-full border border-blue-400/20">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </LiquidTank>
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
                        className="text-4xl font-bold text-center mb-16 text-blue-300"
                    >
                        Flow History
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <LiquidTank fillColor="rgba(34, 211, 238, 0.2)" level="25%">
                                <div className="p-6">
                                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                        <h3 className="text-xl font-bold text-cyan-300">{exp.position}</h3>
                                        <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                                            {exp.startDate} - {exp.endDate}
                                        </span>
                                    </div>
                                    <p className="text-purple-300 mb-2">{exp.company}</p>
                                    <p className="text-cyan-100/50">{exp.description}</p>
                                </div>
                            </LiquidTank>
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
                        className="text-4xl font-bold text-center mb-16 text-purple-300"
                    >
                        Source
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <LiquidTank fillColor="rgba(168, 85, 247, 0.2)" level="35%">
                                    <div className="p-6">
                                        <Droplets className="w-8 h-8 text-purple-400 mb-4" />
                                        <h3 className="text-lg font-bold text-purple-300 mb-1">{edu.degree}</h3>
                                        <p className="text-blue-300">{edu.school}</p>
                                        <p className="text-sm text-purple-400/50">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                </LiquidTank>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="fill" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <LiquidTank fillColor="rgba(59, 130, 246, 0.3)" level="50%">
                            <div className="p-12">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                >
                                    <Droplets className="w-16 h-16 text-blue-400 mx-auto mb-8" />
                                </motion.div>
                                <h2 className="text-4xl font-bold mb-6 text-blue-300">Fill My Inbox</h2>
                                <p className="text-blue-100/50 mb-8">
                                    Ready to create something fluid together?
                                </p>
                                <div className="flex justify-center gap-6">
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
                                            className="p-4 bg-blue-500/20 rounded-xl border border-blue-400/30"
                                        >
                                            <Icon className="w-6 h-6 text-blue-400" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </LiquidTank>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
