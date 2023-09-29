const convertToCelsius = function(tempF) {
  let newTemp = (tempF - 32) * 5/9 
  return Number(newTemp.toFixed(1))
};

const convertToFahrenheit = function(tempC) {
  let newTemp = (tempC * 9/5) + 32
  return Number(newTemp.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
