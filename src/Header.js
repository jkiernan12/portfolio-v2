import './Header.css';

const scrollPage = (element) => {
  const selection = document.getElementById(element);
  selection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

const Header = () => {
  return (
    <header className="header">
      <span className="header--logo" onClick={() => scrollPage('introSection')}>JFK</span>
      <nav className="nav">
        <button className="nav--button" onClick={() => scrollPage('aboutSection')}>About Me</button>
        <button className="nav--button">Projects</button>
        <button className="nav--button">Contact</button>
      </nav>
    </header>
  )
}

export default Header;