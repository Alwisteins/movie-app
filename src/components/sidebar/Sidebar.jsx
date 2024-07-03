import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, navMenu } from "./navLinks";

export const Sidebar = () => {
  const [active, setActive] = useState("");
  return (
    <div className="py-10 w-[15rem] h-screen fixed space-y-12 bg-gray-700 text-gray-300">
      <h1 className="text-lg text-center font-semibold text-white">
        Dashboard Analytics
      </h1>
      <ul>
        {navLinks.map((nav) => (
          <li
            key={nav.name}
            onClick={() => setActive(nav.name)}
            className={`${
              active == nav.name ? "bg-gray-600 border-l-2 border-white" : ""
            }  py-3 px-10 text-sm`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {navMenu.map((nav) => (
          <li
            key={nav.name}
            onClick={() => setActive(nav.name)}
            className={`${
              active == nav.name ? "bg-gray-600 border-l-2 border-white" : ""
            }  py-3 px-10 text-sm`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
