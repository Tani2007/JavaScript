function arrayAreEqual(a, b) {
  //   let n = 0;
  //   if (a.length === b.length) {
  //     for (let i = 0; i < a.length; i++) {
  //       if (a[i] == b[i]) {
  //         n += 1;
  //       }
  //     }
  //     if (n === a.length) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   } else {
  //     return false;
  //   }
  if (a.length !== b.length) {
    return false;
  }
  return a.every((curVal, index) => curVal === b[index]);
}
console.log(arrayAreEqual([1, 2, 3], [1, 2, 3]));
