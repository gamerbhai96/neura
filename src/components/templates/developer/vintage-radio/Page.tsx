'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Radio, Volume2, Music, Disc } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Radio Dev",
    role: "Audio Engineer",
    email: "dev@radio.io",
    phone: "+1 555 000 0000",
    location: "Nashville, TN",
    bio: "Broadcasting code across the airwaves. Tuned in to create beautiful experiences.",
    skills: ["Python", "Web Audio", "FFT", "DSP", "React", "Electron", "Rust", "C++"],
    experience: [{ company: "Frequency Labs", position: "Lead Engineer", startDate: "2019", endDate: "Present", description: "Building audio experiences", highlights: [] }],
    education: [
        { school: "Berklee", degree: "BS Music Technology", field: "Music Tech", startDate: "2015", endDate: "2019" }
    ],
    projects: [
        { name: "Wavelength", description: "Real-time audio visualization", technologies: ["Web Audio", "WebGL"] },
        { name: "Frequency", description: "Music production DAW", technologies: ["Electron", "WASM"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Vintage dial component
const DialKnob = ({ value, label }: { value: number; label: string }) => (
    <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border-4 border-amber-900 shadow-lg">
            {/* Dial marks */}
            {[...Array(11)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-0.5 h-2 bg-amber-300/50"
                    style={{
                        left: '50%',
                        top: '4px',
                        transformOrigin: '0 36px',
                        transform: `translateX(-50%) rotate(${-135 + i * 27}deg)`
                    }}
                />
            ))}
            {/* Pointer */}
            <motion.div
                className="absolute w-1 h-6 bg-amber-200 rounded-full"
                style={{
                    left: '50%',
                    top: '8px',
                    transformOrigin: 'center 32px',
                    transform: `translateX(-50%) rotate(${-135 + value * 27}deg)`
                }}
            />
            {/* Center cap */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-amber-500 to-amber-700 border-2 border-amber-400" />
        </div>
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-amber-200/70 whitespace-nowrap">{label}</div>
    </div>
);

// Speaker grille pattern
const SpeakerGrille = () => (
    <div className="relative w-full h-full rounded-lg overflow-hidden bg-amber-950 p-4">
        <div className="absolute inset-4 grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] gap-0.5">
            {[...Array(400)].map((_, i) => (
                <div key={i} className="rounded-full bg-amber-900/50 border border-amber-800/30" />
            ))}
        </div>
        {/* Fabric overlay */}
        <div className="absolute inset-2 rounded-lg" style={{
            background: 'repeating-linear-gradient(0deg, rgba(120,53,15,0.3) 0px, rgba(120,53,15,0.3) 1px, transparent 1px, transparent 3px), repeating-linear-gradient(90deg, rgba(120,53,15,0.3) 0px, rgba(120,53,15,0.3) 1px, transparent 1px, transparent 3px)'
        }} />
    </div>
);

// Frequency bar visualizer
const FrequencyBars = () => (
    <div className="flex items-end justify-center gap-1 h-16">
        {[...Array(20)].map((_, i) => (
            <motion.div
                key={i}
                className="w-2 bg-gradient-to-t from-amber-600 to-amber-400 rounded-t"
                animate={{ height: [10, 30 + Math.random() * 30, 10] }}
                transition={{ duration: 0.5 + Math.random() * 0.5, repeat: Infinity, delay: i * 0.05 }}
            />
        ))}
    </div>
);

export default function VintageRadioPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #451a03 0%, #78350f 50%, #92400e 100%)'
        }}>
            {/* Wood grain texture */}
            <div className="fixed inset-0 pointer-events-none opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2378350f' stroke-opacity='0.5'%3E%3Cpath d='M0 20 Q50 25 100 20 T200 20 M0 40 Q50 35 100 40 T200 40 M0 60 Q50 65 100 60 T200 60 M0 80 Q50 75 100 80 T200 80 M0 100 Q50 105 100 100 T200 100 M0 120 Q50 115 100 120 T200 120 M0 140 Q50 145 100 140 T200 140 M0 160 Q50 155 100 160 T200 160 M0 180 Q50 185 100 180 T200 180'/%3E%3C/g%3E%3C/svg%3E")`
            }} />

            {/* Navigation - Radio dial style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-6">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-amber-800 to-amber-900 rounded-2xl border-4 border-amber-700 px-8 py-4 shadow-2xl">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            >
                                <Disc className="w-8 h-8 text-amber-400" />
                            </motion.div>
                            <span className="text-xl font-bold text-amber-200 tracking-widest">VINTAGE</span>
                        </div>
                        <div className="flex gap-8 text-sm font-medium text-amber-300/80">
                            {['Tune', 'Stations', 'Dial', 'Signal'].map((item) => (
                                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-amber-200 transition-colors flex items-center gap-1">
                                    <Radio className="w-3 h-3" />
                                    {item}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Classic radio cabinet */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl w-full bg-gradient-to-b from-amber-700 to-amber-800 rounded-3xl border-8 border-amber-600 p-8 shadow-2xl relative"
                    style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 2px 4px rgba(255,255,255,0.1)' }}
                >
                    {/* Top art deco decoration */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-t-full" />

                    {/* Speaker grille section */}
                    <div className="h-48 mb-8 rounded-2xl overflow-hidden border-4 border-amber-600/50">
                        <SpeakerGrille />
                    </div>

                    {/* Dial/tuner section */}
                    <div className="bg-gradient-to-b from-amber-950 to-amber-900 rounded-xl p-6 mb-6 border-2 border-amber-700">
                        {/* Tuning display */}
                        <div className="bg-amber-100 rounded-lg p-4 mb-6 relative overflow-hidden">
                            {/* Frequency numbers */}
                            <div className="flex justify-between text-amber-900 text-xs font-mono mb-2">
                                {['530', '700', '900', '1100', '1400', '1600'].map((freq) => (
                                    <span key={freq}>{freq}</span>
                                ))}
                            </div>
                            {/* Tuner needle */}
                            <motion.div
                                className="absolute bottom-4 w-0.5 h-8 bg-red-600"
                                animate={{ left: ['20%', '80%', '20%'] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            />
                            {/* Station name */}
                            <div className="text-center py-4">
                                <p className="text-amber-600 text-sm tracking-widest">{displayData.role}</p>
                                <h1 className="text-4xl md:text-5xl font-black text-amber-900">{displayData.name}</h1>
                            </div>
                        </div>

                        {/* Frequency visualizer */}
                        <FrequencyBars />
                    </div>

                    {/* Control knobs */}
                    <div className="flex justify-center gap-12">
                        <DialKnob value={7} label="VOLUME" />
                        <DialKnob value={5} label="BASS" />
                        <DialKnob value={8} label="TREBLE" />
                        <DialKnob value={4} label="TUNING" />
                    </div>

                    {/* Bio text */}
                    <p className="text-center text-amber-200/70 mt-12 text-lg">
                        {displayData.bio}
                    </p>
                </motion.div>
            </section>

            {/* About */}
            <section id="tune" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-b from-amber-800 to-amber-900 rounded-2xl p-12 border-4 border-amber-700 shadow-xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Volume2 className="w-10 h-10 text-amber-400" />
                            <div>
                                <h2 className="text-3xl font-bold text-amber-200">On Air</h2>
                                <p className="text-amber-400/60">Broadcasting since 2019</p>
                            </div>
                        </div>
                        <p className="text-amber-100/70 leading-relaxed text-lg">
                            Like the warm, analog sound of a vintage tube amplifier, I believe in crafting
                            experiences that have soul and character. In an age of digital perfection,
                            I bring the warmth of human touch to every project. Currently broadcasting
                            from {displayData.location}, bringing retro vibes to modern tech.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Radio preset buttons */}
            <section id="dial" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-4 text-amber-200"
                    >
                        Frequency Presets
                    </motion.h2>
                    <p className="text-center text-amber-400/60 mb-16">Your favorite stations, always ready</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative cursor-pointer"
                            >
                                {/* Preset button */}
                                <div className="bg-gradient-to-b from-amber-600 to-amber-700 rounded-lg p-6 text-center border-4 border-amber-500 shadow-lg"
                                    style={{ boxShadow: '0 8px 20px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.2)' }}>
                                    <div className="text-4xl font-black text-amber-900 mb-2">{i + 1}</div>
                                    <div className="text-sm text-amber-200 font-medium">{skill}</div>
                                    {/* LED indicator */}
                                    <motion.div
                                        className="absolute top-3 right-3 w-2 h-2 rounded-full bg-green-400"
                                        animate={{ opacity: [1, 0.3, 1] }}
                                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                        style={{ boxShadow: '0 0 8px rgba(74,222,128,0.8)' }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section id="stations" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center mb-16 text-amber-200"
                    >
                        Featured Broadcasts
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                                className={`group bg-gradient-to-b from-amber-700 to-amber-800 rounded-2xl overflow-hidden border-4 border-amber-600 shadow-xl ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Mini speaker grille */}
                                <div className="h-32 bg-amber-950 p-3">
                                    <div className="h-full rounded-lg" style={{
                                        background: 'repeating-linear-gradient(0deg, rgba(120,53,15,0.5) 0px, rgba(120,53,15,0.5) 2px, transparent 2px, transparent 6px)'
                                    }} />
                                </div>

                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Music className="w-6 h-6 text-amber-400" />
                                        <h3 className="text-2xl font-bold text-amber-200 group-hover:text-amber-100 transition-colors">
                                            {project.name}
                                        </h3>
                                    </div>
                                    <p className="text-amber-300/60 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-amber-900/50 text-amber-300 text-sm border border-amber-600 rounded">
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
                        Broadcast History
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-amber-600"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[14px] w-6 h-6 bg-amber-600 rounded-full border-2 border-amber-400 flex items-center justify-center">
                                <Radio className="w-3 h-3 text-amber-200" />
                            </div>
                            <div className="bg-gradient-to-b from-amber-800 to-amber-850 rounded-xl p-6 border-2 border-amber-700">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-amber-200">{exp.position}</h3>
                                    <span className="text-sm text-amber-400">{exp.startDate} - {exp.endDate}</span>
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
                        Training
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-b from-amber-800 to-amber-850 rounded-xl p-6 border-2 border-amber-700"
                            >
                                <h3 className="text-lg font-bold text-amber-200 mb-1">{edu.degree}</h3>
                                <p className="text-amber-400">{edu.school}</p>
                                <p className="text-sm text-amber-400/50">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="signal" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Radio className="w-16 h-16 text-amber-400 mx-auto mb-8" />
                        </motion.div>
                        <h2 className="text-4xl font-bold mb-6 text-amber-200">Send a Signal</h2>
                        <p className="text-amber-300/60 mb-12">
                            Let's tune into the same frequency
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
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="p-4 bg-gradient-to-b from-amber-600 to-amber-700 rounded-lg border-2 border-amber-500 shadow-lg"
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
