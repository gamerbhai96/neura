'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Disc, Sparkles, Zap, Radio } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Holo Dev",
    role: "Visual Engineer",
    email: "dev@hologram.io",
    phone: "+1 555 000 0000",
    location: "The Grid",
    bio: "Creating interfaces that shimmer with possibility.",
    skills: ["React", "WebGL", "Three.js", "GSAP", "Shaders", "Motion", "Canvas", "CSS"],
    experience: [{ company: "Prisma Labs", position: "Creative Tech Lead", startDate: "2020", endDate: "Present", description: "Building prismatic experiences", highlights: [] }],
    education: [
        { school: "Digital Arts Academy", degree: "MFA Digital Media", field: "Media", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Spectrum", description: "Color-shifting component library", technologies: ["React", "CSS"] },
        { name: "Prism", description: "Light refraction effects toolkit", technologies: ["WebGL", "GLSL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// CD/DVD holographic shimmer
const HoloShimmer = ({ className = '' }: { className?: string }) => (
    <motion.div
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(255,0,128,0.1) 25%, rgba(0,255,255,0.1) 50%, rgba(255,255,0,0.1) 75%, transparent 100%)',
            backgroundSize: '200% 200%'
        }}
        animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
);

// Spinning holographic disc
const HoloDisc = ({ size = 200, className = '' }: { size?: number; className?: string }) => (
    <motion.div
        className={`relative ${className}`}
        style={{ width: size, height: size }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
        {/* Main disc */}
        <div
            className="absolute inset-0 rounded-full"
            style={{
                background: `conic-gradient(from 0deg, 
                    #ff006680, #ff840080, #ffff0080, #00ff0080, 
                    #00ffff80, #0000ff80, #8b00ff80, #ff006680)`,
                boxShadow: '0 0 40px rgba(255,0,255,0.3)'
            }}
        />
        {/* Center hole */}
        <div
            className="absolute rounded-full bg-zinc-900"
            style={{
                width: size * 0.2,
                height: size * 0.2,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        />
        {/* Track lines */}
        {[...Array(5)].map((_, i) => (
            <div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{
                    width: size * (0.3 + i * 0.15),
                    height: size * (0.3 + i * 0.15),
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            />
        ))}
        {/* Shimmer overlay */}
        <HoloShimmer />
    </motion.div>
);

// Holographic card with rainbow border
const HoloCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <div className={`relative group ${className}`}>
        {/* Rainbow border gradient */}
        <div
            className="absolute -inset-0.5 rounded-xl opacity-70 group-hover:opacity-100 transition-opacity"
            style={{
                background: 'linear-gradient(135deg, #ff0080, #ff8c00, #ffff00, #00ff00, #00ffff, #0080ff, #8b00ff, #ff0080)',
                backgroundSize: '400% 400%',
                animation: 'rainbow-shift 4s ease infinite'
            }}
        />
        {/* Card content */}
        <div className="relative bg-zinc-900 rounded-xl p-6 overflow-hidden">
            <HoloShimmer />
            <div className="relative z-10">{children}</div>
        </div>
        <style jsx>{`
            @keyframes rainbow-shift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
        `}</style>
    </div>
);

// Scan lines overlay
const ScanLines = () => (
    <div
        className="fixed inset-0 pointer-events-none z-40 opacity-10"
        style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
        }}
    />
);

// ID card style hero
const IDCard = ({ name, role }: { name: string; role: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative max-w-md mx-auto"
    >
        <HoloCard>
            <div className="flex items-start gap-6">
                {/* Photo placeholder with hologram */}
                <div className="w-24 h-32 bg-zinc-800 rounded-lg overflow-hidden relative flex-shrink-0">
                    <motion.div
                        className="absolute inset-0"
                        style={{
                            background: 'conic-gradient(from 0deg, #ff006640, #00ffff40, #ffff0040, #ff006640)'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-white/50" />
                    </div>
                </div>

                {/* Info */}
                <div className="flex-1 py-2">
                    <div className="text-xs text-cyan-400/60 mb-1 tracking-widest">DEVELOPER ID</div>
                    <h1 className="text-2xl font-bold text-white mb-1">{name}</h1>
                    <p className="text-pink-400">{role}</p>

                    {/* Barcode */}
                    <div className="mt-4 flex gap-0.5">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white/70"
                                style={{
                                    width: Math.random() > 0.5 ? 2 : 3,
                                    height: 20
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Holographic seal */}
            <div className="absolute bottom-4 right-4 w-12 h-12">
                <HoloDisc size={48} />
            </div>
        </HoloCard>
    </motion.div>
);

export default function HolographicPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden" style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a1a 100%)'
        }}>
            {/* Scan lines */}
            <ScanLines />

            {/* Floating holographic discs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute"
                    style={{ top: '10%', left: '5%' }}
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                >
                    <HoloDisc size={120} />
                </motion.div>
                <motion.div
                    className="absolute"
                    style={{ bottom: '15%', right: '8%' }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                >
                    <HoloDisc size={100} />
                </motion.div>
            </div>

            {/* Prismatic light beams */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
                <motion.div
                    className="absolute w-1 h-[150vh]"
                    style={{
                        left: '20%',
                        top: '-25%',
                        background: 'linear-gradient(180deg, transparent, #ff0080, #00ffff, transparent)',
                        transform: 'rotate(30deg)'
                    }}
                    animate={{ x: [-100, 100, -100] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
                <motion.div
                    className="absolute w-1 h-[150vh]"
                    style={{
                        right: '30%',
                        top: '-25%',
                        background: 'linear-gradient(180deg, transparent, #00ffff, #ffff00, transparent)',
                        transform: 'rotate(-20deg)'
                    }}
                    animate={{ x: [50, -50, 50] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
            </div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <HoloCard>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                >
                                    <Disc className="w-7 h-7 text-cyan-400" />
                                </motion.div>
                                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                                    HOLOGRAPHIC
                                </span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/60">
                                {['Scan', 'Data', 'Archive', 'Link'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </HoloCard>
                </div>
            </nav>

            {/* Hero - ID Card style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <IDCard name={displayData.name || ''} role={displayData.role || ''} />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-white/60 mt-8 max-w-md mx-auto"
                    >
                        {displayData.bio}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="flex justify-center gap-4 mt-8"
                    >
                        <a
                            href="#archive"
                            className="px-8 py-4 bg-gradient-to-r from-pink-600 to-cyan-600 text-white rounded-lg font-bold hover:opacity-90 transition-all"
                        >
                            View Archive
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="scan" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <HoloCard>
                            <div className="flex items-center gap-4 mb-6">
                                <Radio className="w-8 h-8 text-cyan-400" />
                                <h2 className="text-2xl font-bold text-white">Signal Detected</h2>
                            </div>
                            <p className="text-white/60 leading-relaxed text-lg">
                                Like light diffracting through a prism, I break down complex problems into
                                spectrums of elegant solutions. My work exists at the intersection of art
                                and technology, where every interface shifts and shimmers with purpose.
                                Currently transmitting from {displayData.location}.
                            </p>
                        </HoloCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Holographic chips */}
            <section id="data" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                        Data Core
                    </motion.h2>
                    <p className="text-center text-white/40 mb-16">Encoded skill modules</p>

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
                                <HoloCard className="text-center cursor-pointer">
                                    <motion.div
                                        className="w-10 h-10 mx-auto mb-3 rounded-lg flex items-center justify-center"
                                        style={{
                                            background: 'conic-gradient(from 0deg, #ff006640, #00ffff40, #ffff0040, #ff006640)'
                                        }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Zap className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <span className="font-bold text-white/90">{skill}</span>
                                </HoloCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="archive" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
                    >
                        Archive
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
                                <HoloCard className="group h-full">
                                    {/* Disc preview */}
                                    <div className="h-32 bg-zinc-800/50 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                                        <HoloDisc size={100} />
                                    </div>

                                    <div className="text-cyan-400/60 text-xs font-mono mb-2">FILE_{String(i + 1).padStart(3, '0')}</div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-white/50 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-pink-400 bg-pink-500/10 rounded border border-pink-500/20">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </HoloCard>
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
                        Timeline
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <HoloCard>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded text-sm">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-pink-400 mb-2">{exp.company}</p>
                                <p className="text-white/50">{exp.description}</p>
                            </HoloCard>
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
                        Training
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <HoloCard>
                                    <Disc className="w-8 h-8 text-cyan-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                                    <p className="text-pink-400">{edu.school}</p>
                                    <p className="text-sm text-white/40">{edu.startDate} - {edu.endDate}</p>
                                </HoloCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="link" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <HoloCard>
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <HoloDisc size={80} className="mx-auto mb-8" />
                            </motion.div>
                            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                                Open Link
                            </h2>
                            <p className="text-white/50 mb-8">
                                Ready to create something that shimmers?
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
                                        className="p-4 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-xl border border-white/10"
                                    >
                                        <Icon className="w-6 h-6 text-cyan-400" />
                                    </motion.a>
                                ))}
                            </div>
                        </HoloCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
