//Problem: Write a function that takes a string as input and returns the string reversed.
// let str = "hello";
// let str1 = str.split("");
// let str2 = str1.reverse().join('')

// console.log(str2)

//Write a function that takes an array of integers and returns the largest ele,m,ent.
//  let arr = [5,7,8,6,2,4,9,3,5,4]
//  let num = 0;
//  arr.forEach((currElem) => {
//     if(currElem>num){
//         num = currElem
//     }
//  })
//  console.log(num)


//Write a function that checks if a given string is a palindrome (reads the same forward and backward).

// let str = "mam";
// let str1 = str.split("");
// let str2 = str1.reverse().join('')
// if(str2 == str){
//     console.log("yes")
// }
// else{
//     console.log("not")
// }


for(let i = 1 ;i<=100;i++){
    
    if(i%5==0 && i%3==0){
        console.log("fizzbuzz")
    }
    else if(i%5==0){
        console.log("buzz")
    }
    else if (i%3==0){
        console.log("fizz")
    }
    else{
        console.log(i)
    }
}
