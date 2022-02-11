import About from '../../components/about/about'
import GalleryList from '../../components/galleryList/galleryList'
import Intro from '../../components/intro/intro'
import ProjectsList from '../../components/projectsList/projectsList'
import ReferralsList from '../../components/referralsList/referralsList'
import './HomePage.css'



function HomePage() {

    return (
        <div>

            <Intro />
            <About />
            <ProjectsList />
            <GalleryList />
            <ReferralsList />

        </div>

    )
}

export default HomePage