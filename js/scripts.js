// BUSINESS LOGIC

function returnNumbers(numericalInput) {
  var numbersZeroToInput = [];
  if (numericalInput < 0) {
    for (var count = 0; count >= numericalInput; count--) {
      numbersZeroToInput.push(count);
    }
  } else {
    for (var count = 0; count <= numericalInput; count++) {
      numbersZeroToInput.push(count);
    }
  }

  return numbersZeroToInput;
};



function moduloThree(numbersZeroToInput) {
  var numbersModuloThreeReplaced = [];
  numbersZeroToInput.forEach(function (number) {
    if (number!== 0 && number % 3 === 0) {
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
  var numbersZeroToInput = returnNumbers(numericalInput);
  var numbersDivisibleByThreeToDave = moduloThree(numbersZeroToInput);
  var numbersWithOnesToBoop = replaceNumbersContainingOnes(numbersDivisibleByThreeToDave);
  var numbersWithZerosToBeep = replaceNumbersContainingZeros(numbersWithOnesToBoop);

  return numbersWithZerosToBeep;
};



//USER INTERFACE LOGIC

function display(displayData) {
  var dataAsString = displayData.toString();

  $("#display").text(dataAsString);
}

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberEntered = $("input#entry").val();
    var rawResults = beepBoop(numberEntered);
    display(rawResults);
  });
});
