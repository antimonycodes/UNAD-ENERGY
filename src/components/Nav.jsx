import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutUs" },
    { name: "Project", path: "/project" },
    { name: "Store", path: "/store" },
    { name: "FAQs", path: "/faqs" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between ">
      <img
        src="/logo.png"
        alt="Logo"
        width={70}
        className="z-10 md:mx-0 hidden md:block mx-auto"
      />
      <div className="hidden md:flex list-none items-center  gap-8">
        {navLinks.map((navlink, index) => (
          <li key={index} className=" ">
            <Link to={navlink.path}>{navlink.name}</Link>
          </li>
        ))}
      </div>
      <div className={` md:hidden z-10 ${menuOpen ? "pl-[70%]" : null}`}>
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 focus:outline-none"
        >
          <div
            className={`block w-full h-1 bg-[#757E9F] transition-transform duration-300 ${
              menuOpen ? "transform rotate-45 translate-y-2.5" : ""
            }`}
          ></div>
          <div
            className={`block w-full h-1 bg-[#757E9F] mt-1.5 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`block w-full h-1 bg-[#757E9F] mt-1.5 transition-transform duration-300 ${
              menuOpen ? "transform -rotate-45 -translate-y-2.5" : ""
            }`}
          ></div>
        </button>
      </div>
      {menuOpen && (
        <div>
          <div className="absolute top-0 left-0  h-screen bg-white flex  flex-col-reverse text-darkText w-[80%] list-none items-center justify-center md:hidden">
            {navLinks.map((navlink, index) => (
              <div key={index} className=" mt-[-6rem]">
                <Link to={navlink.path}>
                  <li className="mb-4 text-xl">{navlink.name}</li>
                </Link>
              </div>
            ))}
            <img
              src="/logo.png"
              alt="Logo"
              width={100}
              className="absolute left-1/2 top-[2rem] transform -translate-x-1/2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
