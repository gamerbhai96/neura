'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section className="py-32 px-6">
            <div className="max-w-2xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-b from-gray-900 to-black border border-white/10 p-12 rounded-3xl relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

                    <h2 className="text-4xl font-bold text-white mb-6">Initialize Connection</h2>
                    <p className="text-white/60 mb-10">
                        Ready to collaborate on the next dimension of web experiences?
                    </p>

                    <a
                        href={`mailto:${data.email}`}
                        className="inline-block px-8 py-4 bg-white text-black font-bold tracking-wide rounded hover:bg-cyan-400 transition-colors duration-300"
                    >
                        TRANSMIT MESSAGE
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
