import React from "react";
import heroImg from "../../src/assets/hero.jpg";
import { ArrowUpRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-12 mx-2 lg:mx-8 relative">
      <div className=" w-full h-[350px] md:h-[500px] lg:h-[650px]">
        <img
          src={heroImg}
          alt="hero image"
          className="w-full h-full object-cover rounded-4xl"
        />
      </div>
      <div className="absolute inset-0 bg-black/40 rounded-4xl"></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="font-extrabold text-xl text-[#f0f8ff]  lg:text-5xl md:text-4xl max-w-3xl text-center">
          Join a community of learners and creators. Build your skills in
          design, coding, and digital innovation.
        </h1>
        <p className="text-[#faf0e6] text-center max-w-4xl">
          Join our online school to master essential software skills in CAD,
          graphic design, and web development. Transform your passion into
          expertise and open doors to new career opportunities.
        </p>
        <div className="mt-5 flex gap-5">
          <button
            className="border border-orange-600 py-2 px-4 rounded-full text-white font-bold hover:bg-orange-600/40 cursor-pointer flex gap-2 group items-center transition-all duration-150"
            onClick={() => navigate("/enroll")}
          >
            Enrol now{" "}
            <ArrowUpRight className="group-hover:rotate-45 duration-300 transition-transform size-5" />
          </button>
          <button
            onClick={() => navigate("/courses")}
            className="bg-amber-700 py-2 px-4 rounded-full  text-blue-950 font-bold hover:bg-orange-600 flex items-center gap-2 cursor-pointer"
          >
            <GraduationCap />
            View Courses{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
