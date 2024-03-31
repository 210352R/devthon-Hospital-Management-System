/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./styles/landingPageStyles.css";
import Navbar from "./components/Navbar";
import MidPart from "./components/landing/MidPart";
export default function LandingPage() {
  return (
    <div className="landing min-h-screen ">
      <div className="navBar-container px-1 py-3">
        <Navbar />
      </div>
      <div className="py-5 px-1">
        <MidPart />
      </div>
    </div>
  );
}
