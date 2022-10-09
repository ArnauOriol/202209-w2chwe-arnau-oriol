import buildBoard from "./buildBoard.js";

describe("Given the buildBoard function", () => {
  describe("When it receives 3", () => {
    test("Then it should return [[false, false, false],[false, false, false],[false, false, false]]", () => {
      const boardSize = 3;
      const expectedBoard = [
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ];

      const newBoard = buildBoard(boardSize);

      expect(newBoard).toStrictEqual(expectedBoard);
    });
  });
});
