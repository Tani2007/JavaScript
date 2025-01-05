const findCountObj = (a) => {
  // let c = {};
  // for (let j = 0; j < a.length; j++) {
  //   let d = 0;
  //   for (let i = 0; i < a.length; i++) {
  //     if (a[j] == a[i]) {
  //       d++;
  //     }
  //   }
  //   c[a[j]] = d;
  // }
  // console.log(c);
  let counts = {};
  for (let element of a) {
    counts[element] = (counts[element] || 0) + 1;
  }
  console.log(counts);
};

findCountObj([4, 5, 6, 4]);
