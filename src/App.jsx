import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImproveSkills from "./components/ImproveSkills";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
      </div>
    </div>
  );
};

export default App;
