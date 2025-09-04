import React from "react";
import { Outlet } from "react-router-dom";

const AuthPage = () => {
  return (
    <div className="flex w-full h-screen lg:flex-row flex-col ">
      <div className=" lg:flex-1/2 bg-blue-950 flex items-center justify-center lg:h-full h-1/3">
        <div className="">
          <h1 className=" text-4xl font-extrabold text-[#f0f8ff] lg:text-5xl tracking-tight">
            Welcome to <span className="text-orange-600">Jay Soft Hub</span>
          </h1>
          <p className="text-xl font-medium text-[#f0f8ff9a] text-center">
            The home of all your soft skills
          </p>
        </div>
      </div>
      <div className="grid lg:flex-1/2 place-items-center h-2/3 lg:h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthPage;
