const fibonacci = function(number) {
    if (number < 1){
        // throw console.error('OOPS');
        return "OOPS"
    }
    let n1 = 1, n2 = 1, nextStep
    let sequence = []
    for (let i = 1; i <= number; i++) {
        sequence.push(n1)
        nextStep = n1 + n2
        n1 = n2
        n2 = nextStep
    }
    return sequence[number - 1]
    // console.log(sequence)
    // console.log(sequence[number - 1])
};
// fibonacci(10)
// Do not edit below this line
module.exports = fibonacci;
