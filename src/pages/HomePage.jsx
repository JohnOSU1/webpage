import Code from '../components/CodeLang'
import Experience from '../components/Experience'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home(){

    return (
        <div>
            <h2>Blurb</h2>
            <p>I’m graduating in 2026 and have experience building websites, games, and applications. I take pride in ensuring that everything I create reflects my full effort! Beyond development, I’ve explored the world of cybersecurity, breaking encryptions, understanding their inner workings, and diving deep into digital forensics to uncover hidden data and trace digital footprints.</p>
            <h2>Expirence</h2>
            <Experience />
            <h2>Projects</h2>
            <p>temp</p>
            <h2>Relevent courses</h2>
            <p> temp</p>
            <h2>Code Languages and Applications</h2>
            <Code />
        </div>
    )
        
    
}

export default Home;