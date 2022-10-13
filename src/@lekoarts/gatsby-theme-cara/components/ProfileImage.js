import React from 'react'
import profileImage from '/static/profiler.jpg'

export default function ProfileImage() {
    return <img style={{ height: '250px', width: '250px', borderRadius: "50%"}} src={profileImage} alt='https://via.placeholder.com/525x200'/>
}
