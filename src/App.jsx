import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SupportedPlants from "./components/SupportedPlants";
import CTA from "./components/CTA";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LearnMore from "./pages/LearnMore";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <SupportedPlants />
      <CTA />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/learn" element={<LearnMore />} />
    </Routes>
  );
}

export default App;