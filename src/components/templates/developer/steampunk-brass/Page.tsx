'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Cog, Gauge, Wrench } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Inventor",
    role: "Systems Engineer",
    email: "dev@steamworks.io",
    phone: "+1 555 000 0000",
    location: "London, UK",
    bio: "Engineering marvels with brass and steam. Where Victorian elegance meets modern innovation.",
    skills: ["Rust", "C++", "FPGA", "Verilog", "Linux", "Docker", "Kubernetes", "gRPC"],
    experience: [{ company: "Clockwork Labs", position: "Chief Engineer", startDate: "2018", endDate: "Present", description: "Building mechanical wonders", highlights: [] }],
    education: [
        { school: "Imperial College", degree: "MEng Mechanical", field: "Engineering", startDate: "2014", endDate: "2018" }
    ],
    projects: [
        { name: "Automaton", description: "Self-healing distributed system", technologies: ["Rust", "Raft"] },
        { name: "Clockwork", description: "Precision task scheduler", technologies: ["C++", "Linux"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Rotating gear component
const Gear = ({ size, x, y, speed, teeth, color }: { size: number; x: string; y: string; speed: number; teeth: number; color: string }) => (
    <motion.div
        className="absolute"
        style={{ left: x, top: y }}
        animate={{ rotate: 360 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
    >
        <svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" fill={color} />
            <circle cx="50" cy="50" r="15" fill="#1a1a1a" />
            <circle cx="50" cy="50" r="8" fill={color} />
            {[...Array(teeth)].map((_, i) => (
                <rect
                    key={i}
                    x="45"
                    y="5"
                    width="10"
                    height="15"
                    fill={color}
                    transform={`rotate(${i * (360 / teeth)} 50 50)`}
                />
            ))}
        </svg>
    </motion.div>
);

// Pressure gauge component
const PressureGauge = ({ value, label }: { value: number; label: string }) => (
    <div className="relative w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Gauge background */}
            <circle cx="50" cy="50" r="45" fill="#1a1a1a" stroke="#b45309" strokeWidth="4" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="#78350f" strokeWidth="2" />
            {/* Tick marks */}
            {[...Array(11)].map((_, i) => (
                <line
                    key={i}
                    x1="50"
                    y1="15"
                    x2="50"
                    y2="20"
                    stroke="#d97706"
                    strokeWidth="2"
                    transform={`rotate(${-135 + i * 27} 50 50)`}
                />
            ))}
            {/* Needle */}
            <motion.line
                x1="50"
                y1="50"
                x2="50"
                y2="22"
                stroke="#ef4444"
                strokeWidth="3"
                strokeLinecap="round"
                animate={{ rotate: [-135 + value * 2.7, -135 + value * 2.7 + 5, -135 + value * 2.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformOrigin: '50px 50px' }}
            />
            {/* Center cap */}
            <circle cx="50" cy="50" r="6" fill="#b45309" />
        </svg>
        <div className="absolute bottom-2 left-0 right-0 text-center text-xs text-amber-500 font-mono">
            {label}
        </div>
    </div>
);

export default function SteampunkBrassPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-stone-950 text-amber-100 overflow-hidden" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%231a1a1a'/%3E%3Cpath d='M0 0h50v50H0zM50 50h50v50H50z' fill='%23171717' fill-opacity='0.5'/%3E%3C/svg%3E")`
        }}>
            {/* Animated gears background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
                <Gear size={200} x="-5%" y="10%" speed={20} teeth={12} color="#b45309" />
                <Gear size={150} x="10%" y="25%" speed={15} teeth={8} color="#92400e" />
                <Gear size={180} x="80%" y="5%" speed={25} teeth={10} color="#b45309" />
                <Gear size={120} x="85%" y="30%" speed={12} teeth={6} color="#78350f" />
                <Gear size={250} x="70%" y="60%" speed={30} teeth={14} color="#92400e" />
                <Gear size={100} x="5%" y="70%" speed={10} teeth={8} color="#b45309" />
            </div>

            {/* Steam pipes decoration */}
            <div className="fixed left-0 top-0 bottom-0 w-8 border-r-4 border-amber-900/30" />
            <div className="fixed right-0 top-0 bottom-0 w-8 border-l-4 border-amber-900/30" />

            {/* Navigation - Industrial plate style */}
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 px-8 py-4 border-4 border-amber-700 shadow-lg relative">
                        {/* Rivets */}
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className={`absolute w-3 h-3 bg-amber-600 rounded-full border border-amber-500 ${i < 2 ? 'top-2' : 'bottom-2'} ${i % 2 === 0 ? 'left-3' : 'right-3'}`} />
                        ))}
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Cog className="w-8 h-8 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                                <span className="text-xl font-bold text-amber-200 tracking-widest">STEAMWORKS</span>
                            </div>
                            <div className="flex gap-8 text-sm font-bold text-amber-300/80 uppercase tracking-wider">
                                {['Workshop', 'Inventions', 'Blueprints', 'Telegraph'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-100 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Industrial factory */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left - Gauges */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex flex-wrap justify-center gap-6"
                        >
                            <PressureGauge value={75} label="CREATIVITY" />
                            <PressureGauge value={90} label="PRECISION" />
                            <PressureGauge value={85} label="POWER" />
                        </motion.div>

                        {/* Right - Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-900/50 border border-amber-700 mb-6">
                                <Wrench className="w-4 h-4 text-amber-500" />
                                <span className="text-amber-400 text-sm tracking-widest uppercase">{displayData.role}</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black text-amber-200 mb-6 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                {displayData.name}
                            </h1>
                            <p className="text-lg text-amber-300/70 leading-relaxed mb-8">
                                {displayData.bio}
                            </p>
                            <div className="flex gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="px-8 py-4 bg-amber-700 text-amber-100 font-bold border-2 border-amber-500 hover:bg-amber-600 transition-colors flex items-center gap-2"
                                >
                                    <Cog className="w-5 h-5" />
                                    View Workshop
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About - Blueprint style */}
            <section id="workshop" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-12 bg-blue-950 border-4 border-blue-800"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231e3a5f' fill-opacity='0.3'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v1H0zM0 0v40h1V0z'/%3E%3C/g%3E%3C/svg%3E")`
                        }}
                    >
                        <div className="absolute -top-4 left-8 bg-blue-950 px-4 py-1 border-2 border-blue-800">
                            <span className="text-blue-300 font-mono text-sm">SCHEMATIC 001-A</span>
                        </div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-6 font-mono">// SYSTEM OVERVIEW</h2>
                        <p className="text-blue-300/80 leading-relaxed font-mono">
                            In the age of steam and brass, engineers built machines that would last centuries.
                            I carry that same philosophy into the digital realm—crafting systems with the precision
                            of a Swiss timepiece and the durability of Victorian iron. Every cog must mesh perfectly,
                            every valve must seal tight. Currently engineering from {displayData.location}.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Industrial meters */}
            <section id="blueprints" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-200"
                    >
                        Technical Specifications
                    </motion.h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative bg-gradient-to-b from-amber-900/50 to-stone-900 border-2 border-amber-700 p-4"
                            >
                                {/* Corner rivets */}
                                <div className="absolute top-1 left-1 w-2 h-2 bg-amber-600 rounded-full" />
                                <div className="absolute top-1 right-1 w-2 h-2 bg-amber-600 rounded-full" />
                                <div className="absolute bottom-1 left-1 w-2 h-2 bg-amber-600 rounded-full" />
                                <div className="absolute bottom-1 right-1 w-2 h-2 bg-amber-600 rounded-full" />

                                <div className="text-center py-4">
                                    <Cog className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                    <span className="text-amber-200 font-bold">{skill}</span>
                                </div>
                                {/* Power meter */}
                                <div className="h-2 bg-stone-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${70 + Math.random() * 30}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 + 0.5, duration: 1 }}
                                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="inventions" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-200"
                    >
                        Inventions & Contraptions
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className={`group relative bg-gradient-to-br from-amber-950 to-stone-950 border-4 border-amber-800 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Decorative gear */}
                                <div className="absolute -top-6 -right-6 opacity-30">
                                    <Cog className="w-24 h-24 text-amber-600" />
                                </div>

                                <div className="p-8 relative">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-amber-800 border-2 border-amber-600">
                                            <Gauge className="w-8 h-8 text-amber-300" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                                                {project.name}
                                            </h3>
                                            <p className="text-amber-500 text-sm">Patent Pending</p>
                                        </div>
                                    </div>
                                    <p className="text-amber-300/70 mb-6">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-amber-900/50 text-amber-400 text-sm border border-amber-700">
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
                        className="text-4xl font-bold text-center mb-16 text-amber-200"
                    >
                        Engineering Log
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-amber-800"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[14px] w-6 h-6 bg-amber-700 border-2 border-amber-500 rounded-full flex items-center justify-center">
                                <Cog className="w-3 h-3 text-amber-300" />
                            </div>
                            <div className="bg-amber-950/50 border-2 border-amber-800 p-6">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-amber-200">{exp.position}</h3>
                                    <span className="text-sm text-amber-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-amber-300/60">{exp.description}</p>
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
                        className="text-4xl font-bold text-center mb-16 text-amber-200"
                    >
                        Credentials
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-amber-950/50 border-2 border-amber-800 p-6"
                            >
                                <h3 className="text-lg font-bold text-amber-200 mb-1">{edu.degree}</h3>
                                <p className="text-amber-400">{edu.school}</p>
                                <p className="text-sm text-amber-500/60 font-mono">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="telegraph" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Cog className="w-20 h-20 text-amber-500 mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-6 text-amber-200">Send a Telegraph</h2>
                        <p className="text-amber-300/60 mb-12">
                            Ready to engineer something extraordinary?
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
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    className="p-4 bg-amber-800 border-2 border-amber-600 hover:bg-amber-700 transition-colors"
                                >
                                    <Icon className="w-6 h-6 text-amber-200" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
