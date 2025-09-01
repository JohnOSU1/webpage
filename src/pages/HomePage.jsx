import Resume from '../assets/Resume.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Home(){

    return (
        <div>
            <h2>Resume</h2>
            <img src={Resume} alt="John Polasek's Resume" width="500" height="600" />
            
        </div>
    )
        
    
}

export default Home;