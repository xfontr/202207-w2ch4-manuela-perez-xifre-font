const SkylabArray = require("./skylabArray/SkylabArray");

const newobj = new SkylabArray(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const asdf = newobj.map((elem) => 4 * elem);
console.log(asdf);
