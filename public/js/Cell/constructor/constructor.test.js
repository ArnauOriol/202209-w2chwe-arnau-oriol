import Cell from "../Cell.js";

describe("Given the Cell class constructor method", () => {
  describe("When it receives 2, 3", () => {
    test("Then it should return yAxisPosition: 2, xAxisPosition: 3", () => {
      const number1 = 2;
      const number2 = 3;
      const expectedNewCell = {
        isAliveNextGeneration: undefined,
        isAliveNow: true,
        yAxisPosition: 2,
        xAxisPosition: 3,
      };

      const newCell = new Cell(number1, number2);

      expect(newCell.yAxisPosition).toBe(expectedNewCell.yAxisPosition);
      expect(newCell.xAxisPosition).toBe(expectedNewCell.xAxisPosition);
      expect(typeof (newCell.isAliveNow === Boolean)).toStrictEqual(
        typeof (expectedNewCell.isAliveNow === Boolean)
      );
    });
  });
});
