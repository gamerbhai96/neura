'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-center text-white"
                >
                    Experience
                </motion.h2>

                <div className="space-y-8">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10 hover:border-white/20 transition-colors relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500" />

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                                    <p className="text-lg text-pink-300">{exp.position}</p>
                                </div>
                                <span className="px-4 py-1 rounded-full bg-white/10 text-sm font-medium text-white/80 mt-2 md:mt-0 backdrop-blur-sm border border-white/5">
                                    {exp.startDate} — {exp.endDate}
                                </span>
                            </div>

                            <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {exp.highlights.map((highlight, i) => (
                                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 text-sm text-white/60 border border-white/5">
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
