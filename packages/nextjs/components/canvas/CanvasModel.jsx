import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "600px" }}
      className="transition-all ease-in"
    >
        


      <ambientLight intensity={1} />
      <Environment preset="city" />
      
        

      <spotLight intensity={1} angle={2} penumbra={1} position={[0, 1, 10]} castShadow />
      <CameraRig>
        <Backdrop />
          <Center>
            <Shirt />
          </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel;