// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

var searchValue = "";
var importWord = "";
//var toLowerCaseWord = importWord.toLowerCase();
function countString(importWord, searchValue)
{
  var countValue = 0;

  for(var wom = 0; wom < importWord.length; wom++)
  {   
    if(importWord[wom].toLowerCase() == searchValue.toLowerCase())
    {
      countValue++;      
    }

  }
  console.log("OUR toLowerCaseWord IS : " + importWord);
  return countValue;
}

/*
function countString(valString)
{
  
  var counter = 0;
  
  for (var i = 0; i < valString.length; i++) {
    var index_of_sub = valString.indexOf(input_letter, i);
  
    if (index_of_sub > -1) {
      counter++;
      i = index_of_sub;
    }
  }
  return 3;
}
*/

// DO NOT DELETE
module.exports = countString;
