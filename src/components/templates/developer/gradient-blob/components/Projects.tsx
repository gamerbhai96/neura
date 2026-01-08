'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';
import { ArrowUpRight } from 'lucide-react';

export default function Projects({ data }: { data: PortfolioData }) {
    return (
        <section id="work" className="py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-slate-900"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            onClick={() => {
                                const url = project.url || project.github;
                                if (url) window.open(url, '_blank', 'noopener,noreferrer');
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group block ${project.url || project.github ? 'cursor-pointer' : ''}`}
                        >
                            <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/3] mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                <div className={`absolute inset-0 bg-gradient-to-br ${index % 2 === 0 ? 'from-rose-200 to-orange-100' : 'from-cyan-200 to-blue-100'} opacity-80 group-hover:scale-110 transition-transform duration-700`} />

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-slate-900 font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        View Project
                                    </span>
                                </div>
                            </div>

                            <div className="px-4">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-rose-500 transition-colors">
                                        {project.name}
                                    </h3>
                                    <ArrowUpRight className="w-6 h-6 text-slate-300 group-hover:text-rose-500 transition-colors" />
                                </div>

                                <p className="text-slate-600 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500">
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
    );
}
