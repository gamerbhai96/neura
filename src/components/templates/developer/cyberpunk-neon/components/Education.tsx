'use client';

import { motion } from 'framer-motion';
import { Book, Calendar } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface EducationProps {
    data: PortfolioData;
}

export default function Education({ data }: EducationProps) {
    const education = data.education || [];

    return (
        <section id="education" className="relative py-24 px-6 bg-black/30">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <Book className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-purple-500">&lt;</span>
                            Education
                            <span className="text-purple-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-pink-500 to-purple-500"></div>

                        {education.length > 0 ? (
                            education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'
                                        } md:w-1/2`}
                                >
                                    {/* Dot on timeline */}
                                    <div className="absolute left-0 md:left-auto md:right-0 top-4 w-4 h-4 bg-pink-500 rounded-full shadow-lg"
                                        style={{
                                            boxShadow: '0 0 10px #ff00de, 0 0 20px #ff00de',
                                        }}
                                    ></div>

                                    {/* Content */}
                                    <div className="ml-8 md:ml-0 border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg neon-border">
                                        <div className="flex items-center space-x-2 mb-2 text-pink-500 text-sm">
                                            <Calendar className="w-4 h-4" />
                                            <span>
                                                {edu.startDate} - {edu.endDate}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-400 mb-1">{edu.degree}</h3>
                                        <h4 className="text-xl text-purple-400 mb-3">{edu.school}</h4>
                                        <p className="text-green-300/80 mb-4">{edu.field}</p>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Default placeholder
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative md:pr-12 md:text-right md:w-1/2"
                            >
                                <div className="absolute left-0 md:left-auto md:right-0 top-4 w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>
                                <div className="ml-8 md:ml-0 border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg neon-border">
                                    <div className="flex items-center space-x-2 mb-2 text-pink-500 text-sm">
                                        <Calendar className="w-4 h-4" />
                                        <span>2018 - 2022</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-400 mb-1">BS Computer Science</h3>
                                    <h4 className="text-xl text-purple-400 mb-3">University of Technology</h4>
                                    <p className="text-green-300/80">
                                        Specialized in Artificial Intelligence and Machine Learning.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
