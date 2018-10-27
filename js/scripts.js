// BUSINESS LOGIC

function returnNumbers(numericalInput) {
  var numbersZeroToInput = [];
  var iterateUpOrDown;

  if (numericalInput < 0) {
    iterateUpOrDown = -1;
  } else if (numericalInput > 0) {
    iterateUpOrDown = 1;
  };

  for (var count = 0; count <= Math.abs(numericalInput); count++) {
    var numberToPush = count*iterateUpOrDown;
    numbersZeroToInput.push(numberToPush);
  };
  return numbersZeroToInput;
};


function replaceNumbersUsingModuloAsFilter(numbersZeroToInput) {
  var numbersMatchingModuloRuleReplaced = [];
  for (var index = 0; index < numbersZeroToInput.length; index++) {
    if (numbersZeroToInput[index] !== 0 && numbersZeroToInput[index] % 3 === 0) {
      numbersMatchingModuloRuleReplaced.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else {
      numbersMatchingModuloRuleReplaced.push(numbersZeroToInput[index]);
    }
  }
  return numbersMatchingModuloRuleReplaced;
};



function replaceNumbersContainingOnes(numbersMatchingModuloRuleReplaced) {
  var numbersContainingOnesNowBoop = [];
  numbersMatchingModuloRuleReplaced.forEach(function(number) {
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
  var numbersDivisibleByThreeToDave = replaceNumbersUsingModuloAsFilter(numbersZeroToInput);
  var numbersWithOnesToBoop = replaceNumbersContainingOnes(numbersDivisibleByThreeToDave);
  var numbersWithZerosToBeep = replaceNumbersContainingZeros(numbersWithOnesToBoop);

  return numbersWithZerosToBeep;
};



//USER INTERFACE LOGIC

function display(displayData) {
  $("ol#display").empty();
  for (var index = 0; index < displayData.length; index++) {
    $("ol#display").append("<li>" + displayData[index] + "</li>");
  };
};

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberEntered = $("input#entry").val();
    var rawResults = beepBoop(numberEntered);
    display(rawResults);
  });
});
