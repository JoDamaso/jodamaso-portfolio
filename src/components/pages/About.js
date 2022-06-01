import React from 'react';
import pic from '../assets/IMG_7515-min.png'

function About() {
    return (
        <section className='d-flex justify-content-center align-content-center pt-3'>
            <div className="card shadow p-3 mb-5 bg-body rounded" >
                <img src={pic} className="card-img-top rounded" alt="Headshot of John Damaso" />
                <div className="card-body">
                    <h3 className="card-title">About Me</h3>
                    <p className="card-text">
                        I am a recent graduate at the University of Texas at Austin, studying the basics of coding and diving into the MERN Stack.
                        
                        {/* I recently graduated from the University of Texas at Austin. I was part of their Full Stack Web Development Bootcamp.
                        Studying the basics of coding and diving into the MERN Stack. 
                        Decided I should kickstart my career in tech, considering how much of a boom it has had in the past couple years. I hope to land on a team that shares my
                        same values. My past work history has been made up of retail. From the ground of a sales associate to a manager over the course of many years. */}
                    </p>
                </div>
            </div>
            {/* <div className="card mb-3 bg-body col-md-9">
                <div className="row">
                    <div className="col-md-4">
                        <img src={pic} className="img-fluid rounded-start" alt="Headshot of John Damaso" />
                    </div>
                    <div className="row">
                        <div className="card-body ">
                            <h5 className="card-title">John Darryl Damaso</h5>
                            <p className="card-text">I recently graduated from the University of Texas at Austin. I was part of their Full Stack Web Development Bootcamp.
                            Studying the basics of coding and diving into the MERN Stack. 
                            Decided I should kickstart my career in tech, considering how much of a boom it has had in the past couple years. I hope to land on a team that shares my
                            same values. My past work history has been made up of retail. From the ground of a sales associate to a manager over the course of many years. 
                            </p>

                        </div>
                    </div>
                </div>
            </div> */}
            
        </section>
    )
};

export default About;