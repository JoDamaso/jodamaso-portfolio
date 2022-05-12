import React from 'react';

function Project(props) {

    return (
        <div className="card-group p-3">
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">G.O.A.T Scale</h1>
                        <p className="card-text">A fantasy football trivia game that tests your knowledge of the players. This app uses 2 API's, ESPN API and the Giphy API. You'll pitted against the CPU's player pick, and your random 3 player picks. There is validation for answering correctly or wrong, with the Giphy API and trash talk! Theres also future developments we'd love to get back to in the soon future.
                        </p>
                        <p className="card-text"><small className="text-muted"><a href='https://devjontaylor.github.io/wing-map/' target='_blank'>https://devjontaylor.github.io/wing-map/</a></small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Note Tracker</h1>
                        <p className="card-text">An app that allows you to leave notes. With Express.js, the notes will persist. This is also delpoyed with Heroku </p>
                        <p className="card-text"><small className="text-muted"><a href='https://takingnotesjd.herokuapp.com/' target='_blank'>https://takingnotesjd.herokuapp.com/</a></small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Card title</h1>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Password Generator</h1>
                        <p className="card-text">A password generator made with vanilla javascript. When generating a new password, you'll be prompted with a length of 8-128 characters, uppercase, lowercase, symbols and numbers to be in your password.  When generated, you can copy your password and use it!</p>
                        <p className="card-text"><small className="text-muted"><a href='https://jodamaso.github.io/passwordGeneratorJD//' target='_blank'>https://jodamaso.github.io/passwordGeneratorJD/</a></small></p>
                    </div>
            </div>
        </div>
        
    )
};

export default Project;