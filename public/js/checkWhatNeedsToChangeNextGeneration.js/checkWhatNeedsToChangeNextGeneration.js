const checkWhatNeedsToChangeNextGeneration = (mirrorBoard, yAxis, xAxis) => {
  let aliveCellCounter;
  aliveCellCounter = 0;
  if (yAxis === 0) {
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
  }
  if (xAxis === 0) {
    if (mirrorBoard[yAxis - 1][xAxis]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis - 1][xAxis + 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis][xAxis + 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis + 1]) {
      aliveCellCounter++;
    }
    return aliveCellCounter;
  }
  if (yAxis === 0 && xAxis === 0) {
    if (mirrorBoard[yAxis][xAxis + 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis + 1]) {
      aliveCellCounter++;
    }
    return aliveCellCounter;
  }
  if (yAxis === mirrorBoard.length - 1) {
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
    return aliveCellCounter;
  }
  if (xAxis === mirrorBoard[yAxis].length - 1) {
    if (mirrorBoard[yAxis - 1][xAxis - 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis - 1][xAxis]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis][xAxis - 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis - 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis + 1][xAxis]) {
      aliveCellCounter++;
    }
    return aliveCellCounter;
  }
  if (
    yAxis === mirrorBoard.length - 1 &&
    xAxis === mirrorBoard[yAxis].length - 1
  ) {
    if (mirrorBoard[yAxis - 1][xAxis - 1]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis - 1][xAxis]) {
      aliveCellCounter++;
    }
    if (mirrorBoard[yAxis][xAxis - 1]) {
      aliveCellCounter++;
    }
    return aliveCellCounter;
  }
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
