//Backend Logic//
var arr1 = [];
var finalArray = [];
var addPingPong = function(number) {
  if (number <= 0 ) {
    alert ("please enter a positive number!");
}
  for (var i = 1; i <= number; i ++) {
  arr1.push(i);
}
arr1.forEach(function(arr1) {
  if (arr1 % 15 === 0) {
  arr1 = "ping-pong"
}
if (arr1 % 5 === 0) {
  arr1 = "pong"
}
if (arr1 % 3 === 0) {
  arr1 = "ping"
}
finalArray.push(arr1)
  });
};

//this is my frontend logic//
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var input = $("#textinput").val();
    var result= addPingPong(input);
    finalArray.forEach(function(finalArray) {
    $(".result").append("<li>" + finalArray + "</li>")
    });
  });
});
