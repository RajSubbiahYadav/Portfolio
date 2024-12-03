

import { motion } from 'framer-motion';
import Image from 'next/image';

import React from 'react'

const Photo = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0,
        transition: { delay: 2, duration: 0.4, ease: "easeIn"},
       }}
    >
        <h1>jhi</h1>
       <div className="xl:h-[498px] xl:w-[498px] lg:w-[398px] lg:h-[398px] w-[298px] h-[298px] 
       mix-blend-lighten">
        <Image
          src="/images/"
          alt="hero image"
          className="rounded-full"
        //   width={400}
        //   height={400}
          priority
          
          quality={100}
          fill
        
          
        />
        </div>
    </motion.div>
    </div>
  )
}

export default Photo