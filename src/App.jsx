import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Business from "./components/Business";
import Decor from "./components/Decor";
import Pro from "./components/Pro";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Business />
      <Decor />
      <Pro />
    </div>
  );
};

export default App;
