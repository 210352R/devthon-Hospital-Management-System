/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/landingPageStyles.css";
import Navbar from "./components/Navbar";
import MidPart from "./components/landing/MidPart";

gsap.registerPlugin(useGSAP);
export default function LandingPage() {
  const container_landing = useRef();
  const tl2 = useRef();

  // set initial opacity to 0.5
  useEffect(() => {
    //gsap.set(".text-container-heading", { opacity: 0.1 });
    gsap.set(".navBar-container", { opacity: 0, y: -50 });
  }, []);

  useGSAP(
    () => {
      tl2.current = gsap.timeline().to(".navBar-container", {
        opacity: 1,

        y: 10,
        delay: 0.5,
        duration: 2,
      });
    },

    { scope: container_landing }
  );

  return (
    <div className="landing min-h-screen " ref={container_landing}>
      <div className="navBar-container px-1 py-5">
        <Navbar />
      </div>
      <div className="py-5 px-1">
        <MidPart />
      </div>
    </div>
  );
}
