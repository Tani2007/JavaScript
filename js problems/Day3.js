//Question3 = count "i in a string casing doesn't matter"
const countChar = (str,find) => {
    let count = 0;
    find = find.toUpperCase()
    str = str.toUpperCase()
    str = str.split("")
    let totalCount = str.reduce(function(acc,currElem){
        if(currElem === find){
            acc++;
        }
        return acc;
    },0)
    return totalCount;
}
console.log(countChar("MissIssippi","i"))