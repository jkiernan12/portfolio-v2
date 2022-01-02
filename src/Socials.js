import github from './assets/github-svgrepo-com.svg';
import email from './assets/email-svgrepo-com.svg';
import linkedin from './assets/linkedin-svgrepo-com.svg';
import './Socials.css';
import anime from 'animejs';

const Socials = ({atBottom}) => {
  if (atBottom) {
    const pixelsTop = window.pageYOffset + document.querySelector('#contactElements').getBoundingClientRect().top;

    anime({
      targets: '.socials',
      left: '-10%',
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 750
    })
    anime({
      targets: '.contact--list',
      translateY: 0,
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 750
    })

  } else {
    anime({
      targets: '.socials',
      left: 0,
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 750
    });
    anime({
      targets: '.contact--list',
      translateY: 50,
      opacity: 0,
      easing: 'easeInOutExpo',
      duration: 750
    })
    }

  return (
    <nav className="socials">
      <ul className="socials-list">
        <li className="socials--icon"><a href="mailto:jkiernan12@yahoo.com" taret="_blank"><img src={email} width="24"/></a></li>
        <li className="socials--icon"><a href="https://www.linkedin.com/in/johnfkiernan/" target="_blank"><img src={linkedin} width="24"/></a></li>
        <li className="socials--icon"><a href="https://github.com/jkiernan12" target="_blank"><img src={github} width="24"/></a></li>
        <li className="socials--line"></li>
      </ul>
    </nav>
  )
}

export default Socials;