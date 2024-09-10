import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Hero } from "../components/HeroSection/Hero";
import { Services } from "../components/Services/Services";
import { About } from "../components/About/About.js";
import { Gallery } from "../components/Gallery/Gallery";
import { WhyChooseUs } from "../components/Why/WhyChooseUs.js";
import { ClientExpectations } from "../components/Client/ClientExpectations.js";
import { Contact } from "../components/Contact/Contact.js";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <ClientExpectations />
      <Contact />
    </div>
  );
};
export default App;
