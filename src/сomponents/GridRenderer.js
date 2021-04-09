import React from 'react';
import { ALL_BLOCK_TYPES } from '../helpers/map';
import { createVector } from '../helpers/vectors';

import './GridRenderer.scss';

export function GridRenderer(props) {
    const blockTypeCollection = {};
    ALL_BLOCK_TYPES.forEach(type => { blockTypeCollection[type.id] = type.name });
    
    function handleCellClick(x, y) {
        const point = createVector(x, y);
        !!props.onCellClick && props.onCellClick(point);
    }

    return (
        !!props.map && 
        <div className="grid-renderer__container">
            <div className="grid-renderer__content">
                {
                    props.map.map((row, yIndex) => 
                        <div className="grid-renderer__row" key={'row_'+yIndex}>
                            {row.map((el, xIndex) => {
                                const isPathBlock = Array.isArray(props.path) && !!props.path.find(p => p.x === xIndex && p.y === yIndex);
                                const isPathClass =  isPathBlock ? 'grid-renderer__cell__path' : '';
                                const blockTypeClass = !!el ? 'grid-renderer__cell__' + blockTypeCollection[el].toLowerCase() : '';
                                return (<div className={`grid-renderer__cell ${isPathClass} ${blockTypeClass}`}
                                     key={`cell_${xIndex}:${yIndex}`}
                                     onClick={_ => handleCellClick(xIndex, yIndex)}></div>)
                                }
                            )}
                        </div>
                    )
                }
            </div>
        </div>        
    )
}
