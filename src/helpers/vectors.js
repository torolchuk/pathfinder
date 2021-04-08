export const DIR_UP    = '[DIRECTION] DIR_UP';
export const DIR_UP_RIGHT    = '[DIRECTION] DIR_UP_RIGHT';
export const DIR_RIGHT = '[DIRECTION] DIR_RIGHT';
export const DIR_RIGHT_DOWN = '[DIRECTION] DIR_RIGHT_DOWN';
export const DIR_DOWN  = '[DIRECTION] DIR_DOWN';
export const DIR_DOWN_LEFT  = '[DIRECTION] DIR_DOWN_LEFT';
export const DIR_LEFT  = '[DIRECTION] DIR_LEFT';
export const DIR_LEFT_UP  = '[DIRECTION] DIR_LEFT_UP';

export const MOVING_DIRECTIONS = {    
    [DIR_UP]:    { x:  0, y: -1 },
    [DIR_UP_RIGHT]:    { x:  1, y: -1 },
    [DIR_RIGHT]: { x:  1, y:  0 },
    [DIR_RIGHT_DOWN]: { x:  1, y:  1 },
    [DIR_DOWN]:  { x:  0, y:  1 },
    [DIR_DOWN_LEFT]:  { x:  -1, y:  1 },
    [DIR_LEFT]:  { x: -1, y:  0 },
    [DIR_LEFT_UP]:  { x: -1, y:  -1 },
}

export const createVector = (x, y) => {
    return { x, y };
};

export const cloneVector = (v) => {
    return {
        ...v
    }
};

export const summVectors = (a, b) => {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    }
};

export const subsractVectors = (a, b) => {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    }
};

export const absVector = (v) => {
    return {
        x: Math.abs(v.x),
        y: Math.abs(v.y)
    }
}

export const isVectorsEqual = (a, b) => {
    return a.x === b.x && a.y === b.y;
};
