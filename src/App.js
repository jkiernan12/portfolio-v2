import profile from './assets/profile-pic.jpeg';
import './App.css';
import Header from './Header';
import Socials from './Socials';

function App() {
  return (
    <div className="App">
    <Header />
    <Socials />
    <div className="intro">
    <img src={profile} className="intro--image"/>
    <section className="intro--text">
    <h1 className="intro--heading">John Kiernan</h1>
    <h2>[ software engineer, rock climber, 
human being ]</h2>
    </section>
    </div>
    <div className='plop'>
      
    </div>
    </div>
  );
}

export default App;
