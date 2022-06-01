import React from 'react';

function Project(props) {

    return (
        <div className="card-group p-3">
            <div className="card">
                <img src="" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">G.O.A.T Scale</h1>
                        <p className="card-text">A fantasy football trivia game that tests your knowledge of the players. This app uses 2 API's, ESPN API and the Giphy API. You'll pitted against the CPU's player pick, and your random 3 player picks. There is validation for answering correctly or wrong, with the Giphy API and trash talk! Theres also future developments we'd love to get back to in the soon future.
                        </p>
                        <p className="card-text"><small className="text-muted"><a href='https://devjontaylor.github.io/wing-map/' target='_blank' rel="noreferrer">https://devjontaylor.github.io/wing-map/</a></small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Note Tracker</h1>
                        <p className="card-text">An app that allows you to leave notes. With Express.js, the notes will persist. This is also delpoyed with Heroku </p>
                        <p className="card-text"><small className="text-muted"><a href='https://takingnotesjd.herokuapp.com/' target='_blank' rel="noreferrer">https://takingnotesjd.herokuapp.com/</a></small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Team Generator</h1>
                        <p className="card-text">This was built with OOP and minding and TDD. Took advantage of Node.js and Inquirer to build this app. From the command line, you'll be prompted questions on who is on your tech team. Once generated, a public html would be accessible and for you to see.</p>
                        <p className="card-text"><small className="text-muted"><a href='https://drive.google.com/file/d/1AS4_wzTiF0h8g0WQJpW_6IulL-czvHQm/view' target='_blank' rel="noreferrer">https://drive.google.com/file/d/1AS4_wzTiF0h8g0WQJpW_6IulL-czvHQm/view</a></small></p>
                    </div>
            </div>
            <div className="card">
                <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">Password Generator</h1>
                        <p className="card-text">A password generator made with vanilla javascript. When generating a new password, you'll be prompted with a length of 8-128 characters, uppercase, lowercase, symbols and numbers to be in your password.  When generated, you can copy your password and use it!</p>
                        <p className="card-text"><small className="text-muted"><a href='https://jodamaso.github.io/passwordGeneratorJD//' target='_blank' rel="noreferrer">https://jodamaso.github.io/passwordGeneratorJD/</a></small></p>
                    </div>
            </div>
        </div>
        
    )
};

export default Project;