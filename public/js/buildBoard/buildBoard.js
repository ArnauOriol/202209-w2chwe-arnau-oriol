import Cell from "../Cell/Cell.js";

const board = [];
let row = [];

const buildBoard = (boardSize) => {
  for (let yAxis = 0; yAxis < boardSize; yAxis++) {
    row = [];
    for (let xAxis = 0; xAxis < boardSize; xAxis++) {
      row[xAxis] = new Cell(yAxis, xAxis);
    }
    board.push(row);
  }
  return board;
};

export default buildBoard;
