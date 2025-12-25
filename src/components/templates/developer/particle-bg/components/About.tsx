'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function About({ data }: { data: PortfolioData }) {
    return (
        <section id="about" className="py-24 px-6 md:px-24 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 mb-10"
            >
                <span className="text-[#64ffda] font-mono text-xl">01.</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">About Me</h2>
                <div className="h-[1px] bg-[#233554] flex-grow max-w-xs ml-4"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="md:col-span-2 text-[#8892b0] leading-relaxed space-y-4"
                >
                    <p>
                        Hello! My name is {data.name} and I enjoy creating things that live on the internet.
                        My interest in web development started back when I decided to try editing custom Tumblr themes —
                        turns out hacking together HTML & CSS is pretty fun!
                    </p>
                    <p>
                        Fast-forward to today, and I've had the privilege of working at an advertising agency,
                        a start-up, a huge corporation, and a student-led design studio. My main focus these days
                        is building accessible, inclusive products and digital experiences.
                    </p>
                    <p>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                        {data.skills.slice(0, 6).map((skill, i) => (
                            <li key={i} className="flex items-center gap-2">
                                <span className="text-[#64ffda]">▹</span> {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative group"
                >
                    <div className="relative w-full aspect-square rounded border-2 border-[#64ffda] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-[#64ffda]/20 hover:bg-transparent transition-colors duration-300 rounded overflow-hidden">
                        {/* Placeholder for profile image */}
                        <div className="w-full h-full bg-[#112240] flex items-center justify-center text-[#64ffda] font-mono text-4xl">
                            {data.name.charAt(0)}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
