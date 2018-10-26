// BUSINESS LOGIC
function beepBoop(numericalInput) {
  var numbersZeroToInput = [];
  for (var count = 0; count <= numericalInput; count++) {
    numbersZeroToInput.push(count);
  }

  return numbersZeroToInput;
}



//USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

    console.log("hello");
  });
});
