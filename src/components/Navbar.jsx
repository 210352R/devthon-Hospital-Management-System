/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex grid grid-cols-12 gap-2 ">
        <div className=" flex items-start items-center align-middle vector-heart col-span-1 mx-auto hidden sm:hidden lg:block">
          <div className="svgImage">
            <svg
              width="45"
              height="45"
              viewBox="0 0 178 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              transform="rotate(180)"
            >
              <path
                d="M44.903,170.181C37.008,169.098 27.541,164.808 20.946,159.382C9.778,150.114 2.106,135.567 0.221,120.086C-1.259,107.858 1.343,93.658 7.04,82.711L8.969,79.013L20.858,79.013L32.791,79.013L46.07,64.419L59.394,49.774L59.887,52.436C60.155,53.915 61.052,59.34 61.95,64.467C62.802,69.643 63.744,75.019 64.013,76.447L64.461,79.011L74.645,79.011L84.829,79.011L91.738,58.155C95.552,46.716 98.826,36.806 99.051,36.164C99.275,35.523 99.498,35.078 99.634,35.178C99.768,35.375 112.824,113.674 112.913,114.905C112.913,115.447 114.124,111.996 119.822,94.937L125.115,79.011L143.014,78.912L160.959,78.764L157.595,73.833C144.809,54.999 122.154,32.761 94.791,12.201C91.694,9.884 88.959,8.009 88.689,8.009C87.566,8.009 70.834,21.026 60.875,29.605C53.248,36.212 47.821,41.291 40.642,48.587L35.483,53.863L31.446,53.813L27.409,53.813L32.793,48.093C46.429,33.602 62.22,19.649 80.029,6.483C84.38,3.229 88.239,0.615 88.641,0.615C90.257,0.615 111.609,17.182 123.184,27.437C135.477,38.334 149.069,52.436 156.201,61.755C160.551,67.475 168.043,78.519 170.018,82.167L171.633,85.174L150.416,85.324L129.152,85.423L120.224,112.295C113.629,132.166 111.207,138.872 110.982,138.033C110.803,137.442 107.888,119.544 104.523,98.242C101.114,76.941 98.242,59.34 98.063,59.143C97.883,58.946 95.775,64.764 93.353,72.11L88.912,85.423L78.055,85.423L67.198,85.423L64.64,93.313C63.204,97.653 61.993,101.153 61.903,101.104C61.769,100.906 55.891,64.371 55.891,63.582C55.891,63.287 51.316,68.069 45.664,74.232L35.481,85.423L23.773,85.423L12.066,85.423L10.18,89.81C6.593,98.342 4.798,108.794 5.65,116.388C8.163,138.723 18.39,154.995 33.912,161.06C43.78,164.955 55.087,165.3 64.642,161.997C72.403,159.285 78.279,155.143 84.695,147.846L88.643,143.409L92.771,148.093C97.751,153.664 101.429,156.673 107.127,159.632C117.041,164.808 129.109,165.696 140.547,162.048C158.401,156.428 169.662,139.072 171.859,113.925L172.173,110.572L174.82,110.572L177.467,110.572L177.467,113.925C177.467,125.019 173.159,138.53 166.61,148.095C155.889,163.726 138.123,172.353 120.942,170.283C109.905,169.002 100.664,164.465 92.051,156.181L88.641,152.927L85.232,156.181C73.614,167.37 59.617,172.202 44.903,170.181Z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center py-1 px-2 bg-white text-black rounded-xl col-span-9">
          <div className="hidden lg:flex space-x-6 font-bold px-4">
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Home
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Services
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Team
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Clinics
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Diagnostics
            </a>
            <a
              href="#"
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              Donation
            </a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-black focus:text-black focus:outline-none transition-transform transform hover:scale-125"
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="">
            <SearchBar />
          </div>
        </div>
        <div className="flex items-center align-middle col-span-2 mx-auto ">
          <div class="">
            <button
              type="button"
              class="text-black bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br hover:border hover:border-white focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-1 mt-0.5 text-center me-2 mb-2"
            >
              Login / Register
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="right-0 mt-2 w-56 origin-top-right bg-white divide-y divide-gray-100 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none lg:hidden">
          <div className="py-1">
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              About Us
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Team
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Clinics
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Diagnostics
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-100 hover:text-black"
            >
              Donation
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
