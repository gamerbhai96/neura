'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section id="contact" className="py-32 px-6">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-2xl"
                >
                    {/* Background gradients inside card */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-rose-500 rounded-full blur-[80px] opacity-30"></div>
                        <div className="absolute bottom-[-20%] left-[-20%] w-96 h-96 bg-blue-500 rounded-full blur-[80px] opacity-30"></div>
                    </div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Let's work together
                        </h2>
                        <p className="text-xl text-slate-300 mb-12 max-w-xl mx-auto">
                            Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                        </p>

                        <a
                            href={`mailto:${data.email}`}
                            className="inline-block px-12 py-6 bg-white text-slate-900 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                        >
                            Say Hello
                        </a>

                        <div className="mt-16 flex justify-center gap-8">
                            {Object.entries(data.links).map(([key, url]) => (
                                url && (
                                    <a
                                        key={key}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors capitalize font-medium"
                                    >
                                        {key}
                                    </a>
                                )
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
