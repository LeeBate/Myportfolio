
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className=" sticky top-0 p-5 flex items-start justify-between max-w-5xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5, }}
        className=" flex flex-row items-center"
      >
        {/* Header Icon */}
        <SocialIcon
          url="https://linkedin.com/in/nattaphong-lee"
          fgColor="#0274b3"
          bgColor="transparent"
          className="filter grayscale hover:grayscale-0 
          transform transition duration-500 hover:scale-125"
        />
        <SocialIcon
          url="https://github.com/LeeBate"
          fgColor="#9656b0"
          bgColor="transparent"
          className="filter grayscale hover:grayscale-0  transform transition duration-500 hover:scale-125"
        />
        {/* <SocialIcon
          url="https://www.instagram.com/billy_np/"
          fgColor="#cf318a"
          bgColor="transparent"
          className="filter grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125"
        /> */}
        {/* <SocialIcon
          url="https://www.facebook.com/LeeWongsaengphet/"
          
          fgColor="#097ceb"
          bgColor="transparent"
          className="filter grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125"
        /> */}
        {/* <SocialIcon
          url="https://drive.google.com/file/d/1f6LOQ3MRmWJaOayxZjebydNNZS6bnOUa/view?usp=sharing"
          fgColor="#45bd62"
          bgColor="transparent"
          className="filter grayscale hover:grayscale-0 transform transition duration-500 hover:scale-125"
          label="Our portfolio" 
          /> */}
      </motion.div>

      <motion.div
      initial={{ 
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
        transition={{ duration: 1.5,}}
      className=" flex flex-row items-center text-gray-300 cursor-pointer">
        
          <SocialIcon
          className=" cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="/#contact">
        <p className=" uppercase hidden md:inline-flex text-sm text-gray-400">
        Click Me Now!
        </p>
        </Link>
      </motion.div>
    </header>
  );
}
