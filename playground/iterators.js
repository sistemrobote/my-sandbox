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
