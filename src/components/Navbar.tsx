import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};


function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setScrolled(true);
      return;
    } else {
      setScrolled(false);
    }

    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    let timeoutId = 0;

    if (menuOpen) {
      timeoutId = setTimeout(() => {
        setScrolled(false);
      }, 200);
    } else {
      if (!isHomePage) {
        setScrolled(true);
      } else {
        setScrolled(window.scrollY > 50);
      }
    }

    return () => {
      clearTimeout(timeoutId);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="logo-section">
          <span className="logo-text">
            <NavLink to="/"><span className="highlight">teuos</span>.net</NavLink>
          </span>
        </div>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/socials">Socials</NavLink>

          <button 
            className={`dark-mode-button ${darkMode ? "dark" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            >
            <span className="sun-core"></span>
            <span className="sun-dot dot-1"></span>
            <span className="sun-dot dot-2"></span>
            <span className="sun-dot dot-3"></span>
            <span className="sun-dot dot-4"></span>
            <span className="sun-dot dot-5"></span>
            <span className="sun-dot dot-6"></span>
            <span className="sun-dot dot-7"></span>
            <span className="sun-dot dot-8"></span>
          </button>

        </div>

        <button
          className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"  
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      

      <div className={`mobile-menu ${menuOpen ? "mobile-menu-open" : ""}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/socials">Socials</NavLink>

        <button 
            className={`dark-mode-button ${darkMode ? "dark" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            >
            <span className="sun-core"></span>
            <span className="sun-dot dot-1"></span>
            <span className="sun-dot dot-2"></span>
            <span className="sun-dot dot-3"></span>
            <span className="sun-dot dot-4"></span>
            <span className="sun-dot dot-5"></span>
            <span className="sun-dot dot-6"></span>
            <span className="sun-dot dot-7"></span>
            <span className="sun-dot dot-8"></span>
          </button>

      </div>
    </>
  );
}

export default Navbar;