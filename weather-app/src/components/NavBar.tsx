import React from "react";
import { IoMdSunny } from "react-icons/io";
import { MdMyLocation } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import SearchBox from "./SearchBox";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <IoMdSunny className="text-3xl mt-1 text-yellow-300" />
        </div>

        <section className="ml-[40rem] flex gap-2 items-center">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <IoLocationOutline className="text-3xl" />
          <p className="text-slate-900/80 text-sm">Pakistan</p>
        </section>

        <section>
          <SearchBox />
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
