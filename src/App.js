import './App.css';
import About from './components/about/about';
import Background from './components/background/background';
import Intro from './components/intro/intro';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Intro />
      <About />
    </div>
  );
}

export default App;
