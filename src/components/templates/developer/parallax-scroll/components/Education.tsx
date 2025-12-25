'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Education({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-bold mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                >
                    Education
                </motion.h2>

                <div className="space-y-16">
                    {data.education?.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            <div className="hidden md:block absolute left-[-19px] top-2 w-10 h-10 rounded-full bg-slate-900 border-4 border-purple-500 z-10" />

                            <div className="md:ml-12">
                                <span className="inline-block px-4 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-bold tracking-widest mb-4 border border-purple-500/20">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                                <h3 className="text-3xl font-bold text-slate-100 mb-2">{edu.school}</h3>
                                <h4 className="text-xl text-slate-400 mb-4">{edu.degree}</h4>
                                <p className="text-slate-400 leading-relaxed max-w-2xl">{edu.field}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
