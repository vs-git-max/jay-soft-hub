import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OurSchool from "@/components/OurSchool";
import CoursesIntro from "@/components/CoursesIntro";
import Reviews from "@/components/Reviews";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-[#faf0e6]">
      <Navbar />
      <Hero />
      <OurSchool />
      <CoursesIntro />
      <Reviews />
      <ContactUs />
    </div>
  );
};

export default Home;
