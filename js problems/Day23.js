const truncateString = (a, b) => {
  //   let count = a.length;
  //   if (b >= count) {
  //     console.log(a);
  //   } else {
  //     console.log(a.slice(0, b) + "...");
  //   }
  console.log(b <= 0 ? a : a.slice(0, b) + "...");
};
truncateString("A boy with college bag", 8);
