const numberRange = (a, b, arr = []) => {
  //   let c = [];
  //   for (let i = a; i <= b; i++) {
  //     c.push(i);
  //   }
  //   console.log(c);
  if (a <= b) {
    arr.push(a);
    return numberRange(a + 1, b, arr);
  }
  console.log(arr);
};
numberRange(0, 5);
