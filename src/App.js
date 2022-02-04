import './App.css';
import About from './components/about/about';
import Background from './components/background/background';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';
import ProjectsList from './components/projectsList/projectsList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Intro />
      <About />
      <ProjectsList />
    </div>
  );
}

export default App;
