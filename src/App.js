import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Project from './Project';
import Footer from './Footer';
// import './App.css';

function App() {
  return (
    <div>
      <Header>
        <Nav></Nav>
      </Header>
      <main>
        <Project>

        </Project>
      </main>
      <Footer></Footer>
    </div>

  );
}

export default App;
