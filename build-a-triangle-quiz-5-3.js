/*
 * Programming Quiz: Build A Triangle (5-3)
 */

/* 
 For this quiz, you're going to create a function called buildTriangle()
 that will accept an input (the triangle at its WIDEST  width) and 
 will return (USE RETURN STATMENT) the string representation of a triangle.

/* creates a line of * for a given length*/
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

/* - length input = how many asterisks the line will have (how wide the    line will be).

  - buildTriangle allows you to stack the lines so you can form a triangle.
  
  - i= 1 because we need to start w/ one *
    once i is < or = to length the function will stop and the triangle will stop growing. 
    
  - i++ adds * to each line.
  
  - triangle += makeLine(i): The triangle is empty before the loop starts. Since i is = to 1, and we have called the makeLine function, one * is added to each line and then you go down to the next line.
  
  -  After this loops has been completed, we go down to the triangle 
     which is a string.


 */
function buildTriangle(length) {
  var triangle = "";
  for (var i = 1; i <= length; i++) {
    triangle += makeLine(i);
  }
  return triangle;
}
console.log(buildTriangle(10));
