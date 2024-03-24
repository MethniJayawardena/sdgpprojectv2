import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import Navbar component only
import Home from './components/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Plans from './components/Subscription.jsx'
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Demo from './frontendUI/demo.jsx'

function App() {
  return (
    <Router> {/* Wrap your Routes with Router component */}
      <div>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
  );
}

export default App;
