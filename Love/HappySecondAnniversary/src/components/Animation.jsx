import {motion } from 'framer-motion'
import React from 'react'

const Animation = () => {
  return (
    <div>
      <motion.div
      className='animation-section'
      animate={{scale:[1,1.5,1], rotate:[0,360, 0] }}
      transition={{duration:5, repeat: 2}}
      >
      <p>A beautiful song for you mera Gullu😘</p>
      </motion.div>
    </div>
  )
}

export default Animation
