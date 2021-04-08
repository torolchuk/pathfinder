import React from 'react';

import './ArraySelector.scss';

export function ArraySelector(props) {

    function handleClick(id) {
        props.onChange && props.onChange(id);
    }

    return (
        <div className="array-selector__container">
            { props.list.map((item) => 
                <div className={`array-selector__item ${item.id === props.selected ? 'array-selector__item__selected' : ''}`} 
                    key={item.id} 
                    onClick={_ => handleClick(item.id)}>{ item.name }</div>
            )}
        </div>
    )
}