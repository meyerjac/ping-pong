//this is my backend logic//

/*This is honestly the most stuck and frusturated i've been in class so far. :/ I just don't UNDERSTAND
the material, I can read the regex, syntax, and functions of JS, and understand jquery's place in all of this, but when I put my hands on the keyboard, they freeze.  I did figure it out but had to reference a lot of other material and my past projects, I havent referenced any HTML or CSS in like a week...JS is another story*/

// Setting empty arrays
var getPingPonged = function(number) {
var arr1 = [];
var arr2 = [];
var arr3 = [];
arr4 = [];

// This is branching and giving feedback

  if (number <= 0 ) {
    alert ("please enter a positive number!");
}
  if (number >= 1) {
    console.log("nice number");
}

// This is setting up my array

for (var index = 1; index <= number; index ++) {
  arr1.push(index);
}


// Replacing 15 divisors with "ping-pong"
  arr1.forEach(function(arr1) {
    if(arr1 % 15 === 0) {
      arr1 = " " + "ping-pong";
}
  arr2.push(arr1);
  });

// Replacing 15 divisors with "pong"
  arr2.forEach(function(arr2) {
    if(arr2 % 5 === 0) {
      arr2 = " " + "pong";
  }
  arr3.push(arr2);
  });

// Replacing 15 divisors with "ping"
  arr3.forEach(function(arr) {
    if(arr % 3 === 0) {
      arr = " " + "ping";
}
 arr4.push(arr);
});

}


//this is my frontend logic//

$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    console.log("Button Clicked");
    var input = $("#textinput").val();
    var result= getPingPonged(input);
    $(".result").text(arr4);
  });
});
