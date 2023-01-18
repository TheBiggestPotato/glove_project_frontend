import React, {useState} from "react";

import './inputField.scss'

export default function InputField (props) {

    const { type, placeholder, width, height, name } = props

    const [input, setInput] = useState('');

    return (
        <input
            className='inputField'
            type={type} 
            name={name}
            placeholder={placeholder}
            style={{
                width: width,
                height: height,
            }}
            required
        >
         </input>
    )
}