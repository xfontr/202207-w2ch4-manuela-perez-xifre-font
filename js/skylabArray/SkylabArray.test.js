const SkylabArray = require("./SkylabArray");

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

describe("Given a function getLength", () => {
  describe("When it's called and receives a value of 'Pedrito'", () => {
    test("It should return 7", () => {
      const testingObject = new SkylabArray();
      const value = "Pedrito";

      const expectedResult = 7;

      const receivedResult = testingObject.getLength(value);

      expect(expectedResult).toBe(receivedResult);
    });
  });
});

describe("Given a function push()", () => {
  describe("When it's called an receives a value of 11", () => {
    test("It should return the same object adding a last value with 11", () => {
      const testingObject = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      const value = 11;
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
        10: 11,
      };

      const receivedResult = testingObject.push(value);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
