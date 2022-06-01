import React from 'react'
import resumePre from '../assets/resumePage-min.png'


function Resume() {
    return (

        <div className="d-flex justify-content-center align-content-center pt-3">
            <div className="card bg-dark text-black">
                <img src={resumePre} className="card-img" alt="Resume" />
                <div className="card-img-overlay">
                    <h5 className="card-title"><p className="card-text"><a href='https://docs.google.com/document/d/1qzv5jhk8N2GuLQtYZrS_raLQtoCgzsal2MJP53dMQpw/edit?usp=sharing' target='_blank' rel="noreferrer">Click!</a></p></h5>
                </div>
            </div>
        </div>
    )
}

export default Resume