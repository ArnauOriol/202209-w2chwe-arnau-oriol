import buildBoard from "./buildBoard/buildBoard.js";
import setBoardToFirstState from "./setBoardToFirstState/setBoardToFirstState.js";

let board = buildBoard(9);
let mirrorBoard = board;

board = setBoardToFirstState(board);
mirrorBoard = board;

console.log(board, mirrorBoard);
