import { useState, useEffect } from 'react';
import './Contact.css';
import Socials from './Socials';

const Contact = () => {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contactSection = document.querySelector('#contactElements');
      window.addEventListener("scroll", () => {
        const elemRect = contactSection.getBoundingClientRect();
        setScrolled(window.outerHeight / 2 > elemRect.top)
      })
    }
  }, []);

  return (
    <section id="contactSection" className="contact--section">
    <h3>Get in touch</h3>
    <span id="contactElements">
    <Socials atBottom={isScrolled} />
    </span>
    </section>
  )
}

export default Contact;