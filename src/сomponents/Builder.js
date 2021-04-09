import React, { useEffect, useState } from 'react';
import { BuilderControls } from './BuilderControls';
import { GridRenderer } from './GridRenderer';
import { ControlWrap } from './ControlWrap'; 
import { NumberSelector } from './controls/NumberSelector';
import { ArraySelector } from './controls/ArraySelector';
import { 
    ALL_BLOCK_TYPES, 
    createMapOfSize, 
    EMPTY_BLOCK_ID, 
    findPositionOfBlockTypeOnMap, 
    resizeMapToSize, 
    setValueOnMap, 
    START_BLOCK_ID, 
    FINISH_BLOCK_ID, 
    WALL_BLOCK_ID, 
    LOCALSTORAGE_MAP_ID} from '../helpers/map';

import './Builder.scss';
import { findPathOnMap } from '../helpers/path_finder';

export function Builder() {
    const [worldSize, setWorldSize] = useState(11);
    const [map, setMap] = useState(createMapOfSize(worldSize));
    const [blockType, setBlockType] = useState(WALL_BLOCK_ID);
    const [path, setPath] = useState(null);

    function handleWorldSizeChange(iteration) {
        const newSize = worldSize + iteration;
        const newMap = resizeMapToSize(map, newSize);
        
        setWorldSize(newSize);
        updateMap(newMap);
    }
    
    function updateMap(newMap) {
        calcWay(newMap);
        setMap(newMap);
    }

    function handleCellClick(position) {
        switch (blockType) {
            case WALL_BLOCK_ID:
                let newBlockType = map[position.y][position.x] !== WALL_BLOCK_ID
                    ? WALL_BLOCK_ID
                    : EMPTY_BLOCK_ID;
                setValueOnMap(map, position, newBlockType);
                break;
            case START_BLOCK_ID:
            case FINISH_BLOCK_ID:
                const existedBlockPos = findPositionOfBlockTypeOnMap(map, blockType);
                if (!!existedBlockPos) setValueOnMap(map, existedBlockPos, EMPTY_BLOCK_ID);
                setValueOnMap(map, position, blockType);

                updateMap(map);
                break;
            default:
                break;
        }

        updateMap([...map]);
    }

    function clearMap() {
        const newMap = createMapOfSize(worldSize);
        updateMap(newMap);
    }

    function saveMapToStorage() {
        localStorage.setItem(LOCALSTORAGE_MAP_ID, JSON.stringify(map));
    }

    function loadMapFromStorage() {
        const storedMap = localStorage.getItem(LOCALSTORAGE_MAP_ID);
        if (!storedMap) return;
        updateMap(JSON.parse(storedMap));
    }

    function calcWay() {
        try {
            const wayModel = findPathOnMap(map);
            setPath(wayModel);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(_ => {
        loadMapFromStorage();
    }, []);

    return (
        <div className="builder__wrap">
            <div className="builder__left-side">
                <GridRenderer map={map} path={path} onCellClick={handleCellClick}></GridRenderer>
            </div>
            <div className="builder__right-side">
                <BuilderControls>
                    <ControlWrap name="World Size">
                        <NumberSelector value={worldSize} onChanged={handleWorldSizeChange}></NumberSelector>
                    </ControlWrap>
                    <ControlWrap name="Choose block type">
                        <ArraySelector list={ALL_BLOCK_TYPES} selected={blockType} onChange={setBlockType}></ArraySelector>
                    </ControlWrap>
                    <br />
                    <ControlWrap name="Map storage">
                        <button onClick={clearMap}>Clear</button>
                        <button onClick={saveMapToStorage}>Save</button>
                        <button onClick={loadMapFromStorage}>Load</button>
                    </ControlWrap>
                    <br />
                    <ControlWrap name="Path length:">
                        <span>{Array.isArray(path) ? path.length : 'null'}</span>
                    </ControlWrap>
                </BuilderControls>
            </div>
        </div>
    )
}