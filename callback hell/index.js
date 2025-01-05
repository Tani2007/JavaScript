//callback hell, also known as pyrami of Doom, refers to situation in asynchronous JavaScript programming where multiple nested callbacks are used to handle asynchronous operations. This result result in code that is difficult to read,undrstand and maintain due to deeply nested structure.

//ab mai ek program likhunga jisme mujhe har 1 se ke baad apne baare me kuch batana hai 
const getStudentData = () => {
    setTimeout(() => {
        console.log("my name is Tanishq")
        setTimeout(() => {
            console.log("my last name is saxena")
            setTimeout(() => {
                console.log("my fav TV show is The Office")
                setTimeout(() => {
                    console.log("my fav char of that show is michaelscott")
                },1000)
            },1000)
        },1000)
    },1000)
}
// yaha ek callback hell create ho gya hai jo ki ghusta hi chala jaa raha hai aur isko read karna bahut hi mushkil hai aur samajhna to aur bhi mushkil
getStudentData()
//to isi problem se bachne ke liye ham promises ka use karte hai 