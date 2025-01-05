const fibbonacci = (num) => {
  if (num <= 1) {
    return 1;
  } else {
    return fibbonacci(num - 1) + fibbonacci(num - 2);
  }
};
console.log(fibbonacci(5));

//formula => fibboncci(3) => fibbonacci(2) + fibbonacci(1)
// F(n) = F(n-1) + F(n-2)
5;
