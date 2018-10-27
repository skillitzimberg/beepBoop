
// BUSINESS LOGIC

function returnNUmbersZeroToUserInput(numericalInput) {
  var numbersZeroToInput = [];
  var iterateUpOrDown;

  if (numericalInput < 0) {
    iterateUpOrDown = -1;
  } else {
    iterateUpOrDown = 1;
  };

  for (var count = 0; count <= Math.abs(numericalInput); count++) {
    var numberToPush = count*iterateUpOrDown;
    numbersZeroToInput.push(numberToPush);
  };
  return numbersZeroToInput;
};


function replaceNumbersUsingModuloAsFilter(element) {
    if (element !== 0 && element % 3 === 0) {
      element = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
  return element;
};


function replaceNumbersContainingOnes(element) {
    var elementAsString = element.toString();
    if (elementAsString.includes("1") === true) {
      element = "Boop!";
    }
  return element;
};


function replaceNumbersContainingZeros(element) {
  var elementAsString = element.toString();
    if (elementAsString.includes("0") === true) {
      element = "Beep!";
    }
  return element;
};


function beepBoop(numericalInput) {
  var allElementsProcessed = [];
  var numbersZeroToInput = returnNUmbersZeroToUserInput(numericalInput);

  for (var index = 0; index < numbersZeroToInput.length; index++) {
    var element = numbersZeroToInput[index];
    element = replaceNumbersUsingModuloAsFilter(element);
    element = replaceNumbersContainingOnes(element);
    element = replaceNumbersContainingZeros(element);
    allElementsProcessed.push(element);
  }
  return allElementsProcessed;
};


//USER INTERFACE LOGIC

function display(displayData, numberEntered) {
  $("ol#display").empty();

  console.log(numberEntered);
  if (numberEntered < 0) {
    $("ol#display").attr("reversed", true);
  } else {
    $("ol#display").removeAttr("reversed");
  }
  for (var index = 0; index < displayData.length; index++) {
    $("ol#display").append("<li>" + displayData[index] + "</li>");
  };
};

 // reversed="true"

$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var numberEntered = parseInt($("input#entry").val());
    var rawResults = beepBoop(numberEntered);
    display(rawResults, numberEntered);
  });
});
