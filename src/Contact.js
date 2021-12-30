import { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isScrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contactSection = document.querySelector('#contactElements');
      
      window.addEventListener("scroll", () => {
      //   console.log(window.scrollY);
      console.log(contactSection.scrollTop)
      // console.log(window.pageYOffset)
        setScrolled(window.pageYOffset > document.body.clientHeight - contactSection.scrollHeight)
      })
    }
  }, []);

  return (
    <section id="contactSection" className="contact--section">
    <h3 className={isScrolled ? "blue" : "red"}>Get in touch</h3>
    <p id="contactElements">Click one of these</p>
    </section>
  )
}

export default Contact;