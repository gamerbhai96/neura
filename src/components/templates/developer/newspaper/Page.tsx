'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Newspaper, Calendar, User } from 'lucide-react';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "Press Dev",
    role: "Full Stack Developer",
    email: "dev@press.io",
    phone: "+1 555 000 0000",
    location: "The Newsroom",
    bio: "Breaking news: Developer creates stunning web experiences. Story at 11.",
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Python"],
    experience: [{ company: "Daily Tribune", position: "Tech Lead", startDate: "2020", endDate: "Present", description: "Building", highlights: [] }],
    education: [
        { school: "Columbia University", degree: "MS Computer Science", field: "Information Systems", startDate: "2016", endDate: "2018" }
    ],
    projects: [
        { name: "Headlines", description: "News aggregation platform", technologies: ["React", "GraphQL"] },
        { name: "Press Kit", description: "Media management system", technologies: ["Node.js", "PostgreSQL"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

export default function NewspaperPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="min-h-screen bg-[#fffef8] text-black font-serif">
            {/* Header */}
            <header className="border-b-4 border-double border-black py-4 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="text-xs uppercase tracking-widest mb-2">{today}</div>
                    <h1 className="text-6xl md:text-7xl font-black tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
                        THE DEVELOPER TIMES
                    </h1>
                    <div className="text-sm mt-2 tracking-widest uppercase">"All the Code That's Fit to Ship"</div>
                </div>
            </header>

            {/* Navigation */}
            <nav className="border-b border-black py-2 px-6">
                <div className="max-w-5xl mx-auto flex justify-center gap-8 text-sm uppercase tracking-wider">
                    {['Profile', 'Projects', 'Skills', 'Education', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-6 py-12">
                {/* Hero Story */}
                <section id="profile" className="mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        <div className="md:col-span-2">
                            <h2 className="text-5xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                {displayData.name} Revolutionizes Web Development Industry
                            </h2>
                            <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                                <span className="flex items-center gap-1">
                                    <User className="w-4 h-4" />
                                    {displayData.role}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="w-4 h-4" />
                                    Staff Reporter
                                </span>
                            </div>
                            <div className="text-lg leading-relaxed space-y-4" style={{ columnCount: 2, columnGap: '2rem' }}>
                                <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                                    {displayData.bio} In an exclusive interview, this remarkable developer shared insights into their approach to building modern web applications.
                                </p>
                                <p>
                                    "I believe in clean code and elegant solutions," they stated from their home office. "Every project is an opportunity to push the boundaries of what's possible on the web."
                                </p>
                                <p>
                                    Industry experts have praised their innovative approach, noting the seamless blend of technical expertise and creative vision that characterizes their work.
                                </p>
                            </div>
                        </div>
                        <div className="border-l border-black pl-8">
                            <div className="text-sm uppercase tracking-widest mb-4 font-bold">Quick Facts</div>
                            <div className="space-y-4 text-sm">
                                <div className="border-b border-gray-300 pb-2">
                                    <div className="font-bold">Location</div>
                                    <div>{displayData.location}</div>
                                </div>
                                <div className="border-b border-gray-300 pb-2">
                                    <div className="font-bold">Contact</div>
                                    <div>{displayData.email}</div>
                                </div>
                                <div className="border-b border-gray-300 pb-2">
                                    <div className="font-bold">Specialization</div>
                                    <div>{displayData.role}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="mb-16 border-t-2 border-black pt-8">
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {displayData.projects.map((project, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`border-b border-gray-300 pb-6 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                onClick={() => {
                                    const url = project.url || project.github;
                                    if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                <div className="text-xs uppercase tracking-widest text-gray-500 mb-2">Project Report #{i + 1}</div>
                                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                                    "{project.name}" Garners Acclaim from Tech Community
                                </h3>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                                <div className="text-xs text-gray-500">
                                    Technologies: {project.technologies?.join(' • ')}
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="mb-16 border-t-2 border-black pt-8">
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Areas of Expertise</h2>
                    <div className="flex flex-wrap gap-4">
                        {displayData.skills.map((skill, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-4 py-2 border border-black font-medium hover:bg-black hover:text-white transition-colors"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section id="education" className="mb-16 border-t-2 border-black pt-8">
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Academic Credentials</h2>
                    {displayData.education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="border-l-4 border-black pl-6 py-4"
                        >
                            <h3 className="text-xl font-bold" style={{ fontFamily: 'Georgia, serif' }}>{edu.degree}</h3>
                            <p className="text-gray-600">{edu.school}</p>
                            <p className="text-sm text-gray-500 mt-1">{edu.startDate} - {edu.endDate}</p>
                        </motion.div>
                    ))}
                </section>

                {/* Contact Section */}
                <section id="contact" className="border-t-2 border-black pt-8">
                    <h2 className="text-2xl font-bold mb-8 uppercase tracking-wider">Get in Touch</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-lg mb-6" style={{ fontFamily: 'Georgia, serif' }}>
                                For inquiries, collaborations, or interview requests, please reach out through any of the following channels.
                            </p>
                            <div className="text-sm space-y-2">
                                <p><strong>Email:</strong> {displayData.email}</p>
                                <p><strong>Phone:</strong> {displayData.phone}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            {displayData.email && (
                                <a href={`mailto:${displayData.email}`} className="p-4 border border-black hover:bg-black hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.github && (
                                <a href={displayData.links.github} className="p-4 border border-black hover:bg-black hover:text-white transition-colors">
                                    <Github className="w-6 h-6" />
                                </a>
                            )}
                            {displayData.links?.linkedin && (
                                <a href={displayData.links.linkedin} className="p-4 border border-black hover:bg-black hover:text-white transition-colors">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t-2 border-black py-6 text-center text-sm">
                <p>© 2024 The Developer Times | {displayData.name} | All Rights Reserved</p>
            </footer>
        </div>
    );
}
