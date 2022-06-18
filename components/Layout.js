import React from "react";
import Image from "next/image";
import MainTitle from "./MainTitle";
import About from "./About";
import Skills from "./Skills";
import Values from "./Values";
import Future from "./Future";
import Style from "./BackGround.module.scss";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="flex desktop:justify-between max-w-5xl m-auto mobile:flex-col mobile:text-center">
        <div className="block items-center desktop:pl-8">
          <Image src="/logo.png" alt="fwywd Logo" width={160} height={70} />
        </div>
        <div className="flex justify-end items-center mobile:m-auto desktop:pr-8 text-origin-green">
          <div className="flex pr-2 pl-2">ABOUT</div>
          <div className="flex pr-2 pl-2">SKILLS</div>
          <div className="flex pr-2 pl-2">VALUES</div>
          <div className="flex pr-2 pl-2">FUTURE</div>
        </div>
      </nav>
      <MainTitle />
      <main>
        <div className={Style.background}>
          {children}
          <About />
          <Skills />
          <Values />
          <Future />
        </div>
      </main>
      <footer className="bg-bg-footer text-white">
        <div className="max-w-5xl m-auto ">
          <div className="flex justify-center pt-10 pb-10 space-x-3">
            <p>CREATED BY</p>
            <p>薮井えりか</p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/logo_white.png"
              alt="logo_white"
              width={80}
              height={100}
            />
          </div>
          <div className="flex justify-center pt-10 pb-5 space-x-3">
            <div>
              <Image src="/twitter.png" alt="twitter" width={20} height={18} />
            </div>
            <div>
              <Image
                src="/facebook.png"
                alt="facebook"
                width={20}
                height={18}
              />
            </div>
          </div>
          <p className="flex justify-center  pb-5">@ 2021 KIKAGAKU</p>
        </div>
      </footer>
    </div>
  );
}
