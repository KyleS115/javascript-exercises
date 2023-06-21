const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(arrayOfNumbers) {
	const sumOfNumbers = arrayOfNumbers.reduce((currentSum, currentNum) => {
    return (currentSum += currentNum);
  }, 0);
  return (sumOfNumbers);
};

const multiply = function() {
  if (arguments.length === 0) {
    return (0);
  } else {
    let runningProduct = 1;
    for (let i = 0; i < arguments.length; i++) {
      runningProduct *= arguments[i];
    };
    return (runningProduct);
  };
};

const power = function(num1, num2) {
	let runningProduct = 1;
  for (let i = 1; i <= num2; i++) {
    runningProduct *= num1;
  };
  return (runningProduct);
};

const factorial = function(num) {
	let runningProduct = 1;
  for (i = num; i > 0; i--) {
    runningProduct *= i;
  }
  return (runningProduct);
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
