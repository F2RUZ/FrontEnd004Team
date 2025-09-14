import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Business from "./components/Business";
import Decor from "./components/Decor";
import Pro from "./components/Pro";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Business />
      <Decor />
      <Pro />
      <Footer />
    </div>
  );
};

export default App;
