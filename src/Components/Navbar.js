import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const location = useLocation();

  
  const handleClickOutside = (event) => {
    if (!event.target.closest(".relative")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarBackgroundColor = () => {
    const isPhoneMode = window.innerWidth <= 1023;
    if (isPhoneMode && menuOpen) {
      return `linear-gradient(to right, rgba(232, 210, 236), rgba(200, 220, 255), rgba(180, 205, 255))`;
    }
    if (location.pathname === "/") {
      const viewportHeight = window.innerHeight;
      const maxScroll = viewportHeight * 0.2;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
      const alpha = scrollFraction;
      return `linear-gradient(to right, rgba(232, 210, 236, ${alpha}), rgba(200, 220, 255, ${alpha}), rgba(180, 205, 255, ${alpha}))`;
    } else {
      return `linear-gradient(to right, rgba(232, 210, 236), rgba(200, 220, 255), rgba(180, 205, 255))`;
    }
  };

  const getNavbarTextColor = () => {
    if (location.pathname === "/") {
      const viewportHeight = window.innerHeight;
      const maxScroll = viewportHeight * 0.2;
      const scrollFraction = Math.min(scrollPosition / maxScroll, 1);
      return scrollFraction > 0.5 ? "rgba(0, 0, 0, 1)" : "rgba(0, 0, 0, 1)";
    } else {
      return "rgba(0, 0, 0, 1)";
    }
  };

  return (
    <nav
      className="fixed top-0 w-full transition-colors duration-500 ease-in-out z-[1000] desktop:pt-3 desktop:pb-3 desktop:pl-4 laptop:pt-3 laptop:pb-3 laptop:pl-4 phone:pt-1"
      style={{
        background: getNavbarBackgroundColor(),
        color: getNavbarTextColor(),
      }}
    >
      <div className="px-6 mx-auto lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between flex-grow">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold tracking-widest uppercase">
                <Link
                  to="/"
                  className="no-underline"
                  style={{ color: getNavbarTextColor() }}
                >
                  Sahana Deepak
                </Link>
              </h1>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-center">
                <Link
                  to="/"
                  className="flex flex-row items-center px-3 py-2 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">Home</span>
                </Link>
                <Link
                  to="/about"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">About Me</span>
                </Link>
                <Link
                  to="/experience"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">Experience</span>
                </Link>
                <Link
                  to="/resume"
                  className="flex flex-row items-center px-3 py-2 ml-4 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
                  style={{ color: getNavbarTextColor() }}
                >
                  <span className="ml-2">Resume</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex -mr-2 lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              aria-label={menuOpen ? "Close main menu" : "Main menu"}
              aria-expanded={menuOpen}
            >
              <svg
                className="w-8 h-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 4 22 22"
              >
                <path
                  className={`${menuOpen ? "hidden" : "inline-flex"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={`${menuOpen ? "inline-flex" : "hidden"}`}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${menuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="container px-2 mx-auto">
          <div className="pt-2 pb-3">
            <Link
              to="/"
              className="flex flex-row items-center px-3 py-2 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">Home</span>
            </Link>
            <Link
              to="/about"
              className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">About me</span>
            </Link>
            <Link
              to="/experience"
              className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">Experience</span>
            </Link>
            <Link
              to="/resume"
              className="flex flex-row items-center px-3 py-2 mt-1 text-lg no-underline font-medium rounded-md focus:outline-none transition-colors duration-500 ease-in-out"
              style={{ color: getNavbarTextColor() }}
            >
              <span className="ml-2">Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
