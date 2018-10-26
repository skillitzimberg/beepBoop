// BUSINESS LOGIC
function beepBoop(numericalInput) {
  return numericalInput;
}



//USER INTERFACE LOGIC

$(document).ready(function() {
  $("form#test").submit(function(event) {
    event.preventDefault();

    console.log("hello");
  });
});
