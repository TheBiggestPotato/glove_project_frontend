import React, {useState} from "react";

import './inputField.scss'

export default function InputField (props) {

    const { type, placeholder, width, height, name, isRequired, value } = props

    const [input, setInput] = useState('');
    const [required, setRequired] = useState({ required: isRequired });

    return (
        <input
            className='inputField'
            value={value}
            type={type} 
            name={name}
            placeholder={placeholder}
            style={{
                width: width,
                height: height,
            }}
            {...required}
        >
         </input>
    )
}