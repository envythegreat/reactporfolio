import React from 'react'

import './App.css';

import Header from './component/Header';
import Home from './component/sections/Home';
import About  from './component/sections/About';
import Skills from './component/sections/Skills';
import Education from './component/sections/Education';
import Projects from './component/sections/Projects';
import Footer from './component/sections/Footer';

function App() {

  return (
    <div>
      <Header />
      <main className="l-main">
        <Home />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
