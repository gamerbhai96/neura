'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">About</h2>
                    <p className="text-3xl md:text-5xl font-medium leading-tight text-gray-900">
                        {data.bio}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Background</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Based in {data.location}, I focus on creating digital products that are not just functional but also intuitive and delightful to use. My approach combines technical expertise with a keen eye for design.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <div className="space-y-2 text-gray-600">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <div className="flex space-x-4 mt-4">
                                {Object.entries(data.links).map(([key, url]) => (
                                    url && (
                                        <a
                                            key={key}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 hover:text-blue-600 transition-colors capitalize"
                                        >
                                            {key}
                                        </a>
                                    )
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
