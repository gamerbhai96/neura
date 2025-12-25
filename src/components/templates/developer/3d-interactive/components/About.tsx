'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-black/50 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl"
                >
                    <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8">About_Me</h2>
                    <p className="text-2xl md:text-4xl font-light leading-tight text-white/90 mb-8">
                        {data.bio}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/70">
                        <div>
                            <h3 className="text-white font-bold mb-2">Location</h3>
                            <p>{data.location}</p>
                        </div>
                        <div>
                            <h3 className="text-white font-bold mb-2">Connect</h3>
                            <div className="flex gap-4">
                                {Object.entries(data.links).map(([key, url]) => (
                                    url && (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-cyan-400 transition-colors capitalize"
                                        >
                                            {key}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
