//this is my backend logic//

var getPingPonged = function(input) {
  if (input <= 0 ) {
    console.log ("please enter a positive number");
  }
  if (input >= 1) {
    console.log("nice number");
   }

   var arr1 = [];
   for (var index = 0; index <= input; index ++) {
     arr1.push(index);
     console.log(arr1);
   }

   alert(arr1);
 }







//this is my frontend logic//

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var input = $("#textinput").val();
    $("#output").append(getPingPonged(input));
  });
});
