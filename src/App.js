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

  // conditionally renders, checks the equality then returns a certain component 
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    {/*
        currentPage as the inital state, handlePageChange function sent over
        passing <NavTabs code as a child of PortfolioContainer
        sending value and function.
        */}
    <Header></Header>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer></Footer>
  </div>

  );
}

export default App;

{/* <div>
<Header>
</Header>
<Nav>
    
</Nav>
<main>
  <About></About>
  <Project>

  </Project>
  <Contact></Contact>
</main>
<Footer></Footer>
</div> */}