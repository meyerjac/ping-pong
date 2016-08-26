var arr1 = [];
var arrayFinal = [];
var getPingPonged = function(number) {
  if (number <= 0 ) {
    alert ("please enter a positive number!");
}
  for (var i = 1; i <= number; i ++) {
    arr1.push(i);
}

arr1.forEach(function(arr1) {
  if (arr1 % 15 === 0) {
  arr1 = "ping-pong"
} if (arr1 % 5 === 0) {
  arr1 = "pong"
} if (arr1 % 3 === 0) {
  arr1 = "ping"
}
arrayFinal.push(arr1);
  });
};

//this is my frontend logic//
$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    var input = $("#textinput").val();
    var result= getPingPonged(input);
    arrayFinal.forEach(function(arrayFinal) {
    $(".result").append("<li>" + arrayFinal + "</li>")
    });
  });
});
