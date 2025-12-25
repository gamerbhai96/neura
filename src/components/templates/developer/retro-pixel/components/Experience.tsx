'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    return (
        <section id="experience" className="py-20 px-6 bg-[#2c2137]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#e0f8cf] uppercase tracking-widest drop-shadow-[4px_4px_0_rgba(48,104,80,1)]">
                    Adventure Log
                </h2>

                <div className="space-y-8">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#071821] border-4 border-[#86c06c] p-6 relative shadow-[8px_8px_0_rgba(134,192,108,0.2)]"
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 border-b-2 border-[#306850] pb-4">
                                <h3 className="text-xl font-bold text-[#e0f8cf] uppercase">{exp.company}</h3>
                                <span className="bg-[#306850] text-[#e0f8cf] px-2 py-1 text-xs uppercase tracking-wider">
                                    {exp.startDate} - {exp.endDate}
                                </span>
                            </div>

                            <h4 className="text-[#86c06c] text-lg mb-4 uppercase">{exp.position}</h4>
                            <p className="text-[#e0f8cf] mb-6 leading-relaxed opacity-80">{exp.description}</p>

                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start text-sm text-[#e0f8cf]">
                                        <span className="mr-2 text-[#86c06c]">{'>'}</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
