import React from 'react';
import './card.scss'

export default function Card () {
    return (
        <div className='card'>
            <div className='card__number'>
                01
            </div>
            <div className='card__content'>
                <div className='card__content__headline'>
                No allergic reactions
                </div>
                <div className='card__content__description'>
                Why do people with sensitive skin prefer nitrile?
                Nitrile is hypoallergic and does not cause rashes, itching, or any other symptom typical for a latex allergy.
                It is a breathable material, which makes it extremely gentle to the skin and suitable even for people with high sensitivity and intolerance.
                Does not require the use of talc, which is normally used to absorb moisture and is the reason behind plenty of respiratory irritations and allergic reactions.
                </div>
            </div>
        </div>
    )
}