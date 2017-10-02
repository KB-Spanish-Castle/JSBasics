// Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method

var timesTen;

function timesTen(arr){
  var testArr = [];

  for(var io = 0; io < arr.length; io++ )
  {
    console.log("MY IO IS: " + io);
    testArr.push((arr[io]) * 10);
    
  }
  console.log("My testArr is: " + testArr);
  return testArr;
  
}
// DO NOT DELETE
module.exports = timesTen;
