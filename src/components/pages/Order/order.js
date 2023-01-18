import React, { useState, useEffect } from "react";
import './order.scss';

import Nav from "../../organisms/Nav/desktopNav/nav";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import SmallHeading from "../../atoms/SmallHeading/smallHeading";
import InputField from "../../atoms/inputField/inputField";
import CountryDropdown from "../../atoms/countryDropdown/countryDropdown";
import { RegionDropdown } from 'react-country-region-selector';

import axios from "axios";

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

    return (
        <div className="order">
            <Nav />
            <div className="order__body">
                <div className="order__body__headline">
                <BigHeading content={'Order form'} color='blue'/>
                </div>
                <form className="order__body__form">
                <SmallHeading content='Contact Info'/>
                <div className="order__body__form__input">
                <label>First Name</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div> 
                <div className="order__body__form__input">
                <label>Last Name</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div>
                <div className="order__body__form__input">
                <label>CUI (optional)</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div>     
                <div className="order__body__form__input">
                <label>Email</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div>    
                <div className="order__body__form__input">
                <label>Phone</label>   
                <InputField type='number' height='30px' width={'600px'} name='from_name'/>
                </div>
                <SmallHeading content='Order Quantity'/>
                <div className="order__body__form__input">
                <label>Quantity</label>   
                <InputField type='number' height='30px' width={'600px'} name='from_name'/>
                </div>
                <SmallHeading content='Address'/>
                <div className="order__body__form__address"> 
                <CountryDropdown 
                    selectedOptionCountry={selectedOptionCountry} setSelectedOptionCountry={setSelectedOptionCountry}
                />
                <RegionDropdown 
                    country={selectedOptionCountry.value}
                    onChange={(val) => setRegion(val)}
                    value={region}
                    countryValueType="short"
                    classes="order__body__form__address__regionDropdown"
                    defaultOptionLabel='Select your Region'
                />
                <div className="order__body__form__input">
                <label>Localitate</label>   
                <InputField type='text' height='30px' width={'200px'} name='from_name'/>
                </div> 
                <div className="order__body__form__input">
                <label>Cod Postal</label>   
                <InputField type='number' height='30px' width={'200px'} name='from_name'/>
                </div> 
                <div className="order__body__form__input">
                <label>Address Line 1</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div> 
                <div className="order__body__form__input">
                <label>Address Line 2</label>   
                <InputField type='text' height='30px' width={'600px'} name='from_name'/>
                </div> 
                </div>    
                </form>
            </div>
        </div>
    )
}