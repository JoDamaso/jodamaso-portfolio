import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// currentPage was sent over as a prop, because NavTabs is a child of PortofolioCointainer
// as well as handlePageChange

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs justify-content-evenly">
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Projects"
                    onClick={() => handlePageChange('Projects')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    //  TODO: Add a comment explaining what this logic is doing

                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    //  TODO: Add a comment explaining what this logic is doing

                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}

export default NavTabs;
