import { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BrainParticlesProps {
    isDarkMode: boolean;
}

const BrainParticles = ({ isDarkMode }: BrainParticlesProps) => {
    const points = useRef<THREE.Points>(null);
    const scrollRef = useRef(0);

    // Track scroll position
    useEffect(() => {
        const handleScroll = () => {
            scrollRef.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const count = 4000;
    const particlesPosition = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const originalPositions = new Float32Array(count * 3);
        const randoms = new Float32Array(count); // Random values for noise offsets

        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const r = 1.5 + Math.random() * 0.5;

            let x = r * Math.sin(phi) * Math.cos(theta);
            let y = (r * Math.sin(phi) * Math.sin(theta)) * 0.8;
            let z = r * Math.cos(phi);

            x += Math.sign(x) * 0.2;

            positions.set([x, y, z], i * 3);
            originalPositions.set([x, y, z], i * 3);
            randoms[i] = Math.random();

            colors.set([1, 1, 1], i * 3);
        }

        return { positions, colors, originalPositions, randoms };
    }, []);

    useFrame((state) => {
        if (!points.current) return;

        const time = state.clock.elapsedTime;
        const scrollY = scrollRef.current;
        const viewportHeight = window.innerHeight;

        // Expansion factor (0 to 1)
        const expansionFactor = Math.max(0, Math.min(1, (scrollY) / viewportHeight));

        // Deep scroll factor (0 to 1, starts after expansion)
        const deepScrollFactor = Math.max(0, (scrollY - viewportHeight) / (viewportHeight * 3));

        // Rotation
        points.current.rotation.y += 0.001 + (deepScrollFactor * 0.001); // Spin faster as you go deeper
        points.current.rotation.z += 0.0005;

        const positions = points.current.geometry.attributes.position.array as Float32Array;
        const colors = points.current.geometry.attributes.color.array as Float32Array;
        const originals = particlesPosition.originalPositions;
        const randoms = particlesPosition.randoms;

        // Theme colors
        const darkColorBase = new THREE.Color('#4f46e5'); // Indigo
        const darkColorActive = new THREE.Color('#ff5500'); // Orange
        const lightColorBase = new THREE.Color('#0284c7'); // Sky Blue (darker for visibility)
        const lightColorActive = new THREE.Color('#db2777'); // Pink (darker for visibility)

        const baseColor = isDarkMode ? darkColorBase : lightColorBase;
        const activeColor = isDarkMode ? darkColorActive : lightColorActive;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            const x = originals[i3];
            const y = originals[i3 + 1];
            const z = originals[i3 + 2];

            const scale = 1 + expansionFactor * 4; // Expand up to 5x

            // 2. Noise/Wave Logic (Continuous movement)
            // As deepScrollFactor increases, introduce wave motion
            const waveX = Math.sin(time * 0.5 + y * 2 + randoms[i] * 5) * deepScrollFactor * 2;
            const waveY = Math.cos(time * 0.3 + x * 2 + randoms[i] * 5) * deepScrollFactor * 2;
            const waveZ = Math.sin(time * 0.4 + z * 2) * deepScrollFactor * 2;

            // Combine: Original Position * Scale + Wave Offset
            positions[i3] = x * scale + waveX;
            positions[i3 + 1] = y * scale + waveY;
            positions[i3 + 2] = z * scale + waveZ;

            // 3. Color Logic
            // Active nodes flicker
            const isActive = Math.sin(i * 0.1 + time * 2) > 0.9;
            const c = isActive ? activeColor : baseColor;

            colors[i3] = c.r;
            colors[i3 + 1] = c.g;
            colors[i3 + 2] = c.b;
        }

        points.current.geometry.attributes.position.needsUpdate = true;
        points.current.geometry.attributes.color.needsUpdate = true;
    });

    return (
        <points ref={points}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.positions.length / 3}
                    array={particlesPosition.positions}
                    itemSize={3}
                    args={[particlesPosition.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particlesPosition.colors.length / 3}
                    array={particlesPosition.colors}
                    itemSize={3}
                    args={[particlesPosition.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={isDarkMode ? 0.03 : 0.04}
                vertexColors
                transparent
                opacity={isDarkMode ? 0.8 : 0.7}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
};

interface NeuralBrainProps {
    isDarkMode?: boolean;
}

const NeuralBrain = ({ isDarkMode = true }: NeuralBrainProps) => {
    return (
        <div className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${isDarkMode ? 'opacity-60' : 'opacity-50'}`}>
            <Canvas camera={{ position: [0, 0, 6], fov: 60 }} gl={{ antialias: true }}>
                <ambientLight intensity={0.5} />
                <BrainParticles isDarkMode={isDarkMode} />
                <fog attach="fog" args={[isDarkMode ? '#000' : '#f9fafb', 5, 20]} />
            </Canvas>
        </div>
    );
};

export default NeuralBrain;
