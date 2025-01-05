/*
//Ther are 9 ways to create date object in JavaScript 
1 - new Date()
2 - new Date(date string)
3 - new Date(year,month)
4 - new Date(year,month,day)
5 - new Date(year,month,days,hours)
6 - new Date(year,month,days,hours,minutes)
7 - new Date(year,month,days,hours.minutes,second)
8 - new Date(year,month,days,hours,minutes,second,ms)
9 - new Date(millisecond)
*/
/*
//create ou first date object
const currentDate = new Date()
console.log(currentDate)//aaj ki date aur time aa jayega
//par agr aap yahi code browser me run karte ho to aapko indian standard time india ka aega 
//par agar aap yeh code vs code me run karte ho to aapko  coordinated universal time format me aega
*/
/*
//Dusra Tareeka = new Date(dateString)
//date string wahi hoti hai jo pehle wale method me aapne code run karke payii  thi
const DateString = "2024-09-04T10:18:02.254Z"
const dateFromString = new Date(DateString)
console.log(dateFromString)
*/
/*
//Teesra tareeka - new Date(year,month)
const date1 = new Date(2024,9)//pela year dusra month 
console.log(date1)

//here 
Jan = 0
Feb = 1 
Mar = 2
Apr = 3
.     .
Dec = 11
//4th tareeka - new Date(year,month,day)
2024,8,5))

//5th tareeka - new Date(year,month,day,hours)
2024,8,5,10))

//6th tareeka - new Date(year,month,day,hours,min)
2024,8,5,10,44))

//7th tareeka - new Date(year,month,day,hours,min,sec)
2024,8,5,10,44,50))

//7th tareeka - new Date(year,month,day,hours,min,sec,ms)
2024,8,5,10,44,50,274))
*/
/*
//ab ye dekho
const currMilliSecond = new Date().getTime()
console.log(currMilliSecond)//output = 1725450646786 ye millisecond hai 
//ye milisecond ka gap jan 1 1970 se hai 

//ab ham en millisecond ki madad  se bhi ham time get kar sakte hai 
const currMillisecond = new Date().getTime();
const todayDate = new Date(currMillisecond)
console.log(todayDate)//aaj ki date aa jayegi
*/
/*
//date string format
const date1 = new Date("2024-03-09")
const date2 = new Date("March 9 2024")
console.log(date1)
console.log(date2)
*/
/*
//ab aap yeh soch rahe honge ki kya koi aisa tareeka  hai jisse aap sirf date get kar sakte hai ya year month 
//Java Script get date method
let currDate = new Date()
let year = currDate.getFullYear();
console.log(year)
let month = currDate.getMonth()
console.log(month)//8 = sept
let date = currDate.getDate();
console.log(date)//isse aaj ki date aa jayegi
let day = currDate.getDay()
console.log(day)// 0 = sunday monday = 1 tuesday = 2 wednesday = 3 ..
*/
/*
//JavaScript set Date Method
const date = new Date()
console.log(date)//yahan ki date 9 sept 224 rahegi 
date.setFullYear(2025)
console.log(date)//par yahan ki dat eme 2024 ki jagah 2025 ho jayega 
//setMonth(month value)
date.setMonth(11)//december chahiye par 12 nhi likh sakte wo dikhayega 12 hi par hame yaha 11 likhna padega
console.log(date)
//setDate (date)
date.setDate(9)
console.log(date)
*/
/*
//Time Methods
let currTime = new Date()

let hours = currTime.getHours()
console.log(hours)
let min = currTime.getMinutes()
console.log(min)
let sec = currTime.getSeconds();
console.log(sec)
let Time = currTime.getTime();
console.log(Time)//1970 se time dedega milliseconds
*/
/*
//set Time Method 
//setHours(hours)
let currTime = new Date()
currTime.setHours(23)
console.log(currTime)
//setMinutes(min)
let currTime = new Date()
currTime.setMinutes(50)
console.log(currTime)
//setSeconds(seconds)
let currTime = new Date()
currTime.setSeconds(59)
console.log(currTime)
//setMilliseconds(milliseconds)
let currTime = new Date()
currTime.setMilliseconds(500)
console.log(currTime)
*/
/*
//toLocalString() - ye function wase hi time or date batega jaise aapko chahiye 
let date = new Date()
let localString = date.toLocaleString();
console.log(localString)
//toLocalDateString() - ye function aapko usi format me date dedega jo aapko chahieye

let date = new Date()
let localDate = date.toLocaleDateString();
console(localDate)
//toLocalTimeString() - ye usi format me time generate kar kar dedega 
let date = new Date()
let localTime = date.toLocaleTimeString()
console.log(localTime)

//Date.parse(utc fromat time)
let datestring = "2024-09-04T16:55:13.101Z"
let parseDate = Date.parse(datestring)
console.log(parseDate)

//Date.now()
let newDate = new Date()
console.log(newDate.getTime());
//ya phir is function ka use karlo
console.log(Date.now())
//ye upar wale dono functions aapko 1970 se lekar aaj tak ka time millisecond me batadenge
*/
/*
//Question = 1 ek function banana hai jisme aap 2 argument doge pehla date dusra number of days to add
let addDaysToDate = (date,extraDays) => {
    console.log(date)
    let getdate = date.getDate()
    date.setDate(getdate+extraDays)
    console.log(date)
}
let date = new Date("2024-09-04")
console.log(addDaysToDate(date,2))

//Question 2 = ek function banana hai jisme 2 argument date1,date2 

//galat tareeka
let date1 = new Date("2024-09-04") 
let date2 = new Date("2024-09-10")

let diffDate = (date1,date2) => {
    console.log(date1)
    let firstDate = date1.getDate()
    let secondDate = date2.getDate()
    console.log(firstDate)
    console.log(secondDate)
    return secondDate-firstDate
}

console.log(diffDate(date1,date2))

//upar wale queston ko karne ka aasaan tareeka aur sahi tareeka upar wale tareke se sirf date ka difference aa raha hai par agar mahine me diffrence ho jaye to wo funciton bekaar ho jayega 

//bilkul sahi tareeka
let dateDiff2 = (date1,date2) => {
    console.log(date2-date1)//ye milli second me difference aa jayega
    let oneDayMs = 24 * 60 * 60 * 1000//ek din me itne Ms hote hai
    let diff = date2-date1
    return diff/oneDayMs
}
console.log(dateDiff2(date1,date2))

*/
/*
//Timing Based Event in JavaScript
1 = setTimeout()//ye koi bhi funtion ko kitni der baad kaam karna hai ye  bata ega 
e.g = 
funtion myfunction(){
    //there is a code for something inside this function aisa maan lo 
}
setTimeout(myfunction,1000)//ye 1 sec hai par milli secnog me likha hua hai ab ye 1 sec baad run hoga

2 = setInterval()//ye ek function ko kitni kitni der baad kaam karna hai yeh bataega
e.g = 
funtion myfunction(){
    //there is a code for something inside this function aisa maan lo 
}
setInterval(myfunction,1000)//ye 1 sec hai par milli secnog me likha hua hai ab ye har 1 sec me run hoga
*/
/*
//setTimeout()
function myfunction(){
    console.log("hey there you go the stage is set for you") 
}
setTimeout(myfunction,5000)//ye function 5 sec me chal jayega 
//if function has any argument then

function myfunction(x){
    console.log("hey there you go the stage is set for you",x) 
}
setTimeout(()=>myfunction(5),5000)
*/
/*
//setInterval()
function myfunction(){
    console.log("hey there you go the stage is set for you") 
}
setInterval(myfunction,2000)

//if function has any argument then

function myfunction(x){
    console.log("hey there you go the stage is set for you",x) 
}
setInterval(()=>myfunction(5),5000)
*/
/*

//clearTimeout(timeoutID)
function myfunction(){
    console.log("hey there you go the stage is set for you") 
}
let mytimeout = setTimeout(myfunction,5000)
clearTimeout(mytimeout)//timeout cleared kuch nhi hoga ab 

//clearInterval(intervalID)
function myfunction(){
    console.log("hey there you go the stage is set for you") 
}
let interval = setInterval(myfunction,2000)
clearInterval(interval)//par ye aise kaam nhi karega kyuki aapne kuch bataya hi nhi hai ki clear interbal kab karna hai 1 min ke baad 2 min ke baad isko kaise kaam  karana hai uske liye  ye challenge dekho 
*/
//challenge Time 
//aapko ek function likhna hai repeatedFunction() jo ki log karaeg aye message "this fnction repeats in every 1000 millisecond or 1 second" then setup an interval using setintervel to call repeated function and after 5 second use setTimeut to clear that interval

let repeatedFunction = () => {
    console.log("This funciton repeats in every 1000 millisecond or you cam day 1 sec")
}
repeatedFunction()
let intervalId = setInterval(repeatedFunction,1000)
//ab hame after 5 sec is function ho hatana hai 
setTimeout(()=>{
    clearInterval(intervalId)

},5000)
//Ho gya kaam bas itna aasaan tha kuch nhi karna tha par yaha hame wo cheez 4 baar dikhayi degi kyu ki 1 sec to calling me hi waste ho jata hai par agar aapko wo mesaage 5 baar dekhana hai to function ko time out aur interval se pehle call kardo


