'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section id="skills" className="py-32 px-6 bg-slate-50/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-slate-900"
                >
                    Skills & Tools
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                            className="px-8 py-4 bg-white rounded-2xl shadow-sm hover:shadow-lg border border-slate-100 hover:border-rose-200 transition-all cursor-default"
                        >
                            <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                                {skill}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
