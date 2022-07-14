const SkylabArray = require("./SkylabArray");

describe("Given a function getLength", () => {
  describe("When it's called and receives a value of 'Pedrito'", () => {
    test("It should return 7", () => {
      const testingObject = new SkylabArray();
      const value = "Pedrito";
      const expectedResult = 7;

      const receivedResult = testingObject.getLength(value);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a constructor function", () => {
  describe("When it's called and receives a value of '1, 2, 3, 4, 5, 6, 7, 8, 9, 10'", () => {
    test("It should return an object that emulates the form of an array with the same values", () => {
      const expectedResult = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
      };

      const receivedResult = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      expect(expectedResult).toEqual(receivedResult);
    });
  });
});
