'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Rocket, Star, Orbit, Satellite } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Nova Dev",
    role: "Space Engineer",
    email: "dev@cosmic.io",
    phone: "+1 555 000 0000",
    location: "Mission Control",
    bio: "Exploring the universe of code, one commit at a time.",
    skills: ["React", "Node.js", "Python", "GraphQL", "MongoDB", "Docker", "AWS", "TypeScript"],
    experience: [{ company: "SpaceCode Labs", position: "Mission Lead", startDate: "2020", endDate: "Present", description: "Launching scalable systems", highlights: [] }],
    education: [
        { school: "MIT", degree: "BS Aerospace Computing", field: "CS", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Nebula", description: "Cloud deployment platform", technologies: ["K8s", "Go"] },
        { name: "Orbit", description: "Real-time satellite tracker", technologies: ["WebGL", "Node"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Twinkling stars
const StarField = () => (
    <div className="fixed inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                    width: Math.random() * 3 + 1,
                    height: Math.random() * 3 + 1,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                }}
                animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                }}
            />
        ))}
    </div>
);

// Animated planet with ring
const Planet = ({ color, ringColor, size, x, y, orbitDuration }: {
    color: string; ringColor: string; size: number; x: string; y: string; orbitDuration: number
}) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: orbitDuration, repeat: Infinity }}
    >
        <div className="relative" style={{ width: size, height: size }}>
            {/* Planet body */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: `radial-gradient(circle at 30% 30%, ${color}, ${color}80)`,
                    boxShadow: `inset -${size / 4}px -${size / 4}px ${size / 2}px rgba(0,0,0,0.4)`
                }}
            />
            {/* Ring */}
            <div
                className="absolute rounded-full border-4"
                style={{
                    width: size * 1.8,
                    height: size * 0.5,
                    top: size * 0.25,
                    left: -size * 0.4,
                    borderColor: `${ringColor}60`,
                    transform: 'rotateX(70deg)'
                }}
            />
        </div>
    </motion.div>
);

// Mission patch style badge
const MissionPatch = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative ${className}`}>
        <div
            className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg border-2 border-amber-500/50 p-6 overflow-hidden"
            style={{
                boxShadow: '0 0 20px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
            }}
        >
            {/* Stitching effect */}
            <div className="absolute inset-2 rounded border-2 border-dashed border-amber-600/30 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    </div>
);

// Rocket with trail
const RocketShip = () => (
    <motion.div
        className="absolute right-10 bottom-1/4 pointer-events-none hidden lg:block"
        animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2]
        }}
        transition={{ duration: 4, repeat: Infinity }}
    >
        <div className="relative">
            <Rocket className="w-16 h-16 text-white -rotate-45" />
            {/* Flame trail */}
            <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4"
                animate={{ height: [20, 40, 20], opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 0.3, repeat: Infinity }}
            >
                <div className="w-full h-full bg-gradient-to-b from-orange-500 via-yellow-400 to-transparent rounded-full" />
            </motion.div>
        </div>
    </motion.div>
);

export default function CosmicGalaxyPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden" style={{
            background: 'radial-gradient(ellipse at top, #1e1b4b 0%, #0f0a1e 50%, #030014 100%)'
        }}>
            <StarField />

            {/* Planets */}
            <Planet color="#f97316" ringColor="#fbbf24" size={80} x="10%" y="20%" orbitDuration={6} />
            <Planet color="#3b82f6" ringColor="#60a5fa" size={50} x="85%" y="15%" orbitDuration={8} />
            <Planet color="#a855f7" ringColor="#c084fc" size={60} x="75%" y="60%" orbitDuration={7} />

            {/* Animated rocket */}
            <RocketShip />

            {/* Nebula glow */}
            <div className="fixed inset-0 pointer-events-none opacity-30">
                <div
                    className="absolute w-96 h-96 rounded-full blur-3xl"
                    style={{ background: '#7c3aed', top: '10%', left: '20%' }}
                />
                <div
                    className="absolute w-80 h-80 rounded-full blur-3xl"
                    style={{ background: '#ec4899', bottom: '20%', right: '10%' }}
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-zinc-900/80 backdrop-blur-xl rounded-full px-8 py-4 border border-purple-500/30">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                >
                                    <Orbit className="w-7 h-7 text-purple-400" />
                                </motion.div>
                                <span className="text-xl font-bold text-purple-300 tracking-wider">COSMIC</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-purple-300/70">
                                {['Launch', 'Systems', 'Missions', 'Comms'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-300 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Mission Control style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {/* Mission patch badge */}
                        <motion.div
                            className="inline-block mb-8"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <MissionPatch>
                                <div className="flex items-center gap-3">
                                    <Satellite className="w-6 h-6 text-amber-400" />
                                    <span className="text-amber-400 font-bold uppercase tracking-widest">{displayData.role}</span>
                                </div>
                            </MissionPatch>
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                            {displayData.name}
                        </h1>

                        <p className="text-xl text-purple-200/70 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#missions"
                                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold hover:opacity-90 transition-all"
                            >
                                View Missions
                            </a>
                            <a
                                href="#comms"
                                className="px-8 py-4 border border-purple-500/50 rounded-full font-bold text-purple-300 hover:bg-purple-500/10 transition-all"
                            >
                                Open Comms
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="launch" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MissionPatch className="w-full">
                            <div className="flex items-center gap-4 mb-6">
                                <Star className="w-8 h-8 text-amber-400" />
                                <h2 className="text-2xl font-bold text-purple-300">Mission Brief</h2>
                            </div>
                            <p className="text-purple-200/70 leading-relaxed text-lg">
                                Since the early days of my coding journey, I've been fascinated by the infinite
                                possibilities of software. Like exploring the cosmos, every project reveals new
                                frontiers and challenges. I build systems that scale like galaxies and shine
                                like stars. Currently stationed at {displayData.location}, ready for the next launch. 🚀
                            </p>
                        </MissionPatch>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Constellation style */}
            <section id="systems" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-purple-300"
                    >
                        Onboard Systems
                    </motion.h2>
                    <p className="text-center text-purple-400/50 mb-16">Core technologies powering the mission</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="cursor-pointer"
                            >
                                <MissionPatch>
                                    <div className="text-center">
                                        <motion.div
                                            className="w-3 h-3 bg-amber-400 rounded-full mx-auto mb-3"
                                            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                        <span className="font-bold text-purple-200">{skill}</span>
                                    </div>
                                </MissionPatch>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="missions" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-purple-300"
                    >
                        Completed Missions
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
                                <MissionPatch className="h-full group">
                                    {/* Mission icon */}
                                    <div className="h-32 bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-lg mb-6 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            {i === 0 ? (
                                                <Orbit className="w-16 h-16 text-purple-400/50" />
                                            ) : (
                                                <Satellite className="w-16 h-16 text-pink-400/50" />
                                            )}
                                        </motion.div>
                                    </div>

                                    <div className="text-amber-400/60 text-sm font-mono mb-2">MISSION-{String(i + 1).padStart(3, '0')}</div>
                                    <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-purple-200/50 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-amber-400 bg-amber-500/10 rounded border border-amber-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </MissionPatch>
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
                        className="text-4xl font-bold text-center mb-16 text-purple-300"
                    >
                        Flight Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <MissionPatch>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-purple-300">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-purple-200/50">{exp.description}</p>
                            </MissionPatch>
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
                        Training Academy
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <MissionPatch>
                                    <Rocket className="w-8 h-8 text-amber-400 mb-4" />
                                    <h3 className="text-lg font-bold text-purple-300 mb-1">{edu.degree}</h3>
                                    <p className="text-amber-400">{edu.school}</p>
                                    <p className="text-sm text-purple-400/50">{edu.startDate} - {edu.endDate}</p>
                                </MissionPatch>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="comms" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MissionPatch>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Satellite className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 text-purple-300">Open Channel</h2>
                            <p className="text-purple-200/50 mb-8">
                                Ready to launch something together?
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
                                        className="p-4 bg-purple-500/20 rounded-xl border border-amber-500/30"
                                    >
                                        <Icon className="w-6 h-6 text-amber-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </MissionPatch>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
