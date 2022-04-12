import './about.css'
import img_ME from '../../img/foto_perfil_petita.jpg'
import IRONHACK from '../../img/IRONHACK-logo.png'
import ELISAVA from '../../img/ELISAVA-logo.png'
import SOUTHAMPTON from '../../img/Southampton-logo.png'
import google from '../../img/Google.png'
// import ROCKET from '../../img/rocket.png'





const About = () => {


    return (
        <div className="a" id="About">
            <div className="a-left">
                {/* <div className="a-card bg"></div> */}
                {/* <div className="a-card"> */}
                    <img src={img_ME} alt='thisIsMe' className='a-img' />
                {/* </div> */}
            </div>
            <div className="a-right">
                <h1 className="R-title">About Me</h1>
                {/* <img 
                        src={ROCKET} 
                        alt='ROCKET' 
                        className='icon' /> */}
                <p className="a-desc">
                &emsp;&emsp;With a Bachelor's Degree in Design and recently graduated in Web Development, I'm a multi-disciplinary person. Throughout my career, I've been lucky enough to develop my passions in a professional way, therefore specialising in different fields. I love when a project mixes <strong>technical, creative and challenging skills</strong>, so this is why I've landed into web development.
                </p><br></br>
                <p className="a-desc">&emsp;&emsp;Experienced designer, photographer and project manager, and trained as a fullstack developer and UX/UI designer, I’m looking to bring all these skills in an exciting project.</p>

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
                    <a 
                    href="https://www.coursera.org/professional-certificates/google-ux-design" 
                    target="_blank" 
                    rel="noreferrer noopener">
                        <img 
                        src={google} 
                        alt='google-logo' 
                        className='logo' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About