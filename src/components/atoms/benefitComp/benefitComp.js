import React from "react";
import './benefitComp.scss'

export default function BenefitComp(props) {

    const { icon, headLine, description} = props;

    return (
        <div className="benefit">
            <div className="benefit__icon">
                {icon}
            </div>
            <div className="benefit__content">
                <div className="benefit__content__headline">
                    {headLine}
                </div>
                <div className="benefit__content__description">
                    {description}
                </div>
            </div>
        </div>
    )
}