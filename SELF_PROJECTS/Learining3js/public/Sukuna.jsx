/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 sukuna.gltf 
Author: Jared The Goober (https://sketchfab.com/jjjjared)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sukuna-3e01d602184f421c8f6c60098c716c54
Title: Sukuna
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/sukuna.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={50.03}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_7.geometry} material={materials.Liangmiansunuotexroleliangmiansunuo01Mtl} skeleton={nodes.Object_7.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sukuna.gltf')
