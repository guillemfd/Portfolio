import './project.css'

const Project = ({ img, link}) => {


    return (
        // <div className='p-wrapper'>
            <div className='p'>
                <div className='p-header'>
                    <div className='p-dot1'></div>
                    <div className='p-dot2'></div>
                    <div className='p-dot3'></div>
                    <p className='p-check'>Have a look!</p>
                </div>
                <div className='button-wrapper'>
                    <button className='p-button'>GitHub</button>
                </div>
                <a href={link} target="_blank" rel="noreferrer" >
                    <img src={img} alt="" className="p-img" />
                </a>
            </div>
        // </div>
    )
}

export default Project