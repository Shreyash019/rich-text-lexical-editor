'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null);
  
  // Generate 5000 random points in a hollow sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      // Spherical distribution formula
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      // Radius spread (1.2 to 2.2) to keep center clear for text
      const r = 1.2 + Math.random(); 
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    console.log(state);
    if (ref.current) {
      // Cinematic Drift: Slow rotation on two axes
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#06b6d4" // Cyan tint
          size={0.0025}    // Bumped slightly from 0.0025 for better visibility
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}   // Bumped from 0.5 for a "shining" feel
        />
      </Points>
    </group>
  );
}

export default function InnerSpace() {
  return (
    <div className="fixed inset-0 -z-1000 bg-black pointer-events-none">
      {/* camera position [0, 0, 1] works perfectly
         because our sphere radius starts at 1.2,
         putting the viewer inside the void.
      */}
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#030303']} />
        <Stars />
      </Canvas>
    </div>
  );
}