import React from "react";
import Home from "./Home"
import About from "./About"

function NavBar() {
  return (
    <nav>
      <a href="#home">Home</a>
      {/* <Home />
      <About /> */}
      <a href="#about">About</a>
    </nav>
  );
}

export default NavBar