import './App.css';
import Background from './components/background/background';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import NavbarCP from './components/navbarCP/navbarCP';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Background />
      <NavbarCP />

      <AppRoutes />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
