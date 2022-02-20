import { HashLink } from 'react-router-hash-link';
import "./navbarCP.css";
import GW from '../../img/G.png'
import resume from '../../img/Resume_GuillemFerrer.pdf'

const NavbarCP = () => {

  return (
      <div>
        <HashLink                 
            to="/#Intro" 
            activeClass="active"
            spy={true} 
            smooth={true}
            className="navbar-logo">
            <img 
            className="home" 
            src={GW} 
            alt="logo" />
        </HashLink>

        <nav className="nav">
    
            <input type="checkbox" id="nav-check" />
            
            <div className="nav-btn">
                <label for="nav-check">
                <span></span>
                <span></span>
                <span></span>
                </label>
            </div>

            <div className="nav-links">
                <HashLink                 
                        to="/#About" 
                        activeClass="active"
                        spy={true} 
                        smooth={true}
                        className="new-links"
                        >
                    About
                </HashLink>

                <HashLink                 
                    to="/#ProjectsList" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Web Dev Projects
                </HashLink>
                <HashLink                 
                    to="/#GalleryList" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Photography Projects
                </HashLink>
                <HashLink                 
                    to="/#Referrals" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Referrals
                </HashLink>
                <HashLink                 
                    to="/#Contact" 
                    activeClass="active"
                    spy={true} 
                    smooth={true}
                    className="new-links"
                    >
                Contact
                </HashLink>
                <a 
                    href={resume} 
                    download="Resume_GuillemFerrer"
                    className="new-links">
                    Resume
                </a>
            </div>    
        </nav>
    </div>
  );
};

export default NavbarCP;
