import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { PiMicrosoftOutlookLogo } from "react-icons/pi";

function Navigation(){
    return (
        <div class="nav">
            <nav className='app-nav'>
                <a href="mailto:john.p.cs@outlook.com"><PiMicrosoftOutlookLogo/></a>
                <a href="https://www.linkedin.com/in/john-polasek-7a9386301"><FaLinkedin/></a>
                <a href="https://github.com/JohnOSU1/Projects"><FaGithub/></a>
            </nav>
        </div>
    )
}

export default Navigation