'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars, Text, Float, useScroll, ScrollControls, Scroll } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu } from 'lucide-react';

import { PortfolioData } from '../../types';

interface NeonCityPageProps {
    data?: PortfolioData;
}

// --- 3D Components ---

function Building({ position, size, color }: { position: [number, number, number]; size: [number, number, number]; color: string }) {
    return (
        <mesh position={position}>
            <boxGeometry args={size} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
            {/* Windows */}
            <group>
                {Array.from({ length: Math.floor(size[1] * 2) }).map((_, i) => (
                    <mesh key={i} position={[0, -size[1] / 2 + i * 0.5 + 0.25, size[2] / 2 + 0.01]}>
                        <planeGeometry args={[size[0] * 0.8, 0.2]} />
                        <meshBasicMaterial color="#ffffff" />
                    </mesh>
                ))}
            </group>
        </mesh>
    );
}

function City() {
    const buildings = useMemo(() => {
        const items = [];
        for (let i = 0; i < 40; i++) {
            const x = (Math.random() - 0.5) * 40;
            // Keep a path clear in the middle
            if (Math.abs(x) < 3) continue;

            const z = -i * 3;
            const height = Math.random() * 5 + 2;
            const width = Math.random() * 2 + 1;
            const depth = Math.random() * 2 + 1;
            const color = Math.random() > 0.5 ? '#ff00ff' : '#00ffff';
            items.push({ position: [x, height / 2, z] as [number, number, number], size: [width, height, depth] as [number, number, number], color });
        }
        return items;
    }, []);

    const scroll = useScroll();
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Move city towards camera based on scroll
            // Infinite loop effect
            const offset = scroll.offset * 100;
            groupRef.current.position.z = offset % 20;
        }
    });

    return (
        <group ref={groupRef}>
            {buildings.map((b, i) => (
                <Building key={i} position={b.position} size={b.size} color={b.color} />
            ))}
            {/* Floor Grid */}
            <gridHelper args={[100, 50, 0xff00ff, 0x00ffff]} position={[0, 0, -50]} />
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, -50]}>
                <planeGeometry args={[100, 100]} />
                <meshBasicMaterial color="#050505" />
            </mesh>
        </group>
    );
}

function FloatingText({ text, position, size = 1, color = "#ffffff" }: { text: string; position: [number, number, number]; size?: number; color?: string }) {
    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
                position={position}
                fontSize={size}
                color={color}
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </Float>
    );
}

function Scene({ data }: { data: PortfolioData }) {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
            <pointLight position={[-10, 10, -10]} intensity={1} color="#00ffff" />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <ScrollControls pages={5} damping={0.3}>
                <City />
                <Scroll>
                    {/* 3D Text elements placed along the path */}
                    <FloatingText text={data.name} position={[0, 3, -5]} size={1.5} color="#00ffff" />
                    <FloatingText text={data.role} position={[0, 1.5, -5]} size={0.8} color="#ff00ff" />
                </Scroll>
                <Scroll html style={{ width: '100%', height: '100%' }}>
                    <div className="w-full h-full">
                        {/* HTML Content Overlay */}
                        <section className="h-screen flex items-center justify-center pointer-events-none">
                            {/* Hero Section handled by 3D text */}
                        </section>

                        <section className="min-h-screen flex items-center justify-center p-10">
                            <div className="bg-black/80 backdrop-blur-md border border-cyan-500/30 p-8 rounded-2xl max-w-4xl w-full text-cyan-50 shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center gap-3">
                                    <Code2 className="w-8 h-8 text-cyan-400" /> Skills
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {data.skills.map((skill, i) => (
                                        <span key={i} className="px-4 py-2 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-300 hover:bg-cyan-500/20 transition-colors">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="min-h-screen flex items-center justify-center p-10">
                            <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 p-8 rounded-2xl max-w-4xl w-full text-purple-50 shadow-[0_0_30px_rgba(255,0,255,0.2)]">
                                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 flex items-center gap-3">
                                    <Terminal className="w-8 h-8 text-purple-400" /> Experience
                                </h2>
                                <div className="space-y-8">
                                    {data.experience.map((exp, i) => (
                                        <div key={i} className="border-l-2 border-purple-500/50 pl-6 relative">
                                            <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2 shadow-[0_0_10px_#a855f7]" />
                                            <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                                            <p className="text-purple-300 text-lg mb-2">{exp.company} | {exp.startDate} - {exp.endDate}</p>
                                            <p className="text-gray-300">{exp.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section className="min-h-screen flex items-center justify-center p-10">
                            <div className="bg-black/80 backdrop-blur-md border border-pink-500/30 p-8 rounded-2xl max-w-4xl w-full text-pink-50 shadow-[0_0_30px_rgba(236,72,153,0.2)]">
                                <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500 flex items-center gap-3">
                                    <Cpu className="w-8 h-8 text-pink-400" /> Projects
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {data.projects.map((project, i) => (
                                        <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors group">
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">{project.name}</h3>
                                            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, j) => (
                                                    <span key={j} className="text-xs px-2 py-1 bg-pink-500/10 rounded text-pink-300">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </Scroll>
            </ScrollControls>
        </>
    );
}

export default function NeonCityPage({ data }: NeonCityPageProps) {
    const defaultData: PortfolioData = {
        name: "Alex Cyber",
        role: "Full Stack Developer",
        email: "alex@example.com",
        phone: "+1 234 567 890",
        bio: "Building the future of the web with neon-infused code.",
        skills: ["React", "Three.js", "Next.js", "TypeScript", "Node.js", "WebGL"],
        experience: [
            {
                position: "Senior Developer",
                company: "CyberCorp",
                startDate: "2023",
                endDate: "Present",
                description: "Leading the frontend team in building immersive 3D experiences.",
                highlights: ["Built 3D engine", "Reduced load time by 50%"]
            },
            {
                position: "Web Developer",
                company: "FutureTech",
                startDate: "2021",
                endDate: "2023",
                description: "Developed high-performance web applications using modern stacks.",
                highlights: ["Implemented CI/CD", "Mentored juniors"]
            }
        ],
        education: [
            {
                school: "Tech University",
                degree: "BS Computer Science",
                field: "Computer Science",
                startDate: "2017",
                endDate: "2021"
            }
        ],
        projects: [
            { name: "Neon Dashboard", description: "A futuristic dashboard for managing cyber assets.", technologies: ["React", "D3.js"] },
            { name: "Virtual City", description: "Procedural city generation in the browser.", technologies: ["Three.js", "WebGL"] }
        ],
        links: { github: "github.com", linkedin: "linkedin.com" }
    };

    const displayData = data || defaultData;

    return (
        <div className="w-full h-screen bg-black text-white overflow-hidden">
            <Canvas shadows camera={{ position: [0, 2, 5], fov: 75 }}>
                <Scene data={displayData} />
            </Canvas>

            {/* Overlay UI for contact/links */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start pointer-events-none">
                <div className="pointer-events-auto">
                    <h1 className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        NEON<span className="text-white">CITY</span>
                    </h1>
                </div>
                <div className="flex gap-4 pointer-events-auto">
                    {displayData.links.github && (
                        <a href={`https://${displayData.links.github}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {displayData.links.linkedin && (
                        <a href={`https://${displayData.links.linkedin}`} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    )}
                    <a href={`mailto:${displayData.email}`} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
