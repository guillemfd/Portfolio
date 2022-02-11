import { useState } from 'react'
import close from '../../../img/whiteCross.png'
import img1 from '../../../img/GalleryTwo/living/L- (1).jpg'
import img2 from '../../../img/GalleryTwo/living/L- (2).jpg'
import img3 from '../../../img/GalleryTwo/living/L- (3).jpg'
import img4 from '../../../img/GalleryTwo/living/L- (4).jpg'
import img5 from '../../../img/GalleryTwo/living/L- (5).jpg'
import img6 from '../../../img/GalleryTwo/living/L- (6).jpg'
import img7 from '../../../img/GalleryTwo/living/L- (7).jpg'
import img8 from '../../../img/GalleryTwo/living/L- (8).jpg'
import img9 from '../../../img/GalleryTwo/living/L- (9).jpg'
import img10 from '../../../img/GalleryTwo/living/L- (10).jpg'
import img11 from '../../../img/GalleryTwo/living/L- (11).jpg'
import img12 from '../../../img/GalleryTwo/living/L- (12).jpg'
import img13 from '../../../img/GalleryTwo/living/L- (13).jpg'
import img14 from '../../../img/GalleryTwo/living/L- (14).jpg'
import img15 from '../../../img/GalleryTwo/living/L- (15).jpg'
import img16 from '../../../img/GalleryTwo/living/L- (16).jpg'
import img17 from '../../../img/GalleryTwo/living/L- (17).jpg'
import img18 from '../../../img/GalleryTwo/living/L- (18).jpg'
import img19 from '../../../img/GalleryTwo/living/L- (19).jpg'
import img20 from '../../../img/GalleryTwo/living/L- (20).jpg'
import img21 from '../../../img/GalleryTwo/living/L- (21).jpg'
import img22 from '../../../img/GalleryTwo/living/L- (22).jpg'
import img23 from '../../../img/GalleryTwo/living/L- (23).jpg'
import img24 from '../../../img/GalleryTwo/living/L- (24).jpg'
import img25 from '../../../img/GalleryTwo/living/L- (25).jpg'
import img26 from '../../../img/GalleryTwo/living/L- (26).jpg'
import img27 from '../../../img/GalleryTwo/living/L- (27).jpg'
import img28 from '../../../img/GalleryTwo/living/L- (28).jpg'
import img29 from '../../../img/GalleryTwo/living/L- (29).jpg'
import img30 from '../../../img/GalleryTwo/living/L- (30).jpg'


const GalleryTwo = () => {

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
    {
        id: 22,
        imgSrc: img22,
      },
      {
        id: 23,
        imgSrc: img23,
      },
      {
        id: 24,
        imgSrc: img24,
      },
      {
        id: 25,
        imgSrc: img25,
      },
      {
        id: 26,
        imgSrc: img26,
      },
      {
        id: 27,
        imgSrc: img27,
      },
      {
        id: 28,
        imgSrc: img28,
      },
      {
        id: 29,
        imgSrc: img29,
      },
      {
        id: 30,
        imgSrc: img30,
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
        <h1 className="g-title">Home in Barcelona (living area)</h1>
        <p className="g-desc">
            Shooting session to a single-family house in the heart of Barcelona. Elegant, stately, bright and with all kinds of amenities. Here you can enjoy the living area.
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

export default GalleryTwo;