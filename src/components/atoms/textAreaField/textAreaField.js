import React, {useState} from 'react';

import './textAreaField.scss'

export default function TextAreaField (props) {

    const { placeholder, width, height, name } = props

    const [input, setInput] = useState('');
 
    return (
        <textarea 
            className='textAreaField'
            placeholder={placeholder}
            name={name}
            onInput={e => setInput(e.target.value)}
            style={{
                width: width,
                height: height,
            }}
        >
        </textarea>
    )
}