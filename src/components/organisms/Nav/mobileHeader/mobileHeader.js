import React, {useState} from 'react';
import { useTranslation } from "react-i18next";

import './mobileHeader.scss'
import mobileHeaderData  from './mobileHeaderData'

import Line from '../../../atoms/Line/line';
import LanguageButton from '../../../atoms/LanguageButton/languageButton';

import { IconContext } from 'react-icons';
import { RiMenu4Fill } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'

import useScrollDirection from '../../../../functions/useScrollDirection'

import logo from '../../../../assets/images/logo.png'

export default function MobileHeader () {

    const scrollDirection = useScrollDirection()

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    const { t } = useTranslation();

    return (
        <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
            <div className='header__logo'>
            <img src={logo} alt='logo' />
            </div>
            <nav className={sidebar ? 'mobileNav active' : 'mobileNav'}>
            <IconContext.Provider value={{ color: '#004A67'}}>
            <button type='button' className="mobileNav__burgerIcon" onClick={showSidebar}>{sidebar ? <IoCloseSharp /> : <RiMenu4Fill />}</button>
            </IconContext.Provider>
            <ul className="mobileNav__list">
                {
                    mobileHeaderData.map((item, index) => {
                           return <li key={index}><a href={item.link}>{t(item.name)}</a></li>
                    })
                }
                <li><LanguageButton buttonType={"second"} /></li>
            </ul>
        </nav>
        </header>
    )
}