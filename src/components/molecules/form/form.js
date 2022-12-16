import React from 'react';

import './form.scss'

import InputField from '../../atoms/inputField/inputField'
import TextAreaField from '../../atoms/textAreaField/textAreaField'

export default function Form () {
    return (
        <form className='form'>
            <div className='form__firstRow'>
            <InputField placeholder='Nume' type='text' height='30px'/>
            <InputField placeholder='Telefon' type='number' height='30px'/>
            </div>
            <div className='form__secondRow'>
            <InputField placeholder='Email' type='email' height='30px' width='530px'/>
            <TextAreaField placeholder='Mesaj' width='530px' height='250px'/>
            </div>
        </form>
    )
}