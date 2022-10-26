import React from 'react'
import MyProjectCard from "./MyProjectCard";
import "./Projects.css"
import rockAround from "/static/rock_around.png"
import blockBuster from "/static/blockbuster.png"
import zork from "/static/zork.png"
import goLang from "/static/goLang_matmult.png"
import mushroomAnalysis from "/static/mushroom_analysis.png"

const Projects = () => {
    return (
        <div className="container">
            <h2>Projects</h2>
            <div className="row">
                <MyProjectCard
                    title="RockAround: Final Year Project"
                    description="Final Year MyProjectCard Android application that allows Musicians and Venues to communicate and review each other. This project showcases the industry standard MVVM architectural pattern."
                    href='https://github.com/mikel112543/FYP_RockAround'
                    bg='linear-gradient(to right, #D4145A 0%, #FBB03B 100%)'
                    img={rockAround}/>
                <MyProjectCard
                    title="Blockbuster Movie Rental"
                    description="A Spring Framework based microservice that also has elements of frontend using Thymeleaf. The project also utilises Sonar within the pipeline for code coverage, multiple Design Patterns and JUnit Testing."
                    href='https://github.com/mikel112543/CS4125-Movie_Rental_Micro_Service'
                    bg='linear-gradient(to right, #662D8C 0%, #ED1E79 100%)'
                    img={blockBuster}/>
                <MyProjectCard
                    title="Zork C++ Implementation"
                    description="An implementation of the popular Zork game written in C++. This game is played entirely through user input in the command line. The project also showcases features such as pointers, templates and polymorphism."
                    href='https://github.com/mikel112543/CS4076-Zork'
                    bg='linear-gradient(to right, #009245 0%, #FCEE21 100%)'
                    img={zork}/>
                <MyProjectCard
                    title="Golang Matrix Multiplication"
                    description="A program that efficiently multiplies matrices of any size using Strassen's Divide and Conquer Algorithm and Go's multithreading tools. If the end user inputs an irregular matrix, the program will reshape the matrix to satisfy the algorithm."
                    href='https://github.com/mikel112543/Go_MatMult_Implementation'
                    bg='linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(252,176,69,1) 100%)'
                    img={goLang}/>
                <MyProjectCard
                    title="Mushroom Analysis & Classification"
                    description="Python project that explores, analyzes, and classifies a large dataset of edible and poisonous mushrooms. Multiple types of graphs are displayed to provide visual representation of the dataset and its distribution."
                    href='https://github.com/mikel112543/CS4168_Project'
                    bg='linear-gradient(to right, #d220c8 0%, #2332c9 100%)'
                    img={mushroomAnalysis}/>
            </div>
        </div>
    )
}

export default Projects