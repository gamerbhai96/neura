'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={ref} id="experience" className="py-32 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    style={{ y }}
                    className="absolute -right-20 top-0 text-[10rem] font-bold text-white/5 pointer-events-none select-none whitespace-nowrap"
                >
                    EXPERIENCE
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-16 relative z-10"
                >
                    Career Path
                </motion.h2>

                <div className="space-y-24 relative z-10">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="group"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6 border-b border-white/10 pb-6 group-hover:border-purple-500/50 transition-colors">
                                <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                    {exp.company}
                                </h3>
                                <span className="font-mono text-slate-500 text-sm mt-2 md:mt-0">
                                    {exp.startDate} — {exp.endDate}
                                </span>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="md:col-span-1">
                                    <span className="text-slate-300 font-medium block mb-2">{exp.position}</span>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="text-slate-400 mb-6 leading-relaxed">{exp.description}</p>
                                    <ul className="space-y-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <li key={i} className="text-sm text-slate-500 flex items-start">
                                                <span className="mr-2 text-purple-500">/</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
