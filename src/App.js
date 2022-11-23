import React from 'react';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Hero from './Components/Hero';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Clubs from './Components/Clubs';
import Footer from './Components/Footer';
import '../src/Components/scrollbar.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Aboutus />
      <Contactus />
      <Clubs />
      <Footer />
    </div>
  );
}

export default App;
