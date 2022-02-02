import './Projects.css'
import ProjectCard from './ProjectCard';
import rancidGif from './assets/rancid-gif.gif';
import tripsGif from './assets/trips-a-lot-gif.gif';
import shoreLeavePNG from './assets/shore-leave1.png';
import llBingo from './assets/llbingo-1.png';

const Projects = () => {
  return (
    <section id="projectSection" className="project-section">
      <h2>Projects</h2>
      <div className="projects--container">
        <ProjectCard 
        right="true"
          title="Latitude Longitude Bingo"
          image={llBingo}
          description={`Inspired by a pen-and-paper classroom game, this app helps students learn map reading skills and basic geography. Players are given latitude and longitude coordinates, and they must find the corresponding country on a bingo card.

          This project required our team of three to build out our first backend and a React frontend over the course of a week. Despite the tight timeline, our project was a success and won second place in Turing's Demo Competition.`}
          tech={{
              backend: ['PostgreSQL', 'Express', 'Node.js', 'Knex.js'],
              frontend: ['Leaflet.js', 'React', 'React Router'],
              testing: ['Cypress']
              }}
          deploy="https://latitude-longitude-bingo.herokuapp.com/"
          repo="https://github.com/jkiernan12/latitude-longitude-bingo"
          
        />
        <ProjectCard 
          title="Shore Leave"
          image={shoreLeavePNG}
          description={`A trip planning tool for boaters that integrates several APIs to gather data about marinas, points of interest, map tiles, and travel times. Users can create trips based on a date and a selected marina and save destinations (restaurants, stores, entertainment, etc) near their marina. This project presented a number of challenges: implementing a map, collating data from several APIs, creating multiple pages, and manipulating multidimensional objects. However, I was still able to build out an MVP within the five day deadline with 90 percent test coverage with Cypress.`}
          tech={{
            backend: ['RESTful APIs'],
            frontend: ['React', 'Leaflet.js', 'React Router'],
            testing: ['Cypress']
              }}
          repo="https://github.com/jkiernan12/shore-leave"
          deploy="https://shore-leave.herokuapp.com/"
        />
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