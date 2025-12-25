'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    return (
        <section id="experience" className="py-24 px-6 md:px-24 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-[#64ffda] font-mono text-xl">02.</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">Where I've Worked</h2>
                <div className="h-[1px] bg-[#233554] flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="space-y-12">
                {data.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex flex-col md:flex-row gap-4 md:gap-8"
                    >
                        <div className="md:w-32 flex-shrink-0">
                            <span className="font-mono text-sm text-[#8892b0]">{exp.startDate} — {exp.endDate}</span>
                        </div>

                        <div className="flex-grow">
                            <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">
                                {exp.position} <span className="text-[#64ffda]">@ {exp.company}</span>
                            </h3>
                            <p className="text-[#8892b0] mb-4">{exp.description}</p>
                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start text-[#8892b0] text-sm">
                                        <span className="text-[#64ffda] mr-2 mt-1">▹</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
