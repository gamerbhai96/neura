'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Mountain, Snowflake, Wind, Thermometer } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Aurora Dev",
    role: "Data Engineer",
    email: "dev@aurora.io",
    phone: "+1 555 000 0000",
    location: "Reykjavik, Iceland",
    bio: "Dancing with data like the northern lights dance across the Arctic sky.",
    skills: ["Python", "Spark", "Kubernetes", "PostgreSQL", "Redis", "Kafka", "AWS", "Terraform"],
    experience: [{ company: "Polar Data Labs", position: "Staff Engineer", startDate: "2019", endDate: "Present", description: "Building data pipelines at scale", highlights: [] }],
    education: [
        { school: "Nordic University", degree: "MS Data Science", field: "Data Science", startDate: "2015", endDate: "2017" }
    ],
    projects: [
        { name: "Polaris", description: "Real-time data streaming", technologies: ["Kafka", "Spark"] },
        { name: "Glacier", description: "Cold storage optimizer", technologies: ["S3", "Python"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Aurora wave effect
const AuroraWave = ({ color, delay, blur, y }: { color: string; delay: number; blur: number; y: string }) => (
    <motion.div
        className="absolute w-[200%] h-48 pointer-events-none"
        style={{
            left: '-50%',
            top: y,
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            filter: `blur(${blur}px)`,
            opacity: 0.5
        }}
        animate={{
            x: ['-20%', '20%', '-20%'],
            skewX: [-10, 10, -10],
            scaleY: [1, 1.5, 1]
        }}
        transition={{
            duration: 8 + delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay
        }}
    />
);

// Stars field
const StarField = () => (
    <div className="fixed inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                    width: Math.random() * 2 + 1,
                    height: Math.random() * 2 + 1,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 60}%`,
                }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2
                }}
            />
        ))}
    </div>
);

// Snow particle
const Snowfall = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(40)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full bg-white/80"
                style={{
                    width: 2 + Math.random() * 4,
                    height: 2 + Math.random() * 4,
                    left: `${Math.random() * 100}%`,
                    top: -20
                }}
                animate={{
                    y: ['0vh', '110vh'],
                    x: [0, Math.sin(i) * 50, 0]
                }}
                transition={{
                    duration: 8 + Math.random() * 6,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear"
                }}
            />
        ))}
    </div>
);

// Mountain silhouette
const Mountains = () => (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-10">
        <svg viewBox="0 0 1440 300" className="w-full h-48" preserveAspectRatio="none">
            {/* Back mountain layer */}
            <path
                d="M0,300 L0,180 L200,100 L400,200 L600,80 L800,150 L1000,60 L1200,140 L1440,100 L1440,300 Z"
                fill="#1a1a3e"
            />
            {/* Front mountain layer */}
            <path
                d="M0,300 L0,220 L150,150 L300,250 L500,120 L700,200 L900,100 L1100,180 L1300,120 L1440,180 L1440,300 Z"
                fill="#0f0f23"
            />
            {/* Snow caps */}
            <path
                d="M150,150 L180,170 L120,170 Z M500,120 L540,150 L460,150 Z M900,100 L950,140 L850,140 Z M1300,120 L1340,150 L1260,150 Z"
                fill="white"
                opacity="0.8"
            />
        </svg>
    </div>
);

// Temperature/data reading widget
const DataWidget = ({ label, value, unit }: { label: string; value: string; unit: string }) => (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-green-400/20">
        <p className="text-green-400/60 text-xs uppercase tracking-wider">{label}</p>
        <div className="flex items-baseline gap-1">
            <span className="text-2xl font-mono text-green-400">{value}</span>
            <span className="text-sm text-green-400/60">{unit}</span>
        </div>
    </div>
);

export default function AuroraBorealisPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen text-white font-sans overflow-hidden relative" style={{
            background: 'linear-gradient(180deg, #0a0a1a 0%, #1a1a3e 40%, #0f0f23 100%)'
        }}>
            {/* Stars */}
            <StarField />

            {/* Aurora layers */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <AuroraWave color="#22d3ee" delay={0} blur={60} y="10%" />
                <AuroraWave color="#a855f7" delay={2} blur={50} y="20%" />
                <AuroraWave color="#10b981" delay={1} blur={70} y="5%" />
                <AuroraWave color="#3b82f6" delay={3} blur={55} y="15%" />
                <AuroraWave color="#f472b6" delay={1.5} blur={45} y="25%" />
            </div>

            {/* Snowfall */}
            <Snowfall />

            {/* Mountains */}
            <Mountains />

            {/* Navigation - Arctic station style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        className="bg-black/40 backdrop-blur-xl rounded-xl px-8 py-4 border border-cyan-400/20"
                    >
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                >
                                    <Snowflake className="w-8 h-8 text-cyan-400" />
                                </motion.div>
                                <span className="text-2xl font-bold tracking-wider text-cyan-300">AURORA</span>
                            </div>
                            <div className="flex gap-8 text-sm font-medium text-white/60">
                                {['Base', 'Systems', 'Logs', 'Comms'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Hero - Research station display */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-32 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        {/* Station ID badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-3 bg-black/40 backdrop-blur-sm rounded-xl border border-cyan-400/30 mb-8"
                        >
                            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-cyan-300 font-mono tracking-wider">{displayData.role}</span>
                        </motion.div>

                        <h1
                            className="text-6xl md:text-8xl font-black mb-6 text-transparent bg-clip-text"
                            style={{
                                backgroundImage: 'linear-gradient(135deg, #22d3ee, #a855f7, #10b981, #22d3ee)',
                                backgroundSize: '300% 300%',
                                animation: 'aurora-shift 8s ease infinite'
                            }}
                        >
                            {displayData.name}
                        </h1>

                        <style jsx>{`
                            @keyframes aurora-shift {
                                0%, 100% { background-position: 0% 50%; }
                                50% { background-position: 100% 50%; }
                            }
                        `}</style>

                        <p className="text-xl text-cyan-100/60 max-w-xl mx-auto mb-12">
                            {displayData.bio}
                        </p>

                        {/* Data widgets row */}
                        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                            <DataWidget label="Temp" value="-15" unit="°C" />
                            <DataWidget label="Wind" value="12" unit="km/h" />
                            <DataWidget label="Kp Index" value="7" unit="" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About - Station log */}
            <section id="base" className="py-32 px-6 relative z-20">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl rounded-xl p-12 border border-cyan-400/20"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Mountain className="w-10 h-10 text-cyan-400" />
                            <div>
                                <h2 className="text-3xl font-bold text-cyan-300">Station Log</h2>
                                <p className="text-cyan-400/50 font-mono text-sm">ENTRY #2847</p>
                            </div>
                        </div>
                        <p className="text-cyan-100/60 leading-relaxed text-lg font-mono">
                            Like the aurora that dances across the Arctic sky, I find beauty in the patterns
                            hidden within data. My work involves building pipelines that flow like ethereal
                            lights—constantly moving, transforming, illuminating insights from the darkness.
                            Currently stationed at {displayData.location}, where the data streams never stop. ❄️
                        </p>

                        {/* Status bar */}
                        <div className="mt-8 flex items-center gap-4 text-sm font-mono">
                            <span className="text-green-400">● ONLINE</span>
                            <span className="text-cyan-400/50">|</span>
                            <span className="text-cyan-400/70">Last sync: 2 min ago</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Terminal/monitoring style */}
            <section id="systems" className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-cyan-300"
                    >
                        System Status
                    </motion.h2>
                    <p className="text-center text-cyan-400/50 mb-16 font-mono">All systems operational</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20 cursor-pointer group"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 group-hover:animate-pulse" />
                                    <span className="text-xs text-green-400 font-mono uppercase">Active</span>
                                </div>
                                <span className="font-bold text-cyan-200">{skill}</span>
                                {/* Progress bar */}
                                <div className="mt-3 h-1 bg-cyan-400/20 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-400"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${70 + Math.random() * 30}%` }}
                                        transition={{ duration: 1, delay: i * 0.1 }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="logs" className="py-32 px-6 relative z-20">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-cyan-300"
                    >
                        Mission Logs
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                                className={`group bg-black/40 backdrop-blur-xl rounded-xl border border-cyan-400/20 overflow-hidden ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Aurora header */}
                                <div
                                    className="h-40 relative overflow-hidden"
                                    style={{
                                        background: `linear-gradient(180deg, ${i === 0 ? '#22d3ee20, #a855f720' : '#10b98120, #3b82f620'})`
                                    }}
                                >
                                    <motion.div
                                        className="absolute inset-0"
                                        style={{
                                            background: `linear-gradient(90deg, transparent, ${i === 0 ? '#22d3ee' : '#10b981'}, transparent)`,
                                            filter: 'blur(30px)',
                                            opacity: 0.3
                                        }}
                                        animate={{ x: ['-100%', '100%'] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-5xl">{i === 0 ? '🌌' : '🧊'}</span>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-mono text-cyan-400/60">PROJECT-{String(i + 1).padStart(3, '0')}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-cyan-200 mb-3 group-hover:text-cyan-100 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-cyan-100/50 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 text-sm text-cyan-400 bg-cyan-400/10 rounded border border-cyan-400/20">
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
            <section className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-cyan-300"
                    >
                        Expedition History
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-cyan-400/20"
                        >
                            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                <h3 className="text-xl font-bold text-cyan-200">{exp.position}</h3>
                                <span className="px-4 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-mono">
                                    {exp.startDate} - {exp.endDate}
                                </span>
                            </div>
                            <p className="text-purple-300 mb-2">{exp.company}</p>
                            <p className="text-cyan-100/50">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-32 px-6 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-cyan-300"
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
                                className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-cyan-400/20"
                            >
                                <Thermometer className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="text-lg font-bold text-cyan-200 mb-1">{edu.degree}</h3>
                                <p className="text-purple-300">{edu.school}</p>
                                <p className="text-sm text-cyan-400/50 font-mono">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="comms" className="py-32 px-6 relative z-20">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl rounded-xl p-12 border border-cyan-400/20"
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <Wind className="w-16 h-16 text-cyan-400 mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-6 text-cyan-300">Open Comms Channel</h2>
                        <p className="text-cyan-100/50 mb-8">
                            Ready to explore the data frontier together?
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
                                    className="p-4 bg-cyan-400/20 rounded-xl border border-cyan-400/30"
                                >
                                    <Icon className="w-6 h-6 text-cyan-400" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
