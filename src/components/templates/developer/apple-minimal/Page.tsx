'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { PortfolioData } from '../../types';

// Mock data for development - this would normally come from props
const mockData: PortfolioData = {
    name: "Alex Morgan",
    role: "Senior Product Designer",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    bio: "I craft digital experiences that merge art with functionality. With a background in both design and engineering, I build products that look beautiful and work seamlessly.",
    skills: ["UI/UX Design", "React", "TypeScript", "Figma", "Three.js", "Node.js", "Next.js", "TailwindCSS"],
    experience: [
        {
            company: "Apple",
            position: "Senior Interface Designer",
            startDate: "2021",
            endDate: "Present",
            description: "Leading the design system team for internal tools.",
            highlights: ["Redesigned core internal dashboard", "Implemented new design tokens system"]
        },
        {
            company: "Airbnb",
            position: "Product Designer",
            startDate: "2019",
            endDate: "2021",
            description: "Worked on the host experience team.",
            highlights: ["Launched new hosting dashboard", "Improved host onboarding flow by 40%"]
        }
    ],
    education: [
        {
            school: "Rhode Island School of Design",
            degree: "BFA in Graphic Design",
            field: "Design",
            startDate: "2015",
            endDate: "2019"
        }
    ],
    projects: [
        {
            name: "Lumina",
            description: "A minimal task management app focused on focus and clarity.",
            technologies: ["React", "Framer Motion", "Supabase"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "Aether",
            description: "Weather visualization platform using WebGL.",
            technologies: ["Three.js", "React Three Fiber", "OpenWeather API"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://alexmorgan.design"
    }
};

export default function AppleMinimalPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans selection:bg-[#0071E3] selection:text-white">
            <motion.div
                style={{ opacity, scale }}
                className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center mix-blend-difference text-white pointer-events-none"
            >
                <span className="font-semibold tracking-tight text-xl">{displayData.name}</span>
                <span className="text-sm font-medium opacity-80">{displayData.role}</span>
            </motion.div>

            <main className="relative z-10">
                <Hero data={displayData} />
                <About data={displayData} />
                <Projects data={displayData} />
                <Experience data={displayData} />
                <Education data={displayData} />
                <Skills data={displayData} />
                <Contact data={displayData} />
            </main>

            <footer className="py-12 text-center text-sm text-gray-500 bg-white">
                <p>© {new Date().getFullYear()} {displayData.name}. All rights reserved.</p>
            </footer>
        </div>
    );
}
