// var add = function(number1, number2) {
//     return number1 + number2;
//   };
  
//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   var result = add(number1, number2);
//   alert(result);
//   var enoughSleep = true;
// if (enoughSleep) {
//   console.log("I'm ready to go!");
// } else {
//   console.log("I need a nap.");
// }


// var add = function(number1, number2) {
//   return number1 + number2;
// };
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
// var divide = function(number1, number2) {
//   return number1 / number2;
// };
var add = function(number1, number2) {
  return number1 + number2;
  };
  var subtract = function(number1, number2) {
  return number1 - number2;
  };
  var multiply = function(number1, number2) {
  return number1 * number2;
  };
  var divide = function(number1, number2) {
  return number1 / number2;
  };
  
  $(document).ready(function() {
  $("form#multiply").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = multiply(number1, number2);
  $("#output").text(result)
  });
  });




// var number1 = parseInt(prompt("Enter a number:"));
// var number2 = parseInt(prompt("Enter another number:"));
// alert(add(number1, number2));

// $(document).ready(function() {
//   var number1 = parseInt(prompt("Enter a number:"));
//   var number2 = parseInt(prompt("Enter another number:"));
//   alert(add(number1, number2));
//  });

//  $("#add1").val();
// $("#add2").val();

// $(document).ready(function() {
//   var number1 = parseInt($("#add1").val());
//   var number2 = parseInt($("#add2").val());
//   alert(add(number1, number2));
// });