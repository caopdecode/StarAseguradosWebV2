import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Aliados from "./components/Aliados"; 
import Contact from "./components/Contact";  
import Footer from "./components/Footer";   
import PrivacyPolicy from "./components/PrivacyPolicy"; 
import './App.css'
import "./fonts.css";

function Home() {
  return (
    <>
      <Navbar />
      <section id="home"><Landing /></section>
      <section id="about"><AboutUs /></section>
      <section id="services"><Services /></section>
      <section id="aliados"><Aliados /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

      </Routes>
    </Router>
  );
}


export default App
