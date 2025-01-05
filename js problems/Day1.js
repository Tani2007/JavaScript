//Question1 =  you have to find the longest character in the given string.

// const findLongestWord = (a) => {
//     let finder = []
//     b = a.split(" ")
//     b.forEach((currElem) => {
//         if(currElem.length>finder.length){
//             finder=currElem
//         }
        
//     })
//     console.log(finder)
// }
// let str = "hey this is tanishq saxena "
// findLongestWord(str)

//doing same program with another approach

// let findLongestWord = (str) => {
//     words = str.split(" ");
//     words = words.sort((a,b) => a.length -b.length);
//     return words.at(-1);
// }
// console.log(findLongestWord("Hey This is tanishq Saxena"))

//another approach with reduce method;
// let findLongestWord = (str) => {
//     words = str.split(" ");
//     return words.reduce((acc,currElem) =>  {
//         return (currElem.length>acc.length ? currElem :acc)
//     },"")
// }
// console.log(findLongestWord("Hey This is tanishq Saxena"))