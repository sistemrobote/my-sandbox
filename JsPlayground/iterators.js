function iterator() {
  let i = 0;
  return {
    next() {
      i++;

      if (i <= 4) {
        return {
          value: i * 2,
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
}
const numIterator = iterator();
console.log(" numIterator::>>>", numIterator.next());
console.log(" numIterator::>>>", numIterator.next());
console.log(" numIterator::>>>", numIterator.next());
console.log(" numIterator::>>>", numIterator.next());
console.log(" numIterator::>>>", numIterator.next());


const myIterator = {
  data: [1, 2, 3, 4],
  [Symbol.iterator]() { //! Enable iterbale protocol
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
}

for (const val of myIterator) {
  console.log(val)
}