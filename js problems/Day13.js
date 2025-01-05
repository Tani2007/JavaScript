const camelCase = (a) => {
  a = a.toLowerCase().split(" ");
  //   let e = a[0];
  //   for (let i = 1; i < a.length; i++) {
  //     a[i] = a[i].toLowerCase();
  //     let b = a[i].split("");
  //     let c = b[0];
  //     let d = a[i].replace(c, c.toUpperCase());
  //     e = e + d;
  //   }
  //   console.log(e);

  a = a
    .map((currElem, index) => {
      if (index === 0) {
        return currElem;
      } else {
        return currElem.replace(currElem.at(0), currElem.at(0).toUpperCase());
      }
    })
    .join("");
  console.log(a);
};
camelCase("whish you lUck");
