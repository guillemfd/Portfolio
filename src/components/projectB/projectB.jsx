import './projectB.css'
import githubLogo from '../../img/github_icon.png'
import { Link } from 'react-router-dom'

const ProjectB = ({ img, link, title, tagline, github, techs, description}) => {


    return (
        <div className='p-card'>
            <div className='p'>
                <p className='p-headerB'>{title}</p>
                <a href={link} target="_blank" rel="noreferrer" >
                    <img src={img} alt="projectIMG" className="p-img" />
                    <div className="techs-on-hover">
                        <img src={techs} alt="techsIMG" className="p-techs" />
                    </div>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <button className='p-button'>
                        <img
                            src={githubLogo}
                            alt="githubLogo"
                            className="githubLogo" />
                    </button>
                </a>
            </div>
            <div className='p-desc-wrap'>
                {/* <p className='p-disc'>💾</p> */}
                <p className='p-description'>{description}</p>
            </div>
            {/* <p className='p-techs-text'>Languages & Frameworks || Libraries & Tools</p>
            <img src={techs} alt="techsIMG" className="p-techs" /> */}
        </div>
    )
}

export default ProjectB