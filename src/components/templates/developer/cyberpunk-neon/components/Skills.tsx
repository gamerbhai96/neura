'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface SkillsProps {
    data: PortfolioData;
}

export default function Skills({ data }: SkillsProps) {
    const skills = data.skills || [];

    return (
        <section id="skills" className="relative py-24 px-6 bg-black/30">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <Cpu className="w-8 h-8 text-purple-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-purple-500">&lt;</span>
                            Skills
                            <span className="text-purple-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {skills.length > 0 ? (
                            skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    className="group relative"
                                >
                                    <div className="border border-green-500/50 bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center neon-border hover:border-pink-500 transition-all">
                                        <div className="text-lg font-bold text-green-400 group-hover:text-pink-500 transition-colors">
                                            {skill}
                                        </div>
                                        {/* Animated Corner Brackets */}
                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            // Default skills if none provided
                            ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'Git'].map(
                                (skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="border border-green-500/50 bg-black/50 backdrop-blur-sm p-6 rounded-lg text-center neon-border"
                                    >
                                        <div className="text-lg font-bold text-green-400">{skill}</div>
                                    </motion.div>
                                )
                            )
                        )}
                    </div>

                    {/* Stats Section */}
                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="border border-green-500/30 bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center"
                        >
                            <div className="text-4xl font-bold text-green-400 neon-text mb-2">
                                {data.projects?.length || 0}+
                            </div>
                            <div className="text-green-300/70">Projects Completed</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="border border-pink-500/30 bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center"
                            style={{
                                boxShadow: '0 0 5px #ff00de, 0 0 10px #ff00de, inset 0 0 5px #ff00de',
                            }}
                        >
                            <div className="text-4xl font-bold text-pink-400 mb-2">
                                {data.experience?.length || 0}+
                            </div>
                            <div className="text-pink-300/70">Years Experience</div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="border border-purple-500/30 bg-black/30 backdrop-blur-sm p-6 rounded-lg text-center"
                            style={{
                                boxShadow: '0 0 5px #a855f7, 0 0 10px #a855f7, inset 0 0 5px #a855f7',
                            }}
                        >
                            <div className="text-4xl font-bold text-purple-400 mb-2">
                                {skills.length || 8}+
                            </div>
                            <div className="text-purple-300/70">Technologies</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
