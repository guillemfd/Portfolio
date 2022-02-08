import "./referral.css";
import linkedinLogo from '../../img/referrals/linkdin_icon.png'



const Referral = ({ img, name, country, position, link, referral }) => {



  return (
    <div>
        <div className='p-card'>
            <div className='p'>
                <div className='p-header'>
                    <p className='p-check'><span style={{fontWeight: 'bold'}}>{name}</span> {country} <br></br> <span style={{fontStyle: 'italic'}}>{position}</span></p>
                </div>
                <img src={img} alt="projectIMG" className="p-img" />
                <a href={link} target="_blank" rel="noreferrer">
                    <button className='p-button'>
                        <img
                            src={linkedinLogo}
                            alt="linkedinLogo"
                            className="githubLogo" />
                    </button>
                </a>
            </div>
            <p className='p-techs-text'>{referral}</p>
        </div>        
    </div>
  );
};

export default Referral;
