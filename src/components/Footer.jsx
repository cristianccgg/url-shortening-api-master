import React from "react";

export const Footer = () => {
  return (
    <div className="text-white bg-7-Very-Dark-Violet flex flex-col items-center p-8 gap-5">
      <h1 className="text-2xl font-bold">Shortly</h1>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-semibold">Features</h1>
        <div className="flex flex-col items-center text-xs font-extralight gap-2">
          <h2>Link Shortening</h2>
          <h2>Branded Links</h2>
          <h2>Analytics</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-semibold">Resources</h1>
        <div className="flex flex-col items-center text-xs font-extralight gap-2">
          <h2>Blog</h2>
          <h2>Developers</h2>
          <h2>Support</h2>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-xl font-semibold">Company</h1>
        <div className="flex flex-col items-center text-xs font-extralight gap-2">
          <h2>About</h2>
          <h2>Out Tema</h2>
          <h2>Carrers</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
};
