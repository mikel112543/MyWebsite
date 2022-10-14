import React from 'react'
import MyProjectCard from "./MyProjectCard";
import "./Projects.css"
const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <MyProjectCard
                        title="RockAround: Final Year MyProjectCard"
                        description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                        href='https://github.com/mikel112543/FYP_RockAround'
                        bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <MyProjectCard
                        title="Blockbuster: Movie Rental Microservice"
                        description="An Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                        href='https://github.com/mikel112543/CS4227_Blockbuster'
                        bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"/>
                </div>
            </div>
        </div>
    )
}

export default Projects