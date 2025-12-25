'use client';

import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';
import type { PortfolioData } from '../../../types';

interface ContactProps {
    data: PortfolioData;
}

export default function Contact({ data }: ContactProps) {
    return (
        <section id="contact" className="relative py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Section Title */}
                    <div className="flex items-center space-x-4 mb-12">
                        <Mail className="w-8 h-8 text-green-500" />
                        <h2 className="text-4xl md:text-5xl font-bold neon-text">
                            <span className="text-green-500">&lt;</span>
                            Contact
                            <span className="text-green-500">/&gt;</span>
                        </h2>
                    </div>

                    {/* Contact Content */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Left: Info */}
                        <div className="space-y-6">
                            <div className="border border-green-500/30 bg-black/50 backdrop-blur-sm p-8 rounded-lg neon-border">
                                <h3 className="text-2xl font-bold text-green-400 mb-4">Let's Connect</h3>
                                <p className="text-green-300/80 mb-6 leading-relaxed">
                                    Interested in working together? Feel free to reach out for collaborations or just a friendly chat.
                                </p>

                                {/* Social Links */}
                                <div className="space-y-4">
                                    {data.email && (
                                        <a
                                            href={`mailto:${data.email}`}
                                            className="flex items-center space-x-3 text-green-400 hover:text-pink-500 transition-colors group"
                                        >
                                            <Mail className="w-5 h-5" />
                                            <span className="group-hover:translate-x-1 transition-transform">{data.email}</span>
                                        </a>
                                    )}
                                    {data.links?.github && (
                                        <a
                                            href={data.links.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 text-green-400 hover:text-pink-500 transition-colors group"
                                        >
                                            <Github className="w-5 h-5" />
                                            <span className="group-hover:translate-x-1 transition-transform">GitHub</span>
                                        </a>
                                    )}
                                    {data.links?.linkedin && (
                                        <a
                                            href={data.links.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 text-green-400 hover:text-pink-500 transition-colors group"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                            <span className="group-hover:translate-x-1 transition-transform">LinkedIn</span>
                                        </a>
                                    )}
                                    {data.links?.twitter && (
                                        <a
                                            href={data.links.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-3 text-green-400 hover:text-pink-500 transition-colors group"
                                        >
                                            <Twitter className="w-5 h-5" />
                                            <span className="group-hover:translate-x-1 transition-transform">Twitter</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="border border-pink-500/30 bg-black/50 backdrop-blur-sm p-8 rounded-lg"
                            style={{
                                boxShadow: '0 0 5px #ff00de, 0 0 10px #ff00de, inset 0 0 5px #ff00de',
                            }}
                        >
                            <h3 className="text-2xl font-bold text-pink-400 mb-6">Send Message</h3>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-green-400 mb-2 text-sm font-mono">Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-green-400 focus:border-pink-500 focus:outline-none transition-colors font-mono"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-green-400 mb-2 text-sm font-mono">Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-green-400 focus:border-pink-500 focus:outline-none transition-colors font-mono"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-green-400 mb-2 text-sm font-mono">Message</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-black/50 border border-green-500/30 rounded px-4 py-3 text-green-400 focus:border-pink-500 focus:outline-none transition-colors font-mono resize-none"
                                        placeholder="Your message..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-pink-500/20 border-2 border-pink-500 text-pink-400 rounded py-3 font-bold hover:bg-pink-500 hover:text-black transition-all flex items-center justify-center space-x-2"
                                    style={{
                                        boxShadow: '0 0 5px #ff00de, 0 0 10px #ff00de',
                                    }}
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
