import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

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
import { toast, ToastContainer } from 'react-toastify';

import './contact.scss'
import useWindowDimensions from "../../../functions/getWindowDimensions";

export default function Contact () {

    const { height, width } = useWindowDimensions();
    const { t } = useTranslation();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_68fgiuw', 'template_a8f0yof', form.current, 'Bt6dBxWSL6O_9szau')
        .then((result) => {
            toast.success(t('successMessage'), {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }, (error) => {
            toast.error(t('errorMessage'), {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        });
    };

    return(
        <>
        {width < 992 ? <MobileHeader /> : <Nav />}
        <ToastContainer />
        <div className='contact__body'>
        <div className='contact__form'>
                <div className='contact__form__headline'>
                    <BigHeading content='Contact' color='blue'/>
                    <Line width={width < 1400 ? '200px' : '300px'} height='0.188rem'/>
                </div>
                <div className='contact__form__field'>
                <form className='form' ref={form} onSubmit={sendEmail}>
                    <div className='form__firstRow'>
                        <InputField placeholder={t('name')} type='text' height='30px' width={width < 1400 ? '300px' : '15.313rem'} name='from_name'/>
                        <InputField placeholder={t('phone')} type='number' height='30px' name='from_phone'/>
                    </div>
                    <div className='form__secondRow'>
                        <InputField placeholder='Email' type='email' height='30px' width={width < 1400 ? '300px' : '33.125rem'}  name='from_email'/>
                        <TextAreaField placeholder={t('message')} width={width < 1400 ? '300px' : '33.125rem'} height='250px' name='message'/>
                    </div>
                    <RoundButton label={t('send')} buttonType='first' padding='0.938rem 2.5rem' fontSize='1.375rem'/>
                </form>
                </div>
        </div>
        <div className='contact__info'>
            <BigHeading content={t('getInTouch')} color='blue'/>
            <div className='contact__info__section'>
            <IconContext.Provider value={{ color: '#0683B9', size: '45px'}}>
            <div className='contact__info__row'>
            <ImLocation2 className="react_icons_contact"/>
            <Paragraph content={'Strada Aviatiei 5'}/>
            </div>
            <div className='contact__info__row'>
            <GiRotaryPhone className="react_icons_contact"/>
            <Paragraph content={'+40745065663'}/>
            </div>
            <div className='contact__info__row'>
            <FiMail className="react_icons_contact"/>
            <Paragraph content={'support@ppsmedical.com'}/>
            </div>
            </IconContext.Provider>
            </div>  
        </div>
        </div>
        </>
    )

}