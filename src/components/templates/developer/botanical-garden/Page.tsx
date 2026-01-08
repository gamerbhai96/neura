'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Leaf, Flower2, TreePine, Sprout } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Nature Dev",
    role: "Sustainable Tech Engineer",
    email: "dev@garden.io",
    phone: "+1 555 000 0000",
    location: "Portland, OR",
    bio: "Growing sustainable solutions from the ground up. Tech that blooms naturally.",
    skills: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "FastAPI", "GraphQL", "React"],
    experience: [{ company: "GreenTech Labs", position: "Lead Engineer", startDate: "2019", endDate: "Present", description: "Cultivating eco-friendly solutions", highlights: [] }],
    education: [
        { school: "Oregon State", degree: "BS Environmental Engineering", field: "Engineering", startDate: "2015", endDate: "2019" }
    ],
    projects: [
        { name: "Seedling", description: "Carbon footprint tracker", technologies: ["Python", "ML"] },
        { name: "Canopy", description: "Forest monitoring system", technologies: ["IoT", "React"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Floating leaf component
const FloatingLeaf = ({ delay, x, size }: { delay: number; x: string; size: number }) => (
    <motion.div
        className="absolute text-green-600/40"
        style={{ left: x, top: '-50px' }}
        animate={{
            y: [0, window.innerHeight + 100],
            x: [0, Math.sin(delay) * 100],
            rotate: [0, 360]
        }}
        transition={{
            duration: 10 + delay * 2,
            repeat: Infinity,
            delay,
            ease: "linear"
        }}
    >
        <Leaf style={{ width: size, height: size }} />
    </motion.div>
);

// Vine SVG component
const Vine = ({ side }: { side: 'left' | 'right' }) => (
    <svg
        className={`fixed ${side}-0 top-0 h-full w-24 pointer-events-none opacity-30`}
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
    >
        <path
            d={side === 'left'
                ? "M100,0 Q50,100 80,200 Q30,300 70,400 Q20,500 60,600 Q10,700 50,800 Q0,900 40,1000"
                : "M0,0 Q50,100 20,200 Q70,300 30,400 Q80,500 40,600 Q90,700 50,800 Q100,900 60,1000"
            }
            fill="none"
            stroke="#166534"
            strokeWidth="8"
        />
        {/* Leaves on vine */}
        {[100, 300, 500, 700, 900].map((y, i) => (
            <circle key={i} cx={side === 'left' ? 60 + (i % 2) * 20 : 40 - (i % 2) * 20} cy={y} r="15" fill="#22c55e" opacity="0.5" />
        ))}
    </svg>
);

export default function BotanicalGardenPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const plantEmojis = ['🌿', '🌱', '🍃', '🌺', '🌸', '🌻', '🌷', '🌹'];

    return (
        <div className="min-h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #f0fdf4 0%, #dcfce7 30%, #bbf7d0 60%, #86efac 100%)'
        }}>
            {/* Subtle leaf pattern texture */}
            <div className="fixed inset-0 pointer-events-none opacity-10" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M40 0c22.1 0 40 17.9 40 40S62.1 80 40 80 0 62.1 0 40 17.9 0 40 0zm0 10c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30z' opacity='.3'/%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Decorative vines */}
            <Vine side="left" />
            <Vine side="right" />

            {/* Falling leaves */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(8)].map((_, i) => (
                    <FloatingLeaf key={i} delay={i * 1.5} x={`${10 + i * 12}%`} size={20 + Math.random() * 20} />
                ))}
            </div>

            {/* Navigation - Wooden sign style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <motion.div
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    className="max-w-4xl mx-auto bg-amber-800 text-amber-100 px-8 py-4 rounded-lg shadow-lg relative"
                    style={{
                        boxShadow: '0 10px 30px rgba(120, 53, 15, 0.3)',
                        backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                    }}
                >
                    {/* Wood grain lines */}
                    <div className="absolute inset-0 opacity-20 overflow-hidden rounded-lg">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="h-px bg-amber-950 w-full" style={{ marginTop: `${20 + i * 20}%` }} />
                        ))}
                    </div>

                    <div className="flex justify-between items-center relative z-10">
                        <div className="flex items-center gap-3">
                            <TreePine className="w-6 h-6 text-green-400" />
                            <span className="font-bold text-lg tracking-wide">BOTANICAL</span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium">
                            {['Garden', 'Flora', 'Roots', 'Connect'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-green-300 transition-colors flex items-center gap-1">
                                    <Leaf className="w-3 h-3" />
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </nav>

            {/* Hero - Greenhouse style */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Greenhouse frame effect */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative p-16 rounded-t-[200px] bg-white/30 backdrop-blur-sm border-4 border-green-600/20"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, rgba(187,247,208,0.3) 100%)'
                        }}
                    >
                        {/* Decorative plants around */}
                        <div className="absolute -left-8 bottom-0 text-6xl">🌿</div>
                        <div className="absolute -right-8 bottom-0 text-6xl transform scale-x-[-1]">🌿</div>
                        <div className="absolute left-1/4 -bottom-4 text-4xl">🌸</div>
                        <div className="absolute right-1/4 -bottom-4 text-4xl">🌺</div>

                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium mb-6"
                        >
                            <Sprout className="w-4 h-4" />
                            {displayData.role}
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-light text-green-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                            {displayData.name}
                        </h1>

                        <p className="text-lg text-green-800/70 max-w-lg mx-auto mb-8">
                            {displayData.bio}
                        </p>

                        <div className="flex justify-center gap-4">
                            {plantEmojis.slice(0, 5).map((emoji, i) => (
                                <motion.span
                                    key={i}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                                    className="text-3xl"
                                >
                                    {emoji}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About - Garden notebook */}
            <section id="garden" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, rotate: -2 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="bg-amber-50 p-12 shadow-xl relative"
                        style={{
                            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e7d5c0 31px, #e7d5c0 32px)'
                        }}
                    >
                        {/* Red margin line */}
                        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-red-300" />

                        {/* Spiral binding holes */}
                        <div className="absolute left-4 top-8 bottom-8 flex flex-col justify-between">
                            {[...Array(10)].map((_, i) => (
                                <div key={i} className="w-4 h-4 bg-white rounded-full border-2 border-amber-300" />
                            ))}
                        </div>

                        <div className="ml-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-4xl">🌻</span>
                                <h2 className="text-3xl text-green-800" style={{ fontFamily: 'Georgia, serif' }}>Field Notes</h2>
                            </div>
                            <p className="text-green-900/80 leading-relaxed text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                                Like a gardener who understands that each plant needs specific care, I approach every
                                project with patience and attention to detail. I believe in organic growth over forced
                                scaling, in nurturing systems that are sustainable and resilient. Currently tending
                                to digital gardens from {displayData.location}. 🌱
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Seed packets */}
            <section id="flora" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl text-center mb-4 text-green-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Seed Collection
                    </motion.h2>
                    <p className="text-center text-green-600 mb-16">Each skill, carefully cultivated</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -5, rotate: 2 }}
                                className="bg-amber-100 p-6 rounded-t-lg relative shadow-lg cursor-pointer"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 90% 100%, 10% 100%, 0 85%)'
                                }}
                            >
                                {/* Seed packet design */}
                                <div className="absolute top-0 left-0 right-0 h-8 bg-green-600 flex items-center justify-center">
                                    <span className="text-white text-xs font-bold tracking-wider">PREMIUM</span>
                                </div>
                                <div className="pt-10 text-center">
                                    <span className="text-3xl block mb-2">{plantEmojis[i % plantEmojis.length]}</span>
                                    <span className="text-green-800 font-bold">{skill}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Plant markers */}
            <section id="roots" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl text-center mb-16 text-green-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Growing Projects 🌱
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Plant marker stake */}
                                <div className="absolute left-8 -bottom-8 w-2 h-16 bg-amber-700 rounded-b-sm" />

                                {/* Marker board */}
                                <div className="bg-amber-100 p-8 rounded-lg shadow-lg border-4 border-amber-200 relative">
                                    <div className="absolute -top-4 left-6 text-4xl">
                                        {i % 2 === 0 ? '🌿' : '🌸'}
                                    </div>
                                    <div className="pt-4">
                                        <h3 className="text-2xl font-bold text-green-800 mb-3 group-hover:text-green-600 transition-colors"
                                            style={{ fontFamily: 'Georgia, serif' }}>
                                            {project.name}
                                        </h3>
                                        <p className="text-green-700/70 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm border border-green-200">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
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
                        className="text-4xl text-center mb-16 text-green-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Growth Timeline 🌳
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-green-600"
                        >
                            <motion.div
                                className="absolute left-0 top-0 -translate-x-[14px]"
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                <Flower2 className="w-6 h-6 text-green-600 bg-green-100 rounded-full p-1" />
                            </motion.div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-green-200">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-green-800">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-green-600 mb-2">{exp.company}</p>
                                <p className="text-green-700/70">{exp.description}</p>
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
                        className="text-4xl text-center mb-16 text-green-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Roots & Foundation 📚
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-green-200"
                            >
                                <span className="text-3xl block mb-4">🎓</span>
                                <h3 className="text-lg font-bold text-green-800">{edu.degree}</h3>
                                <p className="text-green-600">{edu.school}</p>
                                <p className="text-sm text-green-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="connect" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.span
                            animate={{ rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-7xl block mb-8"
                        >
                            🌷
                        </motion.span>
                        <h2 className="text-4xl mb-6 text-green-800" style={{ fontFamily: 'Georgia, serif' }}>
                            Let's Grow Together
                        </h2>
                        <p className="text-green-700/70 mb-12">
                            Ready to plant the seeds of your next project?
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
                                    className="p-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-500 transition-colors"
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
