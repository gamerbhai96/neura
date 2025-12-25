'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center items-center px-6 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-card max-w-4xl w-full p-12 md:p-20 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl text-center relative overflow-hidden"
            >
                {/* Shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-sm font-medium mb-6 backdrop-blur-md">
                        Hello, I'm {data.name}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 drop-shadow-lg">
                        {data.role}
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
                        {data.bio}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-3 rounded-full bg-white text-purple-900 font-bold hover:bg-white/90 transition-colors shadow-lg hover:shadow-white/20">
                            View Projects
                        </button>
                        <button className="px-8 py-3 rounded-full bg-transparent border-2 border-white/30 hover:bg-white/10 transition-colors font-medium backdrop-blur-sm">
                            Contact Me
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
