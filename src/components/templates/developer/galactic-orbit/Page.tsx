'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Float, Html, useCursor } from '@react-three/drei';
import { useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowLeft } from 'lucide-react';

import { PortfolioData } from '../../types';

interface GalacticOrbitPageProps {
    data?: PortfolioData;
}

// --- 3D Components ---

function Sun({ onClick }: { onClick: () => void }) {
    const [hovered, setHover] = useState(false);
    useCursor(hovered);

    return (
        <mesh
            onClick={onClick}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial
                emissive="#fbbf24"
                emissiveIntensity={2}
                color="#f59e0b"
                roughness={0.2}
            />
            <pointLight intensity={2} distance={20} decay={2} color="#fbbf24" />
        </mesh>
    );
}

function Planet({ position, size, color, label, onClick, orbitSpeed = 0.5, orbitRadius = 5 }: { position: [number, number, number], size: number, color: string, label: string, onClick: () => void, orbitSpeed?: number, orbitRadius?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHover] = useState(false);
    useCursor(hovered);

    useFrame(({ clock }) => {
        if (meshRef.current) {
            // Orbit logic
            const t = clock.getElapsedTime() * orbitSpeed;
            meshRef.current.position.x = Math.cos(t) * orbitRadius;
            meshRef.current.position.z = Math.sin(t) * orbitRadius;

            // Self rotation
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <group>
            {/* Orbit Path */}
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <ringGeometry args={[orbitRadius - 0.05, orbitRadius + 0.05, 64]} />
                <meshBasicMaterial color="#ffffff" opacity={0.1} transparent side={THREE.DoubleSide} />
            </mesh>

            <mesh
                ref={meshRef}
                position={position} // Initial position, updated by useFrame
                onClick={(e) => { e.stopPropagation(); onClick(); }}
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} roughness={0.5} metalness={0.2} />
                <Html distanceFactor={15}>
                    <div className={`px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs whitespace-nowrap transition-opacity ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                        {label}
                    </div>
                </Html>
            </mesh>
        </group>
    );
}

function Scene({ data, onSelect }: { data: PortfolioData, onSelect: (section: string) => void }) {
    return (
        <>
            <ambientLight intensity={0.2} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            {/* Central Sun - Profile */}
            <Sun onClick={() => onSelect('profile')} />
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                <Text position={[0, 3.5, 0]} fontSize={0.5} color="#fbbf24" anchorX="center" anchorY="middle">
                    {data.name}
                </Text>
                <Text position={[0, 3, 0]} fontSize={0.3} color="#ffffff" anchorX="center" anchorY="middle">
                    {data.role}
                </Text>
            </Float>

            {/* Planets */}
            <Planet
                position={[5, 0, 0]}
                size={0.8}
                color="#3b82f6"
                label="Skills"
                onClick={() => onSelect('skills')}
                orbitRadius={6}
                orbitSpeed={0.3}
            />
            <Planet
                position={[8, 0, 0]}
                size={1.2}
                color="#ef4444"
                label="Projects"
                onClick={() => onSelect('projects')}
                orbitRadius={10}
                orbitSpeed={0.2}
            />
            <Planet
                position={[11, 0, 0]}
                size={1}
                color="#10b981"
                label="Experience"
                onClick={() => onSelect('experience')}
                orbitRadius={14}
                orbitSpeed={0.15}
            />
        </>
    );
}

// --- UI Overlay Components ---

function InfoPanel({ title, children, onClose }: { title: string, children: React.ReactNode, onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute right-0 top-0 h-full w-full md:w-[500px] bg-black/80 backdrop-blur-xl border-l border-white/10 p-8 overflow-y-auto z-20"
        >
            <button onClick={onClose} className="mb-6 flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" /> Back to Orbit
            </button>
            <h2 className="text-4xl font-bold text-white mb-8">{title}</h2>
            {children}
        </motion.div>
    );
}

export default function GalacticOrbitPage({ data }: GalacticOrbitPageProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const defaultData: PortfolioData = {
        name: "Cosmic Coder",
        role: "Space Engineer",
        email: "space@example.com",
        phone: "",
        bio: "Exploring the universe of code.",
        skills: ["React", "Three.js", "Astronomy", "Physics"],
        experience: [
            {
                position: "Mission Specialist",
                company: "NASA",
                startDate: "2020",
                endDate: "Present",
                description: "Developing control systems.",
                highlights: ["Landed rover", "Optimized fuel"]
            }
        ],
        education: [
            {
                school: "Space Academy",
                degree: "PhD Astrophysics",
                field: "Astrophysics",
                startDate: "2015",
                endDate: "2019"
            }
        ],
        projects: [
            { name: "Mars Rover UI", description: "Interface for controlling rovers.", technologies: ["React", "WebSockets"] }
        ],
        links: { github: "github.com" }
    };

    const displayData = data || defaultData;

    return (
        <div className="w-full h-screen bg-black text-white overflow-hidden relative">
            <Canvas camera={{ position: [0, 15, 20], fov: 45 }}>
                <OrbitControls enableZoom={true} maxDistance={40} minDistance={5} />
                <Scene data={displayData} onSelect={setActiveSection} />
            </Canvas>

            {/* UI Overlays */}
            <AnimatePresence>
                {activeSection === 'profile' && (
                    <InfoPanel title="Profile" onClose={() => setActiveSection(null)}>
                        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{displayData.bio}</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-400">
                                <Mail className="w-5 h-5" /> {displayData.email}
                            </div>
                            <div className="flex gap-4 mt-6">
                                {displayData.links.github && (
                                    <a href={`https://${displayData.links.github}`} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                )}
                                {displayData.links.linkedin && (
                                    <a href={`https://${displayData.links.linkedin}`} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2">
                                        <Linkedin className="w-4 h-4" /> LinkedIn
                                    </a>
                                )}
                            </div>
                        </div>
                    </InfoPanel>
                )}

                {activeSection === 'skills' && (
                    <InfoPanel title="Skills" onClose={() => setActiveSection(null)}>
                        <div className="flex flex-wrap gap-3">
                            {displayData.skills.map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </InfoPanel>
                )}

                {activeSection === 'projects' && (
                    <InfoPanel title="Projects" onClose={() => setActiveSection(null)}>
                        <div className="space-y-6">
                            {displayData.projects.map((project, i) => (
                                <div
                                    key={i}
                                    className={`bg-white/5 p-6 rounded-xl border border-white/10 ${project.url || project.github ? 'cursor-pointer hover:border-white/30' : ''}`}
                                    onClick={() => {
                                        const url = project.url || project.github;
                                        if (url) window.open(url, '_blank', 'noopener,noreferrer');
                                    }}
                                >
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, j) => (
                                            <span key={j} className="text-xs px-2 py-1 bg-white/10 rounded text-gray-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InfoPanel>
                )}

                {activeSection === 'experience' && (
                    <InfoPanel title="Experience" onClose={() => setActiveSection(null)}>
                        <div className="space-y-8">
                            {displayData.experience.map((exp, i) => (
                                <div key={i} className="relative pl-6 border-l-2 border-emerald-500/30">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-2" />
                                    <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                                    <p className="text-emerald-400 text-sm mb-2">{exp.company} | {exp.startDate} - {exp.endDate}</p>
                                    <p className="text-gray-400">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </InfoPanel>
                )}
            </AnimatePresence>

            {/* Instructions Overlay */}
            {!activeSection && (
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
                    <p className="text-white/50 text-sm animate-pulse">Click on planets to explore</p>
                </div>
            )}
        </div>
    );
}
