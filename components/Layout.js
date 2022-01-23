import React from "react";
import Image from "next/image";
import MainTitle from "./MainTitle";
import About from "./About";
import Skills from "./Skills";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex justify-between w-screen bg-gray-50 text-indigo-600">
        <div className="block items-center pl-8">
          <Image src="/logo.png" alt="fwywd Logo" width={160} height={70} />
        </div>
        <div className="flex justify-end items-center pr-8 space-x-4">
          <div className="flex space-x-4">ABOUT</div>
          <div className="flex space-x-4">SKILLS</div>
          <div className="flex space-x-4">VALUES</div>
          <div className="flex space-x-4">FUTURE</div>
        </div>
      </nav>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
        <MainTitle></MainTitle>
        <About></About>
        <Skills></Skills>
      </main>
    </div>
  );
}
