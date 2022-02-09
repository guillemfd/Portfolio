import { HashLink } from 'react-router-hash-link';
import "./navbar.css";
import G from '../../img/G.png'
import navbarBG from '../../img/navbar.svg'
import ProjectsList from '..//projectsList/projectsList';
import { Link } from 'react-router-dom';



const Navbar = (props) => {



  return (
    <div>

        <header>
            <Link to="/" className="navbar-logo">
                    <img 
                    className="home" 
                    src={G} 
                    alt="logo" />
            </Link>
            <nav>
                <ul className="navbar_links">
                    <li>
                        <HashLink                 
                            to="#About" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#ProjectsList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Web Dev Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#GalleryList" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Photography Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink                 
                            to="#Referrals" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="link">
                        Referrals
                        </HashLink>
                    </li>
                    <li>
                        <Link to="/" className="link">
                        Resume
                        </Link>
                    </li>
                    <li>
                        <HashLink                 
                            to="#Contact" 
                            activeClass="active"
                            spy={true} 
                            smooth={true}
                            className="nav_button">
                        Contact
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </header>
        

    </div>
  );
};

export default Navbar;
