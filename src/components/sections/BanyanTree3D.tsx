import { useFrame } from "@react-three/fiber";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import { MotionValue } from "framer-motion";
import { Html } from "@react-three/drei";

export function BanyanTreeModel({ progress }: { progress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null);
  const plantRef = useRef<THREE.Group>(null);
  const rootsRef = useRef<THREE.Group>(null);
  const trunkRef = useRef<THREE.Group>(null);
  const branchesRef = useRef<THREE.Group>(null);
  const leavesRef = useRef<THREE.Group>(null);

  // Mascot Speech State
  const [speechText, setSpeechText] = useState("Hi! I'm Banyara!");
  const [bob, setBob] = useState(0);

  // Materials
  const trunkMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#5c4033", roughness: 0.9 }), []);
  const leafMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#4a6b36", roughness: 0.8 }), []);
  const sproutMat = useMemo(() => new THREE.MeshStandardMaterial({ color: "#889d79", roughness: 0.6 }), []);

  useFrame(() => {
    const p = progress.get();

    // 1. Plant (0 - 0.15)
    const pPlant = Math.max(0, Math.min(1, p / 0.15));
    if (plantRef.current) {
      plantRef.current.scale.setScalar(pPlant);
      plantRef.current.visible = pPlant > 0 && p < 0.4; // Hide once trunk is big
    }

    // 2. Roots (0.15 - 0.3)
    const pRoots = Math.max(0, Math.min(1, (p - 0.15) / 0.15));
    if (rootsRef.current) {
      rootsRef.current.scale.set(pRoots, pRoots, pRoots);
    }

    // 3. Trunk (0.3 - 0.5)
    const pTrunk = Math.max(0, Math.min(1, (p - 0.3) / 0.2));
    if (trunkRef.current) {
      trunkRef.current.scale.set(pTrunk, pTrunk, pTrunk);
    }

    // 4. Branches & Aerial Roots (0.5 - 0.75)
    const pBranches = Math.max(0, Math.min(1, (p - 0.5) / 0.25));
    if (branchesRef.current) {
      branchesRef.current.scale.setScalar(pBranches);
    }

    // 5. Leaves (0.75 - 1.0)
    const pLeaves = Math.max(0, Math.min(1, (p - 0.75) / 0.25));
    if (leavesRef.current) {
      leavesRef.current.scale.setScalar(pLeaves);
    }

    // Overall ambient rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = p * Math.PI * 0.5; // Rotate 90 degrees over the scroll
      groupRef.current.position.y = -2 - (p * 1); // Move down slightly as it grows big
    }

    // Mascot Talking Animation & Text Logic
    setBob(Math.sin(p * 50) * 10); // Bob up and down as you scroll
    if (p < 0.15) setSpeechText("A journey starts small...");
    else if (p < 0.3) setSpeechText("Roots build our foundation.");
    else if (p < 0.5) setSpeechText("Growing stronger every day!");
    else if (p < 0.75) setSpeechText("Branching out to explore!");
    else setSpeechText("Endless possibilities!");
  });

  return (
    <group ref={groupRef}>
      {/* 1. The Tiny Plant */}
      <group ref={plantRef} position={[0, 0, 0]}>
        <mesh position={[0, 0.2, 0]} material={sproutMat}>
          <cylinderGeometry args={[0.02, 0.05, 0.4, 8]} />
        </mesh>
        <mesh position={[0.1, 0.4, 0]} rotation={[0, 0, -0.5]} material={sproutMat}>
          <sphereGeometry args={[0.1, 8, 8]} />
        </mesh>
        <mesh position={[-0.1, 0.3, 0]} rotation={[0, 0, 0.5]} material={sproutMat}>
          <sphereGeometry args={[0.08, 8, 8]} />
        </mesh>
      </group>

      {/* 2. The Roots (growing down into the floor) */}
      <group ref={rootsRef} position={[0, 0, 0]}>
        <mesh position={[0.2, -0.5, 0]} rotation={[0, 0, 0.3]} material={trunkMat}>
          <cylinderGeometry args={[0.05, 0.1, 1, 8]} />
        </mesh>
        <mesh position={[-0.2, -0.4, 0.2]} rotation={[0.2, 0, -0.3]} material={trunkMat}>
          <cylinderGeometry args={[0.05, 0.1, 0.8, 8]} />
        </mesh>
        <mesh position={[0, -0.6, -0.2]} rotation={[-0.2, 0, 0]} material={trunkMat}>
          <cylinderGeometry args={[0.08, 0.15, 1.2, 8]} />
        </mesh>
      </group>

      {/* 3. The Trunk */}
      <group ref={trunkRef}>
        {/* Main core */}
        <mesh position={[0, 1.5, 0]} material={trunkMat} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.5, 3, 16]} />
        </mesh>
        {/* Twisted secondary trunk parts (Banyan style) */}
        <mesh position={[0.15, 1.5, 0.15]} rotation={[0, 0, 0.05]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.15, 0.25, 3, 8]} />
        </mesh>
        <mesh position={[-0.15, 1.5, -0.15]} rotation={[0.05, 0, -0.05]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.2, 0.3, 3, 8]} />
        </mesh>
      </group>

      {/* 4. Branches & Aerial Roots */}
      <group ref={branchesRef} position={[0, 2.5, 0]}>
        {/* Branch 1 */}
        <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.8]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.1, 0.2, 2.5, 8]} />
        </mesh>
        {/* Aerial Root dropping from Branch 1 */}
        <mesh position={[1.8, -0.5, 0]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 2.5, 8]} />
        </mesh>

        {/* Branch 2 */}
        <mesh position={[-1, 0.8, 0.5]} rotation={[0.2, 0, 0.7]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.15, 0.25, 2.8, 8]} />
        </mesh>
        {/* Aerial Root 2 */}
        <mesh position={[-1.8, -0.2, 0.8]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 3, 8]} />
        </mesh>

        {/* Branch 3 */}
        <mesh position={[0.5, 1, -1]} rotation={[-0.6, 0.5, -0.4]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.1, 0.2, 2.5, 8]} />
        </mesh>
        <mesh position={[1, 0, -1.8]} material={trunkMat} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 2.5, 8]} />
        </mesh>
      </group>

      {/* 5. The Canopy (Leaves) */}
      <group ref={leavesRef} position={[0, 2.5, 0]}>
        {/* Main center canopy */}
        <mesh position={[0, 1.5, 0]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[1.5, 16, 16]} />
        </mesh>
        {/* Canopy 1 */}
        <mesh position={[1.8, 1.5, 0]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[1.2, 16, 16]} />
        </mesh>
        {/* Canopy 2 */}
        <mesh position={[-1.8, 1.8, 0.8]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[1.4, 16, 16]} />
        </mesh>
        {/* Canopy 3 */}
        <mesh position={[0.8, 2, -1.8]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[1.3, 16, 16]} />
        </mesh>
        {/* Mid-level Canopies */}
        <mesh position={[-1, 0.5, -1]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[1.0, 16, 16]} />
        </mesh>
        <mesh position={[1.2, 0.5, 1]} material={leafMat} castShadow receiveShadow>
          <sphereGeometry args={[0.9, 16, 16]} />
        </mesh>
      </group>

      {/* 6. The Mascot (Inside the 3D Scene using HTML Overlay) */}
      <group position={[-2.5, 0, 2]}>
        <Html center transform zIndexRange={[100, 0]}>
          <div className="flex flex-col items-center pointer-events-none" style={{ transform: `translateY(${bob}px)` }}>
            {/* Speech Bubble */}
            <div className="bg-white px-4 py-3 rounded-2xl shadow-xl mb-4 text-[#2c3d28] font-bold text-sm md:text-base relative w-max max-w-[200px] text-center transition-all duration-300">
              {speechText}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 shadow-md"></div>
            </div>
            
            {/* Mascot Image */}
            <img 
              src="/banyara-mascot.png" 
              alt="Banyara Mascot" 
              className="w-48 md:w-64 h-auto mix-blend-multiply drop-shadow-2xl"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </Html>
      </group>
    </group>
  );
}
