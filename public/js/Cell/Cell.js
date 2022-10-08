class Cell {
  yAxisPosition;
  xAxisPosition;
  isAliveNow;
  isAliveNextGeneration;

  constructor(yAxisPositionInMatrix, xAxisPositionInMatrix) {
    this.yAxisPosition = yAxisPositionInMatrix;
    this.xAxisPosition = xAxisPositionInMatrix;
  }
}

export default Cell;
