'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Scissors, BookOpen, Sparkles, Heart } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Paper Artist",
    role: "Creative Developer",
    email: "dev@paper.io",
    phone: "+1 555 000 0000",
    location: "Studio City",
    bio: "Crafting digital experiences with the precision of a paper artist. Every cut tells a story.",
    skills: ["React", "CSS", "Animation", "Illustration", "SVG", "Canvas", "Figma", "Motion Design"],
    experience: [{ company: "Craft Studio", position: "Lead Artist", startDate: "2020", endDate: "Present", description: "Creating paper-inspired interfaces", highlights: [] }],
    education: [
        { school: "Art Institute", degree: "BFA Graphic Design", field: "Design", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Origami", description: "Folding animation library", technologies: ["GSAP", "SVG"] },
        { name: "Collage", description: "Mixed media editor", technologies: ["Canvas", "React"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

// Paper layer colors
const paperColors = ['#fff1f2', '#fef3c7', '#d1fae5', '#dbeafe', '#ede9fe', '#fce7f3'];

// Torn paper edge SVG
const TornEdge = ({ side, color }: { side: 'top' | 'bottom' | 'left' | 'right'; color: string }) => {
    const isHorizontal = side === 'top' || side === 'bottom';
    const path = isHorizontal
        ? "M0,10 Q10,0 20,8 T40,10 T60,8 T80,12 T100,10 L100,20 L0,20 Z"
        : "M10,0 Q0,10 8,20 T10,40 T8,60 T12,80 T10,100 L20,100 L20,0 Z";

    return (
        <svg
            className={`absolute pointer-events-none`}
            style={{
                [side]: 0,
                width: isHorizontal ? '100%' : '20px',
                height: isHorizontal ? '20px' : '100%',
                transform: side === 'bottom' ? 'rotate(180deg)' : side === 'right' ? 'rotate(180deg)' : '',
                left: side === 'left' ? 0 : side === 'right' ? 'auto' : 0,
                right: side === 'right' ? '-10px' : 'auto'
            }}
            viewBox={isHorizontal ? "0 0 100 20" : "0 0 20 100"}
            preserveAspectRatio="none"
        >
            <path d={path} fill={color} />
        </svg>
    );
};

// Paper layer card component
const PaperCard = ({ children, color, rotation = 0, shadow = true }: {
    children: React.ReactNode;
    color: string;
    rotation?: number;
    shadow?: boolean;
}) => (
    <div
        className="relative"
        style={{
            transform: `rotate(${rotation}deg)`,
            filter: shadow ? 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))' : 'none'
        }}
    >
        <div
            className="relative p-8"
            style={{ backgroundColor: color }}
        >
            {/* Paper texture */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`
                }}
            />
            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    </div>
);

// Confetti paper pieces
const PaperConfetti = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
            <motion.div
                key={i}
                className="absolute"
                style={{
                    width: 10 + Math.random() * 20,
                    height: 10 + Math.random() * 20,
                    left: `${Math.random() * 100}%`,
                    top: -50,
                    backgroundColor: paperColors[i % paperColors.length],
                    clipPath: ['polygon(50% 0%, 0% 100%, 100% 100%)', 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'][i % 3]
                }}
                animate={{
                    y: ['0vh', '110vh'],
                    rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    x: [0, Math.random() * 100 - 50]
                }}
                transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                    ease: "linear"
                }}
            />
        ))}
    </div>
);

// Scissors cutting line
const ScissorLine = () => (
    <div className="relative w-full my-8">
        <div className="border-t-2 border-dashed border-zinc-400" />
        <motion.div
            className="absolute top-0 -translate-y-1/2"
            animate={{ x: ['-10%', '110%'] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
        >
            <Scissors className="w-6 h-6 text-zinc-500 rotate-90" />
        </motion.div>
    </div>
);

export default function PaperCutoutPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen font-sans overflow-hidden" style={{
            background: 'linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)'
        }}>
            {/* Cork board texture background */}
            <div
                className="fixed inset-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a8a29e' fill-opacity='0.3'%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='50' cy='15' r='1'/%3E%3Ccircle cx='20' cy='45' r='2'/%3E%3Ccircle cx='45' cy='50' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`
                }}
            />

            {/* Paper confetti */}
            <PaperConfetti />

            {/* Navigation - Notebook tab style */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4">
                <div className="max-w-5xl mx-auto flex justify-center">
                    <div className="flex gap-2">
                        {['Gallery', 'About', 'Skills', 'Contact'].map((item, i) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                initial={{ y: -20 }}
                                animate={{ y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="px-6 py-3 rounded-b-lg font-bold text-zinc-700 hover:text-zinc-900 transition-colors relative"
                                style={{
                                    backgroundColor: paperColors[i],
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                                }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero - Layered paper stack */}
            <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-20 relative z-10">
                <div className="max-w-3xl mx-auto">
                    {/* Stacked paper layers */}
                    <div className="relative">
                        {/* Back layers */}
                        <div className="absolute inset-0 translate-x-4 translate-y-4">
                            <PaperCard color={paperColors[2]} rotation={3}>
                                <div className="h-64" />
                            </PaperCard>
                        </div>
                        <div className="absolute inset-0 translate-x-2 translate-y-2">
                            <PaperCard color={paperColors[4]} rotation={-2}>
                                <div className="h-64" />
                            </PaperCard>
                        </div>

                        {/* Main layer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <PaperCard color={paperColors[0]} rotation={0}>
                                <div className="text-center py-12">
                                    {/* Washi tape decoration */}
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-300/70 transform -rotate-2"
                                        style={{ clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }} />

                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6"
                                    >
                                        <Scissors className="w-4 h-4 text-amber-700" />
                                        <span className="text-amber-800 font-medium">{displayData.role}</span>
                                    </motion.div>

                                    <h1
                                        className="text-5xl md:text-7xl font-black mb-6 text-zinc-800"
                                        style={{ fontFamily: 'Georgia, serif' }}
                                    >
                                        {displayData.name}
                                    </h1>

                                    <p className="text-xl text-zinc-600 max-w-md mx-auto">
                                        {displayData.bio}
                                    </p>

                                    {/* Hand-drawn underline */}
                                    <svg className="w-48 h-4 mx-auto mt-6" viewBox="0 0 200 20">
                                        <motion.path
                                            d="M10,10 Q50,5 100,12 T190,10"
                                            stroke="#f97316"
                                            strokeWidth="3"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                        />
                                    </svg>
                                </div>
                            </PaperCard>
                        </motion.div>
                    </div>

                    {/* Push pins */}
                    <div className="absolute top-4 left-8 w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg" />
                    <div className="absolute top-4 right-8 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg" />
                </div>
            </section>

            <ScissorLine />

            {/* About - Notebook page */}
            <section id="about" className="py-20 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <PaperCard color="#fff" rotation={-1}>
                            {/* Lined paper effect */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    backgroundImage: 'repeating-linear-gradient(transparent, transparent 27px, #e5e5e5 28px)',
                                    backgroundPosition: '0 20px'
                                }}
                            />
                            {/* Red margin line */}
                            <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300" />

                            <div className="pl-20 py-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <BookOpen className="w-8 h-8 text-amber-600" />
                                    <h2 className="text-3xl font-black text-zinc-800" style={{ fontFamily: 'Georgia, serif' }}>
                                        About Me
                                    </h2>
                                </div>
                                <p className="text-zinc-600 leading-relaxed text-lg" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                    Like a paper artist who sees beauty in every fold and cut, I approach
                                    code with the same creative precision. Every component is carefully crafted,
                                    every animation thoughtfully layered. Currently creating from {displayData.location}!
                                </p>
                                <div className="mt-4 text-4xl">✂️ 📄 🎨</div>
                            </div>
                        </PaperCard>
                    </motion.div>
                </div>
            </section>

            <ScissorLine />

            {/* Skills - Sticky notes */}
            <section id="skills" className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-4 text-zinc-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        My Toolkit
                    </motion.h2>
                    <p className="text-center text-zinc-500 mb-16">Pinned to my board</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: (i % 2 === 0 ? -3 : 3) + Math.random() * 4 - 2 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.1, rotate: 0 }}
                                className="cursor-pointer"
                            >
                                <div
                                    className="p-6 text-center relative"
                                    style={{
                                        backgroundColor: paperColors[i % paperColors.length],
                                        boxShadow: '4px 4px 8px rgba(0,0,0,0.15)'
                                    }}
                                >
                                    {/* Folded corner */}
                                    <div
                                        className="absolute top-0 right-0 w-6 h-6"
                                        style={{
                                            background: `linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.1) 50%)`,
                                        }}
                                    />
                                    <span className="font-bold text-zinc-700" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        {skill}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ScissorLine />

            {/* Projects - Scrapbook style */}
            <section id="gallery" className="py-20 px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-zinc-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Scrapbook
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                                viewport={{ once: true }}
                                whileHover={{ rotate: 0, scale: 1.02 }}
                                className={`relative ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <PaperCard color="#fff" rotation={0}>
                                    {/* Washi tape */}
                                    <div
                                        className="absolute -top-2 left-8 w-24 h-6 transform -rotate-3"
                                        style={{
                                            backgroundColor: paperColors[(i + 2) % paperColors.length],
                                            opacity: 0.8
                                        }}
                                    />
                                    <div
                                        className="absolute -top-2 right-8 w-20 h-5 transform rotate-2"
                                        style={{
                                            backgroundColor: paperColors[(i + 4) % paperColors.length],
                                            opacity: 0.8
                                        }}
                                    />

                                    {/* Photo placeholder */}
                                    <div
                                        className="aspect-video mb-6 flex items-center justify-center border-4 border-white"
                                        style={{
                                            backgroundColor: paperColors[(i + 1) % paperColors.length],
                                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                                        }}
                                    >
                                        <Sparkles className="w-16 h-16 text-zinc-400" />
                                    </div>

                                    <h3
                                        className="text-2xl font-black text-zinc-800 mb-2"
                                        style={{ fontFamily: 'Georgia, serif' }}
                                    >
                                        {project.name}
                                    </h3>
                                    <p className="text-zinc-600 mb-4" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm font-medium text-zinc-700 border-2 border-dashed border-zinc-300 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Corner heart sticker */}
                                    <div className="absolute bottom-4 right-4">
                                        <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
                                    </div>
                                </PaperCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-zinc-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Journey
                    </motion.h2>
                    {displayData.experience.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <PaperCard color={paperColors[1]} rotation={1}>
                                <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-zinc-800">{exp.position}</h3>
                                    <span className="px-4 py-1 bg-white rounded-full text-sm font-bold text-zinc-600 shadow">
                                        {exp.startDate} - {exp.endDate}
                                    </span>
                                </div>
                                <p className="text-amber-700 mb-2 font-medium">{exp.company}</p>
                                <p className="text-zinc-600">{exp.description}</p>
                            </PaperCard>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Education */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl font-black text-center mb-16 text-zinc-800"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        Learning
                    </motion.h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {displayData.education.map((edu, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <PaperCard color={paperColors[3]} rotation={-2}>
                                    <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                                    <h3 className="text-lg font-bold text-zinc-800 mb-1">{edu.degree}</h3>
                                    <p className="text-blue-600">{edu.school}</p>
                                    <p className="text-sm text-zinc-500">{edu.startDate} - {edu.endDate}</p>
                                </PaperCard>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="py-20 px-6 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <PaperCard color={paperColors[5]} rotation={0}>
                            <div className="py-8">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-6xl mb-6"
                                >
                                    ✉️
                                </motion.div>
                                <h2
                                    className="text-4xl font-black mb-6 text-zinc-800"
                                    style={{ fontFamily: 'Georgia, serif' }}
                                >
                                    Let's Create Together
                                </h2>
                                <p className="text-zinc-600 mb-8" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                                    Ready to craft something beautiful?
                                </p>
                                <div className="flex justify-center gap-6">
                                    {[
                                        { icon: Mail, href: `mailto:${displayData.email}`, color: paperColors[0] },
                                        { icon: Github, href: displayData.links.github, color: paperColors[1] },
                                        { icon: Linkedin, href: displayData.links.linkedin, color: paperColors[2] }
                                    ].map(({ icon: Icon, href, color }, i) => (
                                        <motion.a
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="p-4 rounded-lg shadow-lg"
                                            style={{ backgroundColor: color }}
                                        >
                                            <Icon className="w-6 h-6 text-zinc-700" />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </PaperCard>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
