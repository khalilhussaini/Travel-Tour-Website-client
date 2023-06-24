// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookingForm from "./pages/BookingForm";
import AboutAfganistan from "./pages/AboutAfganistan";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './contexts/UserContext';
import Tours from "./pages/Tours";

const App = () => {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/AboutAfganistan" element={<AboutAfganistan />} />
        <Route path="/Tours" element={<Tours />} />
        <Route path="/Tours" element={<Tours />}>
          <Route path="BookingForm" element={<BookingForm />} />
        </Route>
      </Routes>

      <Footer />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </Router>
  );
};

export default App;



 


/* import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import { UserContextProvider } from './contexts/UserContext';
function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <NavigationBar />
        <Outlet />
      </UserContextProvider>
    </div>
  );
}
export default App; 
 */


