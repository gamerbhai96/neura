'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Dev Portfolio",
    role: "Full Stack Developer",
    email: "dev@brutal.io",
    phone: "+1 555 000 0000",
    location: "The Internet",
    bio: "Building digital experiences with raw code and brutal simplicity.",
    skills: ["React", "Next.js", "Tailwind", "Three.js", "Node.js", "Python", "PostgreSQL", "Redis", "Git", "Docker", "Figma", "Vercel"],
    experience: [{ company: "Tech Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Project 1", description: "A brutalist approach to modern web development", technologies: ["React", "TypeScript", "Tailwind"] },
        { name: "Project 2", description: "High contrast, bold typography", technologies: ["Next.js", "Three.js"] },
        { name: "Project 3", description: "Raw aesthetics", technologies: ["Node.js", "Docker"] },
        { name: "Project 4", description: "Bold design", technologies: ["React", "Tailwind"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
};

export default function NeoBrutalismPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-[#FFDEE9] text-black font-mono selection:bg-black selection:text-white">
            {/* Navigation */}
            <nav className="border-b-4 border-black bg-white sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-black uppercase tracking-tighter border-2 border-black px-2 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer bg-[#A8FF78]">
                        DEV.PORTFOLIO
                    </div>
                    <div className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-wider">
                        {['Work', 'Education', 'About', 'Skills', 'Contact'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="hover:underline decoration-4 underline-offset-4 decoration-[#FF0080]"
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-[90vh] flex items-center px-6 py-20 border-b-4 border-black relative overflow-hidden bg-[#FFDEE9] bg-gradient-to-b from-[#FFDEE9] to-[#B5FFFC]">
                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-block bg-black text-white px-4 py-2 font-bold text-sm uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(255,0,128,1)]"
                        >
                            Full Stack Developer
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter"
                        >
                            HELLO
                            <br />
                            WORLD.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl font-bold max-w-lg border-l-4 border-black pl-6 py-2 bg-white/50 backdrop-blur-sm"
                        >
                            Building digital experiences with raw code and brutal simplicity.
                            Based in the internet.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <button className="bg-[#FF0080] text-white px-8 py-4 font-black uppercase tracking-wider border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-2">
                                View Projects <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="bg-white text-black px-8 py-4 font-black uppercase tracking-wider border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                Contact Me
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square bg-white border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4 rotate-3 hover:rotate-0 transition-all duration-500">
                            <div className="w-full h-full bg-black flex items-center justify-center overflow-hidden relative group">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=faces"
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-[#FF0080] mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Marquee */}
            <div className="border-b-4 border-black bg-[#A8FF78] overflow-hidden py-4">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="whitespace-nowrap flex gap-12 text-4xl font-black uppercase"
                >
                    {[...Array(10)].map((_, i) => (
                        <span key={i}>React • Next.js • TypeScript • Node.js • WebGL •</span>
                    ))}
                </motion.div>
            </div>

            {/* About Section */}
            <section id="about" className="py-20 px-6 border-b-4 border-black bg-[#A8FF78]">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-6xl font-black uppercase mb-8 inline-block border-b-8 border-black">About Me</h2>
                        <p className="text-xl font-bold leading-relaxed mb-8">
                            I am a full-stack developer with a passion for brutalist design and clean code.
                            I believe in stripping away the unnecessary to reveal the raw power of the web.
                            When I'm not coding, I'm probably deconstructing retro interfaces or exploring the brutalist architecture of the internet.
                        </p>
                        <div className="p-6 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                            <h3 className="text-2xl font-black uppercase mb-4">My Philosophy</h3>
                            <p className="font-bold">
                                "Form follows function. Code is art. Simplicity is the ultimate sophistication."
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-black border-4 border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] p-4">
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=800&fit=crop"
                                alt="About"
                                className="w-full h-full object-cover grayscale contrast-125"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20 px-6 border-b-4 border-black bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-black uppercase mb-16 inline-block border-b-8 border-[#FF0080]">Tech Stack</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { category: "Frontend", items: ["React", "Next.js", "Tailwind", "Three.js"] },
                            { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
                            { category: "Tools", items: ["Git", "Docker", "Figma", "Vercel"] },
                            { category: "Design", items: ["UI/UX", "Brutalism", "Typography", "Motion"] }
                        ].map((skillGroup, i) => (
                            <div key={i} className="border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all bg-[#FFDEE9]">
                                <h3 className="text-2xl font-black uppercase mb-6 border-b-4 border-black pb-2">{skillGroup.category}</h3>
                                <ul className="space-y-3">
                                    {skillGroup.items.map((skill, j) => (
                                        <li key={j} className="font-bold text-lg flex items-center gap-2">
                                            <div className="w-3 h-3 bg-black" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="work" className="py-20 px-6 border-b-4 border-black bg-white">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-black uppercase mb-16 inline-block border-b-8 border-[#FF0080]">Selected Work</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[1, 2, 3, 4].map((item) => (
                            <motion.div
                                key={item}
                                whileHover={{ y: -10 }}
                                className="group border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[6px] hover:translate-y-[6px] transition-all"
                            >
                                <div className="aspect-video bg-gray-100 border-b-4 border-black relative overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                                    {/* Placeholder for project image */}
                                    <div className="w-full h-full flex items-center justify-center text-4xl font-black text-black/10 uppercase">
                                        Project {item}
                                    </div>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-3xl font-black uppercase mb-4">Project Name {item}</h3>
                                    <p className="font-bold text-gray-600 mb-6">
                                        A brutalist approach to modern web development. High contrast, bold typography, and raw aesthetics.
                                    </p>
                                    <div className="flex flex-wrap gap-3">
                                        {['React', 'TypeScript', 'Tailwind'].map((tag) => (
                                            <span key={tag} className="px-3 py-1 border-2 border-black font-bold text-xs uppercase bg-[#A8FF78]">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-20 px-6 border-b-4 border-black bg-[#B5FFFC]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-6xl font-black uppercase mb-16 inline-block border-b-8 border-black">Education</h2>

                    <div className="space-y-8">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <div key={i} className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <h3 className="text-3xl font-black uppercase">{edu.degree}</h3>
                                        <p className="text-xl font-bold text-gray-600">{edu.school}</p>
                                    </div>
                                    <span className="px-4 py-2 bg-[#FF0080] text-white font-black border-2 border-black">
                                        {edu.year}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 px-6 bg-[#FF0080] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-6xl md:text-8xl font-black uppercase mb-12 shadow-black drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]">
                        Let's Work Together
                    </h2>
                    <div className="flex justify-center gap-6 mb-12">
                        {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-4 bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                            >
                                <Icon className="w-8 h-8" />
                            </a>
                        ))}
                    </div>
                    <p className="text-xl font-bold uppercase tracking-widest">
                        © 2024 Neo-Brutalism Portfolio
                    </p>
                </div>
            </section>
        </div>
    );
}
