class Cell {
  yAxisPosition;
  xAxisPosition;
  isAliveNow = false;
  isAliveNextGeneration;

  constructor(yAxisPositionInMatrix, xAxisPositionInMatrix) {
    this.yAxisPosition = yAxisPositionInMatrix;
    this.xAxisPosition = xAxisPositionInMatrix;
  }
}

export default Cell;
