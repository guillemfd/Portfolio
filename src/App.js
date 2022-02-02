import './App.css';
import About from './components/about/about';
import Background from './components/background/background';
import Intro from './components/intro/intro';

function App() {
  return (
    <div className="App">
      <Background />
      <Intro />
      <About />
    </div>
  );
}

export default App;
