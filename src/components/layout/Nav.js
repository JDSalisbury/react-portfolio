import "./Nav.css";
import name from "./name_font.jpg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage and system preference on mount
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setIsDarkMode(shouldBeDark);
    document.documentElement.setAttribute('data-theme', shouldBeDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    const themeValue = newTheme ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', themeValue);
    localStorage.setItem('theme', themeValue);
  };

  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <img src={name} className="name-logo" alt="logo" />
        </Link>
        <nav className="menu">
          <ul id="menu-primary-items">
            <li id="menu-item-92">
              <Link to="/">Home</Link>
            </li>
            <li id="menu-item-88">
              <Link to="/projects">Work</Link>
            </li>
            <li id="menu-item-93">
              <Link to="/about">About</Link>
            </li>
            <li id="menu-item-91">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
