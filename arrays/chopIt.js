// Create a function called chopIt that takes in an array and two numbers.
// It deletes the original 3rd index value and inserts the two numbers in it's place.

var chopIt;
var six = 6;
var seven = 7;
function chopIt(arr)
{
  
  var choptItArray = arr;
  
  hoptItArray.splice(3,1,six,seven);
  //hoptItArray.splice(3,1,6,7);
  console.log("MY LARGE ARRAY IS: " + choptItArray);
  return choptItArray;

}

// DO NOT DELETE
module.exports = chopIt;
