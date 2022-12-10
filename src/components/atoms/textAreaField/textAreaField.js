import React, {useState} from 'react';

import './textAreaField.scss'

export default function TextAreaField (props) {

    const { placeholder, width, height } = props

    const [input, setInput] = useState('');
 
    return (
        <textarea 
            className='textAreaField'
            placeholder={placeholder}
            onInput={e => setInput(e.target.value)}
            style={{
                width: width,
                height: height,
            }}
        >
        </textarea>
    )
}