'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section id="contact" className="py-20 px-6 bg-[#071821]">
            <div className="max-w-2xl mx-auto text-center border-4 border-[#86c06c] p-8 md:p-12 bg-[#2c2137] shadow-[12px_12px_0_rgba(48,104,80,1)]">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#e0f8cf] uppercase tracking-widest">
                    Game Over?
                </h2>
                <p className="text-[#86c06c] text-lg mb-10 uppercase">
                    Continue? 10... 9... 8...
                </p>

                <div className="flex flex-col gap-4">
                    <a
                        href={`mailto:${data.email}`}
                        className="inline-block w-full py-4 bg-[#e0f8cf] text-[#071821] font-bold text-xl uppercase tracking-widest hover:bg-[#86c06c] transition-colors animate-pulse"
                    >
                        Insert Coin (Email)
                    </a>

                    <div className="flex justify-center gap-4 mt-8">
                        {Object.entries(data.links)
                            .filter(([, url]) => url)
                            .map(([key, url]) => (
                                <a
                                    key={key}
                                    href={url!}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#306850] hover:text-[#e0f8cf] uppercase font-bold text-sm tracking-wider"
                                >
                                    [{key}]
                                </a>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
