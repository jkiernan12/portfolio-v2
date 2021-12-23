import github from './assets/github.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import './Socials.css';

const Socials = () => {
  return (
    <nav className="socials">
      <ul className="socials-list">
        <li className="socials--icon"><a href="mailto:jkiernan12@yahoo.com" taret="_blank"><img src={email} width="24"/></a></li>
        <li className="socials--icon"><a href="https://www.linkedin.com/in/johnfkiernan/" target="_blank"><img src={linkedin} width="24"/></a></li>
        <li className="socials--icon"><a href="https://github.com/jkiernan12" target="_blank"><img src={github} width="24"/></a></li>
      </ul>
    </nav>
  )
}

export default Socials;