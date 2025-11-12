import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Aliados from "./components/Aliados"; 
import Contact from "./components/Contact";  
import Footer from "./components/Footer";    
import './App.css'

function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <section id="home"><Landing /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
      <section id="aliados"><Aliados /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer/></section>
    </div>
    </>
  )
}

export default App
