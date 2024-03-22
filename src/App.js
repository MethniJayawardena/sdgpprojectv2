import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar.jsx'; // Import Navbar component only
import Home from './components/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Plans from './components/Subscription.jsx'
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
<<<<<<< HEAD
import Account from './pages/Account.jsx';
=======
import PaymentPortal from './components/PaymentPortal.jsx';
import Demo from './frontendUI/demo.jsx'
import Questionnaire from './frontendUI/questionnaire.jsx';
>>>>>>> 2051999a8c2a0e089c92a426e9c59f3646c27f55

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
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register />} />
<<<<<<< HEAD
            <Route path="/account" element={<Account />}/>
=======
            <Route path="/payment" element={<PaymentPortal />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/questionnaire" element={<Questionnaire/>} />
>>>>>>> 2051999a8c2a0e089c92a426e9c59f3646c27f55
        </Routes>
        <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
