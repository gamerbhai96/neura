'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Palette, Droplets, Blend, Pipette } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Gradient Artist",
    role: "Visual Developer",
    email: "dev@mesh.io",
    phone: "+1 555 000 0000",
    location: "Color Space",
    bio: "Blending colors and code into seamless digital experiences.",
    skills: ["React", "CSS", "Motion", "WebGL", "SVG", "Color Theory", "Animation", "Design"],
    experience: [{ company: "Spectrum Labs", position: "Color Engineer", startDate: "2020", endDate: "Present", description: "Creating vibrant interfaces", highlights: [] }],
    education: [
        { school: "Color Academy", degree: "BFA Digital Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Prisma", description: "Color palette generator", technologies: ["React", "Canvas"] },
        { name: "Blend", description: "Gradient creator tool", technologies: ["CSS", "SVG"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Mesh gradient blob with SVG
const MeshBlob = ({ colors, size, x, y, blur }: {
    colors: string[]; size: number; x: string; y: string; blur: number
}) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
            width: size,
            height: size,
            left: x,
            top: y,
            background: `radial-gradient(ellipse at 30% 30%, ${colors[0]} 0%, ${colors[1]} 50%, ${colors[2]} 100%)`,
            filter: `blur(${blur}px)`,
            mixBlendMode: 'screen'
        }}
        animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.2, 0.9, 1],
            rotate: [0, 45, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    />
);

// Bezier curve decoration
const BezierCurve = ({ color, delay }: { color: string; delay: number }) => (
    <motion.svg
        className="absolute w-full h-full pointer-events-none"
        style={{ left: 0, top: 0 }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 3, delay }}
    >
        <motion.path
            d={`M${Math.random() * 200},${Math.random() * 500} Q${Math.random() * 800},${Math.random() * 200} ${Math.random() * 1200},${Math.random() * 600}`}
            stroke={color}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay, repeat: Infinity, repeatType: "reverse" }}
        />
    </motion.svg>
);

// Paint swatch card
const SwatchCard = ({ color1, color2, children, className = '' }: {
    color1: string; color2: string; children: React.ReactNode; className?: string
}) => (
    <div
        className={`relative rounded-3xl overflow-hidden ${className}`}
        style={{
            background: `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`
        }}
    >
        {/* Noise texture overlay */}
        <div
            className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
            }}
        />
        <div className="relative z-10 p-8">{children}</div>
    </div>
);

// Color picker dot
const ColorDot = ({ color, x, y }: { color: string; x: string; y: string }) => (
    <motion.div
        className="absolute pointer-events-none"
        style={{ left: x, top: y }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
    >
        <div
            className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
            style={{ background: color }}
        />
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-mono text-white/60 whitespace-nowrap">
            {color}
        </div>
    </motion.div>
);

export default function GradientMeshPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const meshColors = [
        { c1: '#ff6b6b', c2: '#feca57', c3: '#48dbfb' },
        { c1: '#ff9ff3', c2: '#feca57', c3: '#54a0ff' },
        { c1: '#5f27cd', c2: '#48dbfb', c3: '#ff6b6b' },
        { c1: '#00d2d3', c2: '#54a0ff', c3: '#5f27cd' }
    ];

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)'
        }}>
            {/* Mesh gradient blobs */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <MeshBlob colors={[meshColors[0].c1, meshColors[0].c2, meshColors[0].c3]} size={600} x="-10%" y="10%" blur={60} />
                <MeshBlob colors={[meshColors[1].c1, meshColors[1].c2, meshColors[1].c3]} size={500} x="60%" y="20%" blur={50} />
                <MeshBlob colors={[meshColors[2].c1, meshColors[2].c2, meshColors[2].c3]} size={700} x="20%" y="60%" blur={70} />
                <MeshBlob colors={[meshColors[3].c1, meshColors[3].c2, meshColors[3].c3]} size={400} x="70%" y="70%" blur={40} />
            </div>

            {/* Bezier curves */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-50">
                <BezierCurve color="#ff6b6b" delay={0} />
                <BezierCurve color="#feca57" delay={1} />
                <BezierCurve color="#48dbfb" delay={2} />
            </div>

            {/* Color picker dots */}
            <ColorDot color="#ff6b6b" x="15%" y="25%" />
            <ColorDot color="#feca57" x="80%" y="35%" />
            <ColorDot color="#48dbfb" x="25%" y="75%" />
            <ColorDot color="#5f27cd" x="75%" y="65%" />

            {/* Navigation - Gradient bar */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="backdrop-blur-xl rounded-2xl px-8 py-4 border border-white/10"
                        style={{
                            background: 'linear-gradient(90deg, rgba(255,107,107,0.1), rgba(254,202,87,0.1), rgba(72,219,251,0.1))'
                        }}
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Palette className="w-8 h-8 text-pink-400" />
                                </motion.div>
                                <span
                                    className="text-2xl font-black text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb)' }}
                                >
                                    MESH
                                </span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/60">
                                {['Blend', 'Palette', 'Swatches', 'Mix'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Hero - Color picker style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-4xl mx-auto relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        {/* Gradient circle picker */}
                        <motion.div
                            className="w-48 h-48 mx-auto mb-12 rounded-full relative"
                            style={{
                                background: 'conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #5f27cd, #ff9ff3, #ff6b6b)'
                            }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        >
                            <div className="absolute inset-8 rounded-full bg-[#0f0f23] flex items-center justify-center">
                                <Droplets className="w-12 h-12 text-white/60" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-8"
                            style={{
                                background: 'linear-gradient(90deg, rgba(255,107,107,0.2), rgba(254,202,87,0.2))'
                            }}
                        >
                            <Blend className="w-5 h-5 text-orange-400" />
                            <span className="text-orange-300">{displayData.role}</span>
                        </motion.div>

                        <h1
                            className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #ff6b6b, #feca57, #48dbfb, #5f27cd)',
                                backgroundSize: '300% 300%',
                                animation: 'gradient-shift 5s ease infinite'
                            }}
                        >
                            {displayData.name}
                        </h1>

                        <style jsx>{`
                            @keyframes gradient-shift {
                                0%, 100% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                            }
                        `}</style>

                        <p className="text-xl text-white/60 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#swatches"
                                className="px-8 py-4 rounded-full font-bold text-white"
                                style={{ background: 'linear-gradient(90deg, #ff6b6b, #feca57)' }}
                            >
                                View Work
                            </a>
                            <a
                                href="#mix"
                                className="px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all"
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="blend" className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <SwatchCard color1="rgba(255,107,107,0.3)" color2="rgba(254,202,87,0.3)">
                            <div className="flex items-center gap-4 mb-8">
                                <Pipette className="w-10 h-10 text-pink-400" />
                                <h2
                                    className="text-3xl font-black text-transparent bg-clip-text"
                                    style={{ backgroundImage: 'linear-gradient(90deg, #ff6b6b, #feca57)' }}
                                >
                                    Color Story
                                </h2>
                            </div>
                            <p className="text-white/70 leading-relaxed text-lg">
                                Like a painter mixing colors on a palette, I blend technologies and creativity
                                to create seamless digital experiences. Every gradient tells a story, every
                                blend creates harmony. I believe the most beautiful interfaces emerge from the
                                intersection of art and engineering. Currently mixing from {displayData.location}.
                            </p>
                            {/* Color bar */}
                            <div className="flex mt-8 rounded-full overflow-hidden h-4">
                                {['#ff6b6b', '#feca57', '#48dbfb', '#5f27cd', '#ff9ff3'].map((color) => (
                                    <div key={color} className="flex-1" style={{ background: color }} />
                                ))}
                            </div>
                        </SwatchCard>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Color swatches */}
            <section id="palette" className="py-32 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-4 text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #48dbfb, #5f27cd)' }}
                    >
                        Color Palette
                    </motion.h2>
                    <p className="text-center text-white/50 mb-16">My spectrum of skills</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => {
                            const gradients = [
                                'linear-gradient(135deg, #ff6b6b, #ff9ff3)',
                                'linear-gradient(135deg, #feca57, #ff6b6b)',
                                'linear-gradient(135deg, #48dbfb, #feca57)',
                                'linear-gradient(135deg, #5f27cd, #48dbfb)',
                                'linear-gradient(135deg, #ff9ff3, #5f27cd)',
                                'linear-gradient(135deg, #54a0ff, #ff9ff3)',
                                'linear-gradient(135deg, #00d2d3, #54a0ff)',
                                'linear-gradient(135deg, #ff6b6b, #00d2d3)'
                            ];
                            return (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="rounded-2xl overflow-hidden cursor-pointer"
                                    style={{ background: gradients[i % gradients.length] }}
                                >
                                    <div className="p-6 text-center backdrop-blur-sm bg-black/20">
                                        <span className="font-bold text-white">{skill}</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="swatches" className="py-32 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #ff9ff3, #ff6b6b)' }}
                    >
                        Featured Blends
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
                                <SwatchCard
                                    color1={i === 0 ? 'rgba(255,107,107,0.4)' : 'rgba(72,219,251,0.4)'}
                                    color2={i === 0 ? 'rgba(254,202,87,0.4)' : 'rgba(95,39,205,0.4)'}
                                    className="group"
                                >
                                    {/* Gradient preview */}
                                    <div
                                        className="aspect-video rounded-xl mb-6 flex items-center justify-center"
                                        style={{
                                            background: i === 0
                                                ? 'linear-gradient(135deg, #ff6b6b, #feca57)'
                                                : 'linear-gradient(135deg, #48dbfb, #5f27cd)'
                                        }}
                                    >
                                        <Palette className="w-16 h-16 text-white/50 group-hover:text-white/80 transition-colors" />
                                    </div>

                                    <h3
                                        className="text-2xl font-bold mb-3 text-transparent bg-clip-text"
                                        style={{
                                            backgroundImage: i === 0
                                                ? 'linear-gradient(90deg, #ff6b6b, #feca57)'
                                                : 'linear-gradient(90deg, #48dbfb, #5f27cd)'
                                        }}
                                    >
                                        {project.name}
                                    </h3>
                                    <p className="text-white/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm text-white/80 rounded-full"
                                                style={{ background: 'rgba(255,255,255,0.1)' }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </SwatchCard>
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
                        className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #48dbfb, #ff9ff3)' }}
                    >
                        Color Journey
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <SwatchCard color1="rgba(72,219,251,0.2)" color2="rgba(95,39,205,0.2)">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-cyan-300">{exp.position}</h3>
                                    <span className="px-4 py-1 rounded-full text-sm text-white"
                                        style={{ background: 'linear-gradient(90deg, #48dbfb, #5f27cd)' }}>
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-pink-300 mb-2">{exp.company}</p>
                                <p className="text-white/60">{exp.description}</p>
                            </SwatchCard>
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
                        className="text-4xl font-black text-center mb-16 text-transparent bg-clip-text"
                        style={{ backgroundImage: 'linear-gradient(90deg, #feca57, #ff6b6b)' }}
                    >
                        Learning Spectrum
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <SwatchCard color1="rgba(254,202,87,0.2)" color2="rgba(255,107,107,0.2)">
                                    <Palette className="w-8 h-8 text-yellow-400 mb-4" />
                                    <h3 className="text-lg font-bold text-yellow-300 mb-1">{edu.degree}</h3>
                                    <p className="text-pink-300">{edu.school}</p>
                                    <p className="text-sm text-white/50">{edu.startDate} - {edu.endDate}</p>
                                </SwatchCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="mix" className="py-32 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="w-24 h-24 mx-auto mb-8 rounded-full"
                            style={{
                                background: 'conic-gradient(from 0deg, #ff6b6b, #feca57, #48dbfb, #5f27cd, #ff9ff3, #ff6b6b)'
                            }}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <h2
                            className="text-4xl font-black mb-6 text-transparent bg-clip-text"
                            style={{ backgroundImage: 'linear-gradient(90deg, #ff6b6b, #feca57, #48dbfb)' }}
                        >
                            Let's Blend
                        </h2>
                        <p className="text-white/50 mb-12">
                            Ready to create something colorful together?
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, gradient: 'linear-gradient(135deg, #ff6b6b, #feca57)' },
                                { icon: Github, href: displayData.links.github, gradient: 'linear-gradient(135deg, #48dbfb, #5f27cd)' },
                                { icon: Linkedin, href: displayData.links.linkedin, gradient: 'linear-gradient(135deg, #ff9ff3, #ff6b6b)' }
                            ].map(({ icon: Icon, href, gradient }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2 }}
                                    className="p-4 rounded-xl"
                                    style={{ background: gradient }}
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
