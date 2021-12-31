import ProjectBadges from './ProjectBadges';
import './ProjectCard.css';

const ProjectCard = ({right, title, image, description, tech, deploy, repo}) => {
  const directionClasses = (right) ? 'project--container project--container__right' : 'project--container';

  return (
    <div className={directionClasses}>
    <article className="project--content">
      <img className="project--image"
        src={image}
      />
    <div className="project--text">
    <h4>{title}</h4>
    {tech && <ProjectBadges tech={tech} />}
      <p>{description}</p>
      <div>
        {deploy && <button className="project--button"><a href={deploy}>Deploy link</a></button>}
        {repo && <button className="project--button"><a href={repo}>Repo link</a></button>}
      </div>
    </div>
  </article>
  <div className="project--white">
  </div>
  <div className="project--pattern"></div>
</div>
  )
}

export default ProjectCard;