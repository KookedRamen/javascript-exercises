const repeatString = function(string, count) {
    let newString = string
    for (i = 1; i < count; i++){
        newString += string    
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;
