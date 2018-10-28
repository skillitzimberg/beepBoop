
// BUSINESS LOGIC

function returnNumbersZeroToUserInput(numericalInput, ifLessThanConditionValue, iterationValue) {
  var numbersZeroToInput = [];
  var countUpOrDown;

  if (numericalInput < ifLessThanConditionValue) {
    countUpOrDown = -iterationValue;
  } else {
    countUpOrDown = iterationValue;
  };

  for (var count = ifLessThanConditionValue; count <= Math.abs(numericalInput); count += iterationValue) {
    var numberToPush = count*countUpOrDown;
    numbersZeroToInput.push(numberToPush);
  };
  return numbersZeroToInput;
};


function replaceNumbersUsingModuloAsFilterWithPhrase(element, moduloValue, phrase) {
    if (element !== 0 && element % moduloValue === 0) {
      element = phrase;
    }
  return element;
};


function replaceNumbersContainingDigitWithPhrase(element, digit, phrase) {
    var elementAsString = element.toString();
    if (elementAsString.includes(digit) === true) {
      element = phrase;
    }
  return element;
};


function beepBoop(numericalInput) {
  var allElementsProcessed = [];
  var numbersZeroToInput = returnNumbersZeroToUserInput(numericalInput, 0, 1);

  for (var index = 0; index < numbersZeroToInput.length; index++) {
    var element = numbersZeroToInput[index];
    element = replaceNumbersUsingModuloAsFilterWithPhrase(element, 3, "I'm sorry, Dave. I'm afraid I can't do that.");
    element = replaceNumbersContainingDigitWithPhrase(element, 1, "Boop!");
    element = replaceNumbersContainingDigitWithPhrase(element, 0, "Beep!");
    allElementsProcessed.push(element);
  }
  return [numbersZeroToInput, allElementsProcessed];
};


//USER INTERFACE LOGIC

function display(displayData, numberEntered) {
  $("ul#display").empty();

  for (var count = 0; count < displayData[0].length; count++) {
    $("ul#display").append("<li><span>" + displayData[0][count] + ". </span>" + displayData[1][count] + "</li>");
  };
};


$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberEntered = parseInt($("input#entry").val());
    var rawResults = beepBoop(numberEntered);
    display(rawResults, numberEntered);
  });
});
