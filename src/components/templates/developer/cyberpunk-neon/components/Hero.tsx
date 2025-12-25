'use client';

import { motion } from 'framer-motion';
import { Terminal, Zap } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface HeroProps {
    data: PortfolioData;
}

export default function Hero({ data }: HeroProps) {
    const typewriterText = data.role || 'Full Stack Developer';

    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            <div className="container mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Terminal Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8 inline-block"
                    >
                        <div className="border border-green-500/50 bg-black/50 backdrop-blur-sm rounded-lg p-4 neon-border">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="ml-4 text-xs text-green-500/70">terminal@portfolio:~$</span>
                            </div>
                            <div className="text-left font-mono text-sm">
                                <span className="text-pink-500">const</span>{' '}
                                <span className="text-purple-400">developer</span> ={' '}
                                <span className="text-green-400">"{data.name || 'Developer'}"</span>;
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Title */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-bold mb-6 neon-text"
                    >
                        {data.name || 'Your Name'}
                    </motion.h1>

                    {/* Animated Role */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-2xl md:text-4xl mb-8"
                    >
                        <span className="text-pink-500">&gt;</span>{' '}
                        <span className="text-purple-400">{typewriterText}</span>
                        <span className="animate-pulse text-green-400">_</span>
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-lg md:text-xl text-green-300/80 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        {data.bio || 'Crafting digital experiences with code and creativity.'}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-green-500/20 border-2 border-green-500 text-green-400 rounded-lg font-bold hover:bg-green-500 hover:text-black transition-all neon-border"
                        >
                            <span className="flex items-center space-x-2">
                                <Terminal className="w-5 h-5" />
                                <span>View Projects</span>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="group px-8 py-4 bg-pink-500/20 border-2 border-pink-500 text-pink-400 rounded-lg font-bold hover:bg-pink-500 hover:text-black transition-all"
                            style={{
                                boxShadow: '0 0 5px #ff00de, 0 0 10px #ff00de, inset 0 0 5px #ff00de',
                            }}
                        >
                            <span className="flex items-center space-x-2">
                                <Zap className="w-5 h-5" />
                                <span>Get In Touch</span>
                            </span>
                        </a>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    >
                        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="w-1.5 h-3 bg-green-500 rounded-full mt-2"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        y: [0, -30, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-4 h-4 border border-green-500 opacity-30"
                />
                <motion.div
                    animate={{
                        y: [0, 40, 0],
                        rotate: [0, -180, -360],
                    }}
                    transition={{ duration: 25, repeat: Infinity }}
                    className="absolute top-1/3 right-1/4 w-6 h-6 border border-pink-500 opacity-30"
                />
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 90, 180],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                    className="absolute bottom-1/3 left-1/3 w-5 h-5 border border-purple-500 opacity-30"
                />
            </div>
        </section>
    );
}
