import React from "react";
import HeroSection from "../component/HeroSection";
import "../component/HeroSection.css";
import "../component/Cards.css";
import Cards from "../component/Cards";
import Footer from "../component/Footer";

function Home() {
    return (
      <>
        <HeroSection />
        <Cards />
        <Footer />
      </>
    );
  }
  
  export default Home;
  