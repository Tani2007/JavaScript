let accendOrd = (arr) => {
    let oldArr = arr.map((currElem) => {
        return currElem;
    })
    let check = 0;
    let newArr = [];
    for(let i = 0; i<oldArr.length; i++){
    arr.forEach((currElem) => {
        if(currElem > check){
            check=currElem
        }
    })
    let newElem = arr.splice(arr.indexOf(check),1);
    newArr.push(...newElem)
    check = 0;
    }
    console.log(newArr)
    //opposite this to make accending ord
}
accendOrd([5,7,3,9,2,1])