import React from "react";

import './paragraph.scss'

export default function Paragraph (props) {
    
    const { content, type } = props;

    return (
        <span className={`paragraph paragraph--${type}`}>{content}</span>
    )
}