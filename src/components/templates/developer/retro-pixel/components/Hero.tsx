'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, steps: 5 }}
                className="mb-8"
            >
                <div className="w-32 h-32 mx-auto bg-[#86c06c] rounded-none mb-8 pixelated-image relative">
                    {/* Pixel Art Avatar Placeholder */}
                    <div className="absolute inset-2 bg-[#071821]"></div>
                    <div className="absolute inset-4 bg-[#86c06c] flex items-center justify-center text-[#071821] text-4xl font-bold">
                        {data.name.charAt(0)}
                    </div>
                </div>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, steps: 5 }}
                className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-widest text-[#e0f8cf] drop-shadow-[4px_4px_0_rgba(48,104,80,1)]"
            >
                {data.name}
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5, steps: 5 }}
                className="bg-[#306850] text-[#e0f8cf] px-4 py-2 mb-8 inline-block transform -skew-x-12"
            >
                <p className="text-xl md:text-2xl uppercase tracking-wider transform skew-x-12">
                    {data.role}
                </p>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed text-[#86c06c]"
            >
                {data.bio}
            </motion.p>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="px-8 py-4 bg-[#e0f8cf] text-[#071821] text-xl font-bold uppercase tracking-widest border-b-4 border-r-4 border-[#306850] active:border-0 active:translate-y-1 active:translate-x-1 transition-all"
            >
                Start Game
            </motion.button>
        </section>
    );
}
