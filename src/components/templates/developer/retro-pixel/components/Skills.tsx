'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section id="skills" className="py-20 px-6 bg-[#2c2137]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#e0f8cf] uppercase tracking-widest drop-shadow-[4px_4px_0_rgba(48,104,80,1)]">
                    Skill Tree
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {data.skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-[#071821] border-2 border-[#306850] p-4 text-center hover:bg-[#306850] hover:border-[#86c06c] transition-colors cursor-crosshair group"
                        >
                            <span className="text-[#86c06c] font-bold uppercase text-sm group-hover:text-[#e0f8cf]">
                                {skill}
                            </span>
                            <div className="w-full bg-[#2c2137] h-2 mt-2 border border-[#306850]">
                                <div
                                    className="h-full bg-[#86c06c]"
                                    style={{ width: `${60 + (index * 7) % 40}%` }}
                                ></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
