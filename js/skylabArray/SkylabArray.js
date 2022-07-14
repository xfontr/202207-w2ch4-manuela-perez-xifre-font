class SkylabArray {
  // length = this.getLength(this.value);

  constructor(...values) {
    let i = 0;
    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }

  getLength(value) {
    let i = 1;
    do {
      i += 1;
    } while (value[i] !== undefined);

    return i;
  }

  push(value) {
    let i = 1;
    do {
      i += 1;
    } while (this[i] !== undefined);
    this[i] = value;
    return this;
  }

  some(value) {
    let i = -1;

    do {
      i += 1;
    } while (this[i] !== value && this[i] !== undefined);

    if (this[i] === value) {
      return true;
    }
    return false;
  }
}

module.exports = SkylabArray;
