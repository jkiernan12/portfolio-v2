import './ProjectBadges.css'

const ProjectBadges = ({tech}) => {
  return (
    <ul className="project--badges">
      {tech.frontend.map(el => <li key={el + 'ID'}  className="badge--green">{el}</li>)}
      {tech.backend.map(el => <li key={el + 'ID'}  className="badge--blue">{el}</li>)}
      {tech.testing.map(el => <li key={el + 'ID'} className="badge--purple">{el}</li>)}
    </ul>
  )
}

export default ProjectBadges;