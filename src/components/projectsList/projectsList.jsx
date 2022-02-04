import Project from '../project/project'
import './projectsList.css'
import { projects } from '../../data'


const ProjectsList = () => {


    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Web Development</h1>
                <p className="pl-desc">
                    From simple games to MERN applications, from backend to frontend.
                </p>
            </div>
            <div className="pl-list">
            {projects.map((project) => (
                <Project key={project.id} img={project.img} link={project.link}/>
            ))}
            </div>
        </div>
    )
}

export default ProjectsList