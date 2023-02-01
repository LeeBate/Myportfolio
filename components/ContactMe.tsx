"use client"
import React from "react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:harukaxd02@gmail.com?subject=${formdata.subject}
    &body=Hi, my name is ${formdata.name}. I would like to contact you about ${formdata.message}.
    If you have received the email hope you will contact me back to this email. (${formdata.email})`;
  }

  return (
    <div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
      justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" flex flex-col space-y-10">
        <h4 className=" lg:text-4xl text-2xl font-semibold text-center">
          <span>If I have what you want. </span>
          <span className=" underline decoration-yellow-500">Contact Me!</span>
        </h4>

        <div className=" space-y-10">
          <div className=" flex items-center space-x-5 justify-center">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">0632539362</p>
          </div>

          <div className=" flex items-center space-x-5 justify-center">
            <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">harukaxd02@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input {...register('name')} required placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} required placeholder="Email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} required placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register('message')} required placeholder="Message" className="contactInput" />
          <button
            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
