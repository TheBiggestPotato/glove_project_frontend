import React from "react";

import roFlag from '../../media/flagRO.png'
import ukFlag from '../../media/flagUK.png'

import './styles/languageButton.scss'

export default function LanguageButton (props) {

    //TODO - finish the function when working on localization

    const {onClick, buttonType} = props

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <>
            <button type="button" className={'languageBtn'}><img src={ukFlag} alt="languageFlag" onClick={handleClick} className={`languageBtn languageBtn--${buttonType}`}/></button>
        </>
    )
}