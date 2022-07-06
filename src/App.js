import './index.css';
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About';
import Work from './components/Work'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
