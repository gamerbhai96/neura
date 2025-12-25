'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Experience({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 bg-[#F5F5F7]">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-16"
                >
                    Experience
                </motion.h2>

                <div className="space-y-12">
                    {data.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                <h3 className="text-2xl font-semibold text-gray-900">{exp.company}</h3>
                                <span className="text-gray-500 font-medium">{exp.startDate} — {exp.endDate}</span>
                            </div>
                            <p className="text-lg text-gray-700 mb-2">{exp.position}</p>
                            <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>
                            <ul className="space-y-2">
                                {exp.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start text-sm text-gray-500">
                                        <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
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
