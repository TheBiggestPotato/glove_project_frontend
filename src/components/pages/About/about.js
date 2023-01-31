import React from "react";
import { useTranslation } from "react-i18next";

import Nav from "../../organisms/Nav/desktopNav/nav";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import Paragraph from "../../atoms/Paragraph/paragraph";
import Line from "../../atoms/Line/line";
import valuesData from './aboutValuesData';
import Video from "../../atoms/Video/video";
import MobileHeader from "../../organisms/Nav/mobileHeader/mobileHeader";
import MobileFooter from "../../organisms/Nav/footer/mobileFooter/mobileFooter";
import Footer from "../../organisms/Nav/footer/desktopFooter/footer";

import headerFactory from '../../../assets/images/header1.png'
import headerAbout from '../../../assets/images/header2.2.png'

import './about.scss';
import useWindowDimensions from "../../../functions/getWindowDimensions";
import { useInView } from 'react-intersection-observer';

export default function About () {

    const { height, width } = useWindowDimensions();

    const { t } = useTranslation();

    const [refValuesHeadline, inViewValuesHeadline] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [refFactory, inViewFactory] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return(
        <div className="about">
            {width < 992 ? <MobileHeader /> : <Nav />}
            <div className='about__body'>
                <div className='about__cover'>
                    <img src={headerAbout} alt='aboutCoverPhoto' />
                </div>
                <div className='about__info'>
                    <div className='about__info__vision'>
                    <SmallHeading content={t('vision')} color='blue'/>
                    <Paragraph 
                    content={t('visionContent')}
                    />
                    </div>
                    <div className='about__info__values'>
                    <div className="about__info__values__description">
                    <SmallHeading content={t('values')} color='blue'/>
                    <Paragraph content={t('valuesContent')}/>
                    </div>
                    <div ref={refValuesHeadline} className={`about__info__values__headline`}>
                    {valuesData.map((section) => {
                        return(
                        <div key={section.id} className={`about__info__values__headline__section ${inViewValuesHeadline ? 'animate' : ''}`}>
                        <Line width={width < 922 ? '300px' : '340px'} height='0.125rem' color='blue'/>
                        <BigHeading  content={t(section.heading)} color='darkestBlue'/>
                        <Paragraph content={t(section.content)}/>
                        <br/>
                        <br/>
                        </div>
                        )
                    })}
                    <Line width={width < 922 ? '300px' : '340px'} height='0.125rem' color='blue'/>
                    </div>
                    </div>
                </div>
                <div className='about__factory' ref={refFactory}>
                    <div className={`about__factory__cover ${inViewFactory ? 'animate' : ''}`}>
                        <img src={headerFactory} alt='aboutFactoryCover' />
                    </div>
                    <div className={`about__factory__info ${inViewFactory ? 'animate' : ''}`}>
                    <SmallHeading content={t('factory')} color='blue'/>
                    <Paragraph 
                    content={t('factoryContent')}
                    />
                    </div>
                    <div className={`about__factory__video ${inViewFactory ? 'animate' : ''}`}>
                        <Video embedId="jUBx9-OGNEM"/>
                    </div>
                </div>
            </div>
            {width < 830 ? <MobileFooter /> : <Footer />}
        </div>
    )
}