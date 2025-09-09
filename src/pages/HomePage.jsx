import Code from '../components/CodeLang'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Courses from '../components/Courses'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home(){

    return (
        <div className= "content">
            <h2>About Me</h2>
            <p id = "about">I am graduating in 2026 and have experience building websites, games, and applications. I take pride in ensuring that everything I create reflects my full effort! Beyond development, I have explored the world of cybersecurity, breaking encryptions, understanding their inner workings, and diving deep into digital forensics to uncover hidden data and trace digital footprints.</p>
            <h2>Experience</h2>
            <Experience />
            <h2>Projects</h2>
            <Projects />
            <h2>Code Languages and Applications</h2>
            <Code />
            <h2>Relevent Courses</h2>
            <Courses />
        </div>
    )
        
    
}

export default Home;