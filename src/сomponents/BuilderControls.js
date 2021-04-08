import React from 'react';

import './BuilderControls.scss'

export function BuilderControls(props) {
    return (
        <div className="builder-controls__container">
            <div className="builder-controls__name">
                Control your world:
            </div>
            <div className="builder-controls__proxy-box">
                {props.children.map((child, index) => 
                    <div key={index} className="builder-controls__child-box">
                        {child}
                    </div>
                )}
            </div>
        </div>
    )
}