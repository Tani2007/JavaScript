function myPrime(a) {
  for (let i = 1; i <= a; i++) {
    let n = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        n++;
      }
    }
    if (n === 2) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
myPrime(10);
