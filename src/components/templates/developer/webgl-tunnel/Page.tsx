'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll, Stars, Sparkles, Float } from '@react-three/drei';
import * as THREE from 'three';
import { PortfolioData } from '../../types';

const mockData: PortfolioData = {
    name: "WebGL Dev",
    role: "Creative Developer",
    email: "dev@webgl.io",
    phone: "+1 555 000 0000",
    location: "The Tunnel",
    bio: "Exploring the boundaries of web performance and 3D interactivity.",
    skills: ["React", "Three.js", "Node.js", "Python", "AWS", "Docker"],
    experience: [{ company: "3D Corp", position: "Lead Dev", startDate: "2020", endDate: "Present", description: "Creating", highlights: [] }],
    education: [
        { school: "Tech Institute of Future", degree: "Master of Cybernetics", field: "Cybernetics", startDate: "2020", endDate: "2024" },
        { school: "State University", degree: "Bachelor of Systems", field: "Systems", startDate: "2016", endDate: "2020" }
    ],
    projects: [
        { name: "Project Protocol 1", description: "3D Immersive Experience", technologies: ["Next.js", "WebGL", "Solidity"] },
        { name: "Project Protocol 2", description: "Interactive Visualization", technologies: ["React", "Three.js"] },
        { name: "Project Protocol 3", description: "VR Application", technologies: ["Node.js", "WebXR"] }
    ],
    links: { github: "https://github.com", linkedin: "https://linkedin.com" }
};

function Tunnel() {
    const scroll = useScroll();
    const tunnelRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (tunnelRef.current && scroll) {
            // Move tunnel backwards to simulate forward motion
            tunnelRef.current.position.z = scroll.offset * 20;
            // Rotate tunnel for dynamic effect
            tunnelRef.current.rotation.z += delta * 0.1;
        }
    });

    return (
        <group ref={tunnelRef}>
            {/* Tunnel Rings */}
            {[...Array(20)].map((_, i) => (
                <group key={i} position={[0, 0, -i * 5]}>
                    <mesh>
                        <torusGeometry args={[4, 0.1, 16, 100]} />
                        <meshStandardMaterial color={`hsl(${i * 20}, 70%, 50%)`} emissive={`hsl(${i * 20}, 70%, 20%)`} />
                    </mesh>
                    <Sparkles count={50} scale={10} size={2} speed={0.4} opacity={0.5} color={`hsl(${i * 20}, 70%, 80%)`} />
                </group>
            ))}
        </group>
    );
}

function FloatingShapes() {
    return (
        <group>
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[2, 1, -5]}>
                    <octahedronGeometry />
                    <meshStandardMaterial color="hotpink" wireframe />
                </mesh>
            </Float>
            <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
                <mesh position={[-2, -1, -10]}>
                    <icosahedronGeometry />
                    <meshStandardMaterial color="cyan" wireframe />
                </mesh>
            </Float>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2.5}>
                <mesh position={[1.5, -2, -15]}>
                    <dodecahedronGeometry />
                    <meshStandardMaterial color="lime" wireframe />
                </mesh>
            </Float>
        </group>
    );
}

function Content() {
    return (
        <Scroll html style={{ width: '100%', color: 'white' }}>
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center p-10 text-center pointer-events-none">
                <h1 className="text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600 mb-4">
                    FUTURE
                    <br />
                    VISION
                </h1>
                <p className="text-2xl text-cyan-200 font-light tracking-widest uppercase">
                    Scroll to Dive In
                </p>
            </section>

            {/* Work Section */}
            <section className="h-screen flex items-center p-20 pointer-events-none">
                <div className="w-1/2">
                    <h2 className="text-6xl font-bold mb-8 text-purple-400">SELECTED WORKS</h2>
                    <div className="space-y-8 pointer-events-auto">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="bg-black/50 backdrop-blur-md border border-purple-500/30 p-6 rounded-xl hover:border-purple-400 transition-colors cursor-pointer">
                                <h3 className="text-2xl font-bold mb-2">Project Protocol {item}</h3>
                                <p className="text-gray-400">Next.js • WebGL • Solidity</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="h-screen flex items-center justify-end p-20 pointer-events-none">
                <div className="w-1/2 text-right">
                    <h2 className="text-6xl font-bold mb-8 text-cyan-400">CORE SYSTEMS</h2>
                    <div className="flex flex-wrap justify-end gap-4 pointer-events-auto">
                        {['React', 'Three.js', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                            <span key={skill} className="px-6 py-3 bg-cyan-900/30 border border-cyan-500/30 rounded-full text-cyan-200 font-mono hover:bg-cyan-800/50 transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section className="h-screen flex items-center p-20 pointer-events-none">
                <div className="w-1/2">
                    <h2 className="text-6xl font-bold mb-8 text-green-400">DATA UPLOAD</h2>
                    <div className="space-y-8 pointer-events-auto">
                        <div className="bg-black/50 backdrop-blur-md border border-green-500/30 p-6 rounded-xl">
                            <div className="text-sm text-green-500 font-mono mb-2">2020 - 2024</div>
                            <h3 className="text-3xl font-bold mb-1">Master of Cybernetics</h3>
                            <p className="text-gray-400">Tech Institute of Future</p>
                        </div>
                        <div className="bg-black/50 backdrop-blur-md border border-green-500/30 p-6 rounded-xl">
                            <div className="text-sm text-green-500 font-mono mb-2">2016 - 2020</div>
                            <h3 className="text-3xl font-bold mb-1">Bachelor of Systems</h3>
                            <p className="text-gray-400">State University</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="h-screen flex flex-col items-center justify-center p-10 text-center pointer-events-none">
                <h2 className="text-6xl font-bold mb-8 text-white">INITIATE CONTACT</h2>
                <div className="flex gap-6 pointer-events-auto">
                    <button className="px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                        Send Transmission
                    </button>
                    <button className="px-10 py-4 border border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                        Download Logs
                    </button>
                </div>
            </section>
        </Scroll>
    );
}

export default function WebGLTunnelPage({ data }: { data?: PortfolioData }) {
    const displayData = data || mockData;
    return (
        <div className="h-screen w-full bg-black">
            <Canvas>
                <ScrollControls pages={5} damping={0.2}>
                    <ambientLight intensity={0.2} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Tunnel />
                    <FloatingShapes />
                    <Content />
                </ScrollControls>
            </Canvas>

            {/* Overlay UI */}
            <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center pointer-events-none z-50">
                <div className="text-white font-mono text-sm">
                    SYSTEM: ONLINE
                    <br />
                    FPS: 60
                </div>
                <div className="text-white font-mono text-sm text-right">
                    COORDS: [NULL]
                    <br />
                    SECTOR: 7G
                </div>
            </div>
        </div>
    );
}
