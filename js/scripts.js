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
    if (number % 3 === 0) {
      numbersModuloThreeReplaced.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      numbersModuloThreeReplaced.push(number);
    }
  });
  return numbersModuloThreeReplaced;
};

function replaceNumbersContainingOnes(numbersZeroToInput) {
  var numbersContainingOnesNowBoop = [];

  numbersZeroToInput.forEach(function (number) {
    var numberAsString = number.toString();

    for (var digit = 0; digit < numberAsString.length; digit++) {
      if (parseInt(numberAsString.charAt(digit)) === 1) {
        numbersContainingOnesNowBoop.push("Boop!");
      } else {
        numbersContainingOnesNowBoop.push(number);
      }
    }
  });
  return numbersContainingOnesNowBoop;
};



//USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

    console.log("hello");
  });
});
