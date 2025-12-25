'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 bg-[#F5F5F7]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-16"
                >
                    Expertise
                </motion.h2>

                <div className="flex flex-wrap gap-4">
                    {data.skills.map((skill, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="px-6 py-3 bg-white rounded-full text-lg text-gray-800 shadow-sm hover:shadow-md transition-shadow cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
