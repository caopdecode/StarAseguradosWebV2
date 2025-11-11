import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
//import Aliados from "./components/Aliados"; <section id="aliados"><Aliados /></section>
//import Contact from "./components/Contact";       <section id="contact"><Contact /></section>
import './App.css'

function App() {

  return (
    <>
    <div className="App">
      <Navbar />
      <section id="home"><Landing /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
    </div>
    </>
  )
}

export default App
