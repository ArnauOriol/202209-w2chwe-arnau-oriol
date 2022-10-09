import checkWhatNeedsToChangeNextGeneration from "./checkWhatNeedsToChangeNextGeneration.js";

describe("Given the function checkWhatNeedsToChangeNextGeneration", () => {
  describe("When it receives [[false, true, false],[true, true, false],[false, true, true],], 1, 1", () => {
    test("Then it should return 4", () => {
      const board = [
        [false, true, false],
        [true, true, false],
        [false, true, true],
      ];
      const yAxis = 1;
      const xAxis = 1;
      const expectedAliveCellCounter = 4;

      const aliveCellCounter = checkWhatNeedsToChangeNextGeneration(
        board,
        yAxis,
        xAxis
      );

      expect(aliveCellCounter).toBe(expectedAliveCellCounter);
    });
  });
  describe("When it receives [[false, true],[true, true]], 1, 1", () => {
    test("Then it should return 2", () => {
      const board = [
        [false, true],
        [true, true],
      ];
      const yAxis = 1;
      const xAxis = 1;
      const expectedAliveCellCounter = 2;

      const aliveCellCounter = checkWhatNeedsToChangeNextGeneration(
        board,
        yAxis,
        xAxis
      );

      expect(aliveCellCounter).toBe(expectedAliveCellCounter);
    });
  });
});
