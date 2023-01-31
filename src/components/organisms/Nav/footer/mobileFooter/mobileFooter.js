import React from "react";
import './mobileFooter.scss'

import { ImLocation2 } from 'react-icons/im';
import { GiRotaryPhone } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import Paragraph from "../../../../atoms/Paragraph/paragraph";
import mobileHeaderData  from '../../mobileHeader/mobileHeaderData';
import LanguageButton from "../../../../atoms/LanguageButton/languageButton";

import { useTranslation } from "react-i18next";

import footerBackground from '../../../../../assets/images/footerV2.png'
import whiteLogo from '../../../../../assets/images/whiteLogo.png'
import SmallHeading from "../../../../atoms/SmallHeading/smallHeading";

export default function MobileFooter () {

    const { t } = useTranslation();

    return (
        <div className="mobileFooter">
            <div className="mobileFooter__background">
                <img src={footerBackground} alt='footerBackground'/>
            </div>
            <div className="mobileFooter__info">
                <ul className="mobileFooter__info__list">
                        {
                            mobileHeaderData.map((item, index) => {
                                return <li key={index}><a href={item.link}>{t(item.name)}</a></li>
                            })
                        }
                        <li><LanguageButton buttonType={"second"} /></li>
                    </ul>
                <div className="mobileFooter__info__contact">
                    <SmallHeading content='Contact' color='white'/>
                    <IconContext.Provider value={{ color: 'white', size: '40px', style: { verticalAlign: 'middle' }}}>
                        <div className='mobileFooter__info___contact--row'>
                            <ImLocation2 className="react_icons_contact"/>
                            <Paragraph content={'Strada Aviatiei 5'}/>
                        </div>
                        <div className='mobileFooter__info___contact--row'>
                            <GiRotaryPhone className="react_icons_contact"/>
                            <Paragraph content={'+40745065663'}/>
                        </div>
                        <div className='mobileFooter__info___contact--row'>
                            <FiMail className="react_icons_contact"/>
                            <Paragraph content={'support@ppsmedical.com'}/>
                        </div>
                    </IconContext.Provider>
                </div>
                <div className="mobileFooter__info__logo">
                    <img src={whiteLogo} alt='footerBackground'/>
                </div>
            </div>
        </div>
    )
}