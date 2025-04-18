// src/components/CryptoHome.js
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const SmallBall = ({ position }) => {
  return (
    <Sphere args={[0.3, 32, 32]} position={position}>
      <MeshWobbleMaterial color="#ffcc00" speed={Math.random() * 2} factor={1} />
    </Sphere>
  );
};


const TryWork = () => {

  // Generating multiple small balls at random positions
  const smallBalls = Array.from({ length: 10 }, () => [
    (Math.random() - 0.5) * 8, // X position
    (Math.random() - 0.5) * 8, // Y position
    (Math.random() - 0.5) * 8, // Z position
  ]);





  return (


    <div className="relative w-full h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* 3D Scene */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <Suspense fallback={null}>
          {/* Background Stars */}
          <Stars radius={300} depth={50} count={5000} factor={7} saturation={0} fade speed={1} />

          {/* Rotating Globe */}
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={2} />

          <Sphere args={[2.5, 64, 64]} position={[0, 0, 0]}>
            <MeshWobbleMaterial color="#00ccff" speed={2} factor={0.6} />
          </Sphere>

          {/* Floating Small Balls */}
          {smallBalls.map((pos, index) => (
            <SmallBall key={index} position={pos} />
          ))}
        </Suspense>
      </Canvas>

      {/* Floating Text */}
      <motion.h1
        className="text-5xl font-extrabold text-white text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to CryptoSphere
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400 mt-4 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Trade cryptocurrencies with real-time data and insights.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        className="mt-8 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-3 px-6 rounded-full shadow-lg z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Trading
      </motion.button>
    </div>
);
}

export default TryWork