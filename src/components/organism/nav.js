import React from "react";

import RoundButton from "../atoms/roundButton";
import LanguageButton from "../atoms/languageButton";

import '../../styles/nav.scss'
import logo from '../../media/logo.png'

export default function Nav () {
    return (
        <div className={'nav'}>
            <div className={'nav--logo'}>
                <img src={logo} alt={'logo'} ></img>
            </div>
            <div className={'nav--menu'}>
                <RoundButton label={'Home'} buttonType={'second'}/>
                <RoundButton label={'About'} buttonType={'second'}/>
                <RoundButton label={'Product'} buttonType={'second'}/>
                <RoundButton label={'Contact'} buttonType={'second'}/>
                <RoundButton label={'Order'} buttonType={'first'}/>
                <LanguageButton />
            </div>
        </div>
    )
}