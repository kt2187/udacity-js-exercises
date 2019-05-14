/*
 * Programming Quiz: Laugh (5-4)
 Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
 */

var laugh = function(num) {
  /* finish the function expression */
  var ha = "";
  for (var i = 0; i < num; i++) {
    ha += "ha";
  }
  return ha + "!";
};
console.log(laugh(10));
