import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function Geometry({ position, r, geometry, material }: any) {
    const mesh = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if (!mesh.current) return;
        mesh.current.rotation.x += r * 0.01;
        mesh.current.rotation.y += r * 0.01;
        // Gentle floating movement
        mesh.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    });
    return (
        <mesh ref={mesh} position={position} geometry={geometry} material={material} castShadow receiveShadow />
    );
}

const Scene = () => {
    // Create geometries and materials once
    const geometries = [
        new THREE.IcosahedronGeometry(1, 0), // Abstract tech
        new THREE.TorusGeometry(0.8, 0.2, 16, 32), // Ring/Loop (Music/DJ)
        new THREE.OctahedronGeometry(1), // Diamond shape
        new THREE.SphereGeometry(0.5, 32, 32), // Ping pong ball / Sphere
        new THREE.ConeGeometry(0.8, 1.5, 32), // Sharp/Focus
    ];

    const material = new THREE.MeshStandardMaterial({
        color: "#ffffff",
        roughness: 0.1,
        metalness: 0.8,
        emissive: "#1a1a1a",
        envMapIntensity: 1,
    });

    const accentMaterial = new THREE.MeshStandardMaterial({
        color: "#4f46e5", // Indigo/Blue
        roughness: 0.2,
        metalness: 0.9,
        emissive: "#1e1b4b",
        envMapIntensity: 1.5,
    });

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={50} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#4f46e5" />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    {/* Scattered abstract shapes */}
                    <Geometry position={[-8, 5, -5]} r={0.5} geometry={geometries[0]} material={material} />
                    <Geometry position={[9, -4, -8]} r={0.3} geometry={geometries[1]} material={accentMaterial} />
                    <Geometry position={[-5, -6, -2]} r={0.4} geometry={geometries[2]} material={material} />
                    <Geometry position={[6, 4, -4]} r={0.6} geometry={geometries[3]} material={material} />
                    <Geometry position={[0, 8, -10]} r={0.2} geometry={geometries[4]} material={accentMaterial} />

                    {/* More background elements */}
                    <Geometry position={[-12, 0, -15]} r={0.1} geometry={geometries[0]} material={material} />
                    <Geometry position={[12, 2, -12]} r={0.1} geometry={geometries[2]} material={material} />
                </Float>

                <ContactShadows resolution={1024} scale={40} blur={2} opacity={0.5} far={10} color="#000000" />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Scene;
