import './contact.css'
import mail from '../../img/messageW.png'
import pc from '../../img/githubW.png'
import cam from '../../img/instagramW.png'
import phone from '../../img/telephoneW.png'
import address from '../../img/locationW.png'
import linkedin from '../../img/linkedinW.png'
import pencil from '../../img/pencil-dynamic-color.png'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm( 
                "service_0ox7xvn", 
                "template_l0pth9k", 
                formRef.current, 
                "user_YtfNnHvEbYt9uVvmpSCP7"
                )
            .then((result) => {
                    console.log("Your email has been seccessfully sent!");
                    setDone(true)
                }, (error) => {
                    console.log(error.text);
                });
    }

    return (
        <div className="c" id="Contact">
            <div className="pl-texts">
                <h1 className="c-title">How can I help you?</h1>
                <p className="c-desc">
                    Don't be shy and contact me!
                        {/* <img
                            src={pencil}
                            alt="e-mail"
                            className="c-icon" /> */}
                </p>
            </div>
            <div className="c-wrapper">
            
                <div className="c-left">
                        <div className="c-info-item">
                            <img
                            src={mail}
                            alt="e-mail"
                            className="c-icon" />
                            guillemfd@guillemfd.com
                        </div>
                        <div className="c-info-item">
                            <img
                            src={linkedin}
                            alt="linkedin"
                            className="c-icon" />
                            <a 
                            href="https://www.linkedin.com/in/guillemfd/"
                            target="_blank"
                            rel="noreferrer"
                            download="Resume_GuillemFerrer"
                            className='c-link'>
                            linkedin.com/guillemfd
                            </a>
                        </div>
                        <div className="c-info-item">
                            <img
                            src={pc}
                            alt="e-mail"
                            className="c-icon" />
                            <a 
                            href="https://github.com/guillemfd"
                            target="_blank"
                            rel="noreferrer"
                            download="Resume_GuillemFerrer"
                            className='c-link'>
                            github.com/guillemfd
                            </a>
                        </div>
                        <div className="c-info-item">
                            <img
                            src={cam}
                            alt="e-mail"
                            className="c-icon" />
                            <a 
                            href="https://www.instagram.com/guillemfdphoto/"
                            target="_blank"
                            rel="noreferrer"
                            download="Resume_GuillemFerrer"
                            className='c-link'>
                            instagram.com/guillemfdphoto
                            </a>
                        </div>
                        <div className="c-info-item">
                            <img
                            src={phone}
                            alt="e-mail"
                            className="c-icon" />
                            +34 686 04 55 61
                        </div>
                        <div className="c-info-item">
                            <img
                            src={address}
                            alt="e-mail"
                            className="c-icon" />
                            Vilanova i la Geltrú (Barcelona)
                        </div>
                </div>
                <div className='c-right'>

                <form ref={formRef} onSubmit={handleSubmit} className='c-input'>
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Subject' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea rows={6} placeholder="Message" name="message"/>
                    <button className='c-button'>Send request</button>
                    {done && 
                    <p className='c-response'>Your email has been seccessfully sent!</p>}
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contact