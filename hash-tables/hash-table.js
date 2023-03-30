class HashTable {
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
    const values = [];

    this.keyMap.forEach((element) => {
      element.forEach((subElement) => values.push(subElement[0]));
    });

    return values;
  }

  values() {
    const values = [];

    this.keyMap.forEach((element) => {
      element.forEach((subElement) => values.push(subElement[1]));
    });

    return values;
  }
}

const ht= new HashTable(4)
ht.set('white', '#ffff');
ht.set('black', '#0000');
ht.set('yellow', '#ffff00');
ht.set('red', '#ff0000');
// console.log(ht.keyMap)
console.log(ht.keys())
console.log(ht.values());
