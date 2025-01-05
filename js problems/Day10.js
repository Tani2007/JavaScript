function isPowerOfTwo(a) {
  let b = false;
  for (let i = 1; i <= a; i++) {
    if (2 ** i == a) {
      b = true;
    }
  }
  return b;
}
console.log(isPowerOfTwo(8));
