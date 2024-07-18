import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar.jsx";
import { Header } from "./components/Header.jsx";
import { Shorten } from "./components/Shorten.jsx";
import { SecondSection } from "./components/SecondSection.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className=" bg-2-Dark-Violet bg-opacity-10">
      <Navbar />
      <div className="px-5 sm:px-32">
        <Header />
        <Shorten />
        <SecondSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
