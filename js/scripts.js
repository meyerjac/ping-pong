//this is my backend logic//

var getPingPonged = function(input) {
  if (input <= 0 ) {
    console.log ("please enter a positive number!");
  }
  if (input >= 1) {
    console.log("nice number");
   }
   var arr1 = [];
   for (var index = 1; index <= input; index ++) {
     arr1.push(index);
     console.log(arr1);
}
     arr2 = [];
     arr1.forEach(function(arr) {
       if(arr % 3 === 0) {
         arr = "ping";
}
    arr2.push(arr);
 });
console.log(arr2);
};

//this is my frontend logic//

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var input = $("#textinput").val();
    $("#output").append(getPingPonged(input));
  });
});
