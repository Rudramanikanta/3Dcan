import React, { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";
import simple_cola_can from './glbcom/simple_cola_can.glb'
import {a} from '@react-spring/three'
const  Island=(props) =>{
  const { nodes, materials } = useGLTF(simple_cola_can);
  const islandref=useRef()
  return (
    <a.group {...props} ref={islandref}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </a.group>
  );
}

export default Island;