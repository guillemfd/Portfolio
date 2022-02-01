import './intro.css'
import img_ME from '../../img/foto_perfil.png'

const Intro = () => {


    return (
        <div className="i">
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hello, my name is</h2>
                    <h1 className='i-name'>Guillem</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Designer</div>
                            <div className='i-title-item'>Photographer</div>
                            <div className='i-title-item'>Project Manager</div>
                            <div className='i-title-item'>3D Printer</div>
                        </div>
                    </div>
                    <p className='i-desc'>
                        Focused in Frontend Development, with a Bachelor's Degree in Design, a Photography lover, I enjoy when a project mixes technic & creative challenges.
                    </p>
                </div>
            </div>

            <svg class="arrows">
                <path className='a1' d="M0 0 L30 32 L60 0"></path>
                <path className='a2' d="M0 20 L30 52 L60 20"></path>
                <path className='a3' d="M0 40 L30 72 L60 40"></path>
            </svg>

            <div className="i-right">
                <div className='i-bg'></div>
                <img src={img_ME} alt='' className='i-img' />
            </div>
        </div>
    )
}

export default Intro