'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Coffee, UtensilsCrossed, Star, Clock } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Diner Dev",
    role: "Full Stack Cook",
    email: "dev@diner.io",
    phone: "+1 555 000 0000",
    location: "Los Angeles, CA",
    bio: "Serving up hot code fresh from the grill. Order up!",
    skills: ["React", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "GraphQL", "TypeScript"],
    experience: [{ company: "Stack Overflow Diner", position: "Head Chef", startDate: "2020", endDate: "Present", description: "Cooking up solutions daily", highlights: [] }],
    education: [
        { school: "Culinary Tech Institute", degree: "BS Computer Science", field: "CS", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Order Up!", description: "Real-time order management", technologies: ["React", "Socket.io"] },
        { name: "Tip Jar", description: "Payment processing system", technologies: ["Stripe", "Node.js"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Neon sign text effect
const NeonSign = ({ children, color }: { children: string; color: string }) => (
    <motion.span
        animate={{
            textShadow: [
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`,
                `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px ${color}`,
                `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}`,
            ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ color }}
    >
        {children}
    </motion.span>
);

// Checkered pattern
const CheckeredPattern = () => (
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)',
        backgroundSize: '40px 40px'
    }} />
);

// Jukebox component
const Jukebox = () => (
    <motion.div
        className="relative w-32 h-48 mx-auto"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
    >
        {/* Top arch */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-rose-600 to-rose-700 rounded-t-3xl border-4 border-rose-500">
            <div className="absolute inset-x-4 top-2 h-10 bg-amber-100 rounded-t-2xl flex items-center justify-center">
                <span className="text-2xl">🎵</span>
            </div>
        </div>
        {/* Body */}
        <div className="absolute top-14 left-0 right-0 bottom-0 bg-gradient-to-b from-rose-700 to-rose-800 rounded-b-lg border-4 border-rose-600">
            {/* Selection window */}
            <div className="mx-2 mt-2 h-16 bg-black rounded border-2 border-cyan-400 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="h-5 border-b border-cyan-400/30 flex items-center px-2"
                        animate={{ x: [0, -100, 0] }}
                        transition={{ duration: 10, delay: i * 0.5, repeat: Infinity }}
                    >
                        <span className="text-cyan-400 text-xs font-mono">A{i + 1} - Hit Song</span>
                    </motion.div>
                ))}
            </div>
            {/* Buttons */}
            <div className="flex justify-center gap-2 mt-2">
                {[...Array(4)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-4 h-4 rounded-full bg-amber-400 border-2 border-amber-500"
                        animate={{ scale: i === 1 ? [1, 1.2, 1] : 1 }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    />
                ))}
            </div>
        </div>
    </motion.div>
);

export default function RetroDinerPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen overflow-hidden" style={{
            background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%)'
        }}>
            {/* Checkered floor reflection */}
            <div className="fixed bottom-0 left-0 right-0 h-48 pointer-events-none" style={{
                background: 'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(10,10,10,1) 100%)'
            }}>
                <CheckeredPattern />
            </div>

            {/* Neon border lights */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 via-cyan-400 to-rose-500 opacity-80" />
            <div className="fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-rose-500 to-cyan-400 opacity-80" />

            {/* Navigation - Chrome diner style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-gradient-to-b from-zinc-300 via-zinc-200 to-zinc-300 px-8 py-4 rounded-lg border-4 border-zinc-400 shadow-xl relative"
                        style={{ boxShadow: '0 4px 20px rgba(255,255,255,0.1), inset 0 2px 4px rgba(255,255,255,0.5)' }}>
                        {/* Chrome highlight */}
                        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-white/50 to-transparent rounded-t" />

                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <Coffee className="w-8 h-8 text-rose-600" />
                                <span className="text-2xl font-black text-rose-600 tracking-wider" style={{ fontFamily: 'Georgia, serif' }}>
                                    ROSIE'S
                                </span>
                            </div>
                            <div className="flex gap-8 text-sm font-bold text-zinc-700 uppercase tracking-wider">
                                {['Menu', 'Specials', 'Hours', 'Order'].map((item) => (
                                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-rose-600 transition-colors">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero - Neon diner sign */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Jukebox */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <Jukebox />
                        </motion.div>

                        {/* Main content - Neon sign style */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center flex-1"
                        >
                            {/* "OPEN" sign */}
                            <motion.div
                                animate={{ opacity: [1, 0.7, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="inline-block px-6 py-2 border-4 border-cyan-400 rounded-lg mb-8"
                                style={{ boxShadow: '0 0 20px rgba(34,211,238,0.5), inset 0 0 20px rgba(34,211,238,0.1)' }}
                            >
                                <span className="text-cyan-400 text-xl font-bold tracking-[0.5em]">
                                    {displayData.role?.toUpperCase()}
                                </span>
                            </motion.div>

                            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                <NeonSign color="#fb7185">{displayData.name || 'Developer'}</NeonSign>
                            </h1>

                            <p className="text-xl text-zinc-400 mb-8">
                                {displayData.bio}
                            </p>

                            {/* Location badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 text-white rounded-full">
                                <Clock className="w-4 h-4" />
                                <span className="font-bold">{displayData.location} • ALWAYS OPEN</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About - Menu board style */}
            <section id="menu" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-zinc-900 border-8 border-rose-600 p-12 relative"
                    >
                        {/* Menu board header */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-rose-600 px-8 py-2">
                            <span className="text-white font-black text-xl tracking-widest">TODAY'S SPECIAL</span>
                        </div>

                        {/* Light bulb decorations */}
                        <div className="absolute -top-3 left-8 flex gap-4">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-4 h-4 rounded-full bg-amber-300"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 0.5, delay: i * 0.2, repeat: Infinity }}
                                    style={{ boxShadow: '0 0 10px rgba(251,191,36,0.8)' }}
                                />
                            ))}
                        </div>

                        <p className="text-amber-100 leading-relaxed text-lg text-center mt-4" style={{ fontFamily: 'Georgia, serif' }}>
                            Just like Grandma's cooking—made with love and served hot! I believe in classic techniques
                            with modern flair. Every line of code is seasoned to perfection, every feature served
                            with a smile. Pull up a stool and let me whip something up for ya!
                        </p>

                        {/* Decorative stars */}
                        <div className="flex justify-center gap-2 mt-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Menu items */}
            <section id="specials" className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-4"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        <NeonSign color="#22d3ee">MENU</NeonSign>
                    </motion.h2>
                    <p className="text-center text-zinc-500 mb-16">Fresh ingredients, always in stock</p>

                    {/* Menu layout */}
                    <div className="bg-amber-50 border-4 border-amber-200 p-8 relative">
                        {/* Decorative coffee stain */}
                        <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-4 border-amber-300/30" />

                        <div className="grid md:grid-cols-2 gap-6">
                            {displayData.skills.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex justify-between items-center border-b-2 border-dotted border-amber-300 pb-2"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-rose-600">★</span>
                                        <span className="font-bold text-zinc-800" style={{ fontFamily: 'Georgia, serif' }}>{skill}</span>
                                    </div>
                                    <span className="text-rose-600 font-bold">${(Math.random() * 5 + 5).toFixed(2)}</span>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-center text-zinc-500 text-sm mt-6 italic">
                            *All skills come with unlimited refills
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects - Order tickets */}
            <section id="hours" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        <NeonSign color="#fb7185">ORDERS UP!</NeonSign>
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className={`group bg-amber-100 border-2 border-amber-300 p-6 relative shadow-lg ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                style={{
                                    background: 'repeating-linear-gradient(white, white 23px, #fcd34d 24px)'
                                }}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Order number */}
                                <div className="absolute -top-4 -right-2 bg-rose-600 text-white px-4 py-1 font-bold transform rotate-3">
                                    ORDER #{String(i + 1).padStart(3, '0')}
                                </div>

                                {/* Pin hole */}
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-zinc-300 rounded-full border-2 border-zinc-400" />

                                <div className="pt-6">
                                    <h3 className="text-2xl font-black text-zinc-800 mb-3 group-hover:text-rose-600 transition-colors"
                                        style={{ fontFamily: 'Georgia, serif' }}>
                                        {project.name}
                                    </h3>
                                    <p className="text-zinc-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1 bg-rose-100 text-rose-600 text-sm font-bold border border-rose-200 rounded">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Stamp */}
                                    <div className="absolute bottom-4 right-4 text-green-600 font-black text-2xl transform rotate-12 opacity-50">
                                        SERVED
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience - Timeline with diner theme */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        <NeonSign color="#22d3ee">WORK HISTORY</NeonSign>
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8 border-l-4 border-rose-500"
                        >
                            <div className="absolute left-0 top-0 -translate-x-[14px] w-6 h-6 bg-rose-500 rounded-full border-4 border-rose-300" />
                            <div className="bg-zinc-900 border-2 border-rose-500 p-6 relative">
                                {/* Chrome accent line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-zinc-400 via-white to-zinc-400" />

                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-rose-400" style={{ fontFamily: 'Georgia, serif' }}>{exp.position}</h3>
                                    <span className="px-3 py-1 bg-cyan-500 text-white text-sm font-bold">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-amber-400 mb-2">{exp.company}</p>
                                <p className="text-zinc-400">{exp.description}</p>
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
                        className="text-4xl font-black text-center mb-16"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        <NeonSign color="#fb7185">TRAINING</NeonSign>
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-zinc-900 border-2 border-cyan-500 p-6"
                            >
                                <UtensilsCrossed className="w-8 h-8 text-cyan-400 mb-4" />
                                <h3 className="text-lg font-bold text-cyan-300" style={{ fontFamily: 'Georgia, serif' }}>{edu.degree}</h3>
                                <p className="text-amber-400">{edu.school}</p>
                                <p className="text-sm text-zinc-500">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact - Counter service */}
            <section id="order" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Service bell */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block mb-8 cursor-pointer"
                        >
                            <div className="w-24 h-16 mx-auto">
                                <div className="w-8 h-4 mx-auto bg-gradient-to-b from-amber-400 to-amber-500 rounded-full" />
                                <div className="w-24 h-12 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-400 rounded-t-full border-4 border-amber-500"
                                    style={{ boxShadow: 'inset 0 -4px 8px rgba(0,0,0,0.2)' }} />
                            </div>
                        </motion.div>

                        <h2 className="text-4xl font-black mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                            <NeonSign color="#22d3ee">RING FOR SERVICE</NeonSign>
                        </h2>
                        <p className="text-zinc-500 mb-12">
                            Ready to place your order?
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, color: '#fb7185' },
                                { icon: Github, href: displayData.links.github, color: '#22d3ee' },
                                { icon: Linkedin, href: displayData.links.linkedin, color: '#fbbf24' }
                            ].map(({ icon: Icon, href, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="p-4 rounded-full"
                                    style={{
                                        backgroundColor: color,
                                        boxShadow: `0 0 20px ${color}80`
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
