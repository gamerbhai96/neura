'use client';

import { useEffect, useRef } from 'react';
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
    name: "Marcus Reed",
    role: "Full Stack Engineer",
    email: "marcus@example.com",
    phone: "+1 (555) 321-7654",
    location: "Seattle, WA",
    bio: "Architecting robust and scalable web applications. I focus on backend performance and clean, maintainable code.",
    skills: ["Node.js", "Python", "Go", "React", "PostgreSQL", "Redis", "AWS", "Kubernetes"],
    experience: [
        {
            company: "Amazon",
            position: "SDE II",
            startDate: "2020",
            endDate: "Present",
            description: "Working on AWS Lambda core team.",
            highlights: ["Optimized cold start times by 15%", "Designed new event trigger system"]
        },
        {
            company: "Microsoft",
            position: "Software Engineer",
            startDate: "2018",
            endDate: "2020",
            description: "Azure Cloud Services team.",
            highlights: ["Implemented auto-scaling features", "Reduced infrastructure costs"]
        }
    ],
    education: [
        {
            school: "University of Washington",
            degree: "MS in Computer Science",
            field: "Computer Science",
            startDate: "2016",
            endDate: "2018"
        }
    ],
    projects: [
        {
            name: "CloudScale",
            description: "Open source auto-scaling tool for Kubernetes.",
            technologies: ["Go", "Kubernetes API", "Docker"],
            url: "https://example.com",
            github: "https://github.com"
        },
        {
            name: "DataStream",
            description: "Real-time data processing pipeline.",
            technologies: ["Apache Kafka", "Python", "Redis"],
            url: "https://example.com",
            github: "https://github.com"
        }
    ],
    links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        portfolio: "https://marcusreed.dev"
    }
};

export default function ParticlePage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            color: string;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                this.color = `rgba(100, 255, 218, ${Math.random() * 0.5 + 0.1})`;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas!.width) this.x = 0;
                if (this.x < 0) this.x = canvas!.width;
                if (this.y > canvas!.height) this.y = 0;
                if (this.y < 0) this.y = canvas!.height;
            }

            draw() {
                ctx!.fillStyle = this.color;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx!.beginPath();
                        ctx!.strokeStyle = `rgba(100, 255, 218, ${0.1 - distance / 1000})`;
                        ctx!.lineWidth = 0.5;
                        ctx!.moveTo(particles[i].x, particles[i].y);
                        ctx!.lineTo(particles[j].x, particles[j].y);
                        ctx!.stroke();
                    }
                }
            }

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="min-h-screen bg-[#0a192f] text-[#8892b0] font-sans selection:bg-[#64ffda] selection:text-[#0a192f]">
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-0 pointer-events-none opacity-50"
            />

            <main className="relative z-10">
                <Hero data={displayData} />
                <About data={displayData} />
                <Projects data={displayData} />
                <Experience data={displayData} />
                <Education data={displayData} />
                <Skills data={displayData} />
                <Contact data={displayData} />
            </main>

            <footer className="py-8 text-center text-sm opacity-60 relative z-10">
                <p>Designed & Built by {displayData.name}</p>
            </footer>
        </div>
    );
}
