import React, { useState } from "react";
import { navItems } from "../helpers";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import Logo from "./Logo";
import CallButton from "./CallButton";

const Navbar = () => {
  const location = useLocation();

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed flex items-center z-1000   justify-between bg-blue-950  trans top-0 lg:top-1 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full lg:w-[90%] lg:rounded-full px-4 py-1">
      <div className="">
        <Logo />
      </div>
      <div className="lg:flex hidden gap-6 ">
        {navItems.map((item) =>
          !location.pathname.includes("/courses") && item.children ? (
            <DropdownMenu key={item.label}>
              <DropdownMenuTrigger className="outline-none flex items-center gap-1 text-[#f0f8ff] font-bold text-[16px] ">
                {item.label}
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col">
                {item.children.map((child) => (
                  <DropdownMenuItem
                    asChild
                    className=" hover:outline-none flex flex-col"
                  >
                    <Link
                      className="text-[16px] font-medium text-blue-950 hover:bg-blue-950/10 w-full rounded-2xl px-1"
                      to={child.link}
                    >
                      {child.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              key={item.label}
              to={item.link}
              className="text-[#f0f8ff] font-bold text-[16px]  "
            >
              {item.label}
            </Link>
          )
        )}
      </div>
      <div className="hidden lg:block">
        <CallButton />
      </div>
      <div className="block lg:hidden">
        <button
          className="text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Menu className="size-6" />
        </button>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="w-54 p-3 bg-blue-950/95">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col items-start justify-between h-64 ">
            {navItems.map((item) =>
              item.children ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger className="outline-none  text-[#f0f8ff] font-bold text-xl hover:bg-blue-950/90  rounded-full px-2 py-0.5 flex items-center gap-3">
                    {item.label}
                    <ChevronDown />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#f0f8ff] flex flex-col items-start gap-4 p-2">
                    {item.children.map((child) => (
                      <DropdownMenuItem
                        asChild
                        className="hover:outline-none flex flex-col"
                      >
                        <Link
                          onClick={() => setOpen(false)}
                          to={child.link}
                          key={child.label}
                          className="text-lg font-medium text-blue-950 hover:bg-blue-950/10 w-full rounded-2xl px-1"
                        >
                          {child.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  onClick={() => setOpen(false)}
                  to={item.link}
                  key={item.label}
                  className="text-[#f0f8ff] font-bold text-xl hover:bg-blue-950/90 w-full rounded-full px-2 py-0.5"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <SheetDescription>
            The best online school for your personal growth in skills
          </SheetDescription>
          <SheetFooter>
            <CallButton />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
