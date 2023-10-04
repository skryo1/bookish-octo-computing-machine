import React, { useEffect, useState, Fragment } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { Menu, Transition } from "@headlessui/react";
import { BsSun } from "react-icons/bs";
import { PiMoonStarsFill } from "react-icons/pi";
import "./header.css";
import LotusLogo from "../../assets/logo.png";

const Header = ({ theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    // To update the state and apply header style when the page scrolls
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="h-[75px]">
      {/* MAIN HEADER */}
      <nav
        className={`w-full flex items-center px-10 py-2 gap-2 fixed top-0 z-50 ${
          scrolled ? "scroll-header" : ""
        }`}
      >
        <div className="w-full flex justify-end items-center container2 mx-auto">
          <div className="flex items-center gap-2">
            <ul className="list-none hidden md:flex flex-row gap-10">
              <li className={`font-medium cursor-pointer`}>
                <a
                  href="#games"
                  className={`header-link group flex w-full items-center gap-1 transition-all ease-in duration-200 px-2 rounded-md py-2 max-md:px-1 text-lg`}
                  style={{ width: "40px", height: "40px" }} // Make the link square
                >
                  GAMES
                </a>
              </li>
              <li className={`font-medium cursor-pointer`}>
                <a
                  href="#contact"
                  className={`header-link group flex w-full items-center gap-1 rounded-md transition-all ease-in duration-200 px-2 py-2 text-lg max-md:px-1`}
                  style={{ width: "40px", height: "40px" }} // Make the link square
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="ml-6">
              <button
                onClick={toggleTheme}
                className={`p-3 transition-all duration-150 ease-in rounded-[0.375rem]`}
                style={{ width: "40px", height: "40px" }} // Make the button square
              >
                {theme === "dark-theme" ? (
                  <BsSun color="black" />
                ) : (
                  <PiMoonStarsFill color="white" />
                )}
              </button>
            </div>
          </div>
        </div>
        {/* MOBILE HEADER */}
        <div className="md:hidden text-right">
          {/* ... (existing mobile menu code) */}
        </div>
      </nav>
    </header>
  );
};

export default Header;