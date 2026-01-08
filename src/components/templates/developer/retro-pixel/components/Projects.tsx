'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Projects({ data }: { data: PortfolioData }) {
    return (
        <section id="projects" className="py-20 px-6 bg-[#071821]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#e0f8cf] uppercase tracking-widest drop-shadow-[4px_4px_0_rgba(48,104,80,1)]">
                    Completed Quests
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {data.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className={`bg-[#2c2137] border-4 border-[#e0f8cf] p-2 shadow-[8px_8px_0_rgba(224,248,207,1)] ${project.url || project.github ? 'cursor-pointer' : ''}`}
                            onClick={() => {
                                const url = project.url || project.github;
                                if (url) window.open(url, '_blank', 'noopener,noreferrer');
                            }}
                        >
                            <div className="bg-[#071821] p-6 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-[#86c06c] mb-4 uppercase tracking-wider border-b-2 border-[#306850] pb-2">
                                    {project.name}
                                </h3>

                                <p className="text-[#e0f8cf] mb-6 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <p className="text-[#306850] text-xs uppercase mb-2">Inventory:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span key={tech} className="px-2 py-1 bg-[#306850] text-[#e0f8cf] text-xs uppercase">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    {project.url && (
                                        <span className="flex-1 text-center py-2 bg-[#86c06c] text-[#071821] font-bold uppercase hover:bg-[#e0f8cf] transition-colors">
                                            Play
                                        </span>
                                    )}
                                    {project.github && (
                                        <span className="flex-1 text-center py-2 border-2 border-[#86c06c] text-[#86c06c] font-bold uppercase hover:bg-[#86c06c] hover:text-[#071821] transition-colors">
                                            Source
                                        </span>
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
