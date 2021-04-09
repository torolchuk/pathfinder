import { findPositionOfBlockTypeOnMap, FINISH_BLOCK_ID, START_BLOCK_ID, WALL_BLOCK_ID } from "./map";
import { absVector, createVector, isVectorsEqual, subsractVectors, summVectors, cloneVector, 
    MOVING_DIRECTIONS, DIR_UP, DIR_RIGHT, DIR_DOWN, DIR_LEFT, 
    DIR_UP_RIGHT, DIR_RIGHT_DOWN, DIR_DOWN_LEFT, DIR_LEFT_UP } from "./vectors";

const MAX_PATHFINDER_DEPTH = 10000;

const STANDART_PRICE = 10;
const DIAGONAL_PRICE = 10;
const DIRECTION_PRICE = {
    [DIR_UP]: STANDART_PRICE,
    [DIR_RIGHT]: STANDART_PRICE,
    [DIR_DOWN]: STANDART_PRICE,
    [DIR_LEFT]: STANDART_PRICE,
    [DIR_UP_RIGHT]: DIAGONAL_PRICE,
    [DIR_RIGHT_DOWN]: DIAGONAL_PRICE,
    [DIR_DOWN_LEFT]: DIAGONAL_PRICE,
    [DIR_LEFT_UP]: DIAGONAL_PRICE,
}

function isLegitPointOnMap(map, position) {
    const { x, y } = position;
    const minValue = 0;
    const maxValue = map.length;
    return x >= minValue 
        && y >= minValue 
        && x < maxValue 
        && y < maxValue
        && map[y][x] !== WALL_BLOCK_ID;
}

function isLegitPointOnModel(model, position) {
    const { x, y } = position;
    return (!model[y][x] || !model[y][x].closed);
}

function getCellInfoOnModel(model, position, finish, spendedCost, parent) {
    const vectorLength = absVector(subsractVectors(position, finish));
    const length = vectorLength.x + vectorLength.y;
    const fullCost = length + spendedCost;

    const oldCell = model[position.y][position.x];
    const prevFullCost = !!oldCell ? oldCell.Cost + oldCell.spendedCost : null;

    return (!prevFullCost || prevFullCost > fullCost)
        ? { remainingCost: length, spendedCost, parent, closed: false }
        : oldCell;
}

function getInitPathfinderModel(map, start, finish) {
    const mapSize = map.length;
    const model = new Array(mapSize).fill(0).map(_ => new Array(mapSize).fill(null));
    model[start.y][start.x] = getCellInfoOnModel(model, start, finish, 0, null);

    return model;
}

function findCheapestPointOnModel(model) {
    let cheapestCost = null;
    let cheapestPos = null;
    
    model.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (!cell || !!cell.closed) return;
            
            const cellCoast = cell.spendedCost + cell.remainingCost;
            if (!!cheapestCost && cheapestCost <= cellCoast) return;
            
            cheapestCost = cellCoast;
            cheapestPos = createVector(x, y);
        });
    });

    return cheapestPos;
}

function extractWayFromModel(model, start, finish) {
    const path = [];
    if (!model[finish.y][finish.x]) return path;
    let exit = false;
    let currentPos = cloneVector(finish);
    path.push(currentPos);
    
    while (!exit) {
        currentPos = cloneVector(model[currentPos.y][currentPos.x].parent);
        path.push(currentPos);
        
        if (isVectorsEqual(currentPos, start)) 
            exit = true;
    }

    return path;
}

function pathfinderIteration(map, start, finish, model, spendedWay) {
    if (spendedWay > MAX_PATHFINDER_DEPTH) return model;

    model[start.y][start.x].closed = true;

    for (let dir in MOVING_DIRECTIONS) {
        const price = DIRECTION_PRICE[dir];
        const newPoint = summVectors(start, MOVING_DIRECTIONS[dir]);
        if (isLegitPointOnMap(map, newPoint) && isLegitPointOnModel(model, newPoint)) {
            const cellInfo = getCellInfoOnModel(model, newPoint, finish, spendedWay + price, start);
            if (cellInfo !== model[newPoint.y][newPoint.x]) model[newPoint.y][newPoint.x] = cellInfo;

            if (cellInfo.remainingCost === 0) return model;
        }
    }

    const nextSearch = findCheapestPointOnModel(model);

    if (!nextSearch) return model;

    return pathfinderIteration(map, nextSearch, finish, model, spendedWay + 1);
}

export function findPathOnMap(map) {
    const startPos = findPositionOfBlockTypeOnMap(map, START_BLOCK_ID);
    const finishPos = findPositionOfBlockTypeOnMap(map, FINISH_BLOCK_ID);

    if (!startPos || !finishPos) return Error('Map should have Start and Finish');

    const model = getInitPathfinderModel(map, startPos, finishPos);

    const finishedModel = pathfinderIteration(map, startPos, finishPos, model, 0);

    console.log(finishedModel);

    const finalWay = extractWayFromModel(finishedModel, startPos, finishPos);

    return finalWay;
}