// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Member from './Pages/Member/Member';
import Events from './Pages/Events/Events';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.css';
import Nav1 from './Components/Navbar/Nav1';

const App = () => {
  return (
    <Router>
      <div className='bg-slate-800 main-contain'>
        <div><Nav1 /></div>
          <Home />
          <About />
          <Member />
          <Events />
          <Contact />
        <Footer />
        </div>
    </Router>
  );
};

export default App;

