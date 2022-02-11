import './App.css';
import About from './components/about/about';
import Background from './components/background/background';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import GalleryList from './components/galleryList/galleryList';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import NavbarCP from './components/navbarCP/navbarCP';
import ProjectsList from './components/projectsList/projectsList';
import ReferralsList from './components/referralsList/referralsList';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Background />
      <NavbarCP />

      <AppRoutes />
      
      <Contact />
      <Footer />

      {/* <Background />
      <Intro />
      <About />
      <ProjectsList />
      <GalleryList />
      <ReferralsList />
      <Contact /> */}
    </div>
  );
}

export default App;
