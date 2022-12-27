import React, {useState} from 'react';

import './mobileHeader.scss'
import mobileHeaderData  from './mobileHeaderData'

import Line from '../../../atoms/Line/line';

import { RiMenu4Fill } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'

import useScrollDirection from '../../../../functions/useScrollDirection'

import logo from '../../../../assets/images/logo.png'

export default function MobileHeader () {

    const scrollDirection = useScrollDirection()

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
            <div className='header__logo'>
            <img src={logo} alt='logo' />
            </div>
            <nav className={sidebar ? 'mobileNav active' : 'mobileNav'}>
            <button type='button' className="mobileNav__burgerIcon" onClick={showSidebar}>{sidebar ? <IoCloseSharp /> : <RiMenu4Fill />}</button>
            <ul className="mobileNav__list">
                {
                    mobileHeaderData.map((item, index) => {
                           return <li key={index}><a href={item.link}>{item.name}</a></li>
                    })
                }
            </ul>
        </nav>
        </header>
    )
}