//A promise is like a placeholder for the result of an asynchronous operation.
//promise aane ke baad wait karta hia settle hone tak aur phir wo ya to resolve h jata hai ya phir reject ho jata hai.
//3 stages of proises = pending , fulfill , rejected
/*
//To create a promise
const pr = new Promise((resolve,reject) => {
    setTimeout(() => {
        //console.log("Hey i missed you alot")
        //ham yaha console kar sakte the par ham karenge nhi ham resolve aur reject ka use karenge
        resolve("Hey i missed you alot")
    },2000)
})
//ab ye saara data is pr ke andar chala jaega ab ye pr naam ka promise jo bhi return karega wo mai yaha neeche get kar lunga
pr.then((respose) => {
    console.log(respose)
}).catch((error) => {
    console.log(error)
}).finally(() => {   
    console.log("Don't worry i'm back now") 
}) 
//ye response kuch bhi ho sakta hai jo output pr se nikal kar aaya hai

//catch isliye use kiya ki agar wo promise se koi error aata hai wo fulfill nhi hota to fir error message na aye ham jo show karana chahte hai error ke tor par wo aa jaye 

//finally ka kaam ye hai ki chahe ye reject ho chahe ye resolve ho ye to hona hi chahiye

//maan lo agar reject ho jata to catch use lekar wo message show kar deta
*/
 const studentName ="Tanishq";

 const enrollStudent = (studentName) =>{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const isSuccessful = Math.random() > 0.4;
            if(isSuccessful){
                resolve(`Enrollment sucesssul ${studentName}`)
            }else{
                reject(`enrollment unsucessful ${studentName}`)
            }
        },2000)
    })
 }

enrollStudent(studentName)
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)//reject hua to catch me aa jayega 
})
.finally(() => {
    console.log("Enrollment process ended")
})

//Promise.all = ye saare promises ko ek saath  chalaega par condition hai ki sab ke sab sucessful hone chahiye agar ek bhi galat hua to koi sa bhi promise nhi chalega

//Promise.allSettled = 100 me se 1 bhi galat ho gya par agar 99 bhi sahi hai to wo kaam karenge

//Promise.race() = 100 me se jo bhi sabse pehle aa jayega use chala dega chahe wo resolve ho ya reject 
/*
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First")
    },2000);
})
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second")
    },2000);
})
/*
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third")
    },2000);
})
*/
/*
//promise 3 ko galat kar do
const promise3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Third")
    },2000);
})
/*
Promise.all([promise1,promise2,promise3])
.then((val) => {
    console.log(val)
})
.catch((err) => {
    console.log(err)
})
*/
/*
//abhi to saare shi the isliye saare ek saath kaam kar gye Promise.all me par agar mai ek galart kar du toh
Promise.all([promise1,promise2,promise3])
.then((val) => {
    console.log(val)
})
.catch((err) => {
    console.log(err)
})
*/
//Promise.allSettled
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First")
    },1000);
})
const promise2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject("Second")
    },2000);
})
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third")
    },2000);
})
/*
Promise.allSettled([promise1,promise2,promise3])
.then((val) => {
    console.log(val)
})
.catch((err) => {
    console.log(err)
})
*/
//in sab me jis promise ka max time hota hai uske hisaab se baaki saare promises ko chalna padta hai (all aur all settled me )
//Promise.race
Promise.race([promise1,promise2,promise3])
.then((val) => {
    console.log(val)
})
.catch((err) => {
    console.log(err)
})//in sab me se jo sabse kam samay lega wo jeet jayega 