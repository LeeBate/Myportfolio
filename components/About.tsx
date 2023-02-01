"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  
};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex flex-col relative h-screen text-center md:text-laft
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: -200 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/lee.jpg"
        alt="Lee"
        className="-mb-32 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full 
          object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[600px] xl:h-[450px]"
      />
      <div className=" space-y-5 px-0 md:px-10">
        <h4 className=" text-2xl lg:text-4xl font-semibold">Let Me <span className=" underline decoration-[#F7AB0A]/80">Introduce</span>  Myself</h4>
        <p className=" text-lg">
          My name is Natthaphong Wongsaengphet. You can call me Lee.
          <span className="ml-1">I am studying digital technology in my third year at the Suranaree
          University of Technology.</span>
           I like to learn to improve my abilities. I
          love communicating with the people on the team and leading the team
          toward its goals. 
          I hope everyone will be happy when you work with me 💯.
        </p>
      </div>
    </motion.div>
  );
}
