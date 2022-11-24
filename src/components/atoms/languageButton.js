import React from "react";

import roFlag from '../../media/flagRO.png'
import ukFlag from '../../media/flagUK.png'

import './styles/languageButton.scss'

export default function LanguageButton (props) {

    //TODO - finish the function when working on localization

    const {onClick} = props

    const handleClick = (e) => {
        if (onClick) {
            onClick(e);
        }
    };

    return (
        <>
            <button type="button" id={'languageBtn'}><img src={ukFlag} alt="languageFlag" onClick={handleClick} id={'languageBtn--img'}/></button>
        </>
    )
}