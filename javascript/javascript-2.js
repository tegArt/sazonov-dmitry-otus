function promiseReduce(asyncFunctions, reduce, initialValue) {
  let chain = Promise.resolve();
  let memo = initialValue;

  asyncFunctions.forEach(asyncFunction => {
    chain = chain
      .then(asyncFunction)
      .then(value => {
        return memo = reduce(memo, value);
      });
  });

  return chain;
}
