//Problem1: Write a function that takes two arrays and returns an array of their intersection (common elements).
// const intersection = (a,b) => {
//     let num3 = []
//     for(let i = 0 ; i<=a.length ; i++){
//         if(b.includes(a[i])){
//             num3 +=a[i]
//         }
//     }
//     if(num3.length != 0 ){
//         console.log(num3.split(""))
//     }
//     else{
//         console.log("empty")
//     }
    
// }
// let num = [1,3,4]
// let num2 = [5,7,8]
// intersection(num,num2)

//Problem2: Write a function that finds the longest common prefix string amongst an array of strings.Example: Input: ["flower", "flow", "flight"], Output: "fl"

// const commonPrefix = (common) => {
//     let comm = "";
//     let com2 = "";
//     for(let i = 0; i<1 ; i++){
//         comm += common[i]
//     }
    
//     let comm2 = comm.split("")
    
//     for(let i = 1; i<common.length ; i++){
//         for(let j = 0 ; j<common[i].length; j++){
//             if(comm2.includes(common[i][j])){
//                 com2 += common[i][j]
//             }
//         }
//     }
//     console.log(com2)
    
// }
// let arr = ["flower","float"]
// commonPrefix(arr)

//Problem3: Write a function that removes duplicates from a sorted array and returns the new length of the array

// const number = [1,1,2]
// const result = number.filter((crrElem,index) => {
//     return number.indexOf(crrElem) == index;
// })
// console.log(result)

//Problem4: Write a function that determines if a given string of parentheses is valid. A string is valid if every opening parenthesis has a corresponding closing parenthesis in the correct order.
// let pra1 = "(]";//false
// let pra2 = "()";//true
// let paranthesis = (a) => {
//     if(a=="()" || a =="{}" || a=="<>" || a=="[]"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// console.log(paranthesis(pra1))
