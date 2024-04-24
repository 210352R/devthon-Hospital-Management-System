import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import firstImage from "../../assets/images/dallE20240324212544CreateAnImageSuitableForTheLandingPageOfAhospitalManagementSystem1.png";
import "./MidPartStyle.css";

gsap.registerPlugin(useGSAP);

export default function MidPart() {
  const container = useRef();
  const tl = useRef();

  // set initial opacity to 0.5
  useEffect(() => {
    //gsap.set(".text-container-heading", { opacity: 0.1 });
    gsap.set(".text-container-heading", { opacity: 0, x: -100, y: -50 });
    gsap.set(".first-image-gsap", { opacity: 0 });
  }, []);

  useGSAP(
    () => {
      tl.current = gsap.timeline().to(".text-container-heading", {
        opacity: 1,
        x: 10,
        y: 10,
        delay: 0.5,
        duration: 2,
      });
      tl.current = gsap.timeline().to(
        ".first-image-gsap",
        {
          opacity: 1,
          delay: 0.5,
          duration: 3,
          ease: "bounce.out",
        },
        "+=50%"
      );
    },

    { scope: container }
  );

  return (
    <div className="container mx-auto px-2 lg:px-8" ref={container}>
      <div className="grid grid-cols-12 gap-4 my-5 lg:my-8 py-5">
        <div className="text-container-gsap col-span-12 lg:col-span-6 flex flex-col justify-center items-start lg:items-start  lg:py-0 px-4 lg:px-0">
          <div className="text-container-heading hero-text text-4xl lg:text-6xl text-white font-sans font-semibold">
            Innovating healthcare
          </div>
          <div className="text-container-heading hero-text text-4xl lg:text-6xl text-white font-sans font-semibold my-2">
            operations for efficiency,
          </div>
          <div className="text-container-heading hero-text text-4xl lg:text-6xl text-white font-sans font-semibold my-2">
            care, and seamless
          </div>
          <div className="text-container-heading hero-text text-4xl lg:text-6xl text-white font-sans font-semibold my-2">
            coordination.
          </div>
          <div className="mt-4">
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad amet
              ut nulla maxime accusantium eaque facilis, nisi consequatur
              commodi unde quia architecto possimus sunt? Molestias laudantium
              fugiat minima dignissimos ad?
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start mt-5 py-2 ">
            <button className="about-us-btn py-1 text-blue-600 rounded-lg text-lg bg-blue-200 mt-5 font-bold hover:bg-blue-300 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 px-5 md:mx-7 animate-blink hover:border hover:border-white">
              Our Services
            </button>
            <button className="about-us-btn py-1 text-blue-600 rounded-lg text-lg bg-blue-200 mt-5 font-bold hover:bg-blue-300 hover:text-blue-800 focus:outline-1 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 px-5 md:mx-7 lg:mx-11 animate-blink hover:border hover:border-white">
              About Us
            </button>
          </div>
        </div>
        {/* image here */}
        <div className="first-image-gsap col-span-12 lg:col-span-6 flex justify-center items-center mx-2">
          <img
            src={firstImage}
            alt="firstImage"
            className="rounded-lg max-w-full h-auto shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
