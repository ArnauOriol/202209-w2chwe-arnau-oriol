const buildBoard = (boardSize) => {
  const board = [];
  let row;
  for (let yAxis = 0; yAxis < boardSize; yAxis++) {
    row = [];
    for (let xAxis = 0; xAxis < boardSize; xAxis++) {
      row[xAxis] = false;
    }
    board.push(row);
  }
  return board;
};

export default buildBoard;
