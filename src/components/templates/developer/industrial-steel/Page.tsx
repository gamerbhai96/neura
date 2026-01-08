'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Factory, Wrench, AlertTriangle, HardHat, Gauge } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Steel Worker",
    role: "Infrastructure Engineer",
    email: "dev@steel.io",
    phone: "+1 555 000 0000",
    location: "Detroit, MI",
    bio: "Forging robust systems from raw code. Built tough. Built to last.",
    skills: ["Kubernetes", "Terraform", "AWS", "Docker", "Prometheus", "Grafana", "CI/CD", "Linux"],
    experience: [{ company: "Ironworks DevOps", position: "Principal Engineer", startDate: "2018", endDate: "Present", description: "Building indestructible infrastructure", highlights: [] }],
    education: [
        { school: "Michigan Tech", degree: "BS Systems Engineering", field: "Engineering", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Anvil", description: "Infrastructure as Code framework", technologies: ["Terraform", "Go"] },
        { name: "Forge", description: "Automated deployment pipeline", technologies: ["Kubernetes", "ArgoCD"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Sparks animation
const Spark = ({ x, delay }: { x: string; delay: number }) => (
    <motion.div
        className="absolute w-1 h-1 bg-orange-400 rounded-full"
        style={{ left: x, bottom: '30%' }}
        initial={{ opacity: 0, y: 0 }}
        animate={{
            opacity: [0, 1, 1, 0],
            y: [0, -100, -150],
            x: [0, Math.random() * 100 - 50]
        }}
        transition={{ duration: 1.5, delay, repeat: Infinity, repeatDelay: 2 }}
    />
);

// Rivet component
const Rivet = ({ className }: { className: string }) => (
    <div className={`absolute w-4 h-4 bg-gradient-to-br from-zinc-400 to-zinc-600 rounded-full border-2 border-zinc-500 ${className}`} style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)' }} />
);

export default function IndustrialSteelPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-zinc-900 text-zinc-100 overflow-hidden">
            {/* Metal plate texture */}
            <div className="fixed inset-0 pointer-events-none opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233f3f46' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Warning stripes at top */}
            <div className="fixed top-0 left-0 right-0 h-3 z-50" style={{
                background: 'repeating-linear-gradient(45deg, #000, #000 10px, #f59e0b 10px, #f59e0b 20px)'
            }} />

            {/* Welding sparks */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(10)].map((_, i) => (
                    <Spark key={i} x={`${20 + i * 7}%`} delay={i * 0.3} />
                ))}
            </div>

            {/* Navigation - Steel beam */}
            <nav className="fixed top-3 w-full z-40 bg-gradient-to-b from-zinc-800 to-zinc-900 border-b-4 border-zinc-700">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Factory className="w-8 h-8 text-amber-500" />
                        <span className="text-xl font-black text-amber-500 tracking-widest">STEEL WORKS</span>
                    </div>
                    <div className="flex gap-8 text-sm font-bold text-zinc-400 uppercase tracking-wider">
                        {['Plant', 'Output', 'Specs', 'Wire'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-500 transition-colors flex items-center gap-2">
                                <Wrench className="w-3 h-3" />
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero - Factory floor */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
                {/* I-beam decorations */}
                <div className="absolute left-8 top-32 bottom-32 w-8 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 hidden lg:block">
                    <div className="absolute inset-x-0 top-0 h-4 bg-zinc-800 border-b border-zinc-600" />
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-zinc-800 border-t border-zinc-600" />
                </div>
                <div className="absolute right-8 top-32 bottom-32 w-8 bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 hidden lg:block">
                    <div className="absolute inset-x-0 top-0 h-4 bg-zinc-800 border-b border-zinc-600" />
                    <div className="absolute inset-x-0 bottom-0 h-4 bg-zinc-800 border-t border-zinc-600" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="relative"
                    >
                        {/* Warning sign */}
                        <motion.div
                            initial={{ scale: 0, rotate: -10 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring" }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-amber-500 text-zinc-900 font-black mb-8"
                            style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)' }}
                        >
                            <AlertTriangle className="w-6 h-6" />
                            <span className="tracking-wider">{displayData.role?.toUpperCase()}</span>
                            <AlertTriangle className="w-6 h-6" />
                        </motion.div>

                        <h1 className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-zinc-200 to-zinc-500 tracking-tight">
                            {displayData.name?.toUpperCase()}
                        </h1>

                        <p className="text-xl text-zinc-400 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        {/* Location stamp */}
                        <div className="inline-block px-4 py-2 border-2 border-zinc-600 text-zinc-500 font-mono text-sm">
                            📍 {displayData.location} • EST. 2018
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About - Heavy machinery panel */}
            <section id="plant" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-gradient-to-br from-zinc-800 via-zinc-850 to-zinc-900 p-12 border-8 border-zinc-700"
                    >
                        {/* Rivets */}
                        <Rivet className="top-4 left-4" />
                        <Rivet className="top-4 right-4" />
                        <Rivet className="bottom-4 left-4" />
                        <Rivet className="bottom-4 right-4" />
                        <Rivet className="top-4 left-1/2 -translate-x-1/2" />
                        <Rivet className="bottom-4 left-1/2 -translate-x-1/2" />

                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-amber-500 text-zinc-900">
                                <HardHat className="w-8 h-8" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-zinc-200">FACILITY OVERVIEW</h2>
                                <p className="text-amber-500 font-mono text-sm">SECTION 001-A</p>
                            </div>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-lg">
                            In the heat of the forge, where molten metal meets precision engineering, I build
                            infrastructure that doesn't just work—it endures. Like the steel beams that hold up
                            skyscrapers, my systems are designed to bear immense load without breaking a sweat.
                            No shortcuts. No compromises. Just rock-solid reliability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Gauge cluster */}
            <section id="specs" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-4 text-zinc-200"
                    >
                        TECHNICAL SPECIFICATIONS
                    </motion.h2>
                    <p className="text-center text-amber-500 font-mono mb-16">PERFORMANCE METRICS</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative bg-zinc-800 p-6 border-4 border-zinc-700"
                            >
                                {/* Mini rivets */}
                                <div className="absolute top-2 left-2 w-2 h-2 bg-zinc-600 rounded-full" />
                                <div className="absolute top-2 right-2 w-2 h-2 bg-zinc-600 rounded-full" />
                                <div className="absolute bottom-2 left-2 w-2 h-2 bg-zinc-600 rounded-full" />
                                <div className="absolute bottom-2 right-2 w-2 h-2 bg-zinc-600 rounded-full" />

                                <div className="text-center">
                                    <Gauge className="w-8 h-8 text-amber-500 mx-auto mb-3" />
                                    <span className="text-zinc-300 font-bold block mb-2">{skill}</span>
                                    {/* Power bar */}
                                    <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${75 + Math.random() * 25}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 + 0.5, duration: 0.8 }}
                                            className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="output" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-4 text-zinc-200"
                    >
                        PRODUCTION OUTPUT
                    </motion.h2>
                    <p className="text-center text-amber-500 font-mono mb-16">MANUFACTURED SOLUTIONS</p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group relative bg-gradient-to-br from-zinc-800 to-zinc-900 border-4 border-zinc-700 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Warning stripe header */}
                                <div className="h-3" style={{
                                    background: 'repeating-linear-gradient(45deg, #000, #000 10px, #f59e0b 10px, #f59e0b 20px)'
                                }} />

                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-amber-500 text-zinc-900">
                                            <Factory className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-zinc-200 group-hover:text-amber-500 transition-colors uppercase">
                                                {project.name}
                                            </h3>
                                            <p className="text-xs text-zinc-500 font-mono">PRODUCT ID: {String(i + 1).padStart(4, '0')}</p>
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-zinc-700 text-amber-500 text-sm font-mono border border-zinc-600">
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
                        className="text-4xl font-black text-center mb-16 text-zinc-200"
                    >
                        SERVICE RECORD
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-amber-500"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[12px] w-5 h-5 bg-amber-500 rotate-45" />
                            <div className="bg-zinc-800 border-2 border-zinc-700 p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-black text-zinc-200 uppercase">{exp.position}</h3>
                                    <span className="text-sm text-amber-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-zinc-500">{exp.description}</p>
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
                        className="text-4xl font-black text-center mb-16 text-zinc-200"
                    >
                        CERTIFICATIONS
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-800 border-4 border-zinc-700 p-6 relative"
                            >
                                <Rivet className="top-2 left-2 w-3 h-3" />
                                <Rivet className="top-2 right-2 w-3 h-3" />
                                <h3 className="text-lg font-black text-zinc-200 uppercase">{edu.degree}</h3>
                                <p className="text-amber-500">{edu.school}</p>
                                <p className="text-sm text-zinc-500 font-mono">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="wire" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Factory className="w-20 h-20 text-amber-500 mx-auto mb-8" />
                        <h2 className="text-4xl font-black mb-6 text-zinc-200">OPEN CHANNEL</h2>
                        <p className="text-zinc-500 mb-12">
                            Ready to build something indestructible?
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
                                    whileHover={{ scale: 1.1 }}
                                    className="p-4 bg-amber-500 text-zinc-900 hover:bg-amber-400 transition-colors"
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Warning stripes at bottom */}
            <div className="h-3" style={{
                background: 'repeating-linear-gradient(45deg, #000, #000 10px, #f59e0b 10px, #f59e0b 20px)'
            }} />
        </div>
    );
}
