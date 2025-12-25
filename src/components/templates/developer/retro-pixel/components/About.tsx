'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section id="about" className="py-20 px-6 bg-[#071821]">
            <div className="max-w-4xl mx-auto border-4 border-[#306850] p-8 bg-[#2c2137] relative shadow-[8px_8px_0_rgba(48,104,80,1)]">
                <div className="absolute -top-4 left-4 bg-[#071821] px-4 text-[#86c06c] font-bold text-xl uppercase tracking-widest border-2 border-[#306850]">
                    About Player
                </div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[#e0f8cf] leading-loose font-mono text-lg"
                >
                    <p className="mb-6">
                        {data.bio}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="bg-[#071821] p-4 border-2 border-[#86c06c]">
                            <h3 className="text-[#86c06c] uppercase mb-2 text-sm">Location</h3>
                            <p>{data.location}</p>
                        </div>
                        <div className="bg-[#071821] p-4 border-2 border-[#86c06c]">
                            <h3 className="text-[#86c06c] uppercase mb-2 text-sm">Contact Info</h3>
                            <p>{data.email}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
