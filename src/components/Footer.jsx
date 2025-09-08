import { footerLinks } from "@/helpers";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full mt-3 bg-blue-950 rounded-t-xl">
      <div className="px-8 mx-auto py-3 flex items-center justify-between max-w-7xl ">
        <div className="flex items-center flex-col flex-1/3">
          <Logo />
          <p className="text-lg text-center text-blue-50">
            The best online school for your personal growth and skills
          </p>
        </div>
        <div className="grid md:grid-cols-2 md:gap-10 lg:gap-5 grid-cols-1 gap-4 lg:grid-cols-4 flex-2/3">
          {footerLinks.map((link, index) => (
            <div className="flex flex-col gap-2 items-center" key={index}>
              <h1 className="text-[#f0f8ff] text-lg font-bold">{link.title}</h1>
              <div className="flex flex-col items-center gap-2">
                {link.links.map((col) => (
                  <Link
                    to={col.href}
                    className="text-blue-50 hover:underline font-medium"
                    key={col.name}
                  >
                    {col.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
