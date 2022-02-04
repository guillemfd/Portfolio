import './project.css'

const Project = ({ img, link}) => {


    return (
        <div className='p'>
            <div className='p-header'>
                <div className='p-dot1'></div>
                <div className='p-dot2'></div>
                <div className='p-dot3'></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Project