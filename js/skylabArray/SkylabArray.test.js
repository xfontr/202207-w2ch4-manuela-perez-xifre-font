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
