import React from "react";

export const Header = () => {
  return (
    <div className="flex flex-col items-center mt-20 gap-10 sm:mt-0 md:mt-20 sm:flex-row sm:h-96 sm:mb-20  lg:mb-32">
      <div className="relative w-full h-72 sm:order-2 sm:block">
        <img
          className="absolute right-0 transform translate-x-0 lg:translate-x-16 md:translate-x-16 -translate-y-20 max-h-96 lg:-translate-y-5 lg:scale-125 md:-translate-y-0  sm:scale-150  sm:translate-y-1/2"
          src="/public/images/illustration-working.svg"
          alt="ilustration"
        />
      </div>
      <div className="p-3 flex flex-col items-center sm:justify-center text-center gap-4 sm:text-start sm:items-start sm:w-full ">
        <h1 className="text-4xl font-bold md:text-6xl">
          More than just shorter links
        </h1>
        <p className="text-xs font-light md:text-xl">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="bg-1-Cyan rounded-full text-white font-semibold px-5 py-2">
          {" "}
          Get Started
        </button>
      </div>
    </div>
  );
};
