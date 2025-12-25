'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';
import { ArrowDown } from 'lucide-react';

export default function Hero({ data }: { data: PortfolioData }) {
    return (
        <section className="h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden bg-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl w-full text-center z-10"
            >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600 pb-2">
                    {data.name.split(' ')[0]}
                </h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-3xl text-gray-500 font-light tracking-wide max-w-2xl mx-auto leading-relaxed"
                >
                    {data.role} based in {data.location}
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
            </motion.div>

            {/* Abstract background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50 to-purple-50 rounded-full blur-3xl opacity-50 -z-0" />
        </section>
    );
}
