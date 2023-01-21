import React, { useState, useEffect, useRef } from "react";
import './order.scss';

import Nav from "../../organisms/Nav/desktopNav/nav";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import InputField from "../../atoms/inputField/inputField";
import CountryDropdown from "../../atoms/countryDropdown/countryDropdown";
import RoundButton from "../../atoms/RoundButton/roundButton";
import { RegionDropdown } from 'react-country-region-selector';

import axios from "axios";
const { getName } = require('country-list');

export default function Order () {

    const [userCountry, setUserCountry] = useState({});

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

    const handleSubmit = (e) => {
        e.preventDefault();
        form.current.countryDropdown.value = getName(form.current.countryDropdown.value);


        const formElements = Array.from(form.current.elements)
        formElements.splice(6, 1);
        formElements.splice(12, 1);
        
        const values = formElements.map(element => element.value);


        axios.post('http://localhost:5000/submit', values)
            .then(response => {
                console.log('Success:', response);
            })
            .catch(error => {
                console.error('Error:', error);
        });
    }
    

    

    return (
        <div className="order">
            <Nav />
            <div className="order__body">
                <div className="order__body__headline">
                    <BigHeading content={'Order form'} color='darkerBlue'/>
                </div>
                <form className="order__body__form" ref={form} onSubmit={handleSubmit}>
                    <div className="order__body__form__contactInfo">
                        <SmallHeading content='Contact Info' color='darkerBlue'/>
                        <div className="order__body__form__input">
                            <label>First Name</label>   
                            <InputField type='text' height='40px' width={'600px'} name='firstName'/>
                        </div> 
                        <div className="order__body__form__input">
                            <label>Last Name</label>   
                            <InputField type='text' height='40px' width={'600px'} name='lastName'/>
                        </div>
                        <div className="order__body__form__input">
                            <label>CUI (optional)</label>   
                            <InputField type='text' height='40px' width={'600px'} name='CUI'/>
                        </div>     
                        <div className="order__body__form__input">
                            <label>Email</label>   
                            <InputField type='text' height='40px' width={'600px'} name='email'/>
                        </div>    
                        <div className="order__body__form__input">
                            <label>Phone</label>   
                            <InputField type='number' height='40px' width={'600px'} name='phone'/>
                        </div>
                    </div>
                    <div className="order__body__form__quantity">
                        <SmallHeading content='Order Quantity' color='darkerBlue'/>
                        <div className="order__body__form__input">
                        <label>Quantity</label>   
                        <InputField type='number' height='40px' width={'600px'} name='quantity'/>
                        </div>
                    </div>
                    <div className="order__body__form__address">
                        <SmallHeading content='Address' color='darkerBlue'/>
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
                        defaultOptionLabel='Select your Region'
                    />
                    </div>
                    <div className="order__body__form__address--secondRow"> 
                    <div className="order__body__form__input">
                        <label>Localitate</label>   
                        <InputField type='text' height='40px' width={'290px'} name='localitate'/>
                    </div> 
                    <div className="order__body__form__input">
                        <label>Cod Postal</label>   
                        <InputField type='number' height='40px' width={'290px'} name='codPostal'/>
                    </div> 
                    </div>
                    <div className="order__body__form__address--thirdRow"> 
                    <div className="order__body__form__input">
                    <label>Address Line 1</label>   
                        <InputField type='text' height='40px' width={'623px'} name='address1'/>
                    </div> 
                    <div className="order__body__form__input">
                        <label>Address Line 2</label>   
                        <InputField type='text' height='40px' width={'623px'} name='address2'/>
                    </div> 
                    </div>
                    </div>
                    <div className="orderButton">
                        <RoundButton buttonType='first' label='Submit' padding='15px 40px' fontSize='20px'/>
                    </div>
                </form>
            </div>
        </div>
    )
}