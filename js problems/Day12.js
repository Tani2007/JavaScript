const findMin = (a) => {
  if (a.length !== 0) {
    // a = a.sort((a, b) => a - b);
    // console.log(a[0]);
    return Math.min(...a);
  } else {
    return false;
  }
};
console.log(findMin([3, 2, 4, 5, 11, 2]));
