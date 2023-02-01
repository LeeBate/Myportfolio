"use client";
import React, {
  useRef,
  useState,
  ChangeEvent,
  SyntheticEvent,
  useEffect,
} from "react";
import {
  useRive,
  useStateMachineInput,
  Layout,
  Fit,
  Alignment,
  UseRiveParameters,
  RiveState,
  StateMachineInput,
} from "rive-react";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

const STATE_MACHINE_NAME = "Login Machine";
const LOGIN_PASSWORD = "teddy";
const LOGIN_TEXT = "Login";

const ContactMe = (riveProps: UseRiveParameters = {}) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:harukaxd02@gmail.com?subject=${formdata.subject}
    &body=Hi, my name is ${formdata.name}. I would like to contact you about ${formdata.message}.
    If you have received the email hope you will contact me back to this email. (${formdata.email})`;
  };

  const { rive: riveInstance, RiveComponent }: RiveState = useRive({
    src: "login-teddy.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
    ...riveProps,
  });
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const [inputLookMultiplier, setInputLookMultiplier] = useState(0);
  const [loginButtonText, setLoginButtonText] = useState(LOGIN_TEXT);
  const inputRef = useRef(null);

  const isCheckingInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isChecking"
  );
  const numLookInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "numLook"
  );
  const trigSuccessInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigSuccess"
  );
  const trigFailInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "trigFail"
  );
  const isHandsUpInput: StateMachineInput | null = useStateMachineInput(
    riveInstance,
    STATE_MACHINE_NAME,
    "isHandsUp"
  );

  // Divide the input width by the max value the state machine looks for in numLook.
  // This gets us a multiplier we can apply for each character typed in the input
  // to help Teddy track progress along the input line
  useEffect(() => {
    if (inputRef?.current && !inputLookMultiplier) {
      setInputLookMultiplier(
        (inputRef.current as HTMLInputElement).offsetWidth / 100
      );
    }
  }, [inputRef]);

  // As the user types in the username box, update the numLook value to let Teddy know
  // where to look to according to the state machine
  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setUserValue(newVal);
    if (!isCheckingInput!.value) {
      isCheckingInput!.value = true;
    }
    const numChars = newVal.length;
    numLookInput!.value = numChars * inputLookMultiplier;
  };

  // Start Teddy looking in the correct spot along the username input
  const onUsernameFocus = () => {
    isCheckingInput!.value = true;
    if (numLookInput!.value !== userValue.length * inputLookMultiplier) {
      numLookInput!.value = userValue.length * inputLookMultiplier;
    }
  };

  return (
    <div
      className=" h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10
      justify-evenly mx-auto items-center"
    >
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className=" flex flex-col space-y-10">
       

        <div className=" space-y-10">
        
          <div className=" flex flex-col items-center space-x-5 justify-center">
          <h4 className=" lg:text-4xl text-2xl font-semibold text-center">
          <span>If I have what you want. </span>
          <span className=" underline decoration-yellow-500">Contact Me!</span>
        </h4>
            <div className=" flex">
            <PhoneIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">0632539362</p>
            </div>
            <div className=" flex">
              <EnvelopeIcon className=" text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className=" text-2xl">harukaxd02@gmail.com</p>
            </div>
            
          </div>

          
          <div className=" flex items-center space-x-5 justify-center">
          <RiveComponent className="rive-container" />
          </div> 
        </div>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className=" flex space-x-2">
            <input
              {...register("name")}
              required
              placeholder="Name"
              className="contactInput"
              type="text"
              onFocus={() => (isHandsUpInput!.value = true)}
              onBlur={() => (isHandsUpInput!.value = false)}
             
              
            />
            <input
              {...register("email")}
              required
              placeholder="Email"
              className="contactInput"
              type="email"
              onFocus={() => (isHandsUpInput!.value = true)}
                onBlur={() => (isHandsUpInput!.value = false)}
              
            />
          </div>
          <input
            {...register("subject")}
            required
            placeholder="Subject"
            className="contactInput"
            type="text"
            onFocus={onUsernameFocus}
            onBlur={() => (isCheckingInput!.value = false)}
          />

          <textarea
            {...register("message")}
            required
            placeholder="Message"
            className="contactInput"
            onFocus={onUsernameFocus}
            onBlur={() => (isCheckingInput!.value = false)}
          />
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
};

export default ContactMe;
