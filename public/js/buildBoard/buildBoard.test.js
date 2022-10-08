import buildBoard from "./buildBoard.js";
import Cell from "../Cell/Cell.js";

describe("Given the buildBoard function", () => {
  describe("When it receives 3", () => {
    test("Then it should return [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]]", () => {
      const boardSize = 3;
      const expectedBoard = [
        [new Cell(0, 0), new Cell(0, 1), new Cell(0, 2)],
        [new Cell(1, 0), new Cell(1, 1), new Cell(1, 2)],
        [new Cell(2, 0), new Cell(2, 1), new Cell(2, 2)],
      ];

      const newBoard = buildBoard(boardSize);

      expect(newBoard).toStrictEqual(expectedBoard);
    });
  });
});
