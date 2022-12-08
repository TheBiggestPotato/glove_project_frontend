import React from "react";

import './coloredWordText.scss'

export default function ColoredWordText (props) {

    const {firstWord, content } = props;

    return (
        <div className={'coloredWordText'}>
            <span style={{ color: '#0683B9', fontWeight: 'bold' }}>{firstWord}</span>
            <span>{content}</span>
        </div>
    )
}