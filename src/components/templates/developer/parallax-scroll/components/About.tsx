'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute -inset-4 border border-purple-500/30 rounded-lg transform -rotate-3"></div>
                    <div className="absolute -inset-4 border border-white/10 rounded-lg transform rotate-3"></div>
                    <div className="relative bg-slate-800/50 p-8 rounded-lg border border-white/10 backdrop-blur-sm">
                        <h2 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-6">About Me</h2>
                        <p className="text-xl text-slate-300 leading-relaxed font-light">
                            {data.bio}
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-12"
                >
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-purple-500"></span>
                            Location
                        </h3>
                        <p className="text-slate-400 pl-11">{data.location}</p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-purple-500"></span>
                            Connect
                        </h3>
                        <div className="flex gap-6 pl-11">
                            {Object.entries(data.links).map(([key, url]) => (
                                url && (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-purple-400 transition-colors capitalize text-sm tracking-wider"
                                    >
                                        {key}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
