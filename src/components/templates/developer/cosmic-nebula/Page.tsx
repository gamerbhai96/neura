'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Orbit, Rocket, Sparkles, Star } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Stellar Dev",
    role: "Space Systems Engineer",
    email: "dev@nebula.io",
    phone: "+1 555 000 0000",
    location: "Houston, TX",
    bio: "Navigating the cosmos of code. Building systems that reach for the stars.",
    skills: ["Python", "C++", "Rust", "TensorFlow", "CUDA", "ROS", "Linux", "Docker"],
    experience: [{ company: "Orbital Dynamics", position: "Principal Engineer", startDate: "2018", endDate: "Present", description: "Engineering interstellar solutions", highlights: [] }],
    education: [
        { school: "MIT", degree: "MS Aerospace Engineering", field: "Aerospace", startDate: "2014", endDate: "2016" }
    ],
    projects: [
        { name: "Pulsar", description: "Real-time satellite tracking", technologies: ["Python", "TLE"] },
        { name: "Quasar", description: "Deep space data pipeline", technologies: ["Rust", "gRPC"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Twinkling star component
const TwinklingStar = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
    <motion.div
        className="absolute rounded-full bg-white"
        style={{ left: x, top: y, width: size, height: size }}
        animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
        }}
        transition={{ duration: 2 + delay, repeat: Infinity, delay }}
    />
);

// Nebula cloud component
const NebulaCloud = ({ color, x, y, size }: { color: string; x: string; y: string; size: number }) => (
    <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
            left: x,
            top: y,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`
        }}
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
    />
);

// Orbiting planet component
const OrbitingPlanet = ({ distance, speed, size, color, startAngle }: { distance: number; speed: number; size: number; color: string; startAngle: number }) => (
    <motion.div
        className="absolute rounded-full"
        style={{
            width: size,
            height: size,
            background: `radial-gradient(circle at 30% 30%, ${color}, ${color}88)`,
            boxShadow: `0 0 20px ${color}50`
        }}
        animate={{
            rotate: 360
        }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
        <motion.div
            className="absolute"
            style={{
                width: size,
                height: size,
                left: distance,
                top: 0,
            }}
            initial={{ rotate: startAngle }}
            animate={{ rotate: startAngle + 360 }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        />
    </motion.div>
);

export default function CosmicNebulaPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const nebulaColors = ['#a855f7', '#ec4899', '#3b82f6', '#06b6d4'];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
            {/* Deep space background */}
            <div className="fixed inset-0" style={{
                background: 'radial-gradient(ellipse at center, #1e1b4b 0%, #0f0a1e 50%, #000 100%)'
            }} />

            {/* Nebula clouds */}
            <div className="fixed inset-0 pointer-events-none">
                <NebulaCloud color="rgba(168, 85, 247, 0.4)" x="10%" y="20%" size={600} />
                <NebulaCloud color="rgba(236, 72, 153, 0.3)" x="60%" y="10%" size={500} />
                <NebulaCloud color="rgba(59, 130, 246, 0.3)" x="70%" y="60%" size={400} />
                <NebulaCloud color="rgba(6, 182, 212, 0.2)" x="20%" y="70%" size={450} />
            </div>

            {/* Star field */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(100)].map((_, i) => (
                    <TwinklingStar
                        key={i}
                        x={`${Math.random() * 100}%`}
                        y={`${Math.random() * 100}%`}
                        size={1 + Math.random() * 2}
                        delay={Math.random() * 3}
                    />
                ))}
            </div>

            {/* Shooting star */}
            <motion.div
                className="fixed w-1 h-1 bg-white rounded-full"
                style={{ boxShadow: '0 0 10px #fff, -50px 0 20px #fff' }}
                initial={{ x: '100vw', y: '0vh', opacity: 0 }}
                animate={{ x: '-100px', y: '50vh', opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 8, ease: "linear" }}
            />

            {/* Navigation - Spacecraft HUD style */}
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="bg-slate-900/50 backdrop-blur-md px-8 py-4 rounded-lg border border-purple-500/30 relative">
                        {/* HUD corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50 rounded-tl-lg" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-lg" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500/50 rounded-bl-lg" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50 rounded-br-lg" />

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Orbit className="w-6 h-6 text-purple-400" />
                                </motion.div>
                                <span className="font-bold text-purple-300 tracking-widest">NEBULA</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-purple-200/70">
                                {['Origin', 'Systems', 'Cores', 'Transmit'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors flex items-center gap-1">
                                        <Star className="w-3 h-3" />
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Solar system style */}
            <section className="min-h-screen flex items-center justify-center px-6 relative">
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    {/* Central sun with orbits */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="relative inline-block mb-12"
                    >
                        {/* Orbit rings */}
                        {[120, 180, 240].map((size, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full border border-purple-500/20"
                                style={{
                                    width: size,
                                    height: size,
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)'
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                            >
                                {/* Orbiting planet */}
                                <motion.div
                                    className="absolute w-4 h-4 rounded-full"
                                    style={{
                                        background: nebulaColors[i],
                                        boxShadow: `0 0 10px ${nebulaColors[i]}`,
                                        top: -8,
                                        left: '50%',
                                        transform: 'translateX(-50%)'
                                    }}
                                />
                            </motion.div>
                        ))}

                        {/* Central star */}
                        <motion.div
                            className="w-20 h-20 rounded-full"
                            style={{
                                background: 'radial-gradient(circle, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
                                boxShadow: '0 0 60px #fbbf2480'
                            }}
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-6"
                        >
                            <Rocket className="w-4 h-4" />
                            {displayData.role}
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-thin mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-purple-200/60 max-w-xl mx-auto">
                            {displayData.bio}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About - Space station panel */}
            <section id="origin" className="py-32 px-6 relative">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 rounded-2xl overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(168, 85, 247, 0.3)'
                        }}
                    >
                        {/* Holographic scan line */}
                        <motion.div
                            className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"
                            animate={{ top: ['0%', '100%', '0%'] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />

                        <div className="flex items-center gap-4 mb-8">
                            <Sparkles className="w-10 h-10 text-purple-400" />
                            <div>
                                <h2 className="text-3xl font-thin text-purple-200">Mission Brief</h2>
                                <p className="text-purple-400/60 font-mono text-sm">CLASSIFIED: LEVEL 5</p>
                            </div>
                        </div>
                        <p className="text-purple-100/70 leading-relaxed text-lg">
                            From the swirling depths of cosmic clouds to the precise orbits of binary systems,
                            I engineer solutions that transcend earthly limitations. Like the nebulae that birth
                            new stars, I create systems that generate endless possibilities. Currently stationed
                            at {displayData.location} coordinates.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Constellation pattern */}
            <section id="cores" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-4 text-purple-200"
                    >
                        Core Systems
                    </motion.h2>
                    <p className="text-center text-purple-400/60 mb-16 font-mono">CONSTELLATION MAP</p>

                    {/* Skills as constellation */}
                    <div className="relative min-h-[400px]">
                        {/* Connection lines */}
                        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                            {displayData.skills.slice(0, -1).map((_, i) => {
                                const x1 = 10 + (i % 4) * 25 + 12.5;
                                const y1 = 10 + Math.floor(i / 4) * 50 + 12.5;
                                const x2 = 10 + ((i + 1) % 4) * 25 + 12.5;
                                const y2 = 10 + Math.floor((i + 1) / 4) * 50 + 12.5;
                                return (
                                    <motion.line
                                        key={i}
                                        x1={`${x1}%`}
                                        y1={`${y1}%`}
                                        x2={`${x2}%`}
                                        y2={`${y2}%`}
                                        stroke="rgba(168, 85, 247, 0.3)"
                                        strokeWidth="1"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                    />
                                );
                            })}
                        </svg>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                            {displayData.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, type: "spring" }}
                                    whileHover={{ scale: 1.2 }}
                                    className="flex flex-col items-center cursor-pointer"
                                >
                                    {/* Star node */}
                                    <motion.div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mb-3"
                                        style={{
                                            background: `radial-gradient(circle, ${nebulaColors[i % nebulaColors.length]}40, transparent)`,
                                            boxShadow: `0 0 30px ${nebulaColors[i % nebulaColors.length]}30`
                                        }}
                                        animate={{ boxShadow: [`0 0 20px ${nebulaColors[i % nebulaColors.length]}30`, `0 0 40px ${nebulaColors[i % nebulaColors.length]}50`, `0 0 20px ${nebulaColors[i % nebulaColors.length]}30`] }}
                                        transition={{ duration: 2 + i * 0.3, repeat: Infinity }}
                                    >
                                        <div
                                            className="w-4 h-4 rounded-full"
                                            style={{ backgroundColor: nebulaColors[i % nebulaColors.length] }}
                                        />
                                    </motion.div>
                                    <span className="text-purple-200 font-medium text-sm text-center">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="systems" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-thin text-center mb-16 text-purple-200"
                    >
                        Deep Space Projects
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group relative rounded-2xl overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.3), rgba(30, 27, 75, 0.5))',
                                    border: '1px solid rgba(168, 85, 247, 0.2)'
                                }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Planet header */}
                                <div className="h-40 relative overflow-hidden bg-gradient-to-b from-slate-900 to-transparent flex items-center justify-center">
                                    <motion.div
                                        className="w-24 h-24 rounded-full"
                                        style={{
                                            background: `radial-gradient(circle at 30% 30%, ${nebulaColors[i]}, ${nebulaColors[i]}44)`,
                                            boxShadow: `0 0 40px ${nebulaColors[i]}40`
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    {/* Ring */}
                                    <div
                                        className="absolute w-40 h-8 rounded-full border-2"
                                        style={{
                                            borderColor: `${nebulaColors[i]}40`,
                                            transform: 'rotateX(70deg)'
                                        }}
                                    />
                                </div>

                                <div className="p-8">
                                    <h3 className="text-2xl font-light mb-3 text-purple-100 group-hover:text-purple-300 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-purple-300/50 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-purple-300 bg-purple-500/10 border border-purple-500/30 rounded-full">
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
                        className="text-4xl font-thin text-center mb-16 text-purple-200"
                    >
                        Mission Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l border-purple-500/30"
                        >
                            <motion.div
                                className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-purple-500"
                                animate={{ boxShadow: ['0 0 10px rgba(168,85,247,0.5)', '0 0 20px rgba(168,85,247,0.8)', '0 0 10px rgba(168,85,247,0.5)'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <div className="p-6 rounded-xl" style={{ background: 'rgba(88, 28, 135, 0.2)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl text-purple-100">{exp.position}</h3>
                                    <span className="text-sm text-purple-400 font-mono">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-pink-400 mb-2">{exp.company}</p>
                                <p className="text-purple-300/50">{exp.description}</p>
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
                        className="text-4xl font-thin text-center mb-16 text-purple-200"
                    >
                        Training Academy
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-xl"
                                style={{ background: 'rgba(88, 28, 135, 0.2)', border: '1px solid rgba(168, 85, 247, 0.2)' }}
                            >
                                <Star className="w-8 h-8 text-purple-400 mb-4" />
                                <h3 className="text-lg text-purple-100 mb-1">{edu.degree}</h3>
                                <p className="text-pink-400">{edu.school}</p>
                                <p className="text-sm text-purple-400/50 font-mono">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="transmit" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Rocket className="w-16 h-16 text-purple-400 mx-auto mb-8 transform -rotate-45" />
                        </motion.div>
                        <h2 className="text-4xl font-thin mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                            Transmit Signal
                        </h2>
                        <p className="text-purple-300/50 mb-12">
                            Ready to embark on an interstellar mission?
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
                                    whileHover={{ scale: 1.1, boxShadow: `0 0 30px ${nebulaColors[i]}80` }}
                                    className="p-4 rounded-full"
                                    style={{
                                        background: `linear-gradient(135deg, ${nebulaColors[i]}40, ${nebulaColors[i]}20)`,
                                        border: `1px solid ${nebulaColors[i]}50`
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-purple-200" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
