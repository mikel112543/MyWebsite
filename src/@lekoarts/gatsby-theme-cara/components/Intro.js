import React from 'react'
import profileImage from '/static/profiler.jpg'
import "./Intro.css"

const Intro = () => {
    return (
        <div className="container">
            <h1>Hi, my name is Michael 👋</h1>
            <img className="profile-image" src={profileImage} alt='https://via.placeholder.com/525x200'/>
            <p className="intro-text">Welcome to my website. Here you will find some projects that I have created.
                Ranging from frontend development, backend development, mobile development, machine learning, as various algorithm-based projects.
                You can also find more information about my background as well as contact details and social media accounts below if you would like to reach out.</p>
        </div>
    )
}

export default Intro
