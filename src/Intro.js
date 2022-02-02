import './Intro.css';
import profile from './assets/profile-pic.jpeg';

const Intro = () => {
  return (
    <div className="intro" id="introSection">
      <div className="image--container">
        <img src={profile} className="intro--image"/>
        <div className="image--pattern"></div>
      </div>
      <section className="intro--text">
        <h1 className="intro--heading">John Kiernan</h1>
        <h2>[ software engineer, former digital marketer, 
    human being ]</h2>
      </section>
    </div>
  )
}

export default Intro;