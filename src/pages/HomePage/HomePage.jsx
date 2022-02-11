import About from '../../components/about/about'
import Contact from '../../components/contact/contact'
import Footer from '../../components/footer/footer'
import GalleryList from '../../components/galleryList/galleryList'
import Intro from '../../components/intro/intro'
import Navbar from '../../components/navbar/navbar'
import ProjectsList from '../../components/projectsList/projectsList'
import ReferralsList from '../../components/referralsList/referralsList'
import './HomePage.css'



function HomePage() {

    return (
        <div>
            <Navbar />
            <Intro />
            <About />
            <ProjectsList />
            <GalleryList />
            <ReferralsList />
            <Contact />
            <Footer />
        </div>

    )
}

export default HomePage