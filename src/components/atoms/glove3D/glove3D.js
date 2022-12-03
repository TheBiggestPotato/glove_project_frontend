import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Glove3D(props) {
    const { nodes, materials } = useGLTF('/glove3D.gltf')

    const gloveRef = useRef();

    useFrame(() => {
        gloveRef.current.rotation.z += 0.005;
    });


    return (
        <group {...props} dispose={null} scale={0.02}>
          <mesh
                ref={gloveRef}
                geometry={nodes.GloveNitrile.geometry}
                material={materials.GloveNitrile_vray}
                position={[20, 10, 20]}
                rotation={[-Math.PI / 2.2, 0, 0]}
          >
              <meshLambertMaterial color={'#2F8DBA'}/>
            </mesh >
        </group>
      )
}

useGLTF.preload('/glove3D.gltf')
