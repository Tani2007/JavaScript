//Recursion -- when function calls itself

const countFactorial = (a) => {
  if (a === 1) {
    return 1;
  } else {
    return a * countFactorial(a - 1);
  }
};
console.log(countFactorial(5));
