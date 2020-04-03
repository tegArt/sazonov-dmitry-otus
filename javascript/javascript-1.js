function sum(counter) {
  if (counter === undefined) {
    return 0;
  }

  let f = b => {
    if (b === undefined) {
      return counter;
    }

    counter += b;
    return f;
  };

  f.toString = () => counter;

  return f;
}
