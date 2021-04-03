import React from 'react';
import AboutMe from './AboutMe';
import Header from './Header';
import Hero from './Hero'
import Projects from './Projects';
import Skills from './Skills';
import HireMe from './HireMe';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Skills />
      <HireMe />
    </div>
  )
}

export default App;