import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

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

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="flex items-center gap-0 md:gap-8">
      <Link to="/">
        <img
          src="/logo.png"
          alt="Logo"
          width={70}
          className=" hidden mx-auto  z-50 md:mx-0 md:block text-whiteText relative"
        />
      </Link>
      <div className="z-50 items-center hidden gap-8 list-none md:flex">
        {navLinks.map((navlink, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded-3xl font-semibold ${
              isActive(navlink.path) || hovered === index ? "bg-[#0D8F41]" : ""
            }`}
            // onMouseEnter={() => setHovered(index)}
            // onMouseLeave={() => setHovered(null)}
          >
            <Link to={navlink.path}>{navlink.name}</Link>
          </li>
        ))}
      </div>
      <div className={`md:hidden z-[999] ${menuOpen ? "pl-[70%]" : "pl-0"}`}>
        <button
          onClick={toggleMenu}
          className="relative w-8 h-8 focus:outline-none transition-all duration-500"
        >
          <div
            className={`block w-full h-1 bg-[#757E9F] transition-transform duration-700 ${
              menuOpen ? "transform rotate-45 translate-y-2.5 " : ""
            }`}
          ></div>
          <div
            className={`block w-6 h-1 bg-[#757E9F] mt-1.5 transition-opacity duration-700 ${
              menuOpen ? "opacity-0 w-full duration-300" : ""
            }`}
          ></div>
          <div
            className={`block w-4 h-1 bg-[#757E9F] mt-1.5 transition-transform duration-700 ${
              menuOpen ? "transform -rotate-45 -translate-y-2.5 w-full" : ""
            }`}
          ></div>
        </button>
      </div>
      {menuOpen && (
        <div>
          <div className=" transition-all duration-700 absolute top-0 left-0 z-50 h-screen shadow-md bg-white flex flex-col-reverse text-darkText w-[80%] list-none items-center justify-center md:hidden">
            {navLinks.map((navlink, index) => (
              <div key={index} className="mt-[-6rem]">
                <Link to={navlink.path}>
                  <li
                    className={`mb-4 text-xl ${
                      isActive(navlink.path)
                        ? "text-[#0D8F41]"
                        : "text-[whiteText]"
                    }`}
                  >
                    {navlink.name}
                  </li>
                </Link>
              </div>
            ))}
            <Link to="/">
              <img
                src="/logo.png"
                alt="Logo"
                width={100}
                className="absolute left-1/2 top-[2rem] transform -translate-x-1/2"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
