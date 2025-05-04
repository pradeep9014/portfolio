import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="mainNav">
            <div className='navName'>Pradeep</div>
            <div>
                <ul className={isOpen ? "active" : ""}>
                    <li>
                        <Link 
                            to="home" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="education" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </Link>
                    </li>
                    <li><Link 
                            to="contact" 
                            smooth={true} 
                            duration={500} 
                            offset={-70}
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </Link></li>
                </ul>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    );
}

export default Navbar;