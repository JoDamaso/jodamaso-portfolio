import React from 'react';
import pic from '../assets/IMG_7515-min.png'

function About() {
    return (
        <section className='d-flex justify-content-center align-content-center pt-2'>
            {/* <div className="card shadow p-3 mb-5 bg-body rounded" >
                <img src={pic} className="card-img-top rounded" alt="Headshot of John Damaso" />
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> */}
            <div className="card mb-3 bg-body col-md-9">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pic} className="img-fluid rounded-start" alt="Headshot of John Damaso"/>
                    </div>
                    <div className="col-md-2">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;