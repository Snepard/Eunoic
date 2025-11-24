// src/App.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { Ziva } from "./components/Ziva"; 

function App() {
  return (
    // h-screen: 100vh, w-full: 100% width
    <Canvas
      shadows
      camera={{ position: [0, 0, 5], fov: 30 }}
      className="h-screen w-full bg-[#ececec]" 
    >
      <Suspense fallback={null}>
        <Environment preset="mjolnir" />
        
        {/* Position the model slightly lower to center the face */}
        <group position={[0, -1, 0]}>
            <Ziva />
        </group>

      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}

export default App;