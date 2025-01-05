//Question2 = you have to create a hashTag generator.if the  length is greter than  280 or equal to 0 then it returns false.

// const generateHash = (str) => {
//     if(str.length > 280 || str.trim().length === 0){
//         return false;
//     }
//     str = str.split(" ");
//     str = str.map((currElem) => {
//         return currElem.replace(currElem[0],currElem[0].toUpperCase())
//     })
//     str.unshift("#");
//     str = str.join("")
//     return str;
// }
// let val = "my name is tanishq saxena"
// console.log(generateHash(val))
