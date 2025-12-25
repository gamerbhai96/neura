'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Education({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 relative">
            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-slate-800 text-center"
                >
                    Education
                </motion.h2>

                <div className="space-y-12">
                    {data.education?.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                <h3 className="text-2xl font-bold text-slate-800">{edu.school}</h3>
                                <span className="text-slate-500 font-medium bg-white/50 px-4 py-1 rounded-full text-sm">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                            </div>
                            <p className="text-xl text-rose-500 font-medium mb-2">{edu.degree}</p>
                            <p className="text-slate-600 leading-relaxed">{edu.field}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
