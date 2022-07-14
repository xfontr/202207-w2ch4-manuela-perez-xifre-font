class SkylabArray {
  constructor(...values) {
    let i = 0;

    do {
      this[i] = values[i];
      i += 1;
    } while (values[i] !== undefined);
  }

  length(value) {
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

  find(value) {
    let i = 0;
    let valueFound;
    do {
      if (value === this[i]) {
        valueFound = this[i];
        i = 99999;
      }
      i += 1;
    } while (this[i] !== undefined);

    return valueFound;
  }

  filter(value) {
    let i = 1;
    let pushedNumber = 0;
    const results = new SkylabArray();

    do {
      if (value(this[i])) {
        results[pushedNumber] = this[i];
        pushedNumber += 1;
      }
      i += 1;
    } while (this[i] !== undefined);

    return results;
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
