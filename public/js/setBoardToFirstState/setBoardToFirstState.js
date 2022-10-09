const setBoardToFirstState = (board) =>
  board.map((row, xAxis) => row.map(() => xAxis % 2 !== 0));

export default setBoardToFirstState;
