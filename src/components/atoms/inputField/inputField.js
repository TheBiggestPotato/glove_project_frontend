import React, {useState} from "react";

import './inputField.scss'

export default function InputField (props) {

    const { type, placeholder, width, height } = props

    const [input, setInput] = useState('');

    return (
        <input 
            className='inputField'
            type={type} 
            placeholder={placeholder}
            onInput={e => setInput(e.target.value)}
            style={{
                width: width,
                height: height,
            }}
        >
         </input>
    )
}