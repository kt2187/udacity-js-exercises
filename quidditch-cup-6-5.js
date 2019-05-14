/*
 * Programming Quiz: Quidditch Cup (6-5)
 Directions:
Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
 */
var team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter"
];

function hasEnoughPlayers(team) {
  if (team.length >= 7) {
    return true;
  } else {
    return false;
  }
} // your code goes here

console.log(hasEnoughPlayers(team));
