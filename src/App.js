import React, { useState } from 'react';
import NavTabs from './components/NavTabs'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import Resume from './components/pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('About');


  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <React.Fragment>
      {/*
        currentPage as the inital state, handlePageChange function sent over
        passing <NavTabs code as a child of PortfolioContainer
        sending value and function.
        */}
      <Header />
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* conditionally renders, checks the equality then returns a certain component  */}
      {currentPage !== 'About' ? '' : <About />}
      {currentPage !== 'Projects' ? '' : <Projects />}
      {currentPage !== 'Resume' ? '' : <Resume />}
      {currentPage !== 'Contact' ? '' : <Contact />}
      
      <Footer />
    </React.Fragment>
  );
}

export default App;

