import { courses } from "@/helpers";
import React from "react";
import { useNavigate } from "react-router-dom";

const CoursesIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-8 w-full px-6 py-8 flex flex-col items-center">
      <div className="max-w-5xl">
        <h1 className="text-center font-extrabold text-blue-950 text-xl md:text-2xl lg:text-4xl">
          Explore Our Comprehensive Courses in CAD, Web Development and Graphic
          Design Softwares
        </h1>
      </div>
      <div className="gap-5 grid grid-cols-1 lg:grid-cols-3 mt-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="cursor-pointer p-5 bg-blue-950 flex items-center justify-center gap-4 rounded-xl shadow-xl shadow-blue-950/50 flex-col max-w-3xl md:max-w-4xl"
            onClick={() => navigate(course.link)}
          >
            <div className="lg:w-72 w-56 md:w-64">
              <img
                src={course.image}
                alt={course.title}
                className="object-cover h-full w-full aspect-square rounded-lg"
              />
            </div>
            <h1 className="text-[#f0f8ff] font-extrabold text-xl ">
              {course.title}
            </h1>
            <p className="text-[#faf0e6] font-medium text-sm sm:max-w-lg">
              {course.description}
            </p>
            <p className="text-orange-600 text-lg font-medium">Learn more...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesIntro;
