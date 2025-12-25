'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Skills({ data }: { data: PortfolioData }) {
    return (
        <section id="skills" className="py-24 px-6 md:px-24 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-[#64ffda] font-mono text-xl">04.</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">Tech Stack</h2>
                <div className="h-[1px] bg-[#233554] flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-[#112240] p-4 rounded text-center hover:translate-y-[-4px] transition-transform duration-300"
                    >
                        <span className="text-[#64ffda] font-mono text-sm">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
