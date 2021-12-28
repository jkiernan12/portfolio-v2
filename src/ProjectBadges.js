import './ProjectBadges.css'

const ProjectBadges = ({tech}) => {
  console.log(tech.frontend)
  return (
    <ul className="project--badges">
      {tech.frontend.map(el => <li className="badge--green">{el}</li>)}
      {tech.backend.map(el => <li className="badge--blue">{el}</li>)}
      {tech.testing.map(el => <li className="badge--purple">{el}</li>)}
    </ul>
  )
}

export default ProjectBadges;