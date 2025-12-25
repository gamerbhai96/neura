'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
    name: "Sarah Jenkins",
    role: "Frontend Architect",
    email: "sarah@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "Building scalable frontend architecture and delightful user interfaces. I specialize in React performance and design systems.",
    skills: ["React", "TypeScript", "Next.js", "GraphQL", "TailwindCSS", "Storybook", "Jest", "CI/CD"],
    experience: [
        {
            company: "Airbnb",
            position: "Senior Frontend Engineer",
            startDate: "2020",
            endDate: "Present",
            description: "Core Design System team.",
            highlights: ["Migrated 50+ components to new system", "Improved build times by 40%"]
        },
        {
            company: "Uber",
            position: "Software Engineer",
            startDate: "2018",
            endDate: "2020",
            description: "Driver App Experience team.",
            highlights: ["Launched new driver onboarding flow", "Reduced crash rate by 20%"]
        }
    ],
    education: [
        {
            school: "Stanford University",
            degree: "BS in Computer Science",
            field: "Computer Science",
            startDate: "2014",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "React Patterns",
            description: "A collection of advanced React patterns and best practices.",
            technologies: ["React", "MDX", "Gatsby"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "CSS Grid Generator",
            description: "Visual tool for creating CSS Grid layouts.",
            technologies: ["Vue.js", "CSS Grid", "Firebase"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://sarah.dev"
    }
};

export default function ParallaxScrollPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax background layers
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">
            {/* Parallax Backgrounds */}
            <motion.div style={{ y: y1 }} className="fixed inset-0 z-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center" />
            </motion.div>

            <motion.div style={{ y: y2 }} className="fixed inset-0 z-0 opacity-20 mix-blend-overlay">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-transparent to-transparent" />
            </motion.div>

            <motion.div style={{ y: y3 }} className="fixed inset-0 z-0 opacity-40">
                <div className="absolute inset-0 bg-slate-900/80" />
            </motion.div>

            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-slate-900/50 backdrop-blur-md border-b border-white/10">
                <span className="font-bold text-xl tracking-wider uppercase">{displayData.name}</span>
                <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase">
                    <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                    <a href="#work" className="hover:text-purple-400 transition-colors">Work</a>
                    <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
                    <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                </div>
            </nav>

            <main className="relative z-10">
                <Hero data={displayData} />
                <div className="bg-slate-900/80 backdrop-blur-sm relative z-20 shadow-[0_-20px_40px_rgba(15,23,42,1)]">
                    <About data={displayData} />
                    <Experience data={displayData} />
                    <Education data={displayData} />
                    <Projects data={displayData} />
                    <Skills data={displayData} />
                    <Contact data={displayData} />
                </div>
            </main>

            <footer className="relative z-20 bg-slate-950 py-12 text-center text-slate-500 text-sm uppercase tracking-widest">
                <p>© {new Date().getFullYear()} {displayData.name}. All rights reserved.</p>
            </footer>
        </div>
    );
}
