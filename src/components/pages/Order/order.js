import React, { useState, useEffect, useRef } from "react";
import './order.scss';

import Nav from "../../organisms/Nav/desktopNav/nav";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import InputField from "../../atoms/inputField/inputField";
import CountryDropdown from "../../atoms/countryDropdown/countryDropdown";
import RoundButton from "../../atoms/RoundButton/roundButton";
import { RegionDropdown } from 'react-country-region-selector';
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from 'react-toastify';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import axios from "axios";
const { getName } = require('country-list');

export default function Order () {

    const { t } = useTranslation();

    const [userCountry, setUserCountry] = useState({});
    const [phone, setPhone] = useState();

        useEffect(() => {
            axios.get('https://ipapi.co/json/').then((response) => {
                let data = response.data;
                setUserCountry({ value: data.country_code, label: data.country_name });
            }).catch((error) => {
                console.log(error);
            });
        }, []);
    
    
    const [region, setRegion] = useState('');
    const [selectedOptionCountry, setSelectedOptionCountry] = useState(userCountry);
    
    useEffect(() => {
        setSelectedOptionCountry(userCountry);
    }, [userCountry])

    const form = useRef();
    const captchaRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.countryDropdown.value = getName(form.current.countryDropdown.value);

        const formElements = Array.from(form.current.elements)

        formElements.splice(4, 1);
        formElements.splice(6, 1);
        formElements.splice(12, 1);

        if(formElements[6].value === 'undefined') formElements[6].value = selectedOptionCountry.label
        
        const values = formElements.map(element => element.value);

        values[4] = values[4].slice(1)

        const emailData = {
        to: 'kata7299@gmail.com',
        subject: 'New Order',
        message: `<h2>O noua comanda a fost plasata de:</h2>
                        <ul>
                            <li>Nume: ${values[0]} ${values[1]},</li>
                            <li>CUI(VAT): ${values[2]},</li>
                            <li>Email: ${values[3]},</li>
                            <li>Telefon: +${values[4]},</li>
                            <li>Cantitate: ${values[5]} cutii,
                            <li>Tara: ${values[6]},</li>
                            <li>Judet: ${values[7]},</li>
                            <li>Localitate: ${values[8]},</li>
                            <li>Cod Postal: ${values[9]},</li>
                            <li>Adresa 1: ${values[10]},</li>
                            <li>Adresa 2: ${values[11]}</li>
                        </ul>`
        };

        const token = captchaRef.current.getValue();
        captchaRef.current.reset();

        axios.post('http://localhost:5000/postToken', {token})
            .then(res => {
                if (res.status === 200) {
                Promise.all([
                    axios.post('http://localhost:5000/submit', values),
                    axios.post('http://localhost:5000/send-email', emailData)
                ])
                .then(([response1, response2]) => {
                    console.log('SuccessSpreadsheet:', response1);
                    console.log('SuccessMail:', response2)
                    toast.success(t('successOrder'), {
                    position: "bottom-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                })
                .catch(error => {
                    console.error('Error:', error);
                    toast.error(t('errorOrder'), {
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
                }
            })
            .catch(error => {
                console.log(error);
                toast.error(t('errorOrder'), {
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
    }
    
    return (
        <div className="order">
            <Nav />
            <ToastContainer />
            <div className="order__body">
                <div className="order__body__headline">
                    <BigHeading content={t('orderForm')} color='darkerBlue'/>
                </div>
                <form className="order__body__form" ref={form} onSubmit={handleSubmit}>
                    <div className="order__body__form__contactInfo">
                        <SmallHeading content={t('contactInfo')} color='darkerBlue'/>
                        <div className="order__body__form__input">
                            <label>{t('firstName')}</label>   
                            <InputField type='text' height='40px' width={'600px'} name='firstName' isRequired={true}/>
                        </div> 
                        <div className="order__body__form__input">
                            <label>{t('lastName')}</label>   
                            <InputField type='text' height='40px' width={'600px'} name='lastName' isRequired={true}/>
                        </div>
                        <div className="order__body__form__input">
                            <label>{t('VAT')} (optional)</label>   
                            <InputField type='text' height='40px' width={'600px'} name='CUI' isRequired={true}/>
                        </div>     
                        <div className="order__body__form__input">
                            <label>Email</label>   
                            <InputField type='text' height='40px' width={'600px'} name='email' isRequired={true}/>
                        </div>    
                        <PhoneInput
                            international
                            defaultCountry={selectedOptionCountry.value}
                            placeholder={t('phone')}
                            value={phone}
                            onChange={setPhone}
                            /> 
                    </div>
                    <div className="order__body__form__quantity">
                        <SmallHeading content={t('orderQuantity')} color='darkerBlue'/>
                        <div className="order__body__form__input">
                        <label>{t('quantity')}</label>   
                        <InputField type='number' height='40px' width={'600px'} name='quantity' isRequired={true}/>
                        </div>
                    </div>
                    <div className="order__body__form__address">
                        <SmallHeading content={t('address')} color='darkerBlue'/>
                    <div className="order__body__form__address--firstRow"> 
                    <CountryDropdown 
                        selectedOptionCountry={selectedOptionCountry} setSelectedOptionCountry={setSelectedOptionCountry}
                    /> 
                    <RegionDropdown
                        name='regionDropdown'
                        country={selectedOptionCountry.value}
                        onChange={(val) => setRegion(val)}
                        value={region}
                        countryValueType="short"
                        classes="order__body__form__address__regionDropdown"
                        defaultOptionLabel={t('selectYourRegion')}
                        required
                    />
                    </div>
                    <div className="order__body__form__address--secondRow"> 
                    <div className="order__body__form__input">
                        <label>{t('city')}</label>   
                        <InputField type='text' height='40px' width={'290px'} name='localitate' isRequired={true}/>
                    </div> 
                    <div className="order__body__form__input">
                        <label>{t('postalCode')}</label>   
                        <InputField type='number' height='40px' width={'290px'} name='codPostal' isRequired={true}/>
                    </div> 
                    </div>
                    <div className="order__body__form__address--thirdRow"> 
                    <div className="order__body__form__input">
                    <label>{t('address1')}</label>   
                        <InputField type='text' height='40px' width={'623px'} name='address1' isRequired={true}/>
                    </div> 
                    <div className="order__body__form__input">
                        <label>{t('address2')}</label>   
                        <InputField type='text' height='40px' width={'623px'} name='address2' isRequired={true}/>
                    </div> 
                    </div>
                    </div>
                    <div className="orderButton">
                    <ReCAPTCHA
                        sitekey="6Lc1hx0kAAAAAMD0S2dAEg8HMPU4eAru2RB4yj7G"
                        ref={captchaRef}
                    />
                        <RoundButton buttonType='first' label={t('submit')} padding='15px 40px' fontSize='20px'/>
                    </div>
                </form>
            </div>
        </div>
    )
}