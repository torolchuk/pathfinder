import { createVector } from "./vectors";

export const LOCALSTORAGE_MAP_ID = '[Local storage] MapID'

export const EMPTY_BLOCK_ID = 0;

export const WALL_BLOCK_ID = 1;
export const WALL_BLOCK_NAME = "Wall";
export const WALL_BLOCK = {
    id: WALL_BLOCK_ID,
    name: WALL_BLOCK_NAME
}

export const START_BLOCK_ID = 2;
export const START_BLOCK_NAME = "Start";
export const START_BLOCK = {
    id: START_BLOCK_ID,
    name: START_BLOCK_NAME
}

export const FINISH_BLOCK_ID = 3;
export const FINISH_BLOCK_NAME = "Finish";
export const FINISH_BLOCK = {
    id: FINISH_BLOCK_ID,
    name: FINISH_BLOCK_NAME
}

export const ALL_BLOCK_TYPES = [
    WALL_BLOCK,
    START_BLOCK,
    FINISH_BLOCK
];

export function createMapOfSize(size) {
    return new Array(size).fill(0).map(
        _ => new Array(size).fill(EMPTY_BLOCK_ID)
    );
}

export function resizeMapToSize(oldMap, size) {
    const sizeDifference = oldMap.length - size;
    let newMap = null;

    if (sizeDifference === 0) {
        return oldMap;
    } else if (sizeDifference >= 1) {
        newMap = new Array(size).fill(null).map((_, index) => {
            return oldMap[index].slice(0, size);
        });
    } else {
        let fillerArray = new Array(Math.abs(sizeDifference)).fill(0);
        newMap = new Array(size).fill(null).map((_, index) => {
            if (!!oldMap[index]) {
                return [...oldMap[index], ...fillerArray];
            } else {
                return new Array(size).fill(0);
            }
        });
    }

    return newMap;
}

export function findPositionOfBlockTypeOnMap(map, blockType) {
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            if (map[y][x] === blockType) {
                return createVector(x, y);
            }
        }
    }

    return null;
}

export function setValueOnMap(map, point, value) {
    const { x, y } = point;
    map[y][x] = value;
}