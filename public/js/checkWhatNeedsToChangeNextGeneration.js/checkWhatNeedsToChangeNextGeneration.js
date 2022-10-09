const checkWhatNeedsToChangeNextGeneration = (mirrorBoard, yAxis, xAxis) => {
  let aliveCellCounter;
  aliveCellCounter = 0;
  if (mirrorBoard[yAxis - 1][xAxis - 1]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis - 1][xAxis]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis - 1][xAxis + 1]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis][xAxis - 1]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis][xAxis + 1]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis + 1][xAxis - 1]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis + 1][xAxis]) {
    aliveCellCounter++;
  }
  if (mirrorBoard[yAxis + 1][xAxis + 1]) {
    aliveCellCounter++;
  }
  return aliveCellCounter;
};

export default checkWhatNeedsToChangeNextGeneration;
