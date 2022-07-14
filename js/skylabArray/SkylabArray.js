class SkylabArray {
  // length = this.getLength(this.value);

  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }

  getLength(values) {
    let i = 1;
    do {
      i += 1;
    } while (values[i] !== undefined);

    this.length = i;
    return i;
  }
}

module.exports = SkylabArray;
