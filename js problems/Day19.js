const findMode = (a) => {
  let counts = {};
  let maxNum = 0;
  let mode;
  for (let element of a) {
    counts[element] = (counts[element] || 0) + 1;
    if (counts[element] > 0) {
      maxNum = counts[element];
      mode = element;
    }
  }
  console.log(mode);
};
findMode([1, 2, 2, 3, 1, 4, 2]);
