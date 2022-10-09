import changeCellStatus from "./changeCellStatus.js";

describe("Given the function changeCellStatus", () => {
  describe("When it receives [[false, true], [true, true]]", () => {
    test("Then it should return [[true, false], [false, false]]", () => {
      const board = [
        [false, true],
        [true, true],
      ];
      const expectedNewBoard = [
        [true, false],
        [false, false],
      ];

      const newBoard = changeCellStatus(board);

      expect(newBoard).toStrictEqual(expectedNewBoard);
    });
  });
});
