import React from "react";

import Nav from "../../organisms/Nav/nav";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import Paragraph from "../../atoms/Paragraph/paragraph";
import Line from "../../atoms/Line/line";
import valuesData from './aboutValuesData';
import Video from "../../atoms/Video/video";

import coverPhoto from '../../../assets/images/coverPhotoAboutMockup.png'

import './about.scss';

export default function About () {
    return(
        <>
            <Nav />
            <div className='about__body'>
                <div className='about__cover'>
                    {/* <img src={coverPhoto} alt='aboutCoverPhoto' /> */}
                    <div id='imgMockup'/>
                </div>
                <div className='about__info'>
                    <div className='about__info__vision'>
                    <SmallHeading content='Viziunea noastra' color='blue'/>
                    <Paragraph 
                    content='Înființată pe fondul unei pandemii la nivel mondial, PPS Manufacturing a luat naștere printr-un apel la acțiune. Un apel pentru a proteja sănătatea oamenilor și bunăstarea planetei noastre prin furnizarea de echipamente de protecție medicală fiabile, în căutarea constantă a unor soluții mai ecologice.'
                    />
                    </div>
                    <div className='about__info__values'>
                    <SmallHeading content='Valorile PPS' color='blue'/>
                    <Paragraph content='Aceasta este structura culturii noastre și cadrul deciziilor pe care le luam.'/>
                    <div className='about__info__values__headline'>
                    {valuesData.map((section) => {
                        return(
                        <div key={section.id} className='about__info__values__headline__section'>
                        <Line width='21.25rem' height='0.125rem'/>
                        <BigHeading  content={section.heading}/>
                        <Paragraph content={section.content}/>
                        <br/>
                        <br/>
                        </div>
                        )
                    })}
                    <Line width='21.25rem' height='0.125rem'/>
                    </div>
                    </div>
                </div>
                <div className='about__factory'>
                    <div className='about__factory__cover'/>
                    <div className='about__factory__info'>
                    <SmallHeading content='Fabrica noastra' color='blue'/>
                    <Paragraph 
                    content='Situată în inima Balcanilor, fabrica noastră, cu sediul în Plovdiv, cuprinde peste 6000 mp. de spațiu de lucru, cu propria noastră linie de producție, proiectată de ingineri experimentați, cu o capacitate de 800 000 de mănuși pe zi. Avem propriul nostru departament de cercetare și dezvoltare, unde sunt dezvoltate și testate noi produse și inovații, ținând cont de obiectivul nostru de a îmbunătății viața oamenilor, protejând în același timp și mediul.'
                    />
                    </div>
                    <div className='about__factory__video'>
                        <Video embedId="jUBx9-OGNEM"/>
                    </div>
                </div>
            </div>
        </>
    )
}