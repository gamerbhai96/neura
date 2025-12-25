'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioData } from '../../../types';

export default function Projects({ data }: { data: PortfolioData }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

    return (
        <section ref={ref} id="work" className="py-32 px-6 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    style={{ x }}
                    className="text-[8rem] md:text-[12rem] font-bold text-white/5 leading-none mb-12 pointer-events-none select-none"
                >
                    WORK
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 -mt-32 relative z-10">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`group ${index % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className="bg-slate-800/50 border border-white/10 p-8 md:p-12 hover:bg-slate-800 transition-colors duration-500 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-0 bg-purple-500 group-hover:h-full transition-all duration-500 ease-in-out"></div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:translate-x-4 transition-transform duration-300">
                                    {project.name}
                                </h3>

                                <p className="text-slate-400 mb-8 leading-relaxed group-hover:translate-x-4 transition-transform duration-300 delay-75">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mb-8 group-hover:translate-x-4 transition-transform duration-300 delay-100">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="text-xs font-mono text-purple-400 border border-purple-500/30 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-6 group-hover:translate-x-4 transition-transform duration-300 delay-150">
                                    {project.url && (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm uppercase tracking-wider hover:text-purple-400 transition-colors">
                                            View Project
                                        </a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-sm uppercase tracking-wider hover:text-purple-400 transition-colors">
                                            GitHub
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
