import React from 'react';
import pic from '../assets/IMG_7515-min.png'

function About() {
    return (
        <section className='d-flex justify-content-center align-content-center pt-2'>
            <div className="card" >
                <img src={pic} className="card-img-top" alt="Headshot of John Damaso" />
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        
                    </div>
            </div>
        </section>
    )
};

export default About;