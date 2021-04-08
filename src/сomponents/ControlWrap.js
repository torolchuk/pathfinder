import React from 'react';

import './ControlWrap.scss';

export function ControlWrap(props) {
    return (
        <div className="control-wrap__container">
            <div className="control-wrap__name">{props.name}: </div>
            <div className="control-wrap__proxy-box">{props.children || 'placeholder'}</div>
        </div>
    )
}