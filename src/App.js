import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import Experience from "./components/Experience";
//import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { StarsCanvas } from "../src/canvas";
      

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      {/* <Projects />  */}
      <div className='tw-relative tw-z-0'>
      <StarsCanvas />
      <Experience />
      <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
