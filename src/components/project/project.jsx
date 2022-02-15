import './project.css'
import githubLogo from '../../img/github_icon.png'

const Project = ({ img, link, title, tagline, github, techs, description}) => {


    return (
        <div className='p-card'>
            <div className='p'>
                <div className='p-header'>
                    <div className='p-dot1'></div>
                    <div className='p-dot2'></div>
                    <div className='p-dot3'></div>
                    <p className='p-check'><span style={{fontWeight: 'bold'}}>{title}</span></p>
                    {/* <p className='p-check'><span style={{fontWeight: 'bold'}}>{title}</span> <br></br> <span style={{fontStyle: 'italic', fontSize: '13px'}}>{tagline}</span></p> */}
                </div>
                <a href={link} target="_blank" rel="noreferrer" >
                    <img src={img} alt="projectIMG" className="p-img" />
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
                <p className='p-disc'>💾</p>
                <p className='p-description'>{description}</p>
            </div>
            <p className='p-techs-text'>Languages & Frameworks || Libraries & Tools</p>
            <img src={techs} alt="techsIMG" className="p-techs" />
        </div>
    )
}

export default Project