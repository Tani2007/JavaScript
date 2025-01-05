function sqArray(a) {
  let c = a.reduce((acc, currElem) => {
    return (acc = acc + currElem * currElem);
  }, 0);
  console.log(c);
}
sqArray([1, 2, 3]);
