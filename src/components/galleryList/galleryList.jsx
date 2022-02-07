import '../projectsList/projectsList.css'
import { galleries } from '../../data'
import Gallery from '../gallery/gallery'


const GalleryList = () => {


    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Photography</h1>
                <p className="pl-desc">
                    Mostly interior shooting projects, but also interested in social and portrait photography.
                </p>
            </div>
            <div className="pl-list">
            {galleries.map((project) => (
                <Gallery key={project.id} img={project.img} link={project.link}/>
            ))}
            </div>
        </div>
    )
}

export default GalleryList