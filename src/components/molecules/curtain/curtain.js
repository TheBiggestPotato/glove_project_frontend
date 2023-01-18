import React from "react";
import './curtain.scss'

export default function Curtain (props) {

    const {content, contentLeftPanel, contentRightPanel } = props;

    return (
    
        <div class="stage">
        <div class="stage-content"></div>
        <label class="curtain-container">
          <div class="curtain-panel">
            <input type="checkbox" class="curtain-trigger" />
            <div class="left-curtain curtain" data-title="Click to reveal a special reward..."></div>
            <div class="right-curtain curtain" data-title="Click to reveal a special reward..."></div>
          </div>
        </label>
      </div>
        
    )
}