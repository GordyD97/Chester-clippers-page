import { useState } from 'react'
import Navbar from './components/NavBar';
import About from './components/About'
import Testimonials from './components/Testimonials';
import Services from './components/Services';

function App() {
  

  return (
    <>
      <Navbar />

      <About />

      <Services/>

      <Testimonials/>
    </>
  );
}

export default App
