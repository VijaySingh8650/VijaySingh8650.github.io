
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Navbar from "./Components/Navbar"
import Projects from './Components/Projects';
import Skills from './Components/Skills';


function App() {
 
  return (
    <div className="App">
      

      <Navbar />
      <Home />
      <About />
      <Skills />

      {/* <GithubCalendar/> */}
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
