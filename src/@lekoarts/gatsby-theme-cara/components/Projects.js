import React from 'react'
import MyProjectCard from "./MyProjectCard";
import "./Projects.css"
const Projects = () => {
    return (
        <div className="container">
            <h1>Projects</h1>
            <div className="row">
                <MyProjectCard
                        title="RockAround: Final Year Project"
                        description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                        href='https://github.com/mikel112543/FYP_RockAround'
                        bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                <MyProjectCard
                        title="RockAround: Final Year Project"
                        description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                        href='https://github.com/mikel112543/FYP_RockAround'
                        bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                <MyProjectCard
                    title="RockAround: Final Year Project"
                    description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                    href='https://github.com/mikel112543/FYP_RockAround'
                    bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                <MyProjectCard
                    title="RockAround: Final Year Project"
                    description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                    href='https://github.com/mikel112543/FYP_RockAround'
                    bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                <MyProjectCard
                    title="RockAround: Final Year Project"
                    description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                    href='https://github.com/mikel112543/FYP_RockAround'
                    bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
                <MyProjectCard
                    title="RockAround: Final Year Project"
                    description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern"
                    href='https://github.com/mikel112543/FYP_RockAround'
                    bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'/>
            </div>
        </div>
    )
}

export default Projects