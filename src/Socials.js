import github from './assets/github.png';
import email from './assets/email.png';
import linkedin from './assets/linkedin.png';
import './Socials.css';
import anime from 'animejs';

const Socials = ({atBottom}) => {
  if (atBottom) {
    const pixelsTop = window.pageYOffset + document.querySelector('#contactElements').getBoundingClientRect().top;
    console.log(pixelsTop)

    anime({
      targets: '.socials',
      left: '47%',
      bottom: '20%',
      scale: 2,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials-list',
      rotate: 90,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials--icon',
      rotate: -90,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials--line',
      height: 0,
      opacity: 0
    })

  } else {
    anime({
      targets: '.socials',
      left: 0,
      bottom: 0,
      scale: 1,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials-list',
      rotate: 0,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials--icon',
      rotate: 0,
      easing: 'easeInOutExpo',
      duration: 250
    })
    anime({
      targets: '.socials--line',
      height: 90,
      opacity: 1,
      easing: 'easeInOutExpo',
      duration: 250
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