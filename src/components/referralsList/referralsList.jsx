import "./referralsList.css";
import HorizontalScroll from 'react-scroll-horizontal'
import { referrals } from '../../data'
import Referral from '../referral/referral'





const ReferralsList = () => {


  return (
    <div>
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">Referrals</h1>
            </div>
            <div className="pl-list">
                <HorizontalScroll >              
                    <div>
                    {referrals.map((referral) => (
                        <Referral key={referral.id} img={referral.img} name={referral.name} country={referral.country} link={referral.link} position={referral.position} referral={referral.referral}/>
                    ))}
                    </div>
                </HorizontalScroll>
            </div>
        </div>       
    </div>
  );
};

export default ReferralsList;
