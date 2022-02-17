import { Route, Routes } from 'react-router-dom'
import Page404 from '../pages/404/404'
import GalleryFour from '../pages/galleries/galleryFour/galleryFour'
import GalleryOne from '../pages/galleries/galleryOne/galleryOne'
import GalleryThree from '../pages/galleries/galleryThree/galleryThree'
import GalleryTwo from '../pages/galleries/galleryTwo/galleryTwo'
import HomePage from '../pages/HomePage/HomePage'



function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/GalleryOne" element={<GalleryOne />} />
            <Route path="/GalleryTwo" element={<GalleryTwo />} />
            <Route path="/GalleryThree" element={<GalleryThree />} />
            <Route path="/GalleryFour" element={<GalleryFour />} />

            <Route path="/*" element={<Page404 />} />
        </Routes>
    )
}

export default AppRoutes