import React, { useState } from 'react';
// import Header from './components/Header'
import Nav from './components/Nav';
import Project from './components/Project';
import Footer from './components/Footer';
import About from './components/About';
// import './App.css';

function App() {
  return (
    <div>
      {/* <Header>
      </Header> */}
      <Nav>
          
      </Nav>
      <main>
        <About></About>
        <Project>

        </Project>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
