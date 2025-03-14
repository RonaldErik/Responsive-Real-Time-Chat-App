import React from 'react';
import Lottie from 'react-lottie';
import { animationDefaultOptions } from '@/lib/utils';
import ProfileInfo from './components/profile-info';

const ContactsContainer = () => {
  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#1b1c24] border-r-2 border-[#2f303b] w-full flex flex-col h-screen">
      {/* Logo */}
      <div className="pt-3">
        <Logo />
      </div>

      {/* Direct Messages Section */}
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Direct Messages" />
        </div>
      </div>

      {/* Channels Section */}
      <div className="my-5">
        <div className="flex items-center justify-between pr-10">
          <Title text="Channels" />
        </div>
      </div>

      {/* Profile Info */}
      <div className="mt-auto"> {/* Push ProfileInfo to the bottom */}
        <ProfileInfo />
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div className="flex p-5 justify-start items-center gap-2">
      <svg
        id="logo-38"
        width="78"
        height="32"
        viewBox="0 0 78 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.5 0H77.5L58.5 32H36.5L55.5 0Z"
          className="ccustom"
          fill="#8338ec"
        ></path>
        <path
          d="M35.5 0H51.5L32.5 32H16.5L35.5 0Z"
          className="ccompli1"
          fill="#975aed"
        ></path>
        <path
          d="M19.5 0H31.5L12.5 32H0.5L19.5 0Z"
          className="ccompli2"
          fill="#a16ee8"
        ></path>
      </svg>
      <span className="text-3xl font-semibold">Syncronus</span>
    </div>
  );
};

const Title = ({ text }) => {
  return (
    <h6 className="uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm">
      {text}
    </h6>
  );
};

export default ContactsContainer;