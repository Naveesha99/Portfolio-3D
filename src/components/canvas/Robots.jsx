import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Robots = () => {
  const robot = useGLTF("./robot/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={1} />
      <primitive 
      object={robot.scene}
      scale={4}
      position={[0, -4, -1.5]} 
      rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const RobotCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Robots />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RobotCanvas;
