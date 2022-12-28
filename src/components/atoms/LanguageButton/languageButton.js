import React, {useState} from "react";

import roFlag from "../../../assets/icons/flagRO.png";
import ukFlag from "../../../assets/icons/flagUK.png";

import { useTranslation } from "react-i18next";

import "./languageButton.scss";

export default function LanguageButton(props) {

  const { onClick, buttonType } = props;

  const { i18n } = useTranslation();

  let nextValueLanguage;

  i18n.language === 'en' ? nextValueLanguage = 'ro' : nextValueLanguage = 'en'
  
  const [nextLanguage, setNextLanguage] = useState(nextValueLanguage)

  function changeLanguage() {
    i18n.changeLanguage(nextLanguage);
    i18n.language === 'en' ? setNextLanguage('ro') : setNextLanguage('en')
  }

  return (
    <>
      <button type="button" className={"languageBtn"} onClick={changeLanguage} >
        <img
          src={i18n.language === 'en' ? ukFlag : roFlag}
          alt="languageFlag"
          className={`languageBtn languageBtn--${buttonType}`}
        />
      </button>
    </>
  );
}
