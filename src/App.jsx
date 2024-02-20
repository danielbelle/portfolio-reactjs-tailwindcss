import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Profile from './Components/Profile'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App w-screen overflow-x-hidden">
      <Nav />
      <Profile />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
