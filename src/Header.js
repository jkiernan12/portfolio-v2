import { useEffect, useState } from 'react';
import './Header.css';

const scrollPage = (element) => {
  const selection = document.getElementById(element);
  selection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Header = () => {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        setScrolled(window.pageYOffset > 4)
      })
    }
  }, []);

  return (
    <header className={`header ${isScrolled ? "header__scrolled": ""}`}>
      <span className={`header--logo ${isScrolled ? "header--logo__scrolled": ""}`} onClick={() => scrollPage('introSection')}>JFK</span>
      <nav className={`nav ${isScrolled ? "nav__scrolled": ""}`}>
        <button className={`nav--button ${isScrolled ? "nav--button__scrolled": ""}`} onClick={() => scrollPage('aboutSection')}>About Me</button>
        <button className={`nav--button ${isScrolled ? "nav--button__scrolled": ""}`} onClick={() => scrollPage('projectSection')}>Projects</button>
        <button className={`nav--button ${isScrolled ? "nav--button__scrolled": ""}`} onClick={() => scrollPage('contactSection')}>Contact</button>
      </nav>
    </header>
  )
}

export default Header;