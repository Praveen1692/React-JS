// BearingAnimation.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const UsersCard = () => {
  const mountRef = useRef(null);
  const bearingRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x1a1a1a);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create outer ring
    const outerRingGeometry = new THREE.TorusGeometry(5, 0.5, 16, 50);
    const outerRingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x303030,
      metalness: 0.9,
      roughness: 0.3,
    });
    const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
    scene.add(outerRing);

    // Create ball bearings
    const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const ballMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x808080,
      metalness: 1,
      roughness: 0.1,
    });

    const balls = [];
    const ballCount = 12;
    const radius = 5;

    for (let i = 0; i < ballCount; i++) {
      const angle = (i / ballCount) * Math.PI * 2;
      const ball = new THREE.Mesh(ballGeometry, ballMaterial);
      
      ball.position.x = Math.cos(angle) * radius;
      ball.position.y = Math.sin(angle) * radius;
      
      scene.add(ball);
      balls.push(ball);
    }

    // Create inner ring
    const innerRingGeometry = new THREE.TorusGeometry(3.5, 0.3, 16, 50);
    const innerRing = new THREE.Mesh(innerRingGeometry, outerRingMaterial);
    scene.add(innerRing);

    // Camera position
    camera.position.z = 15;

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // GSAP Animation
    const animateBearing = () => {
      gsap.to(outerRing.rotation, {
        z: Math.PI * 2,
        duration: 5,
        repeat: -1,
        ease: "linear"
      });

      balls.forEach((ball, index) => {
        gsap.to(ball.position, {
          x: Math.cos((index / ballCount) * Math.PI * 2 + Math.PI * 2) * radius,
          y: Math.sin((index / ballCount) * Math.PI * 2 + Math.PI * 2) * radius,
          duration: 5,
          repeat: -1,
          ease: "linear"
        });
      });
    };

    animateBearing();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <motion.div 
      ref={mountRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: '100%', height: '100vh' }}
    >
      <div className="absolute top-4 left-4 text-white z-10">
        <h1 className="text-2xl font-bold mb-2">3D Ball Bearing</h1>
        <p>Rotate and zoom using mouse controls</p>
      </div>
    </motion.div>
  );
};

export default UsersCard;