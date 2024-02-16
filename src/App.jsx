//import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Profile from './Components/Profile'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App min-w-[420px]">
      <Nav className="border-box" />
      <Profile className="border-box" />
      <About className="border-box" />
      <Projects className="border-box" />
      <Contact className="border-box" />
      <Footer className="border-box" />
    </div>
  );
}

export default App;
