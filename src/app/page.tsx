'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Upload, Palette, Download, Github, Twitter, Sparkles } from 'lucide-react';
import Navbar from '@/components/Navbar';

const steps = [
    {
        number: '01',
        title: 'Upload Resume',
        description: 'Drop your PDF and let AI extract your experience, skills, and projects automatically.',
        icon: Upload
    },
    {
        number: '02',
        title: 'Choose Template',
        description: 'Pick from 40+ stunning templates designed for developers, creators, and professionals.',
        icon: Palette
    },
    {
        number: '03',
        title: 'Export & Deploy',
        description: 'Download your complete Next.js project. Deploy anywhere in minutes.',
        icon: Download
    },
];

const templates = [
    { name: 'Cyberpunk Neon', gradient: 'from-violet-500 to-fuchsia-500' },
    { name: 'Minimal Swiss', gradient: 'from-zinc-400 to-zinc-600' },
    { name: 'Retro Comic', gradient: 'from-red-500 to-yellow-500' },
    { name: 'Matrix Rain', gradient: 'from-green-400 to-emerald-600' },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[#09090b] text-white overflow-hidden">
            {/* Grid Background */}
            <div className="fixed inset-0 grid-bg opacity-50" />

            {/* Gradient Orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px]" />
            </div>

            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-sm text-zinc-400">40+ Premium Templates</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="heading-xl"
                            >
                                <span className="text-gradient-white">Build your</span>
                                <br />
                                <span className="text-gradient-blue">portfolio</span>
                                <br />
                                <span className="text-gradient-white">in minutes</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-zinc-400 max-w-md leading-relaxed"
                            >
                                Upload your resume, pick a template, and get a production-ready
                                Next.js portfolio. No coding required.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link href="/signup" className="btn-primary group">
                                    Start Building
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/templates" className="btn-secondary">
                                    View Templates
                                </Link>
                            </motion.div>

                            {/* Stats */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex gap-12 pt-8 border-t border-white/5"
                            >
                                {[
                                    { value: '40+', label: 'Templates' },
                                    { value: '10k+', label: 'Portfolios' },
                                    { value: '100%', label: 'Free' },
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-zinc-500">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Right - Preview Cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative hidden lg:block"
                        >
                            <div className="relative">
                                {/* Main Card */}
                                <div className="card-glass p-8 rounded-2xl">
                                    <div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden relative">
                                        {/* Mock Portfolio Preview */}
                                        <div className="absolute inset-4 rounded-lg bg-gradient-to-br from-blue-600/20 to-violet-600/20 backdrop-blur-sm border border-white/10">
                                            <div className="p-6">
                                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 mb-4" />
                                                <div className="h-4 w-32 bg-white/20 rounded mb-2" />
                                                <div className="h-3 w-24 bg-white/10 rounded" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between">
                                        <div>
                                            <div className="text-lg font-medium">Your Portfolio</div>
                                            <div className="text-sm text-zinc-500">Ready in 2 minutes</div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-zinc-400">
                                            <Sparkles className="w-4 h-4 text-blue-400" />
                                            AI-Powered
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="absolute -top-4 -right-4 px-4 py-2 bg-blue-500 rounded-full text-sm font-medium shadow-lg shadow-blue-500/25"
                                >
                                    Next.js Export
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="relative py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="heading-lg mb-4">How it works</h2>
                        <p className="text-zinc-400 max-w-lg mx-auto">
                            Three simple steps to your professional portfolio
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="card p-8 group"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-5xl font-bold text-zinc-800 group-hover:text-zinc-700 transition-colors">
                                        {step.number}
                                    </span>
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                        <step.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                </div>
                                <h3 className="heading-md mb-3">{step.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Templates Preview */}
            <section className="relative py-32 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="heading-lg mb-4">Featured Templates</h2>
                            <p className="text-zinc-400 max-w-lg">
                                Stunning designs for every profession
                            </p>
                        </motion.div>
                        <Link
                            href="/templates"
                            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                        >
                            View all templates
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {templates.map((template, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link href="/templates" className="block group">
                                    <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/5 overflow-hidden relative mb-4">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${template.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${template.gradient} opacity-80`} />
                                        </div>
                                    </div>
                                    <h3 className="font-medium group-hover:text-blue-400 transition-colors">{template.name}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-32">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="card-glass p-16 relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10" />

                        <div className="relative z-10">
                            <h2 className="heading-lg mb-4">
                                Ready to build your portfolio?
                            </h2>
                            <p className="text-zinc-400 mb-8 max-w-md mx-auto">
                                Join thousands of developers and creatives who've built their online presence with us.
                            </p>
                            <Link href="/signup" className="btn-primary">
                                Get Started Free
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.png" alt="Neura" width={32} height={32} className="rounded-lg" />
                            <span className="font-semibold">Neura</span>
                        </div>
                        <div className="flex items-center gap-8">
                            <Link href="/templates" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                Templates
                            </Link>
                            <Link href="/login" className="text-sm text-zinc-400 hover:text-white transition-colors">
                                Login
                            </Link>
                            <a href="https://github.com" className="text-zinc-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" className="text-zinc-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-sm text-zinc-500">
                            © 2024 Neura
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
