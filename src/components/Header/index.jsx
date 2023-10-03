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
                >
                  GAMES
                </a>
              </li>
              <li className={`font-medium cursor-pointer`}>
                <a
                  href="#contact"
                  className={`header-link group flex w-full items-center gap-1 rounded-md transition-all ease-in duration-200 px-2 py-2 text-lg max-md:px-1`}
                >
                  CONTACT
                </a>
              </li>
            </ul>
            <div className="ml-6">
              <button
                onClick={toggleTheme}
                className={`p-3 transition-all duration-150 ease-in rounded-[0.375rem] ${
                  theme === "dark-theme"
                    ? "bg-[#FBD38D] hover:bg-[#F6AD55]"
                    : "bg-[#805AD5] hover:bg-[#6B46C1]"
                }`}
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
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center rounded-md x-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <div className="menu max-[700px]:flex md:hidden cursor-pointer rounded-[0.375rem] p-3">
                  <HiMenuAlt2 color={"white"} />
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-bottom-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {() => (
                      <a
                        href="#games"
                        className={`header-link text-black hover:bg-[#ccc] group mb-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-md`}
                      >
                        GAMES
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {() => (
                      <a
                        href="#contact"
                        className={`header-link text-black hover:bg-[#ccc] group flex mt-2 w-full items-center gap-2 rounded-md px-2 py-2 text-md`}
                      >
                        CONTACT
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
