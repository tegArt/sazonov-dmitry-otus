function sum(counter) {
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
