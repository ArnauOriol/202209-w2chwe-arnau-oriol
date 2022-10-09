const changeCellStatus = (board) => {
  let aliveCellCounter = 0;
  for (let yAxis = 0; yAxis < board.length; yAxis++) {
    for (let xAxis = 0; xAxis < board[yAxis].length; xAxis++) {
      for (
        let yAxisArroundCell = yAxis - 1;
        yAxisArroundCell < board.length && yAxisArroundCell <= yAxis + 1;
        yAxisArroundCell++
      ) {
        for (
          let xAxisArroundCell = xAxis - 1;
          xAxisArroundCell < board[yAxis].length &&
          xAxisArroundCell <= xAxis + 1;
          xAxisArroundCell++
        ) {
          if (
            xAxisArroundCell >= 0 &&
            yAxisArroundCell >= 0 &&
            board[yAxisArroundCell][xAxisArroundCell]
          ) {
            aliveCellCounter++;
          }
        }
      }
      if (board[yAxis][xAxis]) {
        if (aliveCellCounter < 2 || aliveCellCounter > 3) {
          board[yAxis][xAxis] = false;
        }
        if (aliveCellCounter === 2 || aliveCellCounter === 3) {
          board[yAxis][xAxis] = true;
        }
      }
      if (!board[yAxis][xAxis]) {
        if (aliveCellCounter === 3) {
          board[yAxis][xAxis] = true;
        }
      }
    }
  }
  return board;
};

export default changeCellStatus;
