import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'> 
       <div className='w-10 h-5 rounded-full bg-darkTeal '/>
       <div className='w-1 sm:h-60 h-25 teal-gradient' />
      </div>
      <div> 
        <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm <span className='text-darkTeal'>Susheel</span> </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>I am a Student as well as Developer <br className='sm:block hidden'/>& I develop Web Apps and Utility Tools</p>
      </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-4 border-dTeal flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-white mb-2'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
