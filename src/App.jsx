//import './App.css';
import About from './Components/About';
import Nav from './Components/Nav';
import Profile from './Components/Profile'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App overflow-x-hidden">
      <Nav className='min-w-[420px]' />
      <Profile className='min-w-[420px]' />
      <About className='min-w-[420px]' />
      <Projects className='min-w-[420px]' />
      <Contact className='min-w-[420px]' />
      <Footer className='min-w-[420px]' />
    </div>
  );
}

export default App;
