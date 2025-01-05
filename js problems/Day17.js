// const findMean = (a) => {
//   let b = a.reduce((accum, currElem) => {
//     return (accum += currElem);
//   }, 0);
//   return b / a.length;
// };
// console.log(findMean([1, 2, 3, 4, 5]));

// const findMedian = (a) => {
//   a = a.sort((a, b) => a - b);
//   console.log(a);
//   if (a.length % 2 !== 0) {
//     console.log(a[Math.floor(a.length / 2)]);
//   } else {
//     console.log(
//       (a[Math.floor(a.length / 2 - 1)] + a[Math.floor(a.length / 2)]) / 2
//     );
//   }
// };
// findMedian([3, 5, 7, 9]);
