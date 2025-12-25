'use client';

import { motion } from 'framer-motion';
import { User, Code } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface AboutProps {
    data: PortfolioData;
}

export default function About({ data }: AboutProps) {
    return (
        <section id="about" className="relative py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <User className="w-8 h-8 text-pink-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-pink-500">&lt;</span>
                            About
                            <span className="text-pink-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Bio */}
                        <div className="space-y-6">
                            <div className="border border-green-500/30 bg-black/30 backdrop-blur-sm p-6 rounded-lg neon-border">
                                <div className="mb-4 text-sm text-green-500/70 font-mono">
                  // Professional Bio
                                </div>
                                <p className="text-green-300/90 leading-relaxed text-lg">
                                    {data.bio || 'No bio provided.'}
                                </p>
                            </div>

                            {/* Contact Info */}
                            <div className="border border-purple-500/30 bg-black/30 backdrop-blur-sm p-6 rounded-lg"
                                style={{
                                    boxShadow: '0 0 5px #a855f7, 0 0 10px #a855f7, inset 0 0 5px #a855f7',
                                }}
                            >
                                <div className="mb-4 text-sm text-purple-500/70 font-mono">
                  // Contact Details
                                </div>
                                <div className="space-y-2 text-green-300">
                                    {data.email && (
                                        <div className="flex items-center space-x-2">
                                            <span className="text-pink-500">email:</span>
                                            <span>{data.email}</span>
                                        </div>
                                    )}
                                    {data.phone && (
                                        <div className="flex items-center space-x-2">
                                            <span className="text-pink-500">phone:</span>
                                            <span>{data.phone}</span>
                                        </div>
                                    )}
                                    {data.location && (
                                        <div className="flex items-center space-x-2">
                                            <span className="text-pink-500">location:</span>
                                            <span>{data.location}</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Code Block Aesthetic */}
                        <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-6 rounded-lg font-mono text-sm">
                            <div className="mb-4 text-green-500/70">
                                <span className="text-pink-500">class</span>{' '}
                                <span className="text-purple-400">Developer</span> {'{'}
                            </div>
                            <div className="pl-4 space-y-2">
                                <div>
                                    <span className="text-pink-500">name</span> ={' '}
                                    <span className="text-green-400">"{data.name || 'Developer'}"</span>;
                                </div>
                                <div>
                                    <span className="text-pink-500">role</span> ={' '}
                                    <span className="text-green-400">"{data.role || 'Software Engineer'}"</span>;
                                </div>
                                <div>
                                    <span className="text-pink-500">skills</span> = [
                                    <div className="pl-4 text-green-400">
                                        {data.skills && data.skills.length > 0
                                            ? data.skills.slice(0, 5).map((skill, index) => (
                                                <div key={index}>"{skill}",</div>
                                            ))
                                            : <div>"Coding", "Problem Solving"</div>
                                        }
                                    </div>
                                    ];
                                </div>
                                <div>
                                    <span className="text-pink-500">location</span> ={' '}
                                    <span className="text-green-400">"{data.location || 'Remote'}"</span>;
                                </div>
                                <div className="pt-4">
                                    <span className="text-purple-400">constructor</span>() {'{'}
                                    <div className="pl-4 text-green-500/70">
                    // Building amazing things
                                    </div>
                                    {'}'}
                                </div>
                            </div>
                            <div className="mt-2 text-green-500/70">{'}'}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
