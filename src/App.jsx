import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import './App.css'

const Cube = ({position, size, color}) => {
  
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
    console.log(state)
  })

  return <mesh position={position} ref = {ref}> 
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
}

const App = () => {
  return <Canvas>
    <directionalLight position={[0, 0, 2]}/>
    <ambientLight/>
    
    <group position={[0, -1, 0]}>
      <Cube position={[1,0,0]} size={[2,1,1]} color={"red"}/>
      <Cube position={[0,3,0]} size={[2,1,1]} color={"red"}/>
    </group>
  </Canvas>
}

export default App
