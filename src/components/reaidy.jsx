"use client";
import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Fade } from "react-reveal";

export default function ReaidySlide() {
  const redirectToReaidySite = () => {
    window.open("https://reaidy.io", "_blank");
  };

  return (
    <div className="w-[100vw] h-[130vh] md:h-[100vh] bg-bg3 flex flex-col items-center justify-center">
      <div className="block md:hidden w-full h-full py-[5%]">
        <div className="w-[90%] md:w-[90%] h-[40%] m-auto overflow-hidden rounded-2xl">
          <div
            className="w-full h-full rounded-2xl hover:scale-110 transition-all duration-700 ease-in-out"
            style={{
              backgroundImage: "url(/reaidy-bg-mobile.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="flex flex-col items-start z-20 w-[90%] py-[5%] m-auto text-bg1">
          <Fade bottom>
            {" "}
            <p className="text-md">- Our Product</p>
          </Fade>
          <Fade bottom>
            <p className="gil-bold text-5xl">Reaidy.io</p>
          </Fade>
          {/* <Fade bottom>
            <p className="text-md gil-bold opacity-60">
              CEO at A-HUB | President at TiE AP | Angel Investor
            </p>
          </Fade> */}
          <Fade bottom>
            <p className="text-xl pt-5 opacity-75 text-justify">
              Reaidy is an innovative AI-powered platform designed to empower
              students and aspiring professionals in their journey towards
              career success by providing realistic mock interview simulations
              and a structured learning roadmap. With AI-driven mock interviews,
              users can refine their interview skills, tackling behavioral and
              technical questions, while receiving personalized feedback and
              analysis.
            </p>
          </Fade>
          <Fade bottom>
            <p
              className="gil-bold text-xl md:text-xl text-[#9d5b11] flex items-center cursor-pointer"
              onClick={() => {
                // setIsPopupOpen(true);
                redirectToReaidySite();
              }}
            >
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
      <div className="w-[90%] md:w-[90%] h-[80%] group overflow-hidden rounded-3xl hidden md:flex flex-row justify-between items-start relative">
        <div
          className="w-full h-full rounded-3xl group-hover:scale-110 transition-all duration-700 ease-in-out absolute inset-0"
          style={{
            backgroundImage: "url(/reaidy-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-30 transition-all duration-700 ease-in-out opacity-layer rounded-md md:rounded-3xl" />
        <div className="flex flex-col items-start z-20 w-[40%] absolute right-0  my-auto py-[5%] pr-[3%] text-bg2">
          <Fade bottom>
            {" "}
            <p className="text-md lg:text-lg">- Our Product</p>
          </Fade>

          <Fade bottom>
            <p className="gil-bold text-5xl lg:text-5xl">Reaidy.io</p>
          </Fade>

          {/* <Fade bottom>
            <p className="text-md lg:text-lg gil-bold opacity-60">
              CEO at A-HUB | President at TiE AP | Angel Investor
            </p>
          </Fade> */}
          <Fade bottom>
            <p className="text-xl lg:text-3xl pt-5 opacity-75 text-justify">
              Reaidy is an innovative AI-powered platform designed to empower
              students and aspiring professionals in their journey towards
              career success by providing realistic mock interview simulations
              and a structured learning roadmap. With AI-driven mock interviews,
              users can refine their interview skills, tackling behavioral and
              technical questions, while receiving personalized feedback and
              analysis.
            </p>
          </Fade>
          <Fade bottom>
            <p
              className="gil-bold text-sm md:text-xl lg:text-2xl pt-5 text-[#9d5b11] flex items-center cursor-pointer"
              onClick={() => {
                // setIsPopupOpen(true);
                redirectToReaidySite();
              }}
            >
              Learn More&nbsp; <BsArrowUpRightCircle />{" "}
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}