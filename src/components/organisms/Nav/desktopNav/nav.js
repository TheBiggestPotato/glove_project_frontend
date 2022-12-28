import React from "react";
import { useTranslation } from "react-i18next";

import RoundButton from "../../../atoms/RoundButton/roundButton";
import LanguageButton from "../../../atoms/LanguageButton/languageButton";

import logo from "../../../../assets/images/logo.png";

import "./nav.scss";

export default function Nav() {

  const { t } = useTranslation();

  return (
    <div className={"nav"}>
      <div className={"nav__logo"}>
        <img src={logo} alt={"logo"}></img>
      </div>
      <div className={"nav__menu"}>
        <RoundButton label={t('home')} buttonType={"second"} padding='0.625rem 1rem' route='/' />
        <RoundButton label={t('about')} buttonType={"second"} padding='0.625rem 1rem' route='/about' />
        <RoundButton label={t('product')} buttonType={"second"} padding='0.625rem 1rem' route='/product'/>
        <RoundButton label={t('contact')} buttonType={"second"} padding='0.625rem 1rem' route='/contact'/>
        <RoundButton label={t('order')} buttonType={"first"} padding='0.625rem 1rem'/>
        <LanguageButton buttonType={"first"} />
      </div>
    </div>
  );
}
