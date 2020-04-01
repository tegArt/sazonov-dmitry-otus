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

console.log(sum());
console.log(sum(2)(5)(4.6));
console.log(sum(2)(5)(4)());
