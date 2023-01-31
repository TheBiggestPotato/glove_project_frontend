import React from "react";

import Nav from "../../organisms/Nav/desktopNav/nav";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import Glove3D from "../../atoms/glove3D/glove3D";
import BenefitComp from "../../atoms/benefitComp/benefitComp";
import useWindowDimensions from "../../../functions/getWindowDimensions";
import MobileHeader from "../../organisms/Nav/mobileHeader/mobileHeader";
import useScrollDirection from '../../../functions/useScrollDirection'
import { Canvas } from "@react-three/fiber";
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";
import MobileFooter from "../../organisms/Nav/footer/mobileFooter/mobileFooter";
import Footer from "../../organisms/Nav/footer/desktopFooter/footer";

import {ReactComponent as AllergiesLogo} from '../../../assets/icons/allergies.svg';
import {ReactComponent as ProtectionLogo} from '../../../assets/icons/protection.svg';
import {ReactComponent as DurableLogo} from '../../../assets/icons/durable.svg';
import {ReactComponent as ExtremeTemperaturesLogo} from '../../../assets/icons/extremeTemperatures.svg';
import {ReactComponent as GoodFitLogo} from '../../../assets/icons/goodFit.svg';
import gloveHeroTitle from '../../../assets/images/gloveHeroTitle.png'


import "./Home.scss";

const Home = () => {
  const { t } = useTranslation();

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
      {width < 769 ? <MobileHeader /> : <Nav />}
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
          {width > 800 ?
              <div className="firstCorner">
                <svg>
                <line x1="0" y1="180" x2="0" y2="601" style={{stroke: '#0683B9', strokeWidth: '10px'}} />
                <line x1="10" y1="600" x2="570" y2="600" style={{stroke: '#0683B9', strokeWidth: '5px'}} />
                </svg>
              </div> : '' }
          {width > 800 ?
              <div className="secondCorner">
                <svg>
                    <line x1="30" y1="0" x2="601" y2="0" style={{stroke: '#0683B9', strokeWidth: '10px'}} />
                    <line x1="600" y1="10" x2="600" y2="360" style={{stroke: '#0683B9', strokeWidth: '6px'}} />
                </svg>
              </div>  : '' } 
         <div className="home__firstRow__callToActionButtons">
        <RoundButton label={t('moreAboutUs')} buttonType={"first"} padding='15px 25px' route='/about'/>
        <RoundButton label={t('seeOurProduct')} buttonType={"first"} padding='15px 25px' route='/product'/>
        </div>
      </div>
      <Line width={width < 1200 ? '300px' : '800px'} height='3px' color='blue' className='firstBreakLine'/>
      <div className="home__secondRow" ref={refSecondRow}>
        <div className="home__secondRow__content">
        <div className={`home__secondRow__description ${inViewSecondRow ? 'animate' : ''}`}>
          <div className="home__secondRow__description__headline">
          {t('whyWouldYouChooseNitrileGloves')}
          </div>
          <div className="home__secondRow__description__content">
          <span>{t('firstParagraphDescription')}</span>
          <br/>
          <span>{t('secondParagraphDescription')}</span>
          <br/>
          <span>{t('thirdParagraphDescription')}</span>
          </div>
        </div>
        <div className={`home__secondRow__image ${inViewSecondRow ? 'animate' : ''}`}>
        <img src={gloveHeroTitle} alt='gloveImg'/>
        </div>
        </div>
        <Line width={width < 1200 ? '300px' : '800px'} height='3px' color='blue' className='secondBreakLine'/>
      </div>
      <div className="home__thirdRow" ref={refThirdRow}>
          <div className={`home__thirdRow__content ${inViewThirdRow ? 'animate' : ''}`}>
          <h1>{t('benefits')}</h1>
          <span>{t('benefitsDescription')}</span>
          </div>
          <div className={`home__thirdRow__benefits ${inViewThirdRow ? 'animate' : ''}`}>
          <BenefitComp icon={<AllergiesLogo/>} headLine={t('noAllergicReactions')} description={t('noAllergicReactionsDescription')}/>
          <BenefitComp icon={<ProtectionLogo/>} headLine={t('reliableProtection')} description={t('reliableProtectionDescription')}/>
          <BenefitComp icon={<DurableLogo/>} headLine={t('extremelyDurable')} description={t('extremelyDurableDescription')}/>
          <BenefitComp icon={<ExtremeTemperaturesLogo/>} headLine={t('resistantExtremeTemperatures')} description={t('resistantExtremeTemperaturesDescriptions')}/>
          <BenefitComp icon={<GoodFitLogo/>} headLine={t('comfortableFittingHand')} description={t('comfortableFittingHandDescription')}/>
          </div>
        </div>
        {width < 830 ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default Home;
