import React from "react";
import Banner from "../../components/Banner/Banner";
import Contact from "../Contact/Contact";
import Service from "../../pages/Service/Service";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default Home;
