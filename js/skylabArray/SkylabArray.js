class SkylabArray {
  value;
  length = this.getLength(this.value);

  constructor(value) {
    this.value = value;
  }

  getLength(value) {
    let i = 1;
    do {
      i += 1;
    } while (value[i] !== undefined);

    this.length = i;
    return i;
  }
}

module.exports = SkylabArray;
