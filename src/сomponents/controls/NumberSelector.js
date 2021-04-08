import React from 'react';

import './NumberSelector.scss';

export function NumberSelector(props) {
    return (
        <div className="number-selector__container">
            <div className="number-selector__control" onClick={_ => props.onChanged(-1)}>-</div>
            <div className="number-selector__display">{props.value}</div>
            <div className="number-selector__control" onClick={_ => props.onChanged(1)}>+</div>
        </div>
    )
}