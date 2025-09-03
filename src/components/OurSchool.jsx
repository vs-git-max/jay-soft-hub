import { about } from "@/helpers";
import { ArrowUpRight } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const OurSchool = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-5 px-8 py-10">
      <div className="flex flex-col  gap-5 ">
        <div className="flex flex-col items-start gap-5 ">
          <span className="text-blue-950 underline font-semibold ">
            Empower
          </span>
          <h1 className="text-blue-950 font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Unlock your creative potential with our courses
          </h1>
          <p className="text-blue-950/95 font-medium text-sm sm:max-w-lg lg:max-w-3xl">
            Our school offers a unique blend of practical skills and theoretical
            knowledge, ensuring you are job-ready. With hands-on projects, you
            will gain real-world experience while mastering essential software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full self-center">
          {about.map((item) => (
            <div
              className="shadow-blue-950/70 transform transition-all hover:-translate-2 duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 hover:shadow-xl p-6 rounded-2xl shadow-sm"
              key={item.title}
              onClick={() => navigate(item.link)}
            >
              <div className="lg:w-64 w-48 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover h-full w-full aspect-square rounded-lg"
                />
              </div>
              <h1 className="text-blue-950 font-extrabold text-xl ">
                {item.title}
              </h1>
              <p className="text-blue-950/95 font-medium text-sm sm:max-w-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="bg-amber-800 text-[#f0f8ff] text-[16px] font-bold flex items-center gap-3 py-2 px-4 group hover:bg-amber-700 transition-all duration-300 rounded-full shadow-amber-600 shadow shadow-xl"
            onClick={() => navigate("/enroll")}
          >
            Enroll now
            <ArrowUpRight className="group-hover:rotate-45 duration-300 transition-transform size-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurSchool;
