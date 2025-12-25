'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    return (
        <section id="experience" className="py-32 px-6 relative">
            {/* Decorative background element */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center mb-16 text-slate-900"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="md:grid md:grid-cols-12 md:gap-8 items-start group">
                                {/* Timeline line for desktop */}
                                <div className="hidden md:block md:col-span-3 text-right pt-2">
                                    <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-600 font-medium text-sm group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                </div>

                                {/* Timeline dot */}
                                <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-slate-200 md:left-[25%] md:-ml-2 border-4 border-white shadow-sm group-hover:bg-rose-400 transition-colors" />

                                <div className="md:col-span-9 bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 group-hover:shadow-xl group-hover:border-rose-100 transition-all duration-300">
                                    <div className="flex flex-col mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900">{exp.company}</h3>
                                        <span className="text-lg text-rose-500 font-medium">{exp.position}</span>
                                        <span className="md:hidden text-sm text-slate-400 mt-1">{exp.startDate} — {exp.endDate}</span>
                                    </div>

                                    <p className="text-slate-600 mb-6 leading-relaxed">{exp.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.highlights.map((highlight, i) => (
                                            <span key={i} className="px-3 py-1 rounded-lg bg-slate-50 text-sm text-slate-600">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
