class Cell {
  yAxisPosition;
  xAxisPosition;
  isAliveNow = false;
  isAliveNextGeneration;

  constructor(yAxisPositionInMatrix, xAxisPositionInMatrix) {
    this.yAxisPosition = yAxisPositionInMatrix;
    this.xAxisPosition = xAxisPositionInMatrix;
  }

  setToDeadOrAlive() {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber >= 4) {
      this.isAliveNow = true;
    }
    this.isAliveNow = false;
  }
}

export default Cell;
