'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Wind, Sun, Cloud } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Organic Dev",
    role: "Full Stack Developer",
    email: "dev@organic.io",
    phone: "+1 555 000 0000",
    location: "Earth",
    bio: "Building sustainable, accessible, and beautiful web applications that breathe life into ideas.",
    skills: ["React", "Vue", "Svelte", "Tailwind", "Node.js", "Python", "Go", "SQL", "Figma", "Docker", "AWS", "Git"],
    experience: [{ company: "Green Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Sustainable code", highlights: [] }],
    education: [
        { school: "Tech University", degree: "Master of Computer Science", field: "CS", startDate: "2022", endDate: "2024" },
        { school: "State College", degree: "Bachelor of Engineering", field: "Engineering", startDate: "2018", endDate: "2022" }
    ],
    projects: [
        { name: "Organic Interface", description: "A digital ecosystem designed to grow with the user", technologies: ["React", "Tailwind", "Framer Motion"] },
        { name: "Green App", description: "Sustainable web platform", technologies: ["Vue", "Node.js"] },
        { name: "Eco System", description: "Environmental monitoring", technologies: ["Python", "Docker"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function NatureOrganicPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="min-h-screen bg-[#F7F9F5] text-[#2C3E2D] font-sans selection:bg-[#8BA888] selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#F7F9F5]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    <div className="text-xl font-medium tracking-tight flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-[#4A6741]" />
                        <span>organic.dev</span>
                    </div>
                    <div className="flex gap-8 text-sm font-medium text-[#5C7A53]">
                        {['Work', 'Education', 'About', 'Skills', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#2C3E2D] transition-colors relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#4A6741] transition-all group-hover:w-full" />
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
                {/* Organic Shapes Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#E8EFE6] rounded-full blur-[100px] opacity-60 translate-x-1/4 -translate-y-1/4" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-[#D6E4D0] rounded-full blur-[80px] opacity-50 -translate-x-1/4 translate-y-1/4" />
                </div>

                <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE6] text-[#4A6741] text-sm font-medium"
                        >
                            <Sun className="w-4 h-4" />
                            <span>Cultivating Digital Experiences</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight text-[#1A261B]"
                        >
                            Natural
                            <br />
                            <span className="italic text-[#4A6741]">Growth</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-[#5C7A53] max-w-lg leading-relaxed"
                        >
                            Building sustainable, accessible, and beautiful web applications that breathe life into ideas.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex gap-4"
                        >
                            <button className="px-8 py-4 bg-[#2C3E2D] text-[#F7F9F5] rounded-2xl font-medium hover:bg-[#1A261B] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#2C3E2D]/10">
                                View Garden
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden relative">
                            <img
                                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=1000&fit=crop"
                                alt="Nature"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2C3E2D]/20 to-transparent" />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 -left-8 p-6 bg-[#F7F9F5]/90 backdrop-blur-sm rounded-3xl shadow-xl"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <Wind className="w-5 h-5 text-[#4A6741]" />
                                <span className="font-medium text-[#2C3E2D]">Sustainable Code</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-32 px-6 relative">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFE6] text-[#4A6741] text-sm font-medium mb-6">
                            <Leaf className="w-4 h-4" />
                            <span>About The Gardener</span>
                        </div>
                        <h2 className="text-5xl font-serif font-medium mb-8 text-[#1A261B]">Rooted in Code</h2>
                        <p className="text-lg text-[#5C7A53] leading-relaxed mb-6">
                            Just as a garden requires patience and care, I believe software development needs a thoughtful approach.
                            I nurture my codebases to be clean, efficient, and scalable.
                        </p>
                        <p className="text-lg text-[#5C7A53] leading-relaxed">
                            My philosophy is simple: build things that last, respect the user's resources, and leave the web better than I found it.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-[#E8EFE6]">
                            <img
                                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1000&fit=crop"
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-32 px-6 bg-[#F7F9F5]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif font-medium mb-4 text-[#1A261B]">Ecosystem</h2>
                        <div className="w-px h-16 bg-[#4A6741]/30 mx-auto" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { title: "Frontend", skills: ["React", "Vue", "Svelte", "Tailwind"] },
                            { title: "Backend", skills: ["Node.js", "Python", "Go", "SQL"] },
                            { title: "Design", skills: ["Figma", "UI/UX", "Motion", "Brand"] },
                            { title: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Git"] }
                        ].map((group, i) => (
                            <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#E8EFE6] hover:-translate-y-2 transition-transform duration-300">
                                <h3 className="text-xl font-serif font-medium text-[#4A6741] mb-6">{group.title}</h3>
                                <ul className="space-y-3">
                                    {group.skills.map((skill, j) => (
                                        <li key={j} className="flex items-center gap-3 text-[#5C7A53]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#8BA888]" />
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="work" className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif font-medium mb-4 text-[#1A261B]">Selected Works</h2>
                        <div className="w-px h-16 bg-[#4A6741]/30 mx-auto" />
                    </div>

                    <div className="space-y-32">
                        {[1, 2, 3].map((item, i) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className="w-full lg:w-1/2">
                                    <div className="aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#E8EFE6] relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-[#4A6741]/10 group-hover:bg-transparent transition-colors duration-500" />
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.7 }}
                                            className="w-full h-full bg-[#D6E4D0]"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="text-sm font-medium text-[#4A6741] uppercase tracking-wider">Project 0{item}</div>
                                    <h3 className="text-4xl font-serif font-medium text-[#1A261B]">Organic Interface</h3>
                                    <p className="text-lg text-[#5C7A53] leading-relaxed">
                                        A digital ecosystem designed to grow with the user.
                                        Featuring fluid interactions and natural progression paths.
                                    </p>
                                    <div className="flex flex-wrap gap-3 pt-4">
                                        {['React', 'Tailwind', 'Framer Motion'].map((tag) => (
                                            <span key={tag} className="px-4 py-2 rounded-full bg-[#E8EFE6] text-[#4A6741] text-sm font-medium">
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
            <section id="education" className="py-32 px-6 bg-[#E8EFE6]/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-serif font-medium mb-4 text-[#1A261B]">Growth & Learning</h2>
                        <div className="w-px h-16 bg-[#4A6741]/30 mx-auto" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {[
                            { degree: 'Master of Computer Science', school: 'Tech University', year: '2022-2024' },
                            { degree: 'Bachelor of Engineering', school: 'State College', year: '2018-2022' }
                        ].map((edu, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all border border-[#E8EFE6]"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 bg-[#F7F9F5] rounded-2xl text-[#4A6741]">
                                        <Leaf className="w-6 h-6" />
                                    </div>
                                    <span className="text-sm font-medium text-[#5C7A53] bg-[#E8EFE6] px-3 py-1 rounded-full">
                                        {edu.year}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-serif font-medium text-[#1A261B] mb-2">{edu.degree}</h3>
                                <p className="text-[#5C7A53]">{edu.school}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-32 px-6 relative overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <Cloud className="w-12 h-12 text-[#4A6741] mx-auto mb-8 opacity-50" />
                    <h2 className="text-5xl md:text-7xl font-serif font-medium mb-8 text-[#1A261B]">
                        Let's Grow
                        <br />
                        <span className="italic text-[#4A6741]">Together</span>
                    </h2>
                    <div className="flex justify-center gap-6">
                        <button className="px-8 py-4 bg-[#2C3E2D] text-[#F7F9F5] rounded-2xl font-medium hover:bg-[#1A261B] transition-colors shadow-lg shadow-[#2C3E2D]/10">
                            Start a Project
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
