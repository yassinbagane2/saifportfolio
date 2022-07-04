import './index.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Work from './components/Work'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
    </div>
  );
}

export default App;
