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
    name: "Sarah Jenkins",
    role: "Frontend Architect",
    email: "sarah@example.com",
    phone: "+1 (555) 987-6543",
    location: "Austin, TX",
    bio: "Building scalable frontend architecture with a focus on performance and developer experience. I love exploring new web technologies and contributing to open source.",
    skills: ["React", "Vue.js", "TypeScript", "Webpack", "Vite", "GraphQL", "AWS", "Docker"],
    experience: [
        {
            company: "Google",
            position: "Senior Software Engineer",
            startDate: "2022",
            endDate: "Present",
            description: "Working on Chrome DevTools.",
            highlights: ["Improved performance profiling tools", "Mentored junior engineers"]
        },
        {
            company: "Shopify",
            position: "Staff Engineer",
            startDate: "2019",
            endDate: "2022",
            description: "Led the storefront performance team.",
            highlights: ["Reduced TTI by 30%", "Architected new hydrogen framework components"]
        }
    ],
    education: [
        {
            school: "University of Texas at Austin",
            degree: "BS in Computer Science",
            field: "Computer Science",
            startDate: "2015",
            endDate: "2019"
        }
    ],
    projects: [
        {
            name: "Glass UI",
            description: "A React component library for glassmorphism effects.",
            technologies: ["React", "CSS Modules", "Storybook"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "DevDash",
            description: "Developer productivity dashboard.",
            technologies: ["Next.js", "Prisma", "PostgreSQL"],
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

export default function GlassmorphismPage({ data }: { data?: PortfolioData }) {
    // Use passed data or fall back to mockData
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white font-sans selection:bg-pink-500 selection:text-white overflow-x-hidden">
            {/* Animated background orbs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"
                />
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-pink-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-50"
                />
            </div>

            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center">
                <div className="glass-panel px-6 py-3 rounded-full backdrop-blur-md bg-white/10 border border-white/20 shadow-xl">
                    <span className="font-bold tracking-wide">{displayData.name}</span>
                </div>
            </nav>

            <main className="relative z-10 pt-20">
                <Hero data={displayData} />
                <About data={displayData} />
                <Projects data={displayData} />
                <Experience data={displayData} />
                <Education data={displayData} />
                <Skills data={displayData} />
                <Contact data={displayData} />
            </main>

            <footer className="py-12 text-center text-sm text-white/60 relative z-10">
                <p>© {new Date().getFullYear()} {displayData.name}. Crafted with Glassmorphism.</p>
            </footer>
        </div>
    );
}

