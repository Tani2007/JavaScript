//Question - 1 = Write a function that takes an array containing n distinct numbers taken from 0, 1, 2, ..., n and finds the one that is missing from the array.Example: Input: [3, 0, 1], Output: 2
// const numFinder = (a) => {
//     let b = a.sort()
//     let num = []
//     for(let i=b[0] ; i<=b.at(-1) ; i++){
//         if(!a.includes(i)){
//             num+= i
//         }
//     }
//     console.log(num.split("").join())   
// }
// let arr = [1,2,3,6,9,5]
// numFinder(arr)

//Question - 2 = Write a function that takes an array of integers and returns an array such that each element at index i is the product of all the numbers in the original array except the one at i.Example: Input: [1, 2, 3, 4], Output: [24, 12, 8, 6]
// const numMultiplier = (a) => {
//     let arr1 = []
//     for(let i =0; i<a.length; i++){
//       let num = a.filter((currElem) => {
//         return currElem !== a[i]
//       })
//       let num1=1
//       num.forEach((curElem) => {
//         num1 = num1* curElem
//       })
//       arr1 = arr1 + `${num1},`
//     }
//     console.log(arr1)
    
    
// }
// let arr = [1,2,3,4]
// numMultiplier(arr)

//Question - 3 = Write a function that takes an array of size n and finds the majority element. The majority element is the element that appears more than n/2 times.Example: Input: [3, 2, 3], Output: 3
// let numRepeater = (a) => {
//     for(let i = 0; i<arr.length; i++){
//         let count = 0;
//         for(let j = 0; j<a.length; j++){
//             if(a[i]==a[j]){
//                 count++;
//             }
//         }
//         if(count > a.length/2){
//             return a[i];
//         }  
//     }
//     return false;
// }
// let arr = [4,5,7,5,6,5,5,5]
// console.log(numRepeater(arr))

//i will think another way to do it as for now it is fully copied

//Question - 4 = Write a function that takes a string and returns the index of the first non-repeating character.
//wrong proggram below
// const nonReating = (a) => {
//     let a1 = a.split("")
//     let num = []
//     a1.forEach((currElem,index) => {
//         if(index == a1.indexOf(currElem)){
//             num = num + currElem
//         }
//     })
//     console.log(num[0])
// }
// let str = "hhhshor" 
// console.log(nonReating(str))




