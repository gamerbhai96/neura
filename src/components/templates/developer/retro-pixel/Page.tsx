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
    name: "Max Power",
    role: "Game Developer",
    email: "max@example.com",
    phone: "+1 (555) 888-9999",
    location: "Tokyo, Japan",
    bio: "Leveling up the web, one pixel at a time. I build retro-inspired games and interactive experiences.",
    skills: ["Unity", "C#", "Phaser.js", "Pixel Art", "WebGL", "React", "Node.js", "Socket.io"],
    experience: [
        {
            company: "Nintendo",
            position: "Game Designer",
            startDate: "2020",
            endDate: "Present",
            description: "Designing levels for the next Mario game.",
            highlights: ["Created 50+ levels", "Optimized physics engine"]
        },
        {
            company: "Indie Studio",
            position: "Developer",
            startDate: "2018",
            endDate: "2020",
            description: "Shipped 3 mobile titles.",
            highlights: ["1M+ downloads", "Featured on App Store"]
        }
    ],
    education: [
        {
            school: "DigiPen",
            degree: "BS in Game Design",
            field: "Game Design",
            startDate: "2014",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "Super Jump",
            description: "A classic platformer built with Phaser.",
            technologies: ["Phaser.js", "JavaScript", "Tiled"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "Dungeon Crawler",
            description: "Procedural dungeon generator.",
            technologies: ["C#", "Unity", "Algorithms"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://maxpower.dev"
    }
};

export default function RetroPixelPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-[#2c2137] text-[#e0f8cf] font-mono selection:bg-[#86c06c] selection:text-[#071821]">
            {/* Scanline effect */}
            <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] pointer-events-none" />

            <nav className="fixed top-0 left-0 right-0 z-40 bg-[#071821] border-b-4 border-[#86c06c] p-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold tracking-widest uppercase text-[#86c06c] animate-pulse">
                        Player 1: {displayData.name}
                    </span>
                    <div className="hidden md:flex gap-8 text-sm">
                        <a href="#about" className="hover:text-[#86c06c] hover:underline decoration-2 underline-offset-4">ABOUT</a>
                        <a href="#projects" className="hover:text-[#86c06c] hover:underline decoration-2 underline-offset-4">QUESTS</a>
                        <a href="#skills" className="hover:text-[#86c06c] hover:underline decoration-2 underline-offset-4">STATS</a>
                        <a href="#education" className="hover:text-[#86c06c] hover:underline decoration-2 underline-offset-4">TRAINING</a>
                        <a href="#contact" className="hover:text-[#86c06c] hover:underline decoration-2 underline-offset-4">CONTACT</a>
                    </div>
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

            <footer className="py-8 text-center text-xs uppercase tracking-widest bg-[#071821] text-[#306850]">
                <p>Insert Coin to Continue © {new Date().getFullYear()}</p>
            </footer>
        </div>
    );
}
