import './Projects.css'
import ProjectCard from './ProjectCard';
import rancidGif from './assets/rancid-gif.gif';
import tripsGif from './assets/trips-a-lot-gif.gif';

const Projects = () => {
  return (
    <section id="projectSection" className="project-section">
      <h2>Projects</h2>
      <div className="projects--container">
      <ProjectCard 
      right="true"
        title="Rancid Tomatillos"
        image={rancidGif}
        description={`Are you tired of all those 【ｍａｉｎｓｔｒｅａｍ】movie databases? Probably not. Regardless, we present Rancid Tomatillos, a UI for exploring movie posters, details and trailers.

This project uses React, React Router and data pulled from a RESTful API to display a dashboard of movies. Select a movie to learn more about it.`}
        tech={{
            backend: ['RESTful API'],
            frontend: ['HTML/CSS', 'ES6 Javascript', 'React', 'React Router'],
            testing: ['Cypress']
            }}
        deploy="https://jkiernan12.github.io/rancid-tomatillo/"
        repo="https://github.com/jkiernan12/rancid-tomatillo"
        
      />
      <ProjectCard 
        title="Trips-a-Lot"
        image={tripsGif}
        description={`A vanilla JS app that simulates a travel agencies database. Users can view past and future vacations and request new vacations. `}
        tech={{
          backend: ['RESTful API'],
          frontend: ['HTML/CSS', 'ES6 Javascript', 'ESLint'],
          testing: ['Mocha/Chai']
            }}
        repo="https://github.com/jkiernan12/travel-tracker"
      />
      </div>
    </section>
  )
}

export default Projects;