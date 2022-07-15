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

describe("Given a property length", () => {
  describe("When it's called from an object with 10 elements'", () => {
    test("It should return 10", () => {
      const testingObject = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      const expectedResult = 10;

      const receivedResult = testingObject.length;

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

describe("Given a function filter()", () => {
  describe("When it's called and receives a function (elem)=> elem > 3", () => {
    test("It should return the same object with only higher numbers than 3", () => {
      const testingObject = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      const expectedResult = {
        0: 4,
        1: 5,
        2: 6,
        3: 7,
        4: 8,
        5: 9,
        6: 10,
      };

      const receivedResult = testingObject.filter((elem) => elem > 3);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});

describe("Given a function find()", () => {
  describe("When it's  called and receives a value '4'", () => {
    test("It should return 4", () => {
      const testingObject = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
      const value = 4;

      const expectedResult = 4;

      const receivedResult = testingObject.find(value);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function some()", () => {
  describe("When it's called and receives the function '(elem) => elem > 5", () => {
    test("It should return the first value higher than 5, that is, 6", () => {
      const testingObject = new SkylabArray(1, 5, 6, 7, 8, 4, 2);
      const expectedResult = 6;

      const receivedResult = testingObject.some((elem) => elem > 5);

      expect(receivedResult).toBe(expectedResult);
    });
  });
});

describe("Given a function map()", () => {
  describe("When it's called and receives a function (elem)=>elem * 4", () => {
    test("It should return an object like the original but with each element multiplied by 4", () => {
      const testingObject = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      const expectedResult = {
        0: 4,
        1: 8,
        2: 12,
        3: 16,
        4: 20,
        5: 24,
        6: 28,
        7: 32,
        8: 36,
        9: 40,
      };

      const receivedResult = testingObject.map((elem) => elem * 4);

      expect(receivedResult).toEqual(expectedResult);
    });
  });
});
