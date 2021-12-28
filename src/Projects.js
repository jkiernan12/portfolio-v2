import './Projects.css'
import ProjectCard from './ProjectCard';


const Projects = () => {
  return (
    <section className="project-section">
      <h2>Projects</h2>
      <div className="projects--container">
      <ProjectCard 
      right="true"
        title="Rancid Tomatillos"
        description={`Are you tired of all those 【ｍａｉｎｓｔｒｅａｍ】movie databases? Probably not. Regardless, we present Rancid Tomatillos, a UI for exploring movie posters, details and trailers.

        Are you tired of all those 【ｍａｉｎｓｔｒｅａｍ】movie databases? Probably not. Regardless, we present Rancid Tomatillos, a UI for exploring movie posters, details and trailers.

This project uses React, React Router and data pulled from a RESTful API to display a dashboard of movies. Select a movie to learn more about it.`}
        tech={{
            backend: ['RESTful API'],
            frontend: ['HTML/CSS', 'React', 'React Router'],
            testing: ['Cypress']
            }}
        deploy="https://jkiernan12.github.io/rancid-tomatillo/"
        repo="https://github.com/jkiernan12/rancid-tomatillo"
      />
      <ProjectCard 
        title="Rancid Tomatillos"
        description={`Are you tired of all those 【ｍａｉｎｓｔｒｅａｍ】movie databases? Probably not. Regardless, we present Rancid Tomatillos.

This project uses React, React Router and data pulled from a RESTful API to display a dashboard of movies. Select a movie to learn more about it.`}
        tech={{
            backend: ['RESTful API'],
            frontend: ['HTML/CSS'],
            testing: ['Cypress']
            }}
        deploy="https://jkiernan12.github.io/rancid-tomatillo/"
        repo="https://github.com/jkiernan12/rancid-tomatillo"
      />
      <ProjectCard right="true"/>
      </div>
    </section>
  )
}

export default Projects;