import './App.css';
import Home from "./Home";
import About from "./About";
import Galerie from "./Galerie";
import Services from "./Services";
import Contact from "./Contact"
import Footer from "./Footer"


function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Galerie />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
