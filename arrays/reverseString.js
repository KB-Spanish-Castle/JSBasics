// Write a JavaScript function reverseString to reverse a given string.

var reverseString;

function reverseString(val)
{
  var splitString = val.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}


// DO NOT DELETE
module.exports = reverseString;
//https://medium.freecodecamp.org/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb