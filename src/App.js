import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header"; 
import Footer from "./components/Footer";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
/* import Main from "./pages/Main"; */
import './styles.css'

const App = () => {
  return (
    <Router>
  {    <Header /> }
      <Navbar/>
    {/*   <Main/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
