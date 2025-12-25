'use client';

import { motion } from 'framer-motion';
import { PortfolioData } from '../../../types';
import { Send } from 'lucide-react';

export default function Contact({ data }: { data: PortfolioData }) {
    return (
        <section className="py-20 px-6 pb-32">
            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
                >
                    <h2 className="text-3xl font-bold mb-2 text-center text-white">Get in Touch</h2>
                    <p className="text-white/60 text-center mb-8">Have a project in mind? Let's talk.</p>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
