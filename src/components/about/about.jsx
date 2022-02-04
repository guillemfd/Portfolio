import './about.css'
import img_ME from '../../img/foto_perfil.png'
import IRONHACK from '../../img/IRONHACK-logo.png'
import ELISAVA from '../../img/ELISAVA-logo.png'
import SOUTHAMPTON from '../../img/Southampton-logo.png'
import ROCKET from '../../img/rocket.png'





const About = () => {


    return (
        <div className="a">
            <div className="a-left">
                {/* <div className="a-card bg"></div> */}
                {/* <div className="a-card"> */}
                    <img src={img_ME} alt='thisIsMe' className='a-img' />
                {/* </div> */}
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <img 
                        src={ROCKET} 
                        alt='ROCKET' 
                        className='icon' />
                <p className="a-desc">
                &emsp;&emsp;With a Bachelor's Degree in Design and recently graduated in Web Development. I am a multi-disciplinary person; I have always worked in my passions so I've been specialised in different fields <i>(Web Development, Project Management, Photography, 3D Printing and even Veterinary Nursing!)</i>. I love when a project mixes <strong>technic, creative and challenging skills</strong>, so this is why I am landing into web development.
                </p>
                <p className="a-end">Great at tech and focused in <strong>Frontend Development</strong>.</p>

                <div className='school-logos'>
                    <a 
                    href="https://www.ironhack.com/" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <img 
                        src={IRONHACK} 
                        alt='IRONHACK-logo' 
                        className='logo' />
                    </a>
                    <a 
                    href="https://www.elisava.net/" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <img 
                        src={ELISAVA} 
                        alt='ELISAVA-logo' 
                        className='logo' /></a>
                    <a 
                    href="https://www.southampton.ac.uk/" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <img 
                        src={SOUTHAMPTON} 
                        alt='SOUTHAMPTON-logo' 
                        className='logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About