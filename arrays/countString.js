// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

var searchValue = "";
var importWord = "";

function countString(importWord, searchValue) {
  var countValue = 0;

  for (var wom = 0; wom < importWord.length; wom++) {
    if (importWord[wom].toLowerCase() == searchValue.toLowerCase()) {
      countValue++;
    }

  }
  console.log("OUR toLowerCaseWord IS : " + importWord);
  return countValue;
}

// DO NOT DELETE
module.exports = countString;
