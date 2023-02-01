"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [textName, count] = useTypewriter({
    words: ["Hi, I'm Lee", "I'm Frontend Developer."],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <Image
        src="/ly.jpg"
        alt="Lee"
        width={200}
        height={200}
        className="rounded-full relative w-32 h-32 mx-auto object-cover"
      />
      <div className=" z-10">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Web Developer
        </h2>
        <h1 className=" text-5xl lg:text-6xl font-semibold px-3">
          <span className="mr-3 animate-text  bg-gradient-to-r from-blue-500 via-slate-300 to-pink-300 bg-clip-text text-transparent text-5xl font-black">{textName}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
         
          
          <Link href="/#about" >
            <button className="heroButton">About</button>
          </Link>
          
          {/* <Link href="#Experience">
            <button className="heroButton">Experience</button>
          </Link> */}
          
          <Link href="/#skills">
            <button className="heroButton">Skills</button>
          </Link>
          
          <Link href="/#projects">
            <button className="heroButton">Projects</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
