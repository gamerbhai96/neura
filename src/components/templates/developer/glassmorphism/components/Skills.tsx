'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 text-white"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="glass-card px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default"
                        >
                            <span className="text-lg font-medium text-white/90">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
