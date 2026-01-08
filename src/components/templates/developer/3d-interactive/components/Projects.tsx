'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Projects({ data }: { data: PortfolioData }) {
    return (
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-12"
                >
                    Project_Database
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 ${project.url || project.github ? 'cursor-pointer' : ''}`}
                            onClick={() => {
                                const url = project.url || project.github;
                                if (url) window.open(url, '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {project.name}
                                    </h3>
                                    <div className="flex gap-3">
                                        {project.github && (
                                            <span className="text-white/50 hover:text-white transition-colors">
                                                CODE
                                            </span>
                                        )}
                                        {project.url && (
                                            <span className="text-white/50 hover:text-white transition-colors">
                                                LIVE
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <p className="text-white/60 mb-8 leading-relaxed h-20 overflow-hidden">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="px-2 py-1 text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded bg-cyan-500/10">
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
