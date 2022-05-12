import React from 'react';
import pic from '../assets/IMG_7515-min.png'

function About() {
    return (
        <section className='d-flex justify-content-center align-content-center pt-3'>
            {/* <div className="card shadow p-3 mb-5 bg-body rounded" >
                <img src={pic} className="card-img-top rounded" alt="Headshot of John Damaso" />
                <div className="card-body">
                    <h5 className="card-title">About Me</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> */}
            <div className="card mb-3 bg-body col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <img src={pic} className="img-fluid rounded-start" alt="Headshot of John Damaso" />
                    </div>
                    <div className="row">
                        <div className="card-body ">
                            <h5 className="card-title">John Darryl Damaso</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adip</p>

                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
};

export default About;