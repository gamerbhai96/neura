'use client';

import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PortfolioData } from '../../types';

// Mock data for development
const mockData: PortfolioData = {
    name: "Elena Rodriguez",
    role: "Visual Designer",
    email: "elena@example.com",
    phone: "+1 (555) 456-7890",
    location: "Barcelona, Spain",
    bio: "I create digital experiences that are as beautiful as they are functional. My work is driven by color, typography, and fluid motion.",
    skills: ["Figma", "Adobe CC", "After Effects", "Cinema 4D", "HTML/CSS", "Webflow", "React", "Three.js"],
    experience: [
        {
            company: "Pentagram",
            position: "Senior Designer",
            startDate: "2021",
            endDate: "Present",
            description: "Leading brand identity projects for global clients.",
            highlights: ["Rebranded Fortune 500 company", "Won Red Dot Design Award"]
        },
        {
            company: "Huge",
            position: "Designer",
            startDate: "2019",
            endDate: "2021",
            description: "UI/UX design for large-scale e-commerce platforms.",
            highlights: ["Designed mobile app with 1M+ users", "Created design system for retail client"]
        }
    ],
    education: [
        {
            school: "ELISAVA",
            degree: "Master in Graphic Design",
            field: "Graphic Design",
            startDate: "2017",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "Bloom",
            description: "A meditation app focused on color therapy.",
            technologies: ["Figma", "React Native", "Lottie"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "Prisma",
            description: "Generative art collection generator.",
            technologies: ["p5.js", "WebGL", "Canvas"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://elena.design"
    }
};

export default function GradientBlobPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-rose-200 selection:text-rose-900 overflow-hidden">
            {/* Background Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none filter blur-[100px] opacity-60">
                <motion.div
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -50, 100, 0],
                        scale: [1, 1.2, 0.9, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-rose-300 rounded-full mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 50, 0],
                        y: [0, 100, -50, 0],
                        scale: [1, 1.1, 0.8, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-300 rounded-full mix-blend-multiply"
                />
                <motion.div
                    animate={{
                        x: [0, 50, -100, 0],
                        y: [0, -100, 50, 0],
                        scale: [1, 1.3, 0.9, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-amber-200 rounded-full mix-blend-multiply"
                />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center">
                <span className="font-bold text-2xl tracking-tight text-slate-800">{displayData.name}</span>
                <div className="hidden md:flex gap-8 font-medium text-slate-600">
                    <a href="#work" className="hover:text-rose-500 transition-colors">Work</a>
                    <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
                    <a href="#education" className="hover:text-rose-500 transition-colors">Education</a>
                    <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
                </div>
            </nav>

            <main className="relative z-10">
                <Hero data={displayData} />
                <About data={displayData} />
                <Projects data={displayData} />
                <Experience data={displayData} />
                <Education data={displayData} />
                <Skills data={displayData} />
                <Contact data={displayData} />
            </main>

            <footer className="py-12 text-center text-slate-500 relative z-10 bg-white/30 backdrop-blur-sm">
                <p>© {new Date().getFullYear()} {displayData.name}. Made with ❤️ and colors.</p>
            </footer>
        </div>
    );
}
