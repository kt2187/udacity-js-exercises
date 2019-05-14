/*
 * Programming Quiz: Facebook Friends (7-5)
 Directions:

Create an object called facebookProfile. The object should have 3 properties:
1. your name
2. the number of friends you have, and
3. an array of messages you've posted (as strings)

The object should also have 4 methods:
1. postMessage(message) - adds a new message string to the array
2. deleteMessage(index) - removes the message corresponding to the index provided
3. addFriend() - increases the friend count by 1
4. removeFriend() - decreases the friend count by 1
 */

var facebookProfile = {
  name: "Santa Claus",
  friends: 0,
  messages: [],
  postMessage: function(message) {
    this.messages.push(message);
  },
  deleteMessage: function(index) {
    this.messages.splice(index, 1);
  },
  addFriend: function() {
    this.friends++;
  },
  removeFriend: function() {
    this.friends--;
  }
};

console.log(facebookProfile.friends); // 0
console.log(facebookProfile.messages); // []

facebookProfile.addFriend();
console.log(facebookProfile.friends); // 1
facebookProfile.removeFriend();
console.log(facebookProfile.friends); // 0

facebookProfile.postMessage("Hello");
facebookProfile.postMessage("World");
console.log(facebookProfile.messages); // [ 'Hello', 'World' ]
facebookProfile.deleteMessage(0);
console.log(facebookProfile.messages); // [ 'World' ]
