import { HashLink } from 'react-router-hash-link';
import "./navbarGallery.css";
import G from '../../img/G.png'
import GW from '../../img/GW.png'
import resume from '../../img/Resume_GuillemFerrer.pdf'



const NavbarGallery = (props) => {


  return (
    <div>

        <header>
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
            <nav>
                <ul className="navbar_links">
                    <li>
                        <HashLink                 
                            to="/#About" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="/#ProjectsList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Web Dev Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="/#GalleryList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Photography Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="/#Referrals" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Referrals
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#Contact" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Contact
                        </HashLink>
                    </li>
                    <li>
                        <a 
                            href={resume} 
                            download="Resume_GuillemFerrer"
                            className="nav_button">
                            Resume
                            </a>
                    </li>
                </ul>
            </nav>
        </header>
        

    </div>
  );
};

export default NavbarGallery;
