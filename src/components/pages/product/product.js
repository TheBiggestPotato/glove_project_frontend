import React from "react";

import './product.scss'

import Nav from '../../organisms/Nav/nav'

import Glove3D from "../../atoms/glove3D/glove3D";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

export default function Product () {

    return (
        <>
          {/*<Nav />*/}
            <div>
            <Canvas>
                <OrbitControls />
                <Glove3D />
                <ambientLight intensity={0.5} />
                <directionalLight  position={[-10,15, 10]} intensity={1} />
                <directionalLight  position={[10,15,10]} intensity={1} />
                <directionalLight  position={[10,15,-10]} intensity={1} />
                <directionalLight  position={[-10,15,-10]} intensity={1} />
            </Canvas>
            </div>
        </>
    )
};