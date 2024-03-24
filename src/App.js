import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; // Import Navbar component only
import Home from './components/Home.jsx';
import AboutUs from './pages/AboutUs.jsx';
import Plans from './components/Subscription.jsx'
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PaymentPortal from './components/PaymentPortal.jsx';
import Demo from './frontendUI/demo.jsx';
import Account from './pages/Account.jsx'
import Questionnaire from './frontendUI/questionnaire.jsx';

// function App() {
//   // useState for setting a JavaScript
//   // object for storing and using data
//   const [data, setData] = useState({
//     name: "",
//     age: 0,
//     date: "",
//     programming: "",
//   });

//   // Using useEffect for single rendering
//   useEffect(() => {
//     // Using fetch to fetch the API from 
//     // flask server it will be redirected to proxy
//     fetch("/data").then(
//       res => res.json().then((data) => {
//         // Setting data from the API
//         setData({
//           name: data.Name,
//           age: data.Age,
//           date: data.Date,
//           programming: data.programming,
//         });
//       })
//     );
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
//           <h1>React and Flask</h1>
//           {/* Calling data from setData for showing */}
//           <p>{data.name}</p>
//           <p>{data.age}</p>
//           <p>{data.date}</p>
//           <p>{data.programming}</p>
//         </header>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<AboutUs />} />
//           <Route path="/plans" element={<Plans />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/payment" element={<PaymentPortal />} />
//           <Route path="/demo" element={<Demo />} />
//           <Route path="/questionnaire" element={<Questionnaire />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
// Importing modules

function App() {
    return (
      <Router>
        <Navbar />
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<AboutUs />} />
           <Route path="/plans" element={<Plans />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/payment" element={<PaymentPortal />} />
           <Route path="/demo" element={<Demo />} />
           <Route path="/questionnaire" element={<Questionnaire />} />
           <Route path="/account" element={<Account/> } /> 
           </Routes>
        <Footer />
      </Router>
      
    );
}

export default App;
