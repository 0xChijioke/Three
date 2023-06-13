import { motion, AnimatePresence } from "framer-motion";
import state from "../store"
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  // headContentAnimation,
  headTextAnimation,
  slideAnimation
} from "../config/motion";
import CustomButton from "./CustomButton";







const Hero = () => {
  const snap = useSnapshot(state);


  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>

          <motion.div className="home-content lg:-mt-10" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LETS <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div className="w-full">
              <p className="max-w-md font-normal text-base">
                Create your unique and exclusive NFT shirt with our brand-new  3D customization tool. <strong>Unleash your imagination</strong>{" "} and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customize"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 mt-6 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Hero;