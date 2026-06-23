"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TorusKnot, MeshDistortMaterial, Environment, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      // Scale up slightly on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <TorusKnot 
        ref={meshRef} 
        args={[1.2, 0.4, 256, 64]} 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial 
          color="#06b6d4" 
          attach="material" 
          distort={0.4} 
          speed={3} 
          roughness={0.05}
          metalness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </TorusKnot>
    </Float>
  );
}

export default function InteractiveTorus() {
  return (
    <div className="absolute inset-0 z-[-1] w-full h-full opacity-30 md:opacity-50">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#14b8a6" />
        <AnimatedShape />
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
