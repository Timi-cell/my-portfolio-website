import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import {
  FolderKanban,
  House,
  Mail,
  Menu,
  Moon,
  Sun,
  UserRound,
  Wrench,
  X,
} from "lucide-react";

const navIcons = {
  "": House,
  about: UserRound,
  tools: Wrench,
  projects: FolderKanban,
  contact: Mail,
};

const Navbar = ({ theme, setTheme }) => {
  const [active, setActive] = useState("");
  const [hoveredNav, setHoveredNav] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!toggle) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setToggle(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggle]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 ${scrolled ? "bg-primary" : "bg-tertiary"} fixed top-0 ${toggle ? "z-[60]" : "z-20"} transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-cover"
            style={{ borderRadius: "30px" }}
          />
          <div style={{ marginRight: "10px" }}>
            <p className="text-foreground text-[18px] font-bold cursor-pointer flex">
              THE CRACK DEV.
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden lg:flex flex-row items-center gap-7">
          {navLinks.map((nav) => (
            <li
              key={nav.title}
              className="relative"
              onMouseEnter={() => setHoveredNav(nav.id)}
              onMouseLeave={() => setHoveredNav(null)}
              onFocusCapture={() => setHoveredNav(nav.id)}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setHoveredNav(null);
                }
              }}
            >
              <a
                href={`#${nav.id}`}
                aria-label={nav.title}
                onClick={() => {
                  setActive(nav.title);
                  setHoveredNav(null);
                }}
                className={`relative flex h-9 w-9 items-center justify-center rounded-lg ${active === nav.title ? "text-foreground" : "text-secondary"} hover:text-foreground focus-visible:text-foreground focus-visible:outline-none`}
              >
                {React.createElement(navIcons[nav.id] ?? House, {
                  size: 20,
                  "aria-hidden": true,
                })}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute left-1/2 top-full z-50 mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-tertiary px-2.5 py-1 text-xs font-medium text-foreground shadow-lg transition-[opacity,transform] duration-200 ease-out ${hoveredNav === nav.id ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}
                >
                  {nav.title}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="relative z-50 ml-auto lg:ml-6 mr-2 lg:mr-0 p-2 rounded-full text-foreground hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <button
          type="button"
          aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={toggle}
          aria-controls="mobile-navigation"
          onClick={() => setToggle((open) => !open)}
          className="relative z-50 lg:hidden p-2 rounded-full text-foreground hover:bg-foreground/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          {toggle ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <button
        type="button"
        tabIndex={toggle ? 0 : -1}
        aria-label="Close navigation menu"
        onClick={() => setToggle(false)}
        className={`fixed inset-0 z-30 bg-black/45 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${toggle ? "opacity-100" : "pointer-events-none opacity-0"}`}
      />

      <aside
        id="mobile-navigation"
        aria-hidden={!toggle}
        className={`fixed top-0 right-0 z-40 h-[100dvh] w-1/2 min-w-[240px] max-w-[380px] overflow-y-auto border-l border-foreground/10 bg-tertiary px-7 pb-10 pt-28 shadow-2xl transition-all duration-300 ease-out lg:hidden ${toggle ? "visible translate-x-0 opacity-100" : "invisible translate-x-full opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((nav) => {
            const Icon = navIcons[nav.id] ?? House;

            return (
              <li key={nav.title}>
                <a
                  href={`#${nav.id}`}
                  tabIndex={toggle ? 0 : -1}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                  className={`flex items-center gap-4 rounded-lg px-3 py-4 text-lg font-medium transition-colors hover:bg-foreground/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-foreground ${active === nav.title ? "text-foreground" : "text-secondary"}`}
                >
                  <Icon size={21} aria-hidden="true" />
                  <span>{nav.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </aside>
    </nav>
  );
};

export default Navbar;
