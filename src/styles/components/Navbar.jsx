import React, { useState } from "react";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="navbar container">
      <a href="#!" className="logo">
        F<span>oo</span>d
      </a>
      <div className="nav-links">
        <a href="#!">Home</a>
        <a href="#!">Recipe</a>
        <a href="#!">Settings</a>
      </div>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
