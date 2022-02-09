import "./referralsList.css";
import HorizontalScroll from 'react-scroll-horizontal'
import { referrals } from '../../data'
import Referral from '../referral/referral'


const ReferralsList = () => {


  return (
    <div className="horContainer" id="Referrals">
            <div className="pl-texts">
                <h1 className="R-title">Referrals</h1>
            </div>
            <div className="fade-effect-scroll left">
            </div>
                <HorizontalScroll >
                    {referrals.map((referral) => (
                        <Referral key={referral.id} img={referral.img} name={referral.name} country={referral.country} link={referral.link} position={referral.position} referral={referral.referral} referralB={referral.referralB}/>
                    ))}
                </HorizontalScroll>
            <div className="fade-effect-scroll right">
            </div>
    </div>
  );
};

export default ReferralsList;
