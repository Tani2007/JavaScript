function sumOfDigit(a) {
  //   let b = "";
  //   b += a;
  //   let n = 0;
  //   b = b.split("");
  //   for (let i = 0; i < b.length; i++) {
  //     n += Number(b[i]);
  //   }
  //   return n;
  let arr = Array.from(String(a), Number);
  console.log(arr);
  return arr.reduce((acc, curElem) => (acc += curElem), 0);
}
console.log(sumOfDigit(123456));
