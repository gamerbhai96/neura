'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-[#64ffda] font-mono mb-5 ml-1">Hi, my name is</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4 tracking-tight">
                    {data.name}.
                </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-8 tracking-tight">
                    I build things for the web.
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <p className="max-w-xl text-lg leading-relaxed mb-12">
                    {data.bio}
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <a
                    href="#projects"
                    className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors duration-300"
                >
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
}
