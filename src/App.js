import React, { useEffect } from "react";
import Blogs from "./components/Blogs";
import BuySell from "./components/BuySell";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "components/ScrollToTop";
import Designs from "components/designs";
import scrollreveal from "scrollreveal";

export default function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        #home,
        #buySell1,
        #buySell2,
        #buySell3,
        #blogs,
        footer
    `,
        {
          opacity: 0,
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementById("home");
    home.style.transform = "none";
  }, 1500);
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs />
      <BuySell />
      <Blogs />
      <Footer />
    </div>
  );
}
