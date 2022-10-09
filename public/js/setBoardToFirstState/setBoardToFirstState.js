const setBoardToFirstState = (board) =>
  board.map((row) => row.map(() => Math.random() < 0.4));

export default setBoardToFirstState;
