import './gallery.css'
import aperture1 from '../../img/GalleryOne/aperture1.png'
import aperture2 from '../../img/GalleryOne/aperture2.png'
import aperture3 from '../../img/GalleryOne/aperture3.png'
import { Link } from 'react-router-dom'


const Gallery = ({ img, link, title }) => {


    return (
        <div className='pG-card'>
            <div className='pG'>
                <div className='pG-header'>
                    <img  src={aperture3} alt="Img2" className="pG-dot1" />
                    <img  src={aperture2} alt="Img2" className="pG-dot2" />
                    <img  src={aperture1} alt="Img2" className="pG-dot2" />
                    <p className='pG-check'><span style={{fontWeight: 'bold'}}>{title}</span></p>
                </div>
                {/* <a href={link} rel="noreferrer" > */}
                    {/* <img  src={encuadre} alt="Img2" className="pG-img2" /> */}
                    <Link to={link} >
                        <img src={img} alt="Cover_Img" className="pG-img" />
                    </Link>
                {/* </a> */}
            </div>
        </div>
    )
}

export default Gallery