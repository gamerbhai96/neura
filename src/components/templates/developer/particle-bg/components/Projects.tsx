'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects({ data }: { data: PortfolioData }) {
    return (
        <section id="projects" className="py-24 px-6 md:px-24 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-[#64ffda] font-mono text-xl">03.</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">Some Things I've Built</h2>
                <div className="h-[1px] bg-[#233554] flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="space-y-24">
                {data.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative grid md:grid-cols-12 gap-4 items-center ${index % 2 === 1 ? 'text-left md:text-right' : ''} ${project.url || project.github ? 'cursor-pointer' : ''}`}
                        onClick={() => {
                            const url = project.url || project.github;
                            if (url) window.open(url, '_blank', 'noopener,noreferrer');
                        }}
                    >
                        {/* Project Image Area */}
                        <div className={`md:col-span-7 relative h-full min-h-[300px] ${index % 2 === 1 ? 'md:col-start-6' : 'md:col-start-1'}`}>
                            <div className="absolute inset-0 bg-[#64ffda]/20 hover:bg-transparent transition-colors duration-300 rounded z-10 mix-blend-multiply"></div>
                            <div className="w-full h-full bg-[#112240] rounded border border-[#233554]"></div>
                        </div>

                        {/* Project Content */}
                        <div className={`md:col-span-7 relative z-20 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-6'}`}>
                            <p className="font-mono text-[#64ffda] text-sm mb-2">Featured Project</p>
                            <h3 className="text-2xl font-bold text-[#ccd6f6] mb-6 hover:text-[#64ffda] transition-colors">
                                {project.name}
                            </h3>

                            <div className="bg-[#112240] p-6 rounded shadow-xl mb-6 text-[#8892b0]">
                                <p>{project.description}</p>
                            </div>

                            <ul className={`flex flex-wrap gap-4 mb-8 font-mono text-sm text-[#a8b2d1] ${index % 2 === 1 ? 'justify-start md:justify-end' : 'justify-start'}`}>
                                {project.technologies.map((tech) => (
                                    <li key={tech}>{tech}</li>
                                ))}
                            </ul>

                            <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-start md:justify-end' : 'justify-start'}`}>
                                {project.github && (
                                    <span className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                                        <Github className="w-5 h-5" />
                                    </span>
                                )}
                                {project.url && (
                                    <span className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
