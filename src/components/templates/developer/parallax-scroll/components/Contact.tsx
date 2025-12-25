'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section id="contact" className="py-40 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                        Let's Build Future
                    </h2>
                    <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <a
                        href={`mailto:${data.email}`}
                        className="inline-block px-12 py-5 border border-white/20 text-white font-medium text-lg tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-all duration-300"
                    >
                        Start a conversation
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
