import './galleryOne.css'
import img1 from '../../../img/GalleryOne/MiniGeensen-1.jpg'

const GalleryOne = () => {

  let data = [
    {
      id: 1,
      imgSrc: img1,
    }
  ]


  return (
    <div>
        <h1 className="g-title">Architect's office</h1>
        <p className="g-desc">
            Shooting session to a small and cozy architect's office. Wooden finishes, hidden illumination.
        </p>

        <div className="gallery">
          {data.map((item, index) =>{
            return(
                <div className="pics" key={index}>
                    <img src={item.imgSrc} alt={item.id} />
                </div>
            )
        })}
</div>



    </div>        
  );
};

export default GalleryOne;