const setBoardToFirstState = (board) => {
  const test = board.map((row, xAxis) => row.map(() => xAxis % 2 !== 0));
  return test;
};
export default setBoardToFirstState;
