const simplePasswordValidator = (a) => {
  a = a.split("");
  console.log(a);
  let num1 = 0;
  let num2 = 0;
  let num3 = 0;
  let b = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (a.length >= 8) {
    a.forEach((currElem) => {
      if (
        currElem === currElem.toUpperCase() &&
        !b.includes(Number(currElem))
      ) {
        num1 = 1;
      } else if (b.includes(Number(currElem))) {
        num2 = 1;
      } else if (currElem === currElem.toLowerCase()) {
        num3 = 1;
      }
    });
    if (num1 == 1) {
      console.log(true);
    } else {
      console.log("no");
    }
  } else {
    console.log(false);
  }
};
simplePasswordValidator("pAss1234");
