import Project from '../project/project'
import './projectsList.css'
import { projects } from '../../data'


const ProjectsList = () => {


    return (
        <div className='pl' id="ProjectsList">
            <div className="pl-texts">
                <h1 className="pl-title">Web Development</h1>
                <p className="pl-desc">
                    From simple games to MERN applications, from backend to frontend.
                </p>
            </div>
            <div className="pl-list">
            {projects.map((project) => (
                <Project key={project.id} img={project.img} techs={project.techs} github={project.github} link={project.link} tagline={project.tagline} description={project.description} title={project.title}/>
            ))}
            </div>
        </div>
    )
}

export default ProjectsList