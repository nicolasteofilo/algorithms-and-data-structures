export class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];

    this.keyMap.forEach((element) => {
      element.forEach((subElement) => {
        if (!keysArr.includes(subElement[0])) {
          keysArr.push(subElement[0]);
        }
      });
    });

    return keysArr;
  }

  values() {
    const valuesArr = [];

    this.keyMap.forEach((element) => {
      element.forEach((subElement) => {
        if (!valuesArr.includes(subElement[1])) {
          valuesArr.push(subElement[1]);
        }
      });
    });

    return valuesArr;
  }
}
