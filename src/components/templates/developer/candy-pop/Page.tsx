'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Heart, Star, Sparkles } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Sweet Dev",
    role: "Creative Developer",
    email: "dev@candypop.io",
    phone: "+1 555 000 0000",
    location: "Candyland, CA",
    bio: "Making the web a sweeter place, one pixel at a time. Life is short—add sprinkles!",
    skills: ["React", "Vue", "Svelte", "CSS", "GSAP", "Three.js", "Figma", "Framer"],
    experience: [{ company: "Sugar Rush Studios", position: "Lead Creative", startDate: "2020", endDate: "Present", description: "Crafting delightful experiences", highlights: [] }],
    education: [
        { school: "Design Academy", degree: "BFA Interactive Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Gumball", description: "Playful animation library", technologies: ["GSAP", "React"] },
        { name: "Lollipop", description: "Color palette generator", technologies: ["Vue", "Canvas"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Floating candy component
const FloatingCandy = ({ emoji, x, y, delay, size }: { emoji: string; x: string; y: string; delay: number; size: number }) => (
    <motion.div
        className="absolute text-4xl select-none pointer-events-none"
        style={{ left: x, top: y, fontSize: `${size}px` }}
        animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
        }}
        transition={{
            duration: 4 + delay,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
    >
        {emoji}
    </motion.div>
);

// Sprinkle component
const Sprinkle = ({ color, top, left, rotate }: { color: string; top: string; left: string; rotate: number }) => (
    <div
        className="absolute w-1 h-4 rounded-full"
        style={{ backgroundColor: color, top, left, transform: `rotate(${rotate}deg)` }}
    />
);

export default function CandyPopPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const candyColors = ['#FF69B4', '#87CEEB', '#DDA0DD', '#98FB98', '#FFD700', '#FF6347', '#00CED1'];
    const candyEmojis = ['🍬', '🍭', '🧁', '🍩', '🍪', '🎂', '🍫', '🍡', '🌈', '⭐'];

    return (
        <div className="min-h-screen overflow-hidden font-sans" style={{
            background: 'linear-gradient(180deg, #fdf2f8 0%, #fce7f3 25%, #fbcfe8 50%, #f9a8d4 75%, #f472b6 100%)'
        }}>
            {/* Sprinkles background */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <Sprinkle
                        key={i}
                        color={candyColors[i % candyColors.length]}
                        top={`${Math.random() * 100}%`}
                        left={`${Math.random() * 100}%`}
                        rotate={Math.random() * 180}
                    />
                ))}
            </div>

            {/* Floating candies */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                {candyEmojis.map((emoji, i) => (
                    <FloatingCandy
                        key={i}
                        emoji={emoji}
                        x={`${5 + i * 10}%`}
                        y={`${10 + (i % 4) * 20}%`}
                        delay={i * 0.5}
                        size={30 + Math.random() * 20}
                    />
                ))}
            </div>

            {/* Navigation - Candy wrapper style */}
            <nav className="fixed top-0 w-full z-50">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <motion.div
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        className="bg-white/80 backdrop-blur-md rounded-full px-8 py-3 shadow-lg border-4 border-pink-300 inline-flex items-center gap-8 mx-auto"
                        style={{ boxShadow: '0 8px 30px rgba(244,114,182,0.3)' }}
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">🍬</span>
                            <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-xl">
                                CANDY POP
                            </span>
                        </div>
                        <div className="flex gap-6 text-sm font-bold">
                            {['Sweet', 'Treats', 'Flavors', 'Order'].map((item, i) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:scale-110 transition-transform"
                                    style={{ color: candyColors[i] }}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Hero - Giant gumball machine */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 relative">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Gumball machine frame */}
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5 }}
                        className="relative inline-block"
                    >
                        {/* Glass dome with gumballs */}
                        <div className="w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full bg-white/30 backdrop-blur-sm border-8 border-white shadow-2xl relative overflow-hidden flex flex-wrap items-center justify-center content-center gap-2 p-8">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="w-12 h-12 rounded-full shadow-lg"
                                    style={{ backgroundColor: candyColors[i % candyColors.length] }}
                                    animate={{
                                        y: [0, -5, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: i * 0.1,
                                        repeat: Infinity
                                    }}
                                />
                            ))}
                        </div>
                        {/* Base */}
                        <div className="w-24 h-8 mx-auto bg-gradient-to-b from-red-400 to-red-600 rounded-b-lg border-4 border-red-700" />
                        <div className="w-16 h-16 mx-auto -mt-2 bg-gradient-to-b from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-black text-xs">
                            TURN
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12"
                    >
                        <motion.p
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-pink-600 font-bold tracking-widest uppercase mb-4"
                        >
                            ✨ {displayData.role} ✨
                        </motion.p>
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400">
                                {displayData.name}
                            </span>
                        </h1>
                        <p className="text-lg text-pink-700/80 max-w-md mx-auto">
                            {displayData.bio}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* About - Candy wrapper card */}
            <section id="sweet" className="py-32 px-6">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, rotate: -3 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Wrapper twist ends */}
                        <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-32 bg-gradient-to-r from-pink-400 to-pink-300 rounded-l-full" style={{ clipPath: 'polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 50%)' }} />
                        <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-16 h-32 bg-gradient-to-l from-cyan-400 to-cyan-300 rounded-r-full" style={{ clipPath: 'polygon(50% 0%, 0% 0%, 0% 100%, 50% 100%, 100% 50%)' }} />

                        <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-cyan-200 p-12 rounded-3xl shadow-xl relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-5xl">🧁</span>
                                <h2 className="text-3xl font-black text-pink-600">About Me</h2>
                            </div>
                            <p className="text-pink-800 leading-relaxed text-lg">
                                Just like the perfect piece of candy, I believe great design should be colorful,
                                joyful, and leave people wanting more. I specialize in creating experiences that
                                bring smiles and delight users at every interaction. Currently spreading sweetness
                                from {displayData.location}! 🌈
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills - Jawbreaker layers */}
            <section id="flavors" className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-pink-600 mb-4"
                    >
                        Flavor Stack 🍭
                    </motion.h2>
                    <p className="text-pink-500 mb-16">Every layer is delicious!</p>

                    {/* Jawbreaker visualization */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ scale: 0, rotate: 180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                className="relative cursor-pointer"
                            >
                                {/* Jawbreaker with layers */}
                                <div
                                    className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl font-bold text-white text-sm text-center p-2"
                                    style={{
                                        background: `radial-gradient(circle, 
                                            ${candyColors[(i + 2) % candyColors.length]} 0%, 
                                            ${candyColors[(i + 1) % candyColors.length]} 30%, 
                                            ${candyColors[i % candyColors.length]} 60%, 
                                            ${candyColors[(i + 3) % candyColors.length]} 100%
                                        )`,
                                        boxShadow: `0 10px 30px ${candyColors[i % candyColors.length]}50`
                                    }}
                                >
                                    {skill}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects - Cupcake cards */}
            <section id="treats" className="py-32 px-6">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center text-pink-600 mb-16"
                    >
                        Sweet Treats 🧁
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                                className={`group relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Cupcake wrapper */}
                                <div
                                    className="h-24 rounded-b-3xl"
                                    style={{
                                        background: `repeating-linear-gradient(
                                            90deg,
                                            ${candyColors[i % candyColors.length]},
                                            ${candyColors[i % candyColors.length]} 10px,
                                            ${candyColors[(i + 2) % candyColors.length]} 10px,
                                            ${candyColors[(i + 2) % candyColors.length]} 20px
                                        )`
                                    }}
                                />
                                {/* Frosting */}
                                <div
                                    className="bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 p-8 rounded-t-[3rem] -mt-4 relative shadow-xl"
                                    style={{
                                        clipPath: 'polygon(0 20%, 10% 0, 20% 15%, 30% 0, 40% 15%, 50% 0, 60% 15%, 70% 0, 80% 15%, 90% 0, 100% 20%, 100% 100%, 0 100%)'
                                    }}
                                >
                                    {/* Cherry on top */}
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-4xl">🍒</div>

                                    <h3 className="text-2xl font-black text-pink-600 mb-3 mt-4 group-hover:text-purple-600 transition-colors">
                                        {project.name}
                                    </h3>
                                    <p className="text-pink-700/80 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, j) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full text-white text-sm font-bold"
                                                style={{ backgroundColor: candyColors[(i + j) % candyColors.length] }}
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
                        className="text-4xl font-black text-center text-pink-600 mb-16"
                    >
                        Sweet Journey 🌈
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative pl-12 pb-8"
                        >
                            {/* Lollipop timeline */}
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-400 via-purple-400 to-cyan-400" />
                            <div className="absolute left-0 top-2 -translate-x-[10px] w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center">
                                <Star className="w-3 h-3 text-white" />
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200">
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-pink-600">{exp.position}</h3>
                                    <span className="px-3 py-1 bg-pink-100 text-pink-500 rounded-full text-sm">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-purple-600 mb-2">{exp.company}</p>
                                <p className="text-pink-700/70">{exp.description}</p>
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
                        className="text-4xl font-black text-center text-pink-600 mb-16"
                    >
                        Learning Sweets 📚
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border-2 border-pink-200"
                            >
                                <span className="text-3xl mb-4 block">🎓</span>
                                <h3 className="text-lg font-bold text-pink-600">{edu.degree}</h3>
                                <p className="text-purple-600">{edu.school}</p>
                                <p className="text-sm text-pink-400">{edu.startDate} - {edu.endDate}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="order" className="py-32 px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-7xl mb-8"
                        >
                            🍭
                        </motion.div>
                        <h2 className="text-4xl font-black text-pink-600 mb-6">Order a Sweet! 💌</h2>
                        <p className="text-pink-700/80 mb-12">
                            Ready to add some sugar to your project?
                        </p>
                        <div className="flex justify-center gap-6">
                            {[
                                { icon: Mail, href: `mailto:${displayData.email}`, color: '#FF69B4' },
                                { icon: Github, href: displayData.links.github, color: '#87CEEB' },
                                { icon: Linkedin, href: displayData.links.linkedin, color: '#DDA0DD' }
                            ].map(({ icon: Icon, href, color }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                    className="p-4 rounded-full shadow-xl"
                                    style={{ backgroundColor: color }}
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
