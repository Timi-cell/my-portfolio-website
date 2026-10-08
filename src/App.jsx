import { useState, useEffect, useLayoutEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Projects,
  StarsCanvas,
} from "./components";
import Footer from "./components/Footer";
import { ArrowUp } from "lucide-react";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("themePreference");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
    return (window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ??
      false)
      ? "dark"
      : "light";
  });

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const systemTheme = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!systemTheme) return;
    const handleSystemThemeChange = (event) => {
      const savedTheme = localStorage.getItem("themePreference");
      if (savedTheme !== "light" && savedTheme !== "dark") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    systemTheme.addEventListener("change", handleSystemThemeChange);
    return () =>
      systemTheme.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const handleThemeChange = (nextTheme) => {
    localStorage.setItem("themePreference", nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    setTheme(nextTheme);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar theme={theme} setTheme={handleThemeChange} />
          <Hero />
        </div>
        <About />
        <Tech />
        <Projects />
        <div className="relative z-0">
          {/* <Contact /> */}
          <StarsCanvas />
          <Footer />
        </div>

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-10 right-6 z-50 bg-tertiary p-4 rounded-full border-2 border-foreground/10 hover:scale-110 transition-all shadow-lg active:scale-95 flex items-center justify-center"
          >
            <ArrowUp className="text-foreground w-7 h-7" />
          </button>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
