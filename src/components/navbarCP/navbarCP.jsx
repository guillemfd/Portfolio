import { HashLink } from 'react-router-hash-link';
import "./navbarCP.css";
import G from '../../img/G.png'
import GW from '../../img/GW.png'
import navbarBG from '../../img/navbar.svg'
import ProjectsList from '..//projectsList/projectsList';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'
import resume from '../../img/Resume_GuillemFerrer.pdf'
import { useState } from 'react';



const NavbarCP = () => {



  return (
      <div>
        <HashLink                 
            to="/" 
            activeClass="active"
            spy={true} 
            smooth={true}
            className="navbar-logo">
            <img 
            className="home" 
            src={GW} 
            alt="logo" />
        </HashLink>

    <div class="nav">
    
        <input type="checkbox" id="nav-check" />
        {/* <div class="nav-header">
            <div class="nav-title">
            JoGeek
            </div>
        </div> */}
        <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div class="nav-links">
            <a href="#About" rel="noreferrer">
                <HashLink                 
                        to="#About" 
                        activeClass="active"
                        spy={true} 
                        smooth={true}
                        className="new-links"
                        >
                    About
                </HashLink>
            </a>
            <a href="#ProjectsList" rel="noreferrer">
                <HashLink                 
                    to="#ProjectsList" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Web Dev Projects
                </HashLink>
            </a>
            <a href="#GalleryList" rel="noreferrer">
                <HashLink                 
                    to="#GalleryList" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Photography Projects
                </HashLink>
            </a>
            <a href="#Referrals" rel="noreferrer">
                <HashLink                 
                    to="#Referrals" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Referrals
                </HashLink>
            </a>
            <a href="#Contact" rel="noreferrer">
                <HashLink                 
                    to="#Contact" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Contact
                </HashLink>
            </a>
            <a 
                href={resume} 
                download="Resume_GuillemFerrer"
                className="Resume_button">
                Resume
            </a>
        </div>
                  
      </div>
    </div>
  );
};

export default NavbarCP;
