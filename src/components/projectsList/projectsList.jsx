import Project from '../project/project'
import './projectsList.css'

const ProjectsList = () => {


    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiti
                    Beautiful homes, stunning portfolio styles & a whole lot n
                    inside.
                </p>
            </div>
            <div className="pl-list">
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />

            </div>
        </div>
    )
}

export default ProjectsList