'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Education({ data }: { data: PortfolioData }) {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-12"
                >
                    Education_Log
                </motion.h2>

                <div className="space-y-12 border-l-2 border-white/10 pl-8 ml-4">
                    {data.education?.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline dot */}
                            <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-black border-2 border-cyan-500" />

                            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:border-cyan-500/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                    <h3 className="text-2xl font-bold text-white">{edu.school}</h3>
                                    <span className="text-cyan-400 font-mono text-sm">{edu.startDate} — {edu.endDate}</span>
                                </div>
                                <p className="text-lg text-white/80 mb-2">{edu.degree}</p>
                                <p className="text-white/60 leading-relaxed">{edu.field}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
