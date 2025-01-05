//Create your own Promise
// let st = false;

// let timeOut = () => {
//     const pr = new Promise(function(resolve,reject){
//         if(st){
//             setTimeout(() => {
//                 resolve("hey");
//             },4000)
            
            
//         }
//         if(!st){
//             const err = new Error("noooooo")
//             reject(err)
//         }
        
//     })
//     return pr;
// }
// let promise = timeOut();
// // console.log(promise)
// promise.then(function(){
//     console.log(promise)
// })
// .catch(function(err){
//     console.log(err.message)
// })
// let arr = []
// let add = (name,age) => {
//     if(arr.includes(name)){
//         return;
//     }
//     else if(age>20){
//         arr.push(name)
//     }
//     else if(age<=20){
//         err = new Error("Staff member age must be greter than 20")
//         console.error(err)
//     }
// }
// let getSize = (arr) => {
//     console.log(arr.length)
// }
// let remove = (name) => {
//     if(arr.includes(name)){
//         let a = arr.indexOf(name)
//         delete arr[a]
//     }
    
// }
// add("Jhon",25)
// add("Robin",23)
// getSize(arr)
// remove("Jhon")
// getSize(arr)
// // let arr = ["apple","pine apple"]
// // console.log(...arr.splice(1,1))
// // console.log(...arr)
// // let arr = ["apple","mango"]
// // let remove = (name) => {
// //     if(arr.includes(name)){
// //         let a = arr.indexOf(name)
// //         arr.splice(1,a)
// //         console.log("true")
// //     }
    
// // }
// // remove("apple")
// // console.log(arr)