import './contact.css'
import mail from '../../img/at-dynamic-color.png'
import phone from '../../img/phone-incoming-dynamic-color.png'
import address from '../../img/map-pin-dynamic-color.png'
import pencil from '../../img/pencil-dynamic-color.png'
import { useRef } from 'react'


const Contact = () => {

    const formRef = useRef
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="c">
            <div className='c-bg'></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">How can I help you?</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img
                            src={mail}
                            alt="e-mail"
                            className="c-icon" />
                            guillemfd@guillemfd.com
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
                </div>
                <div className='c-right'>
                    <div className="c-info-item">
                        <img
                            src={pencil}
                            alt="e-mail"
                            className="c-icon" />
                        <p className='c-shy'>Don't be shy, let me know!</p>
                    </div>
                {/* <form ref={formRef} onSubmit={handleSubmit}> */}
                <form>
                    <input type="text" placeholder='Name' name="user_name" />
                    <input type="text" placeholder='Subject' name="user_subject" />
                    <input type="text" placeholder='Email' name="user_email" />
                    <textarea rows={5} placeholder="Message" name="message"/>
                    <button className='c-button'>Submit</button>
                </form>


                </div>
            </div>
        </div>
    )
}

export default Contact