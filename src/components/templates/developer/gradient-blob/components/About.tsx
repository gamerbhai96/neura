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
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-300 to-blue-300 rounded-[2rem] transform rotate-3 scale-105 opacity-50 blur-lg"></div>
                    <div className="relative bg-white p-10 rounded-[2rem] shadow-xl">
                        <h2 className="text-4xl font-bold mb-6 text-slate-900">About Me</h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            {data.bio}
                        </p>
                        <div className="flex gap-4">
                            <div className="px-6 py-3 bg-rose-50 rounded-2xl">
                                <span className="block text-2xl font-bold text-rose-500">5+</span>
                                <span className="text-sm text-rose-900/60">Years Exp.</span>
                            </div>
                            <div className="px-6 py-3 bg-cyan-50 rounded-2xl">
                                <span className="block text-2xl font-bold text-cyan-500">50+</span>
                                <span className="text-sm text-cyan-900/60">Projects</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Location</h3>
                        <p className="text-slate-600">{data.location}</p>
                    </div>

                    <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[2rem] border border-white/50 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Connect</h3>
                        <div className="flex flex-wrap gap-3">
                            {Object.entries(data.links).map(([key, url]) => (
                                url && (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 hover:text-rose-500 hover:shadow-sm transition-all capitalize"
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
