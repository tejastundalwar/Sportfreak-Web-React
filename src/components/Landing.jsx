import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.01' className='w-full h-screen bg-black pt-1 text-white'>
      <div className='textstructure mt-52 px-20 '>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className='masker text-white'>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div initial={{ width: 0 }} animate={{ width: "8vw" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[0.5vw] relative'><img src="https://wallpapers.com/images/hd/best-sports-1920-x-1200-background-48i3ia8zmsd5o8bz.jpg" alt="" /></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[6.5vw] tracking-tighter font-['Roboto_Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 font-['Founders_Grotesk_X-Condensed']">
        {["For public and private companies", "From the first pitch to the last IPO"]
          .map((item, index) => (
            <p key={index} className="text-md font-light tracking-tight leading-none text-white m-2">
              {item}
            </p>
          ))}
        <div className='start flex items-center gap-5'>
          <div className='px-5 py-2 border-[1px] border-zinc-500 font-light  rounded-full text-md capitalize'>start the project</div>
          <div className='w-10 h-10 items-center flex justify-center border-zinc-400 rounded-full'>
            <span className='rotate-[45deg]'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing
