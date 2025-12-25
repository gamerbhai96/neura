'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, AlertTriangle, ArrowRight } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Brutalist Dev",
    role: "Web Developer",
    email: "dev@brutal.io",
    phone: "+1 555 000 000",
    location: "The Internet",
    bio: "NO FRILLS. NO BS. JUST CODE. Raw web experience, unfiltered.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Git", "Linux"],
    experience: [{ company: "Internet", position: "Developer", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Self-Taught", degree: "School of Hard Knocks", field: "Reality", startDate: "2015", endDate: "Present" }
    ],
    projects: [
        { name: "RAW_PROJECT_01", description: "Pure HTML/CSS experiment", technologies: ["HTML", "CSS"] },
        { name: "NO_FRAMEWORK", description: "Vanilla JS application", technologies: ["JavaScript"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function BrutalistWebPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-white text-black font-mono">
            {/* Warning banner */}
            <div className="bg-yellow-400 border-b-4 border-black p-2 text-center font-bold flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                THIS WEBSITE DOES NOT USE COOKIES OR TRACK YOU
                <AlertTriangle className="w-4 h-4" />
            </div>

            {/* Navigation - Ultra simple */}
            <nav className="border-b-4 border-black p-4">
                <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
                    <div className="text-2xl font-bold">
                        [{displayData.name?.toUpperCase()}]
                    </div>
                    <div className="flex gap-4 text-sm underline">
                        <a href="#about">[ABOUT]</a>
                        <a href="#work">[WORK]</a>
                        <a href="#skills">[SKILLS]</a>
                        <a href="#contact">[CONTACT]</a>
                    </div>
                </div>
            </nav>

            {/* Hero - RAW */}
            <section className="border-b-4 border-black">
                <div className="max-w-4xl mx-auto p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className="text-sm mb-4">$ whoami</div>
                        <h1 className="text-6xl md:text-8xl font-bold mb-8 break-words">
                            {displayData.name?.toUpperCase()}
                        </h1>
                        <div className="bg-black text-white p-4 mb-8 inline-block">
                            <span className="text-green-400">{'>'}</span> {displayData.role}
                        </div>
                        <p className="text-xl mb-8 max-w-2xl border-l-4 border-black pl-4">
                            {displayData.bio}
                        </p>
                        <div className="flex gap-4">
                            <a href="#work" className="bg-black text-white px-6 py-3 font-bold hover:bg-gray-800 inline-flex items-center gap-2">
                                VIEW WORK <ArrowRight className="w-4 h-4" />
                            </a>
                            <a href="#contact" className="border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white">
                                CONTACT
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="border-b-4 border-black bg-gray-100">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
                        ## ABOUT
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="mb-4">
                                I build websites. No fancy animations (okay maybe a few).
                                No bloated frameworks (when not needed). Just efficient code.
                            </p>
                            <p>
                                I believe the web should be fast, accessible, and honest.
                                This portfolio is an example of that philosophy.
                            </p>
                        </div>
                        <div className="bg-black text-green-400 p-4 font-mono text-sm">
                            <div>$ cat info.txt</div>
                            <div className="mt-2">
                                <div>Location: {displayData.location}</div>
                                <div>Email: {displayData.email}</div>
                                <div>Status: Available</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Work */}
            <section id="work" className="border-b-4 border-black">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
                        ## PROJECTS
                    </h2>
                    <div className="space-y-6">
                        {displayData.projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-2 border-black p-6 hover:bg-yellow-100 transition-colors"
                            >
                                <div className="flex justify-between items-start flex-wrap gap-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">
                                            [{project.name}]
                                        </h3>
                                        <p className="text-gray-600 mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies?.map((tech, j) => (
                                                <span key={j} className="bg-black text-white px-2 py-1 text-xs font-bold">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <span className="text-gray-400 font-bold">#{String(i + 1).padStart(2, '0')}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="border-b-4 border-black bg-yellow-400">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
                        ## SKILLS
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="bg-white border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors cursor-default"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="border-b-4 border-black">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-black pb-2 inline-block">
                        ## EDUCATION
                    </h2>
                    {displayData.education.map((edu, i) => (
                        <div key={i} className="border-2 border-black p-6">
                            <h3 className="text-xl font-bold">{edu.degree}</h3>
                            <p className="text-gray-600">{edu.school}</p>
                            <p className="text-sm mt-2 font-mono">[{edu.startDate} - {edu.endDate}]</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="bg-black text-white">
                <div className="max-w-4xl mx-auto p-8">
                    <h2 className="text-3xl font-bold mb-8 border-b-2 border-white pb-2 inline-block">
                        ## CONTACT
                    </h2>
                    <p className="mb-8 text-xl">
                        Want to work together? Don't be shy.
                    </p>
                    <div className="flex gap-4 flex-wrap">
                        {displayData.email && (
                            <a href={`mailto:${displayData.email}`} className="bg-white text-black px-6 py-3 font-bold flex items-center gap-2 hover:bg-yellow-400 transition-colors">
                                <Mail className="w-4 h-4" /> EMAIL ME
                            </a>
                        )}
                        {displayData.links?.github && (
                            <a href={displayData.links.github} className="border-2 border-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                <Github className="w-4 h-4" /> GITHUB
                            </a>
                        )}
                        {displayData.links?.linkedin && (
                            <a href={displayData.links.linkedin} className="border-2 border-white px-6 py-3 font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                                <Linkedin className="w-4 h-4" /> LINKEDIN
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t-4 border-black py-4 text-center text-sm">
                <p>© 2024 {displayData.name} | NO JAVASCRIPT WAS HARMED (MUCH) IN MAKING THIS SITE</p>
                <p className="text-gray-500 mt-2">
                    Page weight: ~50kb | Load time: Fast | Tracking: None
                </p>
            </footer>
        </div>
    );
}
