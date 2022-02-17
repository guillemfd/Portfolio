import { useState } from 'react'
import close from '../../../img/whiteCross.png'
import img1 from '../../../img/GalleryFive/GalleryFive-1.jpg'
import img2 from '../../../img/GalleryFive/GalleryFive-2.jpg'
import img3 from '../../../img/GalleryFive/GalleryFive-3.jpg'
import img4 from '../../../img/GalleryFive/GalleryFive-4.jpg'
import img5 from '../../../img/GalleryFive/GalleryFive-5.jpg'
import img6 from '../../../img/GalleryFive/GalleryFive-6.jpg'
import img7 from '../../../img/GalleryFive/GalleryFive-7.jpg'
import img8 from '../../../img/GalleryFive/GalleryFive-8.jpg'
import img9 from '../../../img/GalleryFive/GalleryFive-9.jpg'
import img10 from '../../../img/GalleryFive/GalleryFive-10.jpg'
import img11 from '../../../img/GalleryFive/GalleryFive-11.jpg'
import img12 from '../../../img/GalleryFive/GalleryFive-12.jpg'
import img13 from '../../../img/GalleryFive/GalleryFive-13.jpg'
import img14 from '../../../img/GalleryFive/GalleryFive-14.jpg'
import img15 from '../../../img/GalleryFive/GalleryFive-15.jpg'
import img16 from '../../../img/GalleryFive/GalleryFive-16.jpg'
import img17 from '../../../img/GalleryFive/GalleryFive-17.jpg'
import img18 from '../../../img/GalleryFive/GalleryFive-18.jpg'
import img19 from '../../../img/GalleryFive/GalleryFive-19.jpg'
import img20 from '../../../img/GalleryFive/GalleryFive-20.jpg'
import img21 from '../../../img/GalleryFive/GalleryFive-21.jpg'
import img22 from '../../../img/GalleryFive/GalleryFive-22.jpg'
import img23 from '../../../img/GalleryFive/GalleryFive-23.jpg'
import img24 from '../../../img/GalleryFive/GalleryFive-24.jpg'
import img25 from '../../../img/GalleryFive/GalleryFive-25.jpg'
import img26 from '../../../img/GalleryFive/GalleryFive-26.jpg'
import img27 from '../../../img/GalleryFive/GalleryFive-27.jpg'
import img28 from '../../../img/GalleryFive/GalleryFive-28.jpg'
import img29 from '../../../img/GalleryFive/GalleryFive-29.jpg'
import img30 from '../../../img/GalleryFive/GalleryFive-30.jpg'



const GalleryFive = () => {

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
        <h1 className="g-title">Real-estate agency offices</h1>
        <p className="g-desc">
            You must be stylish if you are selling stylish homes. Details makes the difference, so show your clients you take into consideration the table's legs, the door locks or even the ring binders color. 
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

export default GalleryFive;