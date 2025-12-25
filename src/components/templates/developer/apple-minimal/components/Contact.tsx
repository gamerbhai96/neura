'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';
import { ArrowRight } from 'lucide-react';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-gray-900">
                        Let's work together.
                    </h2>
                    <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing product design work or partnership opportunities.
                    </p>

                    <a
                        href={`mailto:${data.email}`}
                        className="inline-flex items-center px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-colors group"
                    >
                        Say Hello
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>

                    <div className="mt-24 flex justify-center space-x-8">
                        {Object.entries(data.links).map(([key, url]) => (
                            url && (
                                <a
                                    key={key}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-black transition-colors capitalize font-medium"
                                >
                                    {key}
                                </a>
                            )
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
