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

const myIterator = {
  data: [1, 2, 3, 4],
  [Symbol.iterator]() {
    return iterator()
  }
}

for (const val of myIterator) {
  console.log(val)
}

