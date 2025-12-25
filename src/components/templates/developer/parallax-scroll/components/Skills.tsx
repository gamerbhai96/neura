'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section id="skills" className="py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-16"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="relative group cursor-default"
                        >
                            <span className="text-2xl md:text-4xl font-bold text-slate-700 group-hover:text-white transition-colors duration-300">
                                {skill}
                            </span>
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
