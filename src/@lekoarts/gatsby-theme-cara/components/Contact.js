import React from "react";
import "./Contact.css"
import linkedIn from "/static/LinkedInIcon.png"
import github2 from "/static/githubIcon2-edit.png"

const Contact = () => {
    return (
        <div className="container">
            <div className="item">
                <h2 className="title">Get in touch</h2>
                <div className="contact-group">
                    <p className="email-txt">Email: </p>
                    <p className="email">michaelthomasdanaher@gmail.com</p>
                </div>
                <div className="contact-group">
                    <p className="contact-txt">Contact Number:</p>
                    <p className="number">(347) 529-8893</p>
                </div>
                <div className="contact-group">
                    <img className="linkedIn" src={linkedIn} alt="https://placedog.net/50/50" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://www.linkedin.com/in/michael-danaher/", '_blank', 'noopener, noreferrer')
                    }}/>
                    <img className="github" src={github2} alt="https://placedog.net/50/50" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://github.com/mikel112543/", '_blank', 'noopener, noreferrer')
                    }}/>
                </div>
            </div>
        </div>
    )
}
export default Contact