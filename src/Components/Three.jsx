import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Fractal Crystal Component
function CrystalCluster({ position, scale = 1, depth = 0 }) {
  const meshRef = useRef();
  const maxDepth = 2; // Limit recursion

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 * scale;
      meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const material = (
    <shaderMaterial
      uniforms={{
        uTime: { value: 0 },
      }}
      vertexShader={`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          pos.z += sin(pos.x + uTime) * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `}
      fragmentShader={`
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vec3 color = 0.5 + 0.5 * sin(vec3(vUv.x, vUv.y, 1.0) + uTime + vec3(0, 2, 4));
          gl_FragColor = vec4(color, 0.9);
        }
      `}
      transparent
    />
  );

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <tetrahedronGeometry args={[1, 0]} />
      {material}
      {depth < maxDepth && (
        <>
          <CrystalCluster position={[1, 1, 0]} scale={0.5} depth={depth + 1} />
          <CrystalCluster position={[-1, -1, 0]} scale={0.5} depth={depth + 1} />
          <CrystalCluster position={[0, 1, -1]} scale={0.5} depth={depth + 1} />
        </>
      )}
    </mesh>
  );
}

// Particle Field Component
function ParticleField() {
  const particlesRef = useRef();
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);

  // Initial positions
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame(({ mouse }) => {
    const positions = particlesRef.current.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      positions[i3] += Math.sin(i + Date.now() * 0.001) * 0.01;
      positions[i3 + 1] += Math.cos(i + Date.now() * 0.001) * 0.01;
      positions[i3] += mouse.x * 0.05; // Mouse influence
      positions[i3 + 1] += mouse.y * 0.05;
      if (Math.abs(positions[i3]) > 5) positions[i3] *= -0.9; // Bounce back
      if (Math.abs(positions[i3 + 1]) > 5) positions[i3 + 1] *= -0.9;
    }
    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial color={0x88ccff} size={0.1} transparent opacity={0.6} />
    </points>
  );
}

// Main Scene
function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }} style={{ background: '#1a1a1a' }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <CrystalCluster position={[0, 0, 0]} scale={1} depth={0} />
      <ParticleField />
    </Canvas>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Scene />
    </div>
  );
}