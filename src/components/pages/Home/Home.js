import React from "react";

import Nav from "../../organisms/Nav/desktopNav/nav";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import Glove3D from "../../atoms/glove3D/glove3D";
import BenefitComp from "../../atoms/benefitComp/benefitComp";
import { Canvas } from "@react-three/fiber";
import { useInView } from 'react-intersection-observer';
import useWindowDimensions from "../../../functions/getWindowDimensions";
import MobileHeader from "../../organisms/Nav/mobileHeader/mobileHeader";

import {ReactComponent as AllergiesLogo} from '../../../assets/icons/allergies.svg';
import {ReactComponent as ProtectionLogo} from '../../../assets/icons/protection.svg';
import {ReactComponent as DurableLogo} from '../../../assets/icons/durable.svg';
import {ReactComponent as ExtremeTemperaturesLogo} from '../../../assets/icons/extremeTemperatures.svg';
import {ReactComponent as GoodFitLogo} from '../../../assets/icons/goodFit.svg';
import gloveHeroTitle from '../../../assets/images/gloveHeroTitle.png'

import "./Home.scss";

const Home = () => {

  const { height, width } = useWindowDimensions();

  const [refSecondRow, inViewSecondRow] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [refThirdRow, inViewThirdRow] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="home">
      {width < 992 ? <MobileHeader /> : <Nav />}
      <div className="home__firstRow">
        <div className="firstHeadline">
        <h1>PPS Medical</h1>
        </div>
        <div className="secondHeadline">
        <h1>Safe Care</h1>
        </div>
        <div className={'canvas'}>
            <Canvas>
                <Glove3D />
                <ambientLight intensity={0.5} />
                <directionalLight  position={[-10,15,10]} intensity={1} />
                <directionalLight  position={[10,15,10]} intensity={1} />
                <directionalLight  position={[10,15,-10]} intensity={1} />
                <directionalLight  position={[-10,15,-10]} intensity={1} />
            </Canvas>
        </div>
        <div className="firstCorner">
        <svg>
            <line x1="10" y1="180" x2="10" y2="601" style={{stroke: '#0683B9', strokeWidth: '5px'}} />
            <line x1="10" y1="600" x2="570" y2="600" style={{stroke: '#0683B9', strokeWidth: '5px'}} />
        </svg>
        </div>
        <div className="secondCorner">
        <svg>
            <line x1="30" y1="10" x2="601" y2="10" style={{stroke: '#0683B9', strokeWidth: '5px'}} />
            <line x1="600" y1="10" x2="600" y2="360" style={{stroke: '#0683B9', strokeWidth: '5px'}} />
        </svg>
        </div>
         <div className="home__firstRow__callToActionButtons">
        <RoundButton label={'More about us'} buttonType={"first"} padding='15px 25px' route='/about'/>
        <RoundButton label={'See our product'} buttonType={"first"} padding='15px 25px' route='/product'/>
        </div>
      </div>
      <Line width='500px' height='3px' color='blue' className='firstBreakLine'/>
      <div className="home__secondRow" ref={refSecondRow}>
        <div className={`home__secondRow__description ${inViewSecondRow ? 'animate' : ''}`}>
          <div className="home__secondRow__description__headline">
          Why would you choose nitrile gloves?
          </div>
          <div className="home__secondRow__description__content">
          <span>One of the main reasons someone would choose nitrile gloves over other types of gloves is their chemical resistance. Nitrile is a synthetic rubber that is resistant to many chemicals, including oils, acids, and solvents. This makes them ideal for use in industries such as automotive, petrochemical, and laboratory settings.</span>
          <br/>
          <span>Nitrile gloves are also more puncture-resistant than latex gloves. This makes them a good choice for industries where there is a risk of sharp objects, such as construction or manufacturing.</span>
          <br/>
          <span>Another advantage of nitrile gloves is that they are often more comfortable and provide a better fit than other types of gloves. Nitrile is a synthetic rubber that is more flexible and stretchy than natural rubber (latex), so it can conform to the hand more easily. This can help reduce hand fatigue and improve dexterit.</span>
          </div>
        </div>
        <div className={`home__secondRow__image ${inViewSecondRow ? 'animate' : ''}`}>
        <img src={gloveHeroTitle} alt='gloveImg'/>
        </div>
      </div>
      <Line width='500px' height='3px' color='blue' className='secondBreakLine'/>
      <div className="home__thirdRow" ref={refThirdRow}>
          <div className={`home__thirdRow__content ${inViewThirdRow ? 'animate' : ''}`}>
          <h1>Benefits</h1>
          <span>Discover the superior quality and durability of nitrile gloves, trusted by industry experts worldwide. Experience the unmatched strength and puncture resistance of nitrile, making it the go-to choice for professionals in a variety of industries. Don't settle for less, see why industry experts choose nitrile gloves.</span>
          </div>
          <div className={`home__thirdRow__benefits ${inViewThirdRow ? 'animate' : ''}`}>
          <BenefitComp icon={<AllergiesLogo/>} headLine='No allergic reactions' description='Nitrile is hypoallergic and does not cause rashes, itching, or any other symptom typical for a latex allergy.'/>
          <BenefitComp icon={<ProtectionLogo/>} headLine='Reliable protection' description='Nitrile gloves protects you from chemical substances and acids, hazardous microorganisms, oils and petrol-based products'/>
          <BenefitComp icon={<DurableLogo/>} headLine='Extremely durable' description='They are extremely resistant to tears and simultaneously, do not interfere with the tactile sensitivity of the hands in any way because they are thin and comfortable.'/>
          <BenefitComp icon={<ExtremeTemperaturesLogo/>} headLine='Resistant to extreme temperatures' description='Nitrile is a material that can resist any temperature in the range between -40 °C to +108 °C. '/>
          <BenefitComp icon={<GoodFitLogo/>} headLine='Comfortable and fitting for any hand' description='Apart from being super durable, hypoallergic and reliable, the PPS Manufacturing gloves are ergonomic and a perfect fit for any hand.'/>
          </div>
        </div>
    </div>
  );
};

export default Home;
