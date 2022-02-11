import './galleryOne.css'
import { useState } from 'react'
import close from '../../../img/whiteCross.png'
import img1 from '../../../img/GalleryOne/MiniGeensen-1.jpg'
import img2 from '../../../img/GalleryOne/MiniGeensen-2.jpg'
import img3 from '../../../img/GalleryOne/MiniGeensen-3.jpg'
import img4 from '../../../img/GalleryOne/MiniGeensen-4.jpg'
import img5 from '../../../img/GalleryOne/MiniGeensen-5.jpg'
import img6 from '../../../img/GalleryOne/MiniGeensen-6.jpg'
import img7 from '../../../img/GalleryOne/MiniGeensen-7.jpg'
import img8 from '../../../img/GalleryOne/MiniGeensen-8.jpg'
import img9 from '../../../img/GalleryOne/MiniGeensen-9.jpg'
import img10 from '../../../img/GalleryOne/MiniGeensen-10.jpg'
import img11 from '../../../img/GalleryOne/MiniGeensen-11.jpg'
import img12 from '../../../img/GalleryOne/MiniGeensen-12.jpg'
import img13 from '../../../img/GalleryOne/MiniGeensen-13.jpg'
import img14 from '../../../img/GalleryOne/MiniGeensen-14.jpg'
import img15 from '../../../img/GalleryOne/MiniGeensen-15.jpg'
import img16 from '../../../img/GalleryOne/MiniGeensen-16.jpg'
import img17 from '../../../img/GalleryOne/MiniGeensen-17.jpg'
import img18 from '../../../img/GalleryOne/MiniGeensen-18.jpg'
import img19 from '../../../img/GalleryOne/MiniGeensen-19.jpg'
import img20 from '../../../img/GalleryOne/MiniGeensen-20.jpg'
import img21 from '../../../img/GalleryOne/MiniGeensen-21.jpg'
import Contact from '../../../components/contact/contact'


const GalleryOne = () => {

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },    
    {
      id: 3,
      imgSrc: img3,
    },    
    {
      id: 4,
      imgSrc: img4,
    },   
    {
      id: 5,
      imgSrc: img5,
    },    
    {
      id: 6,
      imgSrc: img6,
    },    
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },    
    {
      id: 13,
      imgSrc: img13,
    },    
    {
      id: 14,
      imgSrc: img14,
    },   
    {
      id: 15,
      imgSrc: img15,
    },    
    {
      id: 16,
      imgSrc: img16,
    },    
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
  ]


  const [modal, setModal] =useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }


  return (
    <>
        <h1 className="g-title">Architect's office</h1>
        <p className="g-desc">
            Shooting session to a small, cozy and polite style architect's office. Wooden finishes, hidden illumination.
        </p>

        <div className={modal? "modal open" : "modal"}>
          <img src={tempImgSrc} alt="modal" className='modalImg'/>
          <img src={close} alt="closeCross" className='closeCross' onClick={() => setModal(false)}/>
        </div>

        <div className="gallery">
          {data.map((item, index) =>{
              return(
                  <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                      <img src={item.imgSrc} alt={item.id} style={{width: '100%'}} className="pics-img"/>
                  </div>
              )
          })}
        </div>
        <Contact />
    </>        
  );
};

export default GalleryOne;