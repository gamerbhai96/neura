'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-12"
                >
                    System_Capabilities
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-white/5 border border-white/10 p-4 rounded hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-colors text-center"
                        >
                            <span className="text-white/80 font-mono text-sm">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
