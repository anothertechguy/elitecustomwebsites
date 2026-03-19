import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ScrollControls, useScroll, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function GlassExplosion({ count = 150, scrollProgress }: { count?: number, scrollProgress: React.MutableRefObject<number> }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useRef(new THREE.Object3D());
  const particles = useRef(
    Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 3,
      z: (Math.random() - 0.5) * 2,
      scale: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
      colorType: Math.floor(Math.random() * 3), // 0: Cyan, 1: Magenta, 2: Peach
    }))
  );

  const hyperCyan = new THREE.Color("#00BFFF");
  const hyperMagenta = new THREE.Color("#FF00FF");
  const hyperPeach = new THREE.Color("#FF6633");
  const colorArray = new Float32Array(count * 3);

  useFrame(() => {
    if (!mesh.current) return;
    const scroll = scrollProgress.current;
    
    // Explosion starts sooner (scroll goes 0.1 to 0.4)
    const explosionFactor = Math.max(0, Math.min(1, (scroll - 0.1) / 0.3));
    
    particles.current.forEach((particle, i) => {
      // Particles burst dramatically towards the camera (+Z) and expand outwards
      dummy.current.position.set(
        particle.x * (1 + explosionFactor * 10),
        particle.y * (1 + explosionFactor * 10),
        particle.z * (1 + explosionFactor * 5) + explosionFactor * 10
      );
      dummy.current.rotation.set(
        particle.x * explosionFactor * 5,
        particle.y * explosionFactor * 5,
        particle.z * explosionFactor * 5
      );
      const currentScale = particle.scale * (1 + explosionFactor * 2);
      dummy.current.scale.set(currentScale, currentScale, currentScale);
      dummy.current.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.current.matrix);

      const color = particle.colorType === 0 ? hyperCyan : particle.colorType === 1 ? hyperMagenta : hyperPeach;
      color.toArray(colorArray, i * 3);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
    if (mesh.current.instanceColor) mesh.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]} position={[0, 0, 0]}>
      <icosahedronGeometry args={[0.2, 1]}>
        <instancedBufferAttribute attach="attributes-color" args={[colorArray, 3]} />
      </icosahedronGeometry>
      <meshPhysicalMaterial 
        vertexColors 
        transmission={0.95} /* Glass effect */
        opacity={1}
        metalness={0.1}
        roughness={0.05}
        ior={1.5}
        thickness={0.5}
        clearcoat={1}
      />
    </instancedMesh>
  );
}

function LaptopScene() {
  const scroll = useScroll();
  const group = useRef<THREE.Group>(null);
  const lid = useRef<THREE.Mesh>(null);
  const screen = useRef<THREE.Mesh>(null);
  const scrollProgress = useRef(0);
  
  const logoTexture = useTexture('/logo.png');

  useFrame((state) => {
    if (!group.current || !lid.current || !screen.current) return;
    
    const offset = scroll.offset;
    scrollProgress.current = offset;

    // Stage 1: Laptop floats and opens fast (0 to 0.1)
    const openProgress = Math.min(1, offset / 0.1);
    lid.current.rotation.x = THREE.MathUtils.lerp(Math.PI / 2, -0.2, openProgress);
    
    // Stage 2: Laptop starts breaking apart/exploding rapidly (0.1 to 0.4)
    const explodeProgress = Math.max(0, Math.min(1, (offset - 0.1) / 0.3));
    group.current.position.y = THREE.MathUtils.lerp(0, -1.5, explodeProgress);
    group.current.rotation.y = THREE.MathUtils.lerp(0, Math.PI * 1.5, explodeProgress);

    // Camera cinematic dive straight into the matrix screen (0.3 to 1.0)
    const diveProgress = Math.max(0, Math.min(1, (offset - 0.3) / 0.7));
    state.camera.position.z = THREE.MathUtils.lerp(5, 0.4, diveProgress);
    state.camera.position.y = THREE.MathUtils.lerp(1, 0, diveProgress);
    
    // Fade out laptop parts
    const opacity = 1 - diveProgress * 1.5;
    (group.current as any).children.forEach((child: any) => {
      if (child.name !== 'Screen' && child.material && child.name !== 'Particles') {
        child.material.transparent = true;
        child.material.opacity = Math.max(0, opacity);
      }
    });
  });

  const materialProps = {
    color: "#0a0a0a",
    roughness: 0.1,
    metalness: 0.9,
    clearcoat: 1,
  };

  return (
    <group ref={group}>
      <Float rotationIntensity={0.2} floatIntensity={0.2} speed={1.5}>
        {/* Base */}
        <group position={[0, -0.1, 0]} name="Base">
          {/* Main Body */}
          <mesh>
            <boxGeometry args={[3, 0.1, 2]} />
            <meshPhysicalMaterial {...materialProps} color="#E5E7EB" metalness={0.6} roughness={0.2} clearcoat={1} />
          </mesh>
          
          {/* Keyboard Indentation */}
          <mesh position={[0, 0.05, 0.2]}>
            <boxGeometry args={[2.8, 0.01, 1.2]} />
            <meshPhysicalMaterial color="#D1D5DB" roughness={0.8} />
          </mesh>
          
          {/* Stylized Keys */}
          {Array.from({ length: 50 }).map((_, i) => (
            <mesh key={i} position={[(i % 10) * 0.26 - 1.17, 0.055, Math.floor(i / 10) * 0.22 - 0.24]}>
              <boxGeometry args={[0.2, 0.02, 0.18]} />
              <meshStandardMaterial color="#FFFFFF" roughness={0.5} />
            </mesh>
          ))}
          
          {/* Trackpad */}
          <mesh position={[0, 0.05, 0.85]}>
            <boxGeometry args={[0.8, 0.01, 0.5]} />
            <meshPhysicalMaterial color="#E5E7EB" roughness={0.4} />
          </mesh>
        </group>
        
        {/* Lid */}
        <group position={[0, -0.05, -1]}>
          <mesh ref={lid} position={[0, 1, 1]} rotation={[Math.PI / 2, 0, 0]} name="Lid">
            <boxGeometry args={[3, 2, 0.1]} />
            <meshPhysicalMaterial {...materialProps} color="#E5E7EB" metalness={0.6} roughness={0.2} clearcoat={1} />
            
            {/* Screen Logo / Matrix */}
            <mesh ref={screen} position={[0, 0, 0.051]} name="Screen">
              <planeGeometry args={[2.9, 1.9]} />
              {/* Fallback dark screen while turning on */}
              <meshBasicMaterial color="#111" />
            </mesh>
          </mesh>
        </group>
      </Float>
      
      <group name="Particles">
        <GlassExplosion scrollProgress={scrollProgress} count={200} />
      </group>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[175vh] bg-pearl relative">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <Canvas camera={{ position: [0, 1, 5], fov: 45 }} dpr={[1, 2]}>
          <color attach="background" args={['#FFFFFF']} />
          <ambientLight intensity={1.5} />
          <Environment preset="city" />
          <spotLight position={[10, 10, 10]} angle={0.25} penumbra={1} intensity={2} color="#FFFFFF" castShadow />
          <spotLight position={[-10, 10, 10]} angle={0.25} penumbra={1} intensity={1} color="#FF00FF" />
          <spotLight position={[0, -10, 5]} angle={0.5} penumbra={1} intensity={1.5} color="#00BFFF" />
          
          <ScrollControls pages={1.75} damping={0.15}>
            <LaptopScene />
          </ScrollControls>
          
          <EffectComposer>
            <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={1.5} />
          </EffectComposer>
        </Canvas>
        
        {/* Typography Overlay */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-8 z-10 mix-blend-multiply">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground text-center drop-shadow-md translate-y-[-20vh]">
            Digital Excellence.
          </h1>
          <p className="text-muted-foreground mt-6 text-xl md:text-2xl font-body max-w-2xl text-center tracking-wide">
            We architect mind-blowing high-tech digital experiences for the world's most exclusive visionaries.
          </p>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-foreground/50 animate-bounce">
          <span className="text-sm font-mono-ui tracking-widest uppercase mb-2">Scroll to Execute</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </div>
      </div>
    </div>
  );
}
