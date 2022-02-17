import { useState } from 'react'
import close from '../../../img/whiteCross.png'
import img1 from '../../../img/GalleryFour/GalleryFour-1.jpg'
import img2 from '../../../img/GalleryFour/GalleryFour-2.jpg'
import img3 from '../../../img/GalleryFour/GalleryFour-3.jpg'
import img4 from '../../../img/GalleryFour/GalleryFour-4.jpg'
import img5 from '../../../img/GalleryFour/GalleryFour-5.jpg'
import img6 from '../../../img/GalleryFour/GalleryFour-6.jpg'



const GalleryFour = () => {

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
  ]


  const [modal, setModal] =useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }


  return (
    <>
        <h1 className="g-title">Single-family house in the outskirts</h1>
        <p className="g-desc">
            Shooting session to a single-family house in the suburban area of Gavà, at the outskirts of Barcelona. Elegant, stately stairs, bright and surrounded by mediterranean natural greenery and a magnificent heated pool.
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
    </>        
  );
};

export default GalleryFour;