'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Church, Sun, Moon, Star } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Glass Artist",
    role: "UI/UX Designer",
    email: "dev@cathedral.io",
    phone: "+1 555 000 0000",
    location: "Paris, France",
    bio: "Crafting luminous experiences where light meets design. Every pixel tells a sacred story.",
    skills: ["Figma", "Adobe XD", "Sketch", "CSS", "React", "Motion", "Typography", "Color Theory"],
    experience: [{ company: "Cathedral Studios", position: "Design Lead", startDate: "2019", endDate: "Present", description: "Creating heavenly interfaces", highlights: [] }],
    education: [
        { school: "École des Beaux-Arts", degree: "MFA Graphic Design", field: "Design", startDate: "2015", endDate: "2019" }
    ],
    projects: [
        { name: "Lumière", description: "Light-themed design system", technologies: ["Figma", "React"] },
        { name: "Radiance", description: "Color accessibility tool", technologies: ["CSS", "JS"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Stained glass panel colors
const glassColors = [
    '#dc2626', '#ea580c', '#d97706', '#ca8a04', '#65a30d',
    '#16a34a', '#0d9488', '#0891b2', '#0284c7', '#2563eb',
    '#4f46e5', '#7c3aed', '#9333ea', '#c026d3', '#db2777'
];

// Glass panel component with lead border
const GlassPanel = ({ color, children, className = '' }: { color: string; children?: React.ReactNode; className?: string }) => (
    <div
        className={`relative ${className}`}
        style={{
            background: `linear-gradient(135deg, ${color}dd, ${color}99)`,
            boxShadow: `inset 0 0 30px ${color}40, 0 0 20px ${color}20`,
            border: '3px solid #1c1917'
        }}
    >
        {/* Light shimmer effect */}
        <div
            className="absolute inset-0 opacity-30"
            style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)'
            }}
        />
        {children}
    </div>
);

// Rose window component
const RoseWindow = () => (
    <div className="relative w-64 h-64 mx-auto">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-8 border-stone-900 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
            {/* Petals */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-20 h-32 -mt-16"
                    style={{
                        transformOrigin: 'center bottom',
                        transform: `rotate(${i * 30}deg)`
                    }}
                >
                    <div
                        className="w-full h-full rounded-t-full border-2 border-stone-900"
                        style={{
                            background: `linear-gradient(to top, ${glassColors[i % glassColors.length]}aa, ${glassColors[(i + 1) % glassColors.length]}aa)`,
                            boxShadow: `inset 0 0 20px ${glassColors[i % glassColors.length]}40`
                        }}
                    />
                </motion.div>
            ))}
            {/* Inner circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-stone-900 bg-gradient-to-br from-amber-400 to-amber-600" style={{
                boxShadow: '0 0 40px rgba(251,191,36,0.6)'
            }}>
                <Sun className="w-12 h-12 text-amber-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    </div>
);

export default function StainedGlassPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #1e1b4b 0%, #312e81 30%, #1e1b4b 100%)'
        }}>
            {/* Cathedral arches background pattern */}
            <div className="fixed inset-0 pointer-events-none opacity-10">
                <svg width="100%" height="100%">
                    <pattern id="arches" width="200" height="300" patternUnits="userSpaceOnUse">
                        <path d="M0 300 L0 100 Q100 0 200 100 L200 300" fill="none" stroke="#fbbf24" strokeWidth="2" />
                        <path d="M100 300 L100 200 Q150 150 200 200 L200 300" fill="none" stroke="#fbbf24" strokeWidth="1" />
                        <path d="M0 300 L0 200 Q50 150 100 200 L100 300" fill="none" stroke="#fbbf24" strokeWidth="1" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#arches)" />
                </svg>
            </div>

            {/* Light rays from above */}
            <div className="fixed top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden">
                {[...Array(7)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute top-0 w-32"
                        style={{
                            left: `${10 + i * 12}%`,
                            height: '400px',
                            background: `linear-gradient(180deg, ${glassColors[i * 2]}40, transparent)`,
                            transform: `rotate(${-10 + i * 3}deg)`,
                            transformOrigin: 'top center'
                        }}
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity }}
                    />
                ))}
            </div>

            {/* Navigation - Gothic arch style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-stone-900/90 backdrop-blur-sm px-8 py-4 border-2 border-amber-600/30 relative"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}>
                        <div className="flex justify-between items-center pb-4">
                            <div className="flex items-center gap-3">
                                <Church className="w-6 h-6 text-amber-400" />
                                <span className="text-xl font-bold text-amber-200 tracking-widest">CATHEDRAL</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-amber-300/80">
                                {['Nave', 'Chapters', 'Choir', 'Blessing'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-200 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Gothic cathedral entrance */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Rose window */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 1.5 }}
                        className="mb-12"
                    >
                        <RoseWindow />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <p className="text-amber-400 tracking-[0.3em] uppercase text-sm mb-4">
                            {displayData.role}
                        </p>
                        <h1 className="text-5xl md:text-7xl font-light mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(to right, #fcd34d, #f59e0b, #f97316, #dc2626, #be185d, #7c3aed, #2563eb, #fcd34d)',
                                backgroundSize: '200% 100%',
                                animation: 'shimmer 5s linear infinite'
                            }}>
                            {displayData.name}
                        </h1>

                        <style jsx>{`
                            @keyframes shimmer {
                                0% { background-position: 200% 0; }
                                100% { background-position: -200% 0; }
                            }
                        `}</style>

                        <p className="text-lg text-purple-200/70 max-w-xl mx-auto">
                            {displayData.bio}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About - Inside stained glass arched window */}
            <section id="nave" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                        style={{ clipPath: 'polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%)' }}
                    >
                        {/* Mosaic background */}
                        <div className="absolute inset-0 grid grid-cols-8 gap-0.5 p-1">
                            {[...Array(32)].map((_, i) => (
                                <GlassPanel key={i} color={glassColors[i % glassColors.length]} className="aspect-square" />
                            ))}
                        </div>

                        {/* Content overlay */}
                        <div className="relative bg-stone-900/80 backdrop-blur-sm m-4 p-12 mt-16 border-2 border-amber-600/30">
                            <div className="flex items-center gap-4 mb-8">
                                <Sun className="w-10 h-10 text-amber-400" />
                                <h2 className="text-3xl font-light text-amber-200">Illumination</h2>
                            </div>
                            <p className="text-purple-100/70 leading-relaxed text-lg">
                                Like the master craftsmen who created the windows of Notre-Dame, I approach each
                                project with reverence and precision. Every piece of glass, every lead line, every
                                color choice serves a purpose—to transform light into meaning. Currently creating
                                luminous experiences from {displayData.location}.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Mosaic tiles */}
            <section id="choir" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-4 text-amber-200"
                    >
                        Sacred Arts
                    </motion.h2>
                    <p className="text-center text-purple-300/60 mb-16">Each skill, a piece of the mosaic</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                            >
                                <GlassPanel color={glassColors[i % glassColors.length]} className="p-8 text-center aspect-square flex items-center justify-center">
                                    <span className="text-white font-bold text-lg drop-shadow-lg relative z-10">{skill}</span>
                                </GlassPanel>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Arched window panels */}
            <section id="chapters" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-light text-center mb-16 text-amber-200"
                    >
                        Windows of Creation
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group relative overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{ clipPath: 'polygon(0 15%, 50% 0, 100% 15%, 100% 100%, 0 100%)' }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Colored glass header */}
                                <div className="h-48 relative grid grid-cols-3 gap-0.5">
                                    {[...Array(9)].map((_, j) => (
                                        <GlassPanel key={j} color={glassColors[(i * 3 + j) % glassColors.length]} />
                                    ))}
                                    {/* Overlay icon */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Star className="w-16 h-16 text-white/50" />
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="bg-stone-900/90 p-8 border-t-4 border-stone-700">
                                    <h3 className="text-2xl font-light text-amber-200 mb-3 group-hover:text-amber-100 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-purple-200/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm text-white/90 rounded border"
                                                style={{
                                                    backgroundColor: `${glassColors[(i + j) % glassColors.length]}60`,
                                                    borderColor: glassColors[(i + j) % glassColors.length]
                                                }}
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
                        className="text-4xl font-light text-center mb-16 text-amber-200"
                    >
                        Chronicles
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-amber-600/50"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[14px] w-6 h-6 bg-amber-500 transform rotate-45" />
                            <div className="bg-stone-900/80 border border-amber-600/30 p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl text-amber-200">{exp.position}</h3>
                                    <span className="text-sm text-purple-300">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-purple-200/60">{exp.description}</p>
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
                        className="text-4xl font-light text-center mb-16 text-amber-200"
                    >
                        Teachings
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-stone-900/80 border border-amber-600/30 p-6"
                                style={{ clipPath: 'polygon(0 10%, 50% 0, 100% 10%, 100% 100%, 0 100%)' }}
                            >
                                <div className="pt-4">
                                    <Moon className="w-8 h-8 text-amber-400 mb-4" />
                                    <h3 className="text-lg text-amber-200 mb-1">{edu.degree}</h3>
                                    <p className="text-purple-300">{edu.school}</p>
                                    <p className="text-sm text-purple-400/50">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="blessing" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Sun className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-4xl font-light mb-6 text-amber-200">Benediction</h2>
                        <p className="text-purple-200/60 mb-12">
                            Let light guide our collaboration
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, color: glassColors[0] },
                                { icon: Github, href: displayData.links.github, color: glassColors[5] },
                                { icon: Linkedin, href: displayData.links.linkedin, color: glassColors[9] }
                            ].map(({ icon: Icon, href, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-4 border-4 border-stone-700"
                                    style={{
                                        background: `linear-gradient(135deg, ${color}dd, ${color}99)`,
                                        boxShadow: `0 0 20px ${color}40`
                                    }}
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
