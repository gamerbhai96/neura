'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-purple-400 font-medium tracking-[0.3em] uppercase mb-6"
                >
                    Portfolio
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
                >
                    {data.name}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    {data.role}
                </motion.p>
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500 to-transparent animate-pulse"></div>
            </motion.div>
        </section>
    );
}
