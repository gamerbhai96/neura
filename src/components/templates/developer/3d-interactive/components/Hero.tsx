'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text, Stars, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { PortfolioData } from '../../../types';

export default function Hero({ data }: { data: PortfolioData }) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            // Gentle rotation based on mouse position
            const { x, y } = state.mouse;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.5, 0.1);
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.5, 0.1);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <color attach="background" args={['#050505']} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="cyan" intensity={0.5} />

            <group ref={groupRef}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        font="/fonts/Inter-Bold.ttf" // Note: This assumes font availability, might need fallback or standard font
                        fontSize={1.5}
                        color="white"
                        anchorX="center"
                        anchorY="middle"
                        position={[0, 1, 0]}
                    >
                        {data.name}
                        <meshStandardMaterial color="white" toneMapped={false} />
                    </Text>

                    <Text
                        fontSize={0.6}
                        color="#4fd1c5"
                        anchorX="center"
                        anchorY="middle"
                        position={[0, -0.5, 0]}
                    >
                        {data.role}
                        <meshStandardMaterial color="#4fd1c5" emissive="#4fd1c5" emissiveIntensity={0.5} toneMapped={false} />
                    </Text>
                </Float>

                {/* Geometric shapes floating around */}
                <Float speed={4} rotationIntensity={1} floatIntensity={2} position={[-4, 2, -2]}>
                    <mesh>
                        <icosahedronGeometry args={[0.8, 0]} />
                        <meshStandardMaterial color="#ff0080" wireframe />
                    </mesh>
                </Float>

                <Float speed={3} rotationIntensity={1} floatIntensity={2} position={[4, -2, -1]}>
                    <mesh>
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial color="#00ff00" wireframe />
                    </mesh>
                </Float>

                <Float speed={5} rotationIntensity={2} floatIntensity={1} position={[-3, -3, 1]}>
                    <mesh>
                        <torusKnotGeometry args={[0.5, 0.2, 100, 16]} />
                        <meshStandardMaterial color="#00ffff" wireframe />
                    </mesh>
                </Float>
            </group>
        </>
    );
}
