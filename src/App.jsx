import React from "react";
import { Canvas } from "@react-three/fiber";
import MacContainer from "./MacContainer";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import "./style.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="w-full h-screen font-mono">
      <Navbar />
      {/* <div className="navbar line flex gap-10 pt-10 pb-3 absolute top-0 left-1/2 -translate-x-1/2">
        {[
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "mac",
          "products",
          "iPhone",
          "iPad",
          "services",
          "ios",
          "mac",
          "mac",
          "products",
        ].map((e) => {
          <a href="" className="text-white font-[500] text-md capitalize">
            {e}
          </a>;
        })}
      </div> */}
      <div className="absolute flex flex-col text-white top-40 left-1/2 -translate-x-1/2">
        <h3 className="masked text-7xl tracking-tighter font-[700]">
          macbook pro.
        </h3>
        <h5 className="text-center">Oh so pro !</h5>
        <p className="text-end w-3/4">
          "Unleash your creativity with the MacBook Pro—where power meets
          precision. Elevate your productivity and bring your boldest ideas to
          life."
        </p>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={[
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
          ]}
        />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
