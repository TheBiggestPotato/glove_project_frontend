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

import coverPhoto from '../../../assets/images/coverPhotoAboutMockup.png'

import './about.scss';
import useWindowDimensions from "../../../functions/getWindowDimensions";

export default function About () {

    const { height, width } = useWindowDimensions();

    const { t } = useTranslation();

    return(
        <div className="about">
            {width < 992 ? <MobileHeader /> : <Nav />}
            <div className='about__body'>
                <div className='about__cover'>
                    {/* <img src={coverPhoto} alt='aboutCoverPhoto' /> */}
                    <div id='imgMockup'/>
                </div>
                <div className='about__info'>
                    <div className='about__info__vision'>
                    <SmallHeading content={t('vision')} color='blue'/>
                    <Paragraph 
                    content={t('visionContent')}
                    />
                    </div>
                    <div className='about__info__values'>
                    <SmallHeading content={t('values')} color='blue'/>
                    <Paragraph content={t('valuesContent')}/>
                    <div className='about__info__values__headline'>
                    {valuesData.map((section) => {
                        return(
                        <div key={section.id} className='about__info__values__headline__section'>
                        <Line width={width < 922 ? '300px' : '340px'} height='0.125rem' color='blue'/>
                        <BigHeading  content={t(section.heading)}/>
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
                <div className='about__factory'>
                    <div className='about__factory__cover'/>
                    <div className='about__factory__info'>
                    <SmallHeading content={t('factory')} color='blue'/>
                    <Paragraph 
                    content={t('factoryContent')}
                    />
                    </div>
                    <div className='about__factory__video'>
                        <Video embedId="jUBx9-OGNEM"/>
                    </div>
                </div>
            </div>
        </div>
    )
}