import React from "react";

import BigHeading from "../../atoms/BigHeading/bigHeading";
import Nav from "../../organisms/Nav/desktopNav/nav";
import Line from "../../atoms/Line/line";
import RoundButton from "../../atoms/RoundButton/roundButton";
import Paragraph from "../../atoms/Paragraph/paragraph";
import MobileHeader from "../../organisms/Nav/mobileHeader/mobileHeader";
import InputField from "../../atoms/inputField/inputField";
import TextAreaField from "../../atoms/textAreaField/textAreaField";

import { ImLocation2 } from 'react-icons/im';
import { GiRotaryPhone } from 'react-icons/gi';
import { FiMail } from 'react-icons/fi';
import { IconContext } from 'react-icons';

import './contact.scss'
import useWindowDimensions from "../../../functions/getWindowDimensions";

export default function Contact () {

    const { height, width } = useWindowDimensions();

    return(
        <>
        {width < 1200 ? <MobileHeader /> : <Nav />}
        <div className='contact__body'>
        <div className='contact__form'>
                <div className='contact__form__headline'>
                <BigHeading content='Contact' color='blue'/>
                <Line width={width < 1200 ? '200px' : '300px'} height='0.188rem'/>
                </div>
                <div className='contact__form__field'>
                <form className='form'>
                    <div className='form__firstRow'>
                        <InputField placeholder='Nume' type='text' height='30px' width={width < 1200 ? '300px' : '247px'}/>
                        <InputField placeholder='Telefon' type='number' height='30px'/>
                    </div>
                    <div className='form__secondRow'>
                        <InputField placeholder='Email' type='email' height='30px' width={width < 1200 ? '300px' : '530px'}/>
                        <TextAreaField placeholder='Mesaj' width={width < 1200 ? '300px' : '530px'} height='250px'/>
                    </div>
                </form>
                <RoundButton label='Trimite' buttonType='first' padding='0.938rem 2.5rem' fontSize='1.375rem' />
                </div>
        </div>
        <div className='contact__info'>
            <BigHeading content='Unde ne gasiti' color='blue'/>
            <Line width={width < 1200 ? '270px' : '300px'} height='0.188rem'/>
            <div className='contact__info__section'>
            <IconContext.Provider value={{ color: '#0683B9', size: '45px'}}>
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