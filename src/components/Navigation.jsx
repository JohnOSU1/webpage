import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

function Navigation(){
    return (
        <div className="nav">
            <nav className='app-nav'>
                <a href="mailto:john.p.cs@outlook.com"><PiMicrosoftOutlookLogo/></a>
                <a href="https://www.linkedin.com/in/johnpolasek"><FaLinkedin/></a>
                <a href="https://github.com/JohnOSU1/Projects"><FaGithub/></a>
            </nav>
        </div>
    )
}

export default Navigation