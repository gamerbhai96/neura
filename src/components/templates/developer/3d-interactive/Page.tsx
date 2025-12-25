'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Loader } from '@react-three/drei';
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
    name: "David Chen",
    role: "Creative Developer",
    email: "david@example.com",
    phone: "+1 (555) 246-8101",
    location: "New York, NY",
    bio: "I bridge the gap between design and engineering. Specializing in WebGL, 3D interactions, and immersive web experiences.",
    skills: ["Three.js", "React Three Fiber", "GLSL", "WebGL", "React", "Next.js", "Blender", "TypeScript"],
    experience: [
        {
            company: "Active Theory",
            position: "Creative Technologist",
            startDate: "2021",
            endDate: "Present",
            description: "Building award-winning immersive web experiences.",
            highlights: ["Developed core WebGL framework", "Led technical direction for major campaigns"]
        },
        {
            company: "Freelance",
            position: "Frontend Developer",
            startDate: "2018",
            endDate: "2021",
            description: "Created bespoke websites for creative agencies.",
            highlights: ["Awwwards Site of the Day winner", "Implemented complex scroll animations"]
        }
    ],
    education: [
        {
            school: "Parsons School of Design",
            degree: "BFA in Design and Technology",
            field: "Design Technology",
            startDate: "2014",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "Neon City",
            description: "Interactive 3D city exploration experience.",
            technologies: ["Three.js", "React", "GSAP"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "Void",
            description: "Generative audio-visual experiment.",
            technologies: ["WebGL", "Web Audio API", "GLSL"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://davidchen.dev"
    }
};

export default function ThreeDPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black">
            <div className="fixed inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                    <Suspense fallback={null}>
                        <Hero data={displayData} />
                    </Suspense>
                </Canvas>
                <Loader />
            </div>

            <main className="relative z-10 pointer-events-none">
                {/* Content overlays the 3D scene */}
                <div className="pointer-events-auto">
                    <About data={displayData} />
                    <Projects data={displayData} />
                    <Experience data={displayData} />
                    <Education data={displayData} />
                    <Skills data={displayData} />
                    <Contact data={displayData} />
                </div>
            </main>
        </div>
    );
}
