import { HashLink } from 'react-router-hash-link';
import "./navbar.css";
import G from '../../img/G.png'
import GW from '../../img/GW.png'
import navbarBG from '../../img/navbar.svg'
import ProjectsList from '..//projectsList/projectsList';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'
import resume from '../../img/Resume_GuillemFerrer.pdf'
import { useState } from 'react';



// class Navbar extends Component {
//     pdfGenerate=() => {
//         var doc=new jsPDF ('portrait', 'px','a4','false');
//         doc.addImage(resume, 'PDF', 65, 20,500, 400)
//         doc.save('Resume_GuillemFerrer.pdf')
//     }

// render() {

const Navbar = (props) => {

    const [isMobile, setIsMobile] = useState(true); 


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
            <nav className='navbar'>
                <ul 
                    className={isMobile ? "nav-links-mobile" : "navbar_links"}
                    onClick={() => setIsMobile(false)}
                >
                    <li>
                        <HashLink                 
                            to="#About" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className={isMobile ? "link-mobile" : "link"}>
                        About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#ProjectsList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className={isMobile ? "link-mobile" : "link"}>
                        Web Dev Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#GalleryList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className={isMobile ? "link-mobile" : "link"}>
                        Photography Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#Referrals" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className={isMobile ? "link-mobile" : "link"}>
                        Referrals
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#Contact" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className={isMobile ? "link-mobile" : "link"}>
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
                <button 
                    className="mobile-menu-icon"
                    onClick={() => setIsMobile(!isMobile)}
                >
                    {isMobile ? (
                        <i className="fas fa-times">AAAAAAAAAAA</i>
                        ): (
                        <i className="fas fa-bars">BBBBBBBBBBBBB</i>
                        )}
                </button>
            </nav>
        </header>
        

    </div>
  );
};

export default Navbar;
