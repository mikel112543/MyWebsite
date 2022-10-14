import React from 'react'
import profileImage from '/static/profiler.jpg'
import "./Intro.css"

export default function Intro() {
    return (
        <div className="container">
            <h1>Hi, my name is Michael 👋</h1>
            <img className="profile-image" src={profileImage} alt='https://via.placeholder.com/525x200'/>
            <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eleifend tempor neque, at iaculis
                mi luctus a. Sed egestas sollicitudin purus et tempor. Morbi vulputate magna quis elit hendrerit
                tristique. Suspendisse libero ex, ultrices et ex eget, interdum tempor urna. Maecenas blandit
                massa neque, lobortis feugiat augue gravida vitae. </p>
        </div>
    )
}
