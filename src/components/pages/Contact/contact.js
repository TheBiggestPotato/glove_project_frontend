import React from "react";

import BigHeading from "../../atoms/BigHeading/bigHeading";
import Nav from "../../organisms/Nav/nav";
import Line from "../../atoms/Line/line";
import Form from "../../molecules/form/form";
import RoundButton from "../../atoms/RoundButton/roundButton";
import Paragraph from "../../atoms/Paragraph/paragraph";

import { ImLocation2 } from 'react-icons/im';
import { GiRotaryPhone } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import './contact.scss'

export default function Contact () {

    return(
        <>
        <Nav />
        <div className='contact__body'>
        <div className='contact__form'>
                <div className='contact__form__headline'>
                <BigHeading content='Contact' color='blue'/>
                <Line width='18.75rem' height='0.188rem'/>
                </div>
                <div className='contact__form__field'>
                <Form />
                <RoundButton label='Trimite' buttonType='first' padding='0.938rem 2.5rem' fontSize='1.375rem' />
                </div>
        </div>
        <div className='contact__info'>
            <BigHeading content='Unde ne gasiti' color='blue'/>
            <Line width='18.75rem' height='0.188rem'/>
            <div className='contact__info__section'>
            <IconContext.Provider value={{ color: '#0683B9', size: '2.813rem'}}>
            <div className='contact__info__row'>
            <ImLocation2 />
            <Paragraph content={'Strada Aviatiei 5'}/>
            </div>
            <div className='contact__info__row'>
            <GiRotaryPhone />
            <Paragraph content={'+40745065663'}/>
            </div>
            <div className='contact__info__row'>
            <FiMail />
            <Paragraph content={'support@ppsmedical.com'}/>
            </div>
            </IconContext.Provider>
            </div>  
        </div>
        </div>
        </>
    )

}