import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <span className="header--logo">JFK</span>
      <nav className="nav">
        <button className="nav--button">About Me</button>
        <button className="nav--button">Projects</button>
        <button className="nav--button">Contact</button>
      </nav>
    </header>
  )
}

export default Header;