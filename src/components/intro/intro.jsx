import './intro.css'
import G from '../../img/G.png'

const Intro = () => {


    return (
        <div className="i" id="Intro">
            {/* <div class="custom-shape-divider-top-1643930288">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,94.09,131.32,485.3,92.57c43-7.64,84.3-20.12,17.61-96.46,59-8.63,102.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".9" class="shape-fill"></path>
                </svg>
            </div> */}
            <div className="i-left">
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hi there! I'm</h2>
                    <h1 className='i-name'>Guillem</h1>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Designer</div>
                            <div className='i-title-item'>Photographer</div>
                            <div className='i-title-item'>Product Manager</div>
                            {/* <div className='i-title-item'>3D Printer</div> */}
                        </div>
                    </div>
                    {/* <p className='i-desc'>
                        Focused in Frontend Development, with a Bachelor's Degree in Design, a Photography lover, I enjoy when a project mixes technic & creative challenges.
                    </p> */}
                </div>
            </div>



            <div className="i-right">
                {/* <div className='i-bg'></div> */}
                <img src={G} alt='thisIsMe' className='i-img' />
                <svg className="arrows">
                <path className='a1' d="M0 0 L30 32 L60 0"></path>
                <path className='a2' d="M0 20 L30 52 L60 20"></path>
                <path className='a3' d="M0 40 L30 72 L60 40"></path>
            </svg>
            </div>

            

            {/* <div className="i-right">
                <div className='i-bg'></div>
                <div className='i-right-wrapper'>
                    <h2 className='i-right-intro'>Website is under</h2>
                    <h1 className='i-right-name'><span style={{color: 'white'}}>🛠</span> MAINTENANCE <span style={{color: 'white'}}>🛠</span></h1>
                    <p>in the meanwhile you can contact me at guillemfd@guillemfd.com</p>
                    <p className='i-right-desc'>(please come back soon!)</p>
                </div>
            </div> */}
        </div>
    )
}

export default Intro