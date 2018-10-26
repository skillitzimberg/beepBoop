// BUSINESS LOGIC
function returnedNumbers(numericalInput) {
  var numbersZeroToInput = [];
  for (var count = 0; count <= numericalInput; count++) {
    numbersZeroToInput.push(count);
  }
  return numbersZeroToInput;
};

function moduloThree(numbersZeroToInput) {
  var numbersModuloThreeReplaced = [];
  numbersZeroToInput.forEach(function (number) {
    if (number === 0) {
      numbersModuloThreeReplaced.push("Boop!");
    } else if (number % 3 === 0) {
      numbersModuloThreeReplaced.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      numbersModuloThreeReplaced.push(number);
    }
  });
  return numbersModuloThreeReplaced;
};

function replaceNumbersContainingOnes(numbersModuloThreeReplaced) {

  var numbersContainingOnesNowBoop = [];

  numbersModuloThreeReplaced.forEach(function(number) {
    var numberAsString = number.toString();

    if (numberAsString.includes("1") === true) {
      numbersContainingOnesNowBoop.push("Boop!");
    } else {
      numbersContainingOnesNowBoop.push(number);
    }
  });
  return numbersContainingOnesNowBoop;
};

function replaceNumbersContainingZeros(numbersContainingOnesNowBoop) {
  var numbersContainingZerosNowBeep = [];

  numbersContainingOnesNowBoop.forEach(function(number) {
    var numberAsString = number.toString();

    if (numberAsString.includes("0") === true) {
      numbersContainingZerosNowBeep.push("Beep!");
    } else {
      numbersContainingZerosNowBeep.push(number);
    }
  });
  return numbersContainingZerosNowBeep;
};

function beepBoop(numericalInput) {
  var numbersZeroToInput = returnedNumbers(numericalInput);
  var numbersModuloThreeReplaced = moduloThree(numbersZeroToInput);
  var numbersContainingOnesNowBoop = replaceNumbersContainingOnes(numbersModuloThreeReplaced);
  var numbersContainingZerosNowBeep = replaceNumbersContainingZeros(numbersContainingOnesNowBoop);

  return numbersContainingOnesNowBoop;
};



//USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

    console.log("hello");
  });
});
