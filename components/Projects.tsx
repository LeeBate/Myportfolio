"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
type Props = {};

function Projects({}: Props) {
  const projects = [1];
  return (
    <div
      className=" h-screen relative flex overflow-hidden flex-col text-left md:flex-row
     max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        {" "}
        Projects
      </h3>

      <div
        className=" relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 
     scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => (
          <div
            key={project}
            className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen "
          >
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/p1.png"
              alt=""
              className=" xl:w-[1200px] xl:h-[400px] object-contain "
            />

            <div className=" space-y-10 px-0 md:px-10 max-w-6xl">
              <div className=" flex flex-row">
              <h4 className=" lg:text-4xl text-2xl font-semibold text-center">
                <span className=" underline decoration-[#F7AB0A]">
                  {" "}
                  Project {i + 1} of {projects.length} :
                </span>{" "}
                Web Application
              </h4>
              
              <SocialIcon
                url="https://github.com/LeeBate/WebDek-D_NextJS-With-Mongodb"
                fgColor="#ffffff"
                bgColor="transparent"
                className="w-20 h-20 animate-bounce"
              />
              </div>
              <p className=" text-lg text-center md:text-left">
                Develop web applications using NodeJS, MongoDB, and Next.js
                framework.
              </p>
              <a className="text-lg text-center md:text-left underline hover:decoration-[#F7AB0A]" href="https://calllab.vercel.app/"> Demo link : https://calllab.vercel.app/</a>
              
            </div>
          </div>
        ))}
      </div>
      <div className=" absolute w-full h-[500px] top-[30%] left-0 bg-[#F7AB0A]/10 -skew-y-12" />
    </div>
  );
}

export default Projects;
