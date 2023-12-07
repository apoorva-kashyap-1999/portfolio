import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <ul className="flex flex-row px-[30%] flex-wrap">
        <li className="p-2 m-2 list-none text-xl border  border-black rounded-lg  hover:bg-slate-200">
          <a href="#about">About Me</a>
        </li>
        <li className="p-2 m-2 list-none text-xl border  border-black rounded-lg  hover:bg-slate-200">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-2 m-2 list-none text-xl border border-black rounded-lg  hover:bg-slate-200">
          <a href="#contact">Contacts</a>
        </li>
        <li className="p-2 m-2 list-none text-xl border  border-black rounded-lg  hover:bg-slate-200">
          <a href="#career">Career Summary</a>
        </li>
        <li className="p-2 m-2 list-none text-xl border  border-black rounded-lg  hover:bg-slate-200">
          <a href="#achievement">Achivements</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
