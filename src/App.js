// App.js
import React from 'react';
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
    <div className='bg-slate-800 main-contain'>
      <Nav1 />
      <Home />
      <About />
      <Member />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

