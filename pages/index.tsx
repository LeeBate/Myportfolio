import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import React from "react";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Stars from "@/components/Stars";

export default function Home() {
  
  return (
   
    <div
      className=" bg-[rgb(#0d1d31,#0c0d13,36)] text-white
    h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 
    scrollbar-thumb-[#F7AB0A]/80  "
    > 
    <Stars />
      <Head>
        <title>Lee's Portfolio</title>
        <meta name="description" content="Lee Yang's Portfolio" />
        <link rel="icon" href="/lee.jpg" />
        
      </Head>
      <Header />
      
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="skills" className=" snap-start">
        <Skills />
      </section>

      <section id="projects" className=" snap-start">
        <Projects />
      </section>

      <section id="contact" className=" snap-start">
        <ContactMe />
      </section>

      <footer className=" sticky bottom-5 w-full cursor-pointer">
        <Link href="#hero" >
          <div className="flex items-end justify-end mr-7">
            {" "}
            <Image
              src="/ly.jpg"
              alt="arrow"
              width={50}
              height={50}
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer "
            />
          </div>
        </Link>
      </footer>
      {/* <section id="experience" className="snap-center">
        <Experience />
      </section>
       */}
    </div>
   
  );
}
