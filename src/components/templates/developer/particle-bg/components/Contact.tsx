'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section id="contact" className="py-32 px-6 md:px-24 max-w-2xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <p className="text-[#64ffda] font-mono mb-4">05. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">Get In Touch</h2>
                <p className="text-[#8892b0] text-lg mb-12 leading-relaxed">
                    Although I'm not currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href={`mailto:${data.email}`}
                    className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded font-mono hover:bg-[#64ffda]/10 transition-colors duration-300"
                >
                    Say Hello
                </a>

                <div className="mt-24 flex justify-center gap-8">
                    {Object.entries(data.links).map(([key, url]) => (
                        url && (
                            <a
                                key={key}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#8892b0] hover:text-[#64ffda] transition-colors capitalize font-mono text-sm"
                            >
                                {key}
                            </a>
                        )
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
