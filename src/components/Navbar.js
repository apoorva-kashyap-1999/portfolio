import React from "react";

const Navbar = () => {
  return (
    <div className="flex">
      <ul className="flex flex-row px-[30%] flex-wrap">
        <li className="p-2 m-2 list-none text-xl border bottom-2 rounded-lg">
          About Me
        </li>
        <li className="p-2 m-2 list-none text-xl border bottom-2 rounded-lg">
          Projects
        </li>
        <li className="p-2 m-2 list-none text-xl border bottom-2 rounded-lg">
          Contacts
        </li>
        <li className="p-2 m-2 list-none text-xl border bottom-2 rounded-lg">
          Career Summary
        </li>
        <li className="p-2 m-2 list-none text-xl border bottom-2 rounded-lg">
          Achivements
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
