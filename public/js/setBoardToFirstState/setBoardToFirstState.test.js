import setBoardToFirstState from "./setBoardToFirstState.js";

describe("Given the function setBoardToFirstState", () => {
  describe("When it receives [[false, false], [false, false]]", () => {
    test("Then it should return [[false, false], [true, true]]", () => {
      const boardSended = [
        [false, false],
        [false, false],
      ];
      const expectedBoardWithInitialState = [
        [false, false],
        [true, true],
      ];

      const boardWithInitialStat = setBoardToFirstState(boardSended);

      expect(boardWithInitialStat).toStrictEqual(expectedBoardWithInitialState);
    });
  });
});
