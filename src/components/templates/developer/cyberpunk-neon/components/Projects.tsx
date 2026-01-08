'use client';

import { motion } from 'framer-motion';
import { Folder, ExternalLink, Github } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface ProjectsProps {
    data: PortfolioData;
}

export default function Projects({ data }: ProjectsProps) {
    const projects = data.projects || [];

    return (
        <section id="projects" className="relative py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <Folder className="w-8 h-8 text-green-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-green-500">&lt;</span>
                            Projects
                            <span className="text-green-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.length > 0 ? (
                            projects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={`group relative border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg neon-border hover:border-pink-500 transition-all ${project.url || project.github ? 'cursor-pointer' : ''}`}
                                    onClick={() => {
                                        const url = project.url || project.github;
                                        if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    {/* Project Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <Folder className="w-10 h-10 text-green-400 group-hover:text-pink-500 transition-colors" />
                                        <div className="flex items-center space-x-3">
                                            {project.github && (
                                                <span className="text-green-400 hover:text-pink-500 transition-colors">
                                                    <Github className="w-5 h-5" />
                                                </span>
                                            )}
                                            {project.url && (
                                                <span className="text-green-400 hover:text-pink-500 transition-colors">
                                                    <ExternalLink className="w-5 h-5" />
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Project Title */}
                                    <h3 className="text-2xl font-bold text-green-400 group-hover:text-pink-500 transition-colors mb-3">
                                        {project.name}
                                    </h3>

                                    {/* Project Description */}
                                    <p className="text-green-300/80 mb-4 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-sm text-green-400 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Animated Corner Brackets */}
                                    <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.div>
                            ))
                        ) : (
                            // Default placeholder projects
                            [
                                {
                                    name: 'Project One',
                                    description: 'A cutting-edge web application built with modern technologies.',
                                    technologies: ['React', 'Next.js', 'TypeScript'],
                                },
                                {
                                    name: 'Project Two',
                                    description: 'Full-stack solution for enterprise-level applications.',
                                    technologies: ['Node.js', 'PostgreSQL', 'Docker'],
                                },
                            ].map((project, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg neon-border"
                                >
                                    <Folder className="w-10 h-10 text-green-400 mb-4" />
                                    <h3 className="text-2xl font-bold text-green-400 mb-3">{project.name}</h3>
                                    <p className="text-green-300/80 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-sm text-green-400 font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
