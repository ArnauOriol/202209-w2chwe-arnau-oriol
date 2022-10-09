import checkWhatNeedsToChangeNextGeneration from "../checkWhatNeedsToChangeNextGeneration.js/checkWhatNeedsToChangeNextGeneration.js";

const changeCellStatus = (board, mirrorBoard) => {
  let aliveCellCounter;
  for (let yAxis = 0; yAxis < board.length; yAxis++) {
    for (let xAxis = 0; xAxis < board[yAxis].length; xAxis++) {
      aliveCellCounter = checkWhatNeedsToChangeNextGeneration(
        mirrorBoard,
        yAxis,
        xAxis
      );
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
};

export default changeCellStatus;
