'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import { useRef } from 'react';
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Rocket } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Space Explorer",
    role: "Full Stack Explorer",
    email: "dev@cosmos.io",
    phone: "+1 555 000 0000",
    location: "Earth, Sector 7",
    bio: "Navigating the void between design and engineering. Building scalable solutions for the next generation of the web.",
    skills: ["React", "Three.js", "Node.js", "Python", "AWS", "Docker"],
    experience: [{ company: "Space Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Exploring", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Project 1", description: "A revolutionary platform", technologies: ["Next.js", "Three.js", "Tailwind"] },
        { name: "Project 2", description: "Advanced visualization", technologies: ["React", "WebGL"] },
        { name: "Project 3", description: "Real-time processing", technologies: ["Node.js", "Docker"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

function SpaceBackground() {
    return (
        <div className="fixed inset-0 bg-[#050510] -z-10">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                <ambientLight intensity={0.5} />
            </Canvas>
        </div>
    );
}

function FloatingPlanet() {
    return (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-50 pointer-events-none">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-blue-900 blur-3xl animate-pulse" />
        </div>
    );
}

export default function SpaceCosmicPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div className="min-h-screen text-white selection:bg-purple-500 selection:text-white font-sans">
            <SpaceBackground />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/20">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-purple-400" />
                        Cosmos.Dev
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-white/70">
                        {['Mission', 'Tech', 'Projects', 'Education', 'Transmission'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
                <FloatingPlanet />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-purple-400 font-medium tracking-[0.2em] mb-4 uppercase">
                            Full Stack Explorer
                        </h2>
                        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                            CRAFTING DIGITAL
                            <br />
                            UNIVERSES
                        </h1>
                        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
                            Navigating the void between design and engineering.
                            Building scalable solutions for the next generation of the web.
                        </p>
                        <div className="flex justify-center gap-6">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-purple-100 transition-all hover:scale-105">
                                Explore Work
                            </button>
                            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all">
                                Contact Me
                            </button>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
                >
                    <ArrowDown className="w-6 h-6 text-white/50" />
                </motion.div>
            </section>

            {/* About Section */}
            <section id="mission" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                        <div className="relative z-10 border border-white/10 bg-white/5 backdrop-blur-md p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold mb-6 text-purple-300">Mission Log</h3>
                            <p className="text-white/70 leading-relaxed mb-6">
                                I am a creative technologist obsessed with the intersection of design and code.
                                My journey began exploring the vastness of the internet, and now I build the vessels that traverse it.
                            </p>
                            <p className="text-white/70 leading-relaxed">
                                Specializing in immersive web experiences, I use WebGL and modern frameworks to create interfaces that feel out of this world.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-8">About The Explorer</h2>
                        <div className="space-y-6">
                            {[
                                { label: "Experience", value: "5+ Years" },
                                { label: "Projects", value: "50+ Launched" },
                                { label: "Location", value: "Earth, Sector 7" }
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                                        <div className="text-xl font-bold">{stat.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="tech" className="py-32 px-6 relative bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl font-bold mb-4">Tech Constellations</h2>
                        <div className="h-1 w-20 bg-purple-500 rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {['Frontend', 'Backend', '3D / WebGL', 'Tools'].map((category, i) => (
                            <div key={i} className="space-y-6">
                                <h3 className="text-xl font-bold text-purple-400 uppercase tracking-widest">{category}</h3>
                                <ul className="space-y-4">
                                    {[1, 2, 3, 4].map((skill) => (
                                        <li key={skill} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group cursor-pointer">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:shadow-[0_0_10px_#a855f7] transition-all" />
                                            Skill Name {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Projects Section */}
            <section id="projects" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-end justify-between mb-20">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured Missions</h2>
                            <div className="h-1 w-20 bg-purple-500 rounded-full" />
                        </div>
                        <div className="text-white/40">Selected works 2023-2024</div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors"
                            >
                                <div className="aspect-[4/3] bg-black/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                                    <div className="absolute bottom-0 left-0 p-6 z-20">
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">Project {item}</h3>
                                        <p className="text-white/60 text-sm">Next.js • Three.js • Tailwind</p>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <p className="text-white/70 leading-relaxed mb-6">
                                        A revolutionary platform exploring the boundaries of web performance and 3D interactivity.
                                    </p>
                                    <div className="flex items-center gap-4 text-sm font-medium text-purple-400">
                                        <span>View Case Study</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-32 px-6 relative bg-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold mb-4">Flight Training</h2>
                        <div className="h-1 w-20 bg-purple-500 rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold text-purple-200">{edu.degree}</h3>
                                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-lg text-white/70">{edu.school}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="transmission" className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl font-bold mb-8">Incoming Transmission?</h2>
                    <p className="text-xl text-white/60 mb-12">
                        My comms channels are always open for interesting projects and collaborations.
                    </p>
                    <div className="flex justify-center gap-8">
                        {[Github, Linkedin, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-purple-500 hover:border-purple-500 transition-all hover:scale-110"
                            >
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
