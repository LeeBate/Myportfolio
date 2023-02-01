"use client"
import { motion } from "framer-motion";
import React from "react";
import SkillJavaS from "./Skills/SkillJavaS";
import SkillHTML from "./Skills/SkillHTML";
import SkillCSS from "./Skills/SkillCSS";
import SkillTailwind from "./Skills/SkillTailwind";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex relative flex-col text-center md:text-left xl:flex-row
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className=" absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <motion.div
        initial={{ x: -200 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        
      />
      <div className=" grid grid-cols-3 md:grid-cols-4  gap-5">
        <SkillJavaS />
        <SkillHTML />
        <SkillTailwind />
        <SkillCSS />
      </div>
    </motion.div>
  );
}

export default Skills;
