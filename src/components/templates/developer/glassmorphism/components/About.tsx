'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 rounded-3xl backdrop-blur-lg bg-white/5 border border-white/10"
                >
                    <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                        {data.bio}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-pink-400 mb-1">5+</h3>
                            <p className="text-sm text-white/60">Years Experience</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold text-purple-400 mb-1">50+</h3>
                            <p className="text-sm text-white/60">Projects Completed</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
                        <p className="text-white/70">{data.location}</p>
                    </div>
                    <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold mb-2 text-white">Email</h3>
                        <p className="text-white/70">{data.email}</p>
                    </div>
                    <div className="glass-card p-6 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                        <h3 className="text-xl font-bold mb-2 text-white">Socials</h3>
                        <div className="flex gap-4">
                            {Object.entries(data.links).map(([key, url]) => (
                                url && (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-pink-400 hover:text-pink-300 capitalize font-medium"
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
