import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 gap-10 flex overflow-hidden whitespace-nowrap">
        <motion.h1 intial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[15vw] leading-none  uppercase font-semibold pt-8 -mb-[1vw] -mt-8 font-["Chokokutai"]'>
          We are Sportfreak
        </motion.h1>
        <motion.h1 intial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 15}} className='text-[15vw] leading-none  uppercase font-semibold pt-8 -mb-[1vw] -mt-8 font-["Chokokutai"]'>
          We are Sportfreak
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
