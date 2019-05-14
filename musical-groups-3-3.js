/*
 * Programming Quiz: Musical Groups (3-3)
 Directions:
Write a series of conditional statements that:

Prints "not a group" if musicians is less than or equal to 0
Prints "solo" if musicians is equal to 1
Prints "duet" if musicians is equal to 2
Prints "trio" if musicians is equal to 3
Prints "quartet" if musicians is equal to 4
Prints "this is a large group" if musicians is greater than 4
TIP: Test your code with different values. For example,

If musicians equals 3, then "trio" should be printed to the console.
If musicians equals 20, then "this is a large group" should be printed to the console.
If musicians equals -1, then "not a group" should be printed to the console.

Be sure to watch out for any extra or missing characters (including spaces or punctuation marks) in your output string as well!
 */

// change the value of `musicians` to test your conditional statements
var musicians = "5";

if (musicians <= 0) {
  console.log("not a group");
} else if (musicians == 1) {
  console.log("solo");
} else if (musicians == 2) {
  console.log("duet");
} else if (musicians == 3) {
  console.log("trio");
} else if (musicians == 4) {
  console.log("quartet");
} else {
  console.log("this is a large group");
}
