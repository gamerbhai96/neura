'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface ExperienceProps {
    data: PortfolioData;
}

export default function Experience({ data }: ExperienceProps) {
    const experience = data.experience || [];

    return (
        <section id="experience" className="relative py-24 px-6 bg-black/30">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <Briefcase className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-purple-500">&lt;</span>
                            Experience
                            <span className="text-purple-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-pink-500 to-purple-500"></div>

                        {experience.length > 0 ? (
                            experience.map((exp, index) => (
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
                                                {exp.startDate} - {exp.endDate || 'Present'}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-400 mb-1">{exp.position}</h3>
                                        <h4 className="text-xl text-purple-400 mb-3">{exp.company}</h4>
                                        <p className="text-green-300/80 mb-4">{exp.description}</p>
                                        {exp.highlights && exp.highlights.length > 0 && (
                                            <ul className="space-y-2">
                                                {exp.highlights.map((highlight, hIndex) => (
                                                    <li key={hIndex} className="flex items-start space-x-2">
                                                        <span className="text-pink-500 mt-1">▹</span>
                                                        <span className="text-green-300/70">{highlight}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
                                        <span>2020 - Present</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-green-400 mb-1">Senior Developer</h3>
                                    <h4 className="text-xl text-purple-400 mb-3">Tech Company</h4>
                                    <p className="text-green-300/80">
                                        Building innovative solutions with cutting-edge technologies.
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
