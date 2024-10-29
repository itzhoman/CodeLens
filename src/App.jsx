import AboutMe from "./components/AboutMe";
import Designing from "./components/Designing";
import DigitalMaster from "./components/DigitalMaster";
import Footer from "./components/Footer";
import GetToKnow from "./components/GetToKnow";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Transform from "./components/Transform";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Designing />
      <GetToKnow />
      <AboutMe />
      <Transform />
      <DigitalMaster />
      <Footer />
    </>
  )
}