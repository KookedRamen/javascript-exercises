const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	let result = 0;  
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    
  }
  return result
};
const multiply = function(arr) {
  let result = arr[0]
  for (i = 1; i < arr.length; i++){
    result *= arr[i] 
  }
  return result
};

const power = function(a, b) {
	let result = a ** b
  return result
};

const factorial = function(a) {
	let numbers = [] 
  if (a == 0){
    return 1
  }
  for (let i = 1; i <= a; i++){
    numbers.push(i)
  } 
  return multiply(numbers)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
