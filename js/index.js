const SkylabArray = require("./skylabArray/SkylabArray");

const newObj = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const newNewObj = newObj.some((elem) => elem < 5);

console.log(newNewObj);
