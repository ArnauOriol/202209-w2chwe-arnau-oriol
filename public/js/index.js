import buildBoard from "./buildBoard/buildBoard.js";
import setBoardToFirstState from "./setBoardToFirstState/setBoardToFirstState.js";

let board = buildBoard(9);

board = setBoardToFirstState(board);

console.log(board);
