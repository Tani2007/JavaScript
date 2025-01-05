//Question 1 = Write a function that takes an array of integers and returns the second largest element.
// let num = [1,5,7,8,9,2]
// let num1 = 0;
// let num2 = 0;
// num.forEach((currElem) => {
//     if(currElem>num1){
//         num1 = currElem;
//     }
// })
// num.forEach((currElem) => {
//     if(currElem>num2 && currElem<num1){
//         num2 = currElem
//     }
// })
// console.log(num2)

//Question 2 =Write a function that checks if two given strings are anagrams of each other.



// const anaChecker = (a,b) => {
//     let a2= a.toUpperCase()
//     let b2= b.toUpperCase()
//     let a3 = a2.replaceAll(" " , "")
//     let b3 = b2.replaceAll(" " , "")
//     let a1 = a3.split("")
//     let b1 = b3.split("")
//     let n = a1.sort();
//     let n1 = b1.sort();
    // for(let i = 0; i<=n.length ; i++){
    //     if(n[i] == n1[i]){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    //below is my own method
    // if(n.join("") == n1.join("")){
    //     console.log("yes")
    // }
    // else{
    //     console.log("no")
    // }
// }
// console.log(anaChecker("Schoolmsaster","The Classroom"))
// anaChecker("Dirty Room","Dormitorr")
// let fruit1 = "aa"
// let fruit2 = "aa"
// console.log(fruit1 == fruit2)


//question3 = Write a function that calculates the factorial of a given number.
// const fact = (num) => {
//     let f = 1;
//     for(let i = num ; i>0 ; i--){
//         f *=i
//     }
//     console.log(f)
// }
// fact(6)

//quesetion 4 = Write a function that merges two sorted arrays into one sorted array.
// let a = [1,7,57,5,8,102,9,5,9]
// let a1= a.sort((a,b) => a - b);
// let b = [3,8,9,7,4,5,6,2]
// let b1 = b.sort((a,b) => a-b);
// let c = [...a1,...b1]
// let c1 = c.sort((a, b) => a - b);
// console.log(c1)

//question5 =Write a function that counts the number of vowels in a given string.
// let str = "aeiuuuuosa"
// let vowel = "aeiou"
// let num = 0;
// let str1 = str.split("")
// let vowel1 = vowel.split("")
// str1.forEach((currElem) => {
//     if(vowel1.includes(currElem)){
//         num +=1
//     } 
// })
// console.log(num)
