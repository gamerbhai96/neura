'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Box, Package, Code } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Iso Dev",
    role: "3D Engineer",
    email: "dev@isometric.io",
    phone: "+1 555 000 0000",
    location: "Virtual World",
    bio: "Building interfaces with dimension. Where flat meets deep.",
    skills: ["React", "Three.js", "WebGL", "Blender", "Unity", "CSS 3D", "GLSL", "Canvas"],
    experience: [{ company: "Dimension Labs", position: "3D Lead", startDate: "2020", endDate: "Present", description: "Creating dimensional experiences", highlights: [] }],
    education: [
        { school: "3D Academy", degree: "BFA Digital Arts", field: "3D Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "BlockWorld", description: "Isometric game engine", technologies: ["Three.js", "React"] },
        { name: "VoxelEdit", description: "3D voxel editor", technologies: ["WebGL", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Simple isometric cube using 2D shapes
const IsoCube = ({ color, size = 60, className = '' }: { color: string; size?: number; className?: string }) => {
    const height = size * 0.866; // cos(30deg)
    return (
        <svg width={size} height={size} viewBox="0 0 100 100" className={className}>
            {/* Top face */}
            <polygon
                points="50,10 90,30 50,50 10,30"
                fill={color}
            />
            {/* Left face */}
            <polygon
                points="10,30 50,50 50,90 10,70"
                fill={`${color}cc`}
            />
            {/* Right face */}
            <polygon
                points="50,50 90,30 90,70 50,90"
                fill={`${color}88`}
            />
        </svg>
    );
};

// Isometric grid pattern
const IsoGridPattern = () => (
    <div className="fixed inset-0 pointer-events-none opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%234ade80' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
    }} />
);

// Terminal-style card
const TerminalCard = ({ children, title = 'terminal', className = '' }: { children: React.ReactNode; title?: string; className?: string }) => (
    <div className={`bg-zinc-900 rounded-lg border border-green-400/30 overflow-hidden ${className}`}>
        {/* Title bar */}
        <div className="bg-zinc-800 px-4 py-2 flex items-center gap-2 border-b border-green-400/20">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-green-400/60 text-sm font-mono ml-2">{title}</span>
        </div>
        <div className="p-6">{children}</div>
    </div>
);

export default function Isometric3DPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const cubeColors = ['#4ade80', '#60a5fa', '#f472b6', '#fbbf24', '#a78bfa', '#22d3ee'];

    return (
        <div className="min-h-screen text-white font-mono overflow-hidden" style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)'
        }}>
            {/* Isometric grid */}
            <IsoGridPattern />

            {/* Floating cubes decoration */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[
                    { x: '5%', y: '15%', color: cubeColors[0], size: 50, delay: 0 },
                    { x: '85%', y: '20%', color: cubeColors[1], size: 70, delay: 0.3 },
                    { x: '10%', y: '70%', color: cubeColors[2], size: 60, delay: 0.6 },
                    { x: '80%', y: '60%', color: cubeColors[3], size: 45, delay: 0.9 }
                ].map((cube, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: cube.x, top: cube.y }}
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4 + i, repeat: Infinity }}
                    >
                        <IsoCube color={cube.color} size={cube.size} />
                    </motion.div>
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <TerminalCard title="nav.sh">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Box className="w-7 h-7 text-green-400" />
                                <span className="text-xl font-bold text-green-400">ISOMETRIC</span>
                            </div>
                            <div className="flex gap-6 text-sm text-green-400/70">
                                {['render', 'build', 'stack', 'export'].map((item) => (
                                    <a key={item} href={`#${item}`} className="hover:text-green-400 transition-colors">
                                        ./{item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </TerminalCard>
                </div>
            </nav>

            {/* Hero */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto flex items-center gap-16">
                    {/* Stacked cubes */}
                    <motion.div
                        className="hidden md:block relative w-48 h-48"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            className="absolute left-0 top-16"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <IsoCube color="#4ade80" size={80} />
                        </motion.div>
                        <motion.div
                            className="absolute left-12 top-8"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
                        >
                            <IsoCube color="#60a5fa" size={80} />
                        </motion.div>
                        <motion.div
                            className="absolute left-24 top-0"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, delay: 1, repeat: Infinity }}
                        >
                            <IsoCube color="#f472b6" size={80} />
                        </motion.div>
                    </motion.div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-400/10 border border-green-400/30 rounded mb-8">
                                <Code className="w-4 h-4 text-green-400" />
                                <span className="text-green-400">$ echo "{displayData.role}"</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6 text-green-400">
                                {displayData.name}
                            </h1>

                            <p className="text-xl text-green-300/60 max-w-md mb-12">
                                // {displayData.bio}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="#stack"
                                    className="px-8 py-4 bg-green-500 text-black rounded font-bold hover:bg-green-400 transition-all"
                                >
                                    view_work()
                                </a>
                                <a
                                    href="#export"
                                    className="px-8 py-4 border border-green-400/30 rounded font-bold text-green-400 hover:bg-green-400/10 transition-all"
                                >
                                    contact()
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="render" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <TerminalCard title="about.md">
                            <div className="flex items-center gap-4 mb-6">
                                <Box className="w-8 h-8 text-green-400" />
                                <h2 className="text-2xl font-bold text-green-400">$ cat README.md</h2>
                            </div>
                            <p className="text-green-300/70 leading-relaxed">
                                <span className="text-green-400">{`>`}</span> Building interfaces that pop off the screen...<br /><br />
                                I specialize in creating dimensional experiences that break free from flat design.
                                Every pixel is placed with purpose, every layer adds depth. Like stacking blocks to
                                build something greater, I combine technologies to craft experiences that feel tangible.
                                <br /><br />
                                <span className="text-green-400/60">// Location: {displayData.location}</span>
                            </p>
                        </TerminalCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="build" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-4 text-green-400"
                    >
                        $ npm list --depth=0
                    </motion.h2>
                    <p className="text-center text-green-400/50 mb-16">// installed packages</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <TerminalCard title="package.json" className="text-center cursor-pointer">
                                    <Package className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                    <span className="font-bold text-green-300">{skill}</span>
                                    <div className="mt-2 text-xs text-green-400/50">^{(Math.random() * 10).toFixed(1)}.0.0</div>
                                </TerminalCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="stack" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        $ ls ./projects
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
                                <TerminalCard title={`${project.name.toLowerCase()}/`} className="group h-full">
                                    {/* Cube preview */}
                                    <div className="h-32 bg-zinc-800 rounded mb-6 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: [0, 5, 0, -5, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        >
                                            <IsoCube color={cubeColors[i % cubeColors.length]} size={80} />
                                        </motion.div>
                                    </div>

                                    <div className="text-xs text-green-400/50 mb-2"># project_{i + 1}</div>
                                    <h3 className="text-2xl font-bold text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-green-300/50 mb-4">// {project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-xs text-green-400 bg-green-400/10 border border-green-400/20 rounded">
                                                &lt;{tech}/&gt;
                                            </span>
                                        ))}
                                    </div>
                                </TerminalCard>
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
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        $ git log --oneline
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <TerminalCard title="history.log">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-green-400">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-green-400/10 text-green-400 text-sm border border-green-400/20 rounded">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-pink-400 mb-2">@ {exp.company}</p>
                                <p className="text-green-300/50">// {exp.description}</p>
                            </TerminalCard>
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
                        className="text-3xl font-bold text-center mb-16 text-green-400"
                    >
                        $ cat education.json
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <TerminalCard title="degree.cert">
                                    <span className="text-2xl block mb-4">🎮</span>
                                    <h3 className="text-lg font-bold text-green-400 mb-1">{edu.degree}</h3>
                                    <p className="text-pink-400">{edu.school}</p>
                                    <p className="text-green-400/50 text-sm">{edu.startDate} - {edu.endDate}</p>
                                </TerminalCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="export" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <TerminalCard title="contact.sh">
                            <motion.div
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="mb-8"
                            >
                                <Box className="w-16 h-16 text-green-400 mx-auto" />
                            </motion.div>
                            <h2 className="text-3xl font-bold mb-6 text-green-400">$ ./connect</h2>
                            <p className="text-green-300/50 mb-8">
                                // Ready to build something dimensional?
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
                                        className="p-4 bg-green-400/10 border border-green-400/30 rounded"
                                    >
                                        <Icon className="w-6 h-6 text-green-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </TerminalCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
