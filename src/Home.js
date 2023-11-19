import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import Island from './Island'
import { OrbitControls } from '@react-three/drei'
const Home = () => {
  const adjustScreenCan=()=>{
    
    let rotation=[0.1,4.7,0]
   
    return [rotation]
  }
  const [isrotation]=adjustScreenCan();
  return (
    <section className='w-full h-screen realtive'>
     
        <Canvas className='w-full h-screen bg-transparent' camera={{near:0.1,far:1000}}>
            <Suspense fallback={<Loader></Loader>}>
                <directionalLight/>
                <ambientLight/>
                <pointLight/>
                <spotLight/>
                <hemisphereLight/>
                <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI/1}
                minPolarAngle={Math.PI/2}
                >
                </OrbitControls>
                <Island
                rotation={isrotation}
                ></Island>
            </Suspense>
        </Canvas>
    </section>
  )
}

export default Home