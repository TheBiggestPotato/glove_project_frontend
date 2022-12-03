import React from "react";

import RoundButton from "../../atoms/RoundButton/roundButton";
import LanguageButton from "../../atoms/LanguageButton/languageButton";

import "./nav.scss";
import logo from "../../../assets/images/logo.png";

export default function Nav() {
  return (
    <div className={"nav"}>
      <div className={"nav__logo"}>
        <img src={logo} alt={"logo"}></img>
      </div>
      <div className={"nav__menu"}>
        <RoundButton label={"Home"} buttonType={"second"} />
        <RoundButton label={"About"} buttonType={"second"} />
        <RoundButton label={"Product"} buttonType={"second"} />
        <RoundButton label={"Contact"} buttonType={"second"} />
        <RoundButton label={"Order"} buttonType={"first"} />
        <LanguageButton buttonType={"first"} />
      </div>
    </div>
  );
}
