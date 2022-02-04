import './gallery.css'

const Gallery = ({ img, link}) => {


    return (
        <div className='p-gallery'>
            <div className='p-header'>
                <div className='pG-dot1'></div>
                <div className='pG-dot2'></div>
                <div className='pG-dot3'></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer" >
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Gallery