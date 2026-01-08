'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Instagram, Twitter, Linkedin } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Creative Developer",
    role: "Creative Developer & Designer",
    email: "dev@edition.io",
    phone: "+1 555 000 0000",
    location: "New York, NY",
    bio: "Crafting digital narratives through code and typography. Focusing on minimal aesthetics and meaningful interactions.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "GraphQL", "Redis", "Figma", "Adobe CC", "Blender", "Spline"],
    experience: [{ company: "Design Studio", position: "Creative Director", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Digital Experience 1", description: "A comprehensive study in digital minimalism", technologies: ["Next.js", "Tailwind CSS"] },
        { name: "Digital Experience 2", description: "Typographic hierarchy exploration", technologies: ["React", "Framer Motion"] },
        { name: "Digital Experience 3", description: "Editorial design system", technologies: ["TypeScript", "Figma"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com", twitter: "https://twitter.com" }
};

export default function MagazineEditorialPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-serif selection:bg-[#FF4D00] selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
                <div className="text-2xl font-bold tracking-tighter">EDITION.</div>
                <div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-widest uppercase">
                    {['Work', 'Education', 'About', 'Skills', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline underline-offset-4">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen pt-32 px-6 pb-20 flex flex-col justify-between border-b border-black/10">
                <div className="max-w-[90vw] mx-auto w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-[12vw] leading-[0.85] font-light tracking-tighter mb-12">
                            CREATIVE
                            <br />
                            <span className="ml-[15vw] italic font-serif">DEVELOPER</span>
                            <br />
                            & DESIGNER
                        </h1>
                    </motion.div>

                    <div className="grid grid-cols-12 gap-4 items-end">
                        <div className="col-span-12 lg:col-span-4 font-sans text-sm uppercase tracking-wide leading-relaxed">
                            (Based in New York)
                            <br />
                            Available for freelance
                            <br />
                            Est. 2024
                        </div>
                        <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                            <p className="text-xl leading-relaxed font-light">
                                Crafting digital narratives through code and typography.
                                Focusing on minimal aesthetics and meaningful interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 border-b border-black/10">
                <div className="max-w-[90vw] mx-auto grid md:grid-cols-12 gap-12">
                    <div className="col-span-12 md:col-span-4">
                        <h2 className="text-5xl font-light italic mb-8">Editorial<br />Statement</h2>
                    </div>
                    <div className="col-span-12 md:col-span-8 lg:col-span-6 lg:col-start-7">
                        <p className="text-2xl font-light leading-relaxed mb-8">
                            I believe in the power of silence in design. Every pixel should have a purpose, every interaction a meaning.
                            My work is a dialogue between function and form.
                        </p>
                        <p className="text-lg text-gray-600 font-serif leading-relaxed">
                            With a background in both traditional graphic design and modern web technologies,
                            I bridge the gap between print aesthetics and digital interactivity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 border-b border-black/10 bg-white">
                <div className="max-w-[90vw] mx-auto">
                    <div className="flex items-baseline justify-between mb-20 border-b border-black pb-4">
                        <h2 className="text-5xl font-serif font-medium">Toolkit</h2>
                        <span className="text-sm font-medium tracking-widest uppercase">Technical Proficiency</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
                            { category: "Backend", items: ["Node.js", "PostgreSQL", "GraphQL", "Redis"] },
                            { category: "Design", items: ["Figma", "Adobe CC", "Blender", "Spline"] },
                            { category: "Architecture", items: ["AWS", "Docker", "CI/CD", "Vercel"] }
                        ].map((skill, i) => (
                            <div key={i}>
                                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-[#FF4D00]">{skill.category}</h3>
                                <ul className="space-y-4">
                                    {skill.items.map((item, j) => (
                                        <li key={j} className="text-xl font-light border-b border-gray-200 pb-2">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Works */}
            <section id="work" className="py-32 px-6">
                <div className="max-w-[90vw] mx-auto">
                    <div className="flex justify-between items-end mb-20 border-b border-black pb-4">
                        <h2 className="text-6xl font-light italic">Selected Works</h2>
                        <span className="font-sans text-sm uppercase">(01 — 04)</span>
                    </div>

                    <div className="space-y-32">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="grid grid-cols-12 gap-8 items-center">
                                    <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
                                        <div className="aspect-[4/3] bg-[#E5E5E0] overflow-hidden relative">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                className="w-full h-full bg-gray-300"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-24 h-24 rounded-full bg-[#FF4D00] text-white flex items-center justify-center font-sans font-bold text-sm uppercase tracking-widest">
                                                    View
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4 lg:col-start-9 order-1 lg:order-2">
                                        <div className="font-sans text-xs uppercase tracking-widest mb-4 text-[#FF4D00]">
                                            Project 0{i + 1}
                                        </div>
                                        <h3 className="text-5xl font-light mb-6 group-hover:italic transition-all">
                                            {project.name}
                                        </h3>
                                        <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="flex gap-4 font-sans text-sm uppercase tracking-wide flex-wrap">
                                            {project.technologies?.map((tech) => (
                                                <span key={tech} className="border border-black px-3 py-1 rounded-full">
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

            {/* Education Section */}
            <section id="education" className="py-32 px-6 bg-stone-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-baseline justify-between mb-20 border-b border-stone-300 pb-4">
                        <h2 className="text-5xl font-serif font-medium">Education</h2>
                        <span className="text-sm font-medium tracking-widest uppercase">Academic Background</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <div key={i} className="space-y-4">
                                <span className="text-sm font-medium tracking-widest uppercase text-stone-500">{edu.year}</span>
                                <h3 className="text-3xl font-serif font-medium">{edu.degree}</h3>
                                <p className="text-xl text-stone-600 font-serif italic">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info / Footer */}
            <section id="contact" className="bg-[#1A1A1A] text-[#F5F5F0] py-32 px-6">
                <div className="max-w-[90vw] mx-auto">
                    <div className="grid grid-cols-12 gap-12">
                        <div className="col-span-12 lg:col-span-6">
                            <h2 className="text-8xl font-light mb-12 leading-[0.8]">
                                LET'S
                                <br />
                                <span className="italic text-[#FF4D00]">CREATE</span>
                            </h2>
                            <div className="flex gap-8">
                                <button className="px-8 py-4 bg-[#F5F5F0] text-[#1A1A1A] rounded-full font-sans font-bold uppercase tracking-widest hover:bg-[#FF4D00] hover:text-white transition-colors">
                                    Email Me
                                </button>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
                            <div className="space-y-8">
                                <div>
                                    <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-white/50">Socials</h4>
                                    <div className="flex flex-col gap-2 font-light text-xl">
                                        <a href="#" className="hover:text-[#FF4D00] transition-colors flex items-center gap-2 group">
                                            Instagram <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <a href="#" className="hover:text-[#FF4D00] transition-colors flex items-center gap-2 group">
                                            Twitter <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                        <a href="#" className="hover:text-[#FF4D00] transition-colors flex items-center gap-2 group">
                                            LinkedIn <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-sans text-xs uppercase tracking-widest mb-4 text-white/50">Location</h4>
                                    <p className="font-light text-xl">
                                        New York, NY
                                        <br />
                                        EST (UTC-5)
                                    </p>
                                </div>
                            </div>
                            <div className="mt-20 font-sans text-xs uppercase tracking-widest text-white/30">
                                © 2024 Edition Portfolio. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
