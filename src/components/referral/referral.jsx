import "./referral.css";
import linkedinLogo from '../../img/referrals/linkdin_icon.png'



const Referral = ({ img, name, country, position, link, referral, referralB }) => {



  return (
    <div>
        <div className='R-card'>
            <div className='R-header'>
                <img src={img} alt="contactIMG" className="R-img" />
                <div>
                    <div>
                        <p className='R-name'>{name}</p>
                        <p className='R-country'>{country}</p>
                    </div>
                        <p className='R-position'>{position}</p>
                </div>

            </div>
            <p className='R-quotes'>"</p>
            <p className='R-referral'>&emsp;&emsp;{referral}</p>
            <p className='R-referralB'>&emsp;&emsp;{referralB}</p>
            <p className='R-quotesB'>"</p>

            <a href={link} target="_blank" rel="noreferrer">
                <button className='R-button'>
                    <img
                        src={linkedinLogo}
                        alt="linkedinLogo"
                        className="linkedinLogo" />
                </button>
            </a>
        </div>
    </div>        
  );
};

export default Referral;
