import './Intro.css';
import profile from './assets/profile-pic.jpeg';

const Intro = () => {
  return (
    <div className="intro">
      <img src={profile} className="intro--image"/>
      <section className="intro--text">
        <h1 className="intro--heading">John Kiernan</h1>
        <h2>[ software engineer, rock climber, 
    human being ]</h2>
      </section>
    </div>
  )
}

export default Intro;