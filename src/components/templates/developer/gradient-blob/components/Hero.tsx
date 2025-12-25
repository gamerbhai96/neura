'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="mb-8 relative"
            >
                <div className="absolute inset-0 bg-rose-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-slate-900 mb-4 relative z-10">
                    {data.role}
                </h1>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl md:text-4xl font-light text-slate-700 max-w-3xl mx-auto leading-tight mb-12"
            >
                Hi, I'm {data.name}. {data.bio}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                <a
                    href="#contact"
                    className="inline-block px-10 py-5 bg-slate-900 text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl hover:shadow-2xl hover:shadow-rose-500/20"
                >
                    Let's Create Magic
                </a>
            </motion.div>
        </section>
    );
}
