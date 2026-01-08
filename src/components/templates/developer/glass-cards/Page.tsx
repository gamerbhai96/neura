'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Layers, CreditCard, Box, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Glass Dev",
    role: "UI Engineer",
    email: "dev@glass.io",
    phone: "+1 555 000 0000",
    location: "Crystal City",
    bio: "Building transparent, elegant interfaces with depth and dimension.",
    skills: ["React", "TypeScript", "CSS", "Glassmorphism", "Motion", "Three.js", "Tailwind", "Figma"],
    experience: [{ company: "Crystal Labs", position: "Lead Designer", startDate: "2020", endDate: "Present", description: "Creating glass-inspired interfaces", highlights: [] }],
    education: [
        { school: "Design Institute", degree: "BFA Interface Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Clarity", description: "Glass-style component library", technologies: ["React", "CSS"] },
        { name: "Prism", description: "Transparent dashboard framework", technologies: ["Vue", "TypeScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Credit card style glass card with chip
const GlassCard = ({ children, className = '', showChip = false, rotation = { x: 0, y: 0 } }: {
    children: React.ReactNode;
    className?: string;
    showChip?: boolean;
    rotation?: { x: number; y: number };
}) => (
    <motion.div
        className={`relative rounded-3xl overflow-hidden ${className}`}
        style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1) inset, 0 -1px 0 rgba(255,255,255,0.1) inset',
            transformStyle: 'preserve-3d',
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
        whileHover={{
            boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255,255,255,0.2) inset',
        }}
    >
        {/* Glass shine effect */}
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)'
            }}
        />

        {/* Credit card chip */}
        {showChip && (
            <div className="absolute top-8 left-8">
                <div className="w-12 h-10 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-lg overflow-hidden relative">
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-0.5 p-1">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-yellow-300/50 rounded-sm" />
                        ))}
                    </div>
                </div>
            </div>
        )}

        {/* Edge highlights */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10">{children}</div>
    </motion.div>
);

// Stacked floating cards animation
const FloatingCards = () => (
    <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                className="absolute w-64 h-40 rounded-2xl"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    right: i * 20,
                    top: i * -30,
                    zIndex: 3 - i
                }}
                animate={{
                    y: [0, -10, 0],
                    rotateX: [10, 15, 10],
                    rotateY: [-10, -5, -10]
                }}
                transition={{
                    duration: 4,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        ))}
    </div>
);

// Refraction rainbow effect
const RefractionEffect = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
            className="absolute w-[600px] h-[600px] -top-48 -left-48 rounded-full opacity-30"
            style={{
                background: 'conic-gradient(from 180deg, rgba(239,68,68,0.3), rgba(251,191,36,0.3), rgba(52,211,153,0.3), rgba(59,130,246,0.3), rgba(167,139,250,0.3), rgba(239,68,68,0.3))',
                filter: 'blur(60px)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
            className="absolute w-[500px] h-[500px] -bottom-32 -right-32 rounded-full opacity-20"
            style={{
                background: 'conic-gradient(from 0deg, rgba(59,130,246,0.4), rgba(236,72,153,0.4), rgba(251,191,36,0.4), rgba(59,130,246,0.4))',
                filter: 'blur(50px)'
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
    </div>
);

export default function GlassCardsPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(135deg, #0c0a1a 0%, #1a1030 50%, #0a0818 100%)'
        }}>
            {/* Rainbow refraction */}
            <RefractionEffect />

            {/* Floating geometric shapes */}
            <div className="fixed inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute backdrop-blur-sm"
                        style={{
                            width: 60 + Math.random() * 80,
                            height: 60 + Math.random() * 80,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))',
                            borderRadius: i % 2 === 0 ? '50%' : '16px',
                            border: '1px solid rgba(255,255,255,0.1)'
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            rotate: [0, 180, 360]
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <GlassCard className="px-8 py-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Layers className="w-8 h-8 text-white/80" />
                                <span className="text-2xl font-bold tracking-wider text-white/90">GLASS</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/60">
                                {['Layers', 'Clarity', 'Depth', 'Connect'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </nav>

            {/* Hero - Credit card style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-5xl mx-auto flex items-center gap-12">
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <GlassCard className="aspect-[1.6/1] p-8" showChip rotation={{ x: 5, y: -5 }}>
                                <div className="h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start mt-16">
                                        <div>
                                            <p className="text-white/50 text-sm mb-1">DEVELOPER</p>
                                            <h1 className="text-4xl md:text-5xl font-bold">{displayData.name}</h1>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="w-8 h-8 text-white/60" />
                                        </motion.div>
                                    </div>

                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-white/40 text-xs mb-1">ROLE</p>
                                            <p className="text-white/80 font-mono">{displayData.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/40 text-xs mb-1">VALID THRU</p>
                                            <p className="text-white/80 font-mono">∞</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {[1, 2, 3].map((_, i) => (
                                                <div key={i} className="w-8 h-8 rounded-full border border-white/20 backdrop-blur" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>

                            <p className="text-white/60 mt-8 max-w-md">{displayData.bio}</p>
                        </motion.div>
                    </div>

                    {/* Floating stacked cards */}
                    <FloatingCards />
                </div>
            </section>

            {/* About */}
            <section id="layers" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-12">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                    <Box className="w-6 h-6 text-white/80" />
                                </div>
                                <h2 className="text-3xl font-bold text-white/90">Transparent Design</h2>
                            </div>
                            <p className="text-white/60 leading-relaxed text-lg">
                                Like light passing through glass, great interfaces should be transparent yet
                                beautiful. I craft experiences with layers of depth, subtle reflections, and
                                elegant shadows that guide users naturally. My approach combines visual
                                sophistication with crystal-clear usability. Currently designing from {displayData.location}.
                            </p>

                            {/* Decorative layers */}
                            <div className="relative mt-8 h-20">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute left-0 right-0 h-12 rounded-lg"
                                        style={{
                                            bottom: i * 8,
                                            background: 'linear-gradient(90deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
                                            backdropFilter: 'blur(5px)',
                                            border: '1px solid rgba(255,255,255,0.1)',
                                            zIndex: 3 - i
                                        }}
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                    />
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Glass tiles */}
            <section id="clarity" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-white/90"
                    >
                        Tech Stack
                    </motion.h2>
                    <p className="text-center text-white/50 mb-16">Crystal clear capabilities</p>

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
                                <GlassCard className="p-6 text-center cursor-pointer">
                                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center">
                                        <span className="text-2xl">{['⚛️', '📘', '🎨', '💠', '✨', '🔮', '💨', '🎯'][i % 8]}</span>
                                    </div>
                                    <span className="font-bold text-white/80">{skill}</span>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Card deck */}
            <section id="depth" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-white/90"
                    >
                        Featured Work
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
                                <GlassCard className="group">
                                    {/* Project preview */}
                                    <div className="aspect-video rounded-t-3xl overflow-hidden">
                                        <div
                                            className="w-full h-full flex items-center justify-center"
                                            style={{
                                                background: `linear-gradient(135deg, ${i === 0 ? 'rgba(59,130,246,0.2), rgba(167,139,250,0.2)' : 'rgba(236,72,153,0.2), rgba(251,191,36,0.2)'})`
                                            }}
                                        >
                                            <CreditCard className="w-20 h-20 text-white/30 group-hover:text-white/50 transition-colors" />
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold text-white/90 mb-3 group-hover:text-white transition-colors">
                                            {project.name}
                                        </h3>
                                        <p className="text-white/50 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm text-white/70 rounded-full bg-white/10 border border-white/10"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
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
                        className="text-4xl font-bold text-center mb-16 text-white/90"
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
                            <GlassCard className="p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white/90">{exp.position}</h3>
                                    <div className="px-4 py-1 rounded-full bg-white/10 text-white/70 text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </div>
                                </div>
                                <p className="text-purple-300/80 mb-2">{exp.company}</p>
                                <p className="text-white/50">{exp.description}</p>
                            </GlassCard>
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
                        className="text-4xl font-bold text-center mb-16 text-white/90"
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
                                <GlassCard className="p-6">
                                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                                        🎓
                                    </div>
                                    <h3 className="text-lg font-bold text-white/90 mb-1">{edu.degree}</h3>
                                    <p className="text-purple-300/80">{edu.school}</p>
                                    <p className="text-sm text-white/40">{edu.startDate} - {edu.endDate}</p>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="connect" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-12">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-white/10 flex items-center justify-center"
                            >
                                <Sparkles className="w-10 h-10 text-white/70" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 text-white/90">Let's Connect</h2>
                            <p className="text-white/50 mb-8">
                                Ready to create something transparent and beautiful?
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
                                        <GlassCard className="p-4">
                                            <Icon className="w-6 h-6 text-white/70" />
                                        </GlassCard>
                                    </motion.a>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
