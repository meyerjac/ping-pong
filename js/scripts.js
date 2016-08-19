//this is my backend logic//
var transform = function(input) {
  if input = 
}




//this is my frontend logic//

$(document).ready(function() {
  $("#form").submit(function(event) {

    event.preventDefault();
    var input = $("#input").val
    var result= transform(input)
    $(".result").slideDown(result);
  });
});
