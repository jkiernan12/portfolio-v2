import { useState, useEffect } from 'react';
import './Contact.css';
import Socials from './Socials';
import github from './assets/github-svgrepo-com.svg';
import email from './assets/email-svgrepo-com.svg';
import linkedin from './assets/linkedin-svgrepo-com.svg';
import anime from 'animejs';

const Contact = () => {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 650 ) {
        setScrolled(true)
      } else {
        const contactSection = document.querySelector('#contactElements');
      window.addEventListener("scroll", () => {
        const elemRect = contactSection.getBoundingClientRect();
        setScrolled(window.innerHeight > elemRect.top);
      })
      }
      
    }
  }, []);

  return (
    <section id="contactSection" className="contact--section">
    <h2 className="contact--title" id="contactTitle">Get in touch</h2>
    <p>Have a question about me, my experience or one of my projects? Reach out! Or stalk me on GitHub or LinkedIn if that's more your thing.</p>
    <Socials atBottom={isScrolled} />
    <ul id="contactElements" className="contact--list">
        <li className="contact--icon"><a href="mailto:john@johnkiernan.com" taret="_blank"><img src={email} width="24"/></a></li>
        <li className="contact--icon"><a href="https://www.linkedin.com/in/johnfkiernan/" target="_blank"><img src={linkedin} width="24"/></a></li>
        <li className="contact--icon"><a href="https://github.com/jkiernan12" target="_blank"><img src={github} width="24"/></a></li>
      </ul>
    </section>
  )
}

export default Contact;