import React from "react";
import BrandImg from "/public/images/icon-brand-recognition.svg";
import DetailedImg from "/public/images/icon-detailed-records.svg";
import FullyImg from "/public/images/icon-fully-customizable.svg";

export const SecondSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-12 mt-5 ">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-bold">Advanced Statistics</h1>
        <p className="text-xs">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="flex flex-col gap-12 w-full lg:h-72 lg:flex-row  sm:relative relative">
        <hr className="border-4 w-80 lg:h-[70vw] lg:w-0 absolute border-1-Cyan top-1/2 left-1/2 transform -translate-x-1/2 rotate-90 lg:-translate-y-1/2" />
        <div className="lg:absolute lg:w-96 rounded-lg flex w-full flex-col items-center gap-3 py-10 px-5 bg-white shadow-lg relative">
          <div className="bg-2-Dark-Violet rounded-full p-3 absolute top-0 transform -translate-y-1/2">
            <img className="h-8" src={BrandImg} alt="brand-icon" />
          </div>
          <h2 className="text-lg font-bold">Brand Recognition</h2>
          <p className="text-xs">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="lg:absolute lg:w-96 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:translate-y-10 rounded-lg flex w-full flex-col items-center gap-3 py-10 px-5 bg-white shadow-lg relative">
          <div className="bg-2-Dark-Violet rounded-full p-3 top-0 transform -translate-y-1/2 absolute">
            <img className="h-8" src={DetailedImg} alt="detailed-icon" />
          </div>
          <h2 className="text-lg font-bold">Detailed Records</h2>
          <p className="text-xs">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="lg:absolute lg:w-96 lg:right-0 lg:translate-y-20 rounded-lg flex w-full flex-col items-center gap-3 py-10 px-5 bg-white shadow-lg relative">
          <div className="bg-2-Dark-Violet rounded-full p-3 top-0 transform -translate-y-1/2 absolute">
            <img className="h-8" src={FullyImg} alt="fullyimg" />
          </div>
          <h2 className="text-lg font-bold">Fully Customizable</h2>
          <p className="text-xs">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
      <div className="bg-2-Dark-Violet h-52 justify-center bg-boost-mobile w-full text-white p-5 flex flex-col items-center gap-3">
        <h1 className="text-xl font-bold">Boost your links today</h1>
        <button className="bg-1-Cyan rounded-full  font-semibold px-5 py-2">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};
