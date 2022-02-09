import "./referralsList.css";
import HorizontalScroll from 'react-scroll-horizontal'
import { referrals } from '../../data'
import Referral from '../referral/referral'





const ReferralsList = () => {


  return (
    <div className="horContainer">
        {/* <div className='pl'> */}
            <div className="pl-texts">
                <h1 className="pl-title">Referrals22</h1>
            </div>
            {/* <div className="pl-list"> */}
                <HorizontalScroll >
                    {referrals.map((referral) => (
                        <Referral key={referral.id} img={referral.img} name={referral.name} country={referral.country} link={referral.link} position={referral.position} referral={referral.referral} referralB={referral.referralB}/>
                    ))}
                    {/* <div className="main bg">
                        <h1>Hello World 1</h1>
                    </div>
                    <div className="main bg1">
                    <h1>Hello World 2</h1>
                    </div>
                    <div className="main bg2">
                        <h1>Hello World 3</h1>
                    </div>
                    <div className="main bg3">
                        <h1>Hello World 4</h1>
                    </div> */}
                </HorizontalScroll>
            {/* </div> */}
        {/* </div>        */}
    </div>
  );
};

export default ReferralsList;
