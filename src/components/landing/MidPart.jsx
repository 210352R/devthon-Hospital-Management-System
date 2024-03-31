import React from "react";
import firstImage from "../../assets/images/dallE20240324212544CreateAnImageSuitableForTheLandingPageOfAhospitalManagementSystem1.png";
export default function MidPart() {
  return (
    <div>
      <div className="grid grid-cols-12 my-5 py-5">
        <div className="col-span-12 lg:col-span-6 mx-auto justify-center items-center my-5 px-5">
          <div className="hero-text text-left text-6xl lg:text-6xl text-white font-sans font-semibold">
            Innovating healthcare
          </div>
          <div className="hero-text text-left text-6xl lg:text-6xl text-white font-sans font-semibold my-2">
            operations for efficiency,
          </div>
          <div className="hero-text text-left text-6xl lg:text-6xl text-white font-sans font-semibold my-2">
            care, and seamless
          </div>
          <div className="hero-text text-left text-6xl lg:text-6xl text-white font-sans font-semibold my-2">
            coordination.
          </div>
        </div>
        <div className="col-span-12 lg:col-span-6 mx-auto justify-center items-center my-5 px-5 ">
          <div className="flex justify-center">
            <img
              src={firstImage}
              alt="firstImage"
              className="rounded-lg"
              style={{ width: "800px", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
