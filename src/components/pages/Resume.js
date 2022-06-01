import React from 'react'
import resumePre from '../assets/resumePrewview.png'

function Resume() {
    return (
        // <div className="card" style="width: 18rem;">
        //     <img src="..." className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <p className="card-text"><a href='https://docs.google.com/document/d/1qzv5jhk8N2GuLQtYZrS_raLQtoCgzsal2MJP53dMQpw/edit?usp=sharing' target='_blank' rel="noreferrer">Click!</a></p>
        //         </div>
        // </div>
        // <div className="card mb-3">
        //     <img src="..." className="card-img-top" alt="..." />
        //         <div className="card-body">
        //             <h5 className="card-title">Card title</h5>
        //             <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //         </div>
        // </div>
        <div className="card bg-dark text-white">
            <img src={resumePre} className="card-img" alt="resume" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
        </div>
    )
}

export default Resume