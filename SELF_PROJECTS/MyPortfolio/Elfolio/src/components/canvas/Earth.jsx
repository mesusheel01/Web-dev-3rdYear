import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'


const Earth = () => {
  const earth = useGLTF("./robot_playground/scene.gltf");
  return (<mesh>
    <hemisphereLight intensity={5} groundColor='black' />
    <spotLight 
      penumbra={1}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    <primitive
      object={earth.scene}
      scale={2}
      position-y={0}
      rotation-y={0}
    >
    </primitive>
    </mesh>
  )
}

const EarthCanvas = ()=> {
  return (
    <Canvas
    shadows
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    camera={{
      fov:65,
      near:0.1,
      far:200,
      position:[4,7,6]
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Earth/>
      </Suspense>
    </Canvas>
  )
}


export default EarthCanvas