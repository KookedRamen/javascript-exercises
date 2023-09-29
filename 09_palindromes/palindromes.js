const palindromes = function(word) {
    let splitWord = word.split("") 
    
    let reversedWord = word.split("").reverse()

    let newStr = splitWord.map(letterCheck)
    let newRevStr = reversedWord.map(letterCheck)
    function letterCheck(arr){
        let letters = 'abcdefghijklmnopqrstuvwxyz1234567890'
        for (let i = 0; i < arr.length; i++){
            if (letters.includes(arr[i].toLowerCase()))
            return arr[i].toLowerCase()
        }
    }
    let fwdResult = newStr.join('')
    let revResult = newRevStr.join('')

    console.log(fwdResult)
    console.log(revResult)

    if (fwdResult == revResult){
        return true
    }else {
        return false
    }
}
// palindromes('cow!')

// palindromes('cow')
// Do not edit below this line
module.exports = palindromes;
