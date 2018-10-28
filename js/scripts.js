
// BUSINESS LOGIC

function returnNumbersZeroToUserInput(numericalInput, ifConditionValue, iterationValue) {
  var numbersZeroToInput = [];
  var iterateUpOrDown;

  if (numericalInput < ifConditionValue) {
    iterateUpOrDown = -iterationValue;
  } else {
    iterateUpOrDown = iterationValue;
  };

  for (var count = 0; count <= Math.abs(numericalInput); count++) {
    var numberToPush = count*iterateUpOrDown;
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
  return allElementsProcessed;
};


//USER INTERFACE LOGIC

function display(displayData, numberEntered) {
  $("ol#display").empty();

  if (numberEntered < 0) {
    $("ol#display").attr("reversed", true);
  } else {
    $("ol#display").removeAttr("reversed");
  }

  for (var index = 0; index < displayData.length; index++) {
    $("ol#display").append("<li>" + displayData[index] + "</li>");
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
