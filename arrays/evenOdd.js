// Create a function called evenOdd that takes in the array and pushes into a
// new array "even" or "odd" for every value in the array, depending upon
// whether they are even or odd number values. Return the new array.
// Hint: Use the modulus operator

var evenOdd;
var myEOarray = [];
function evenOdd(arr)
{
  
  for(var ei = 0; ei < arr.length; ei++)
  {
  
    if((arr[ei]%2)==1)
    {
      console.log("Odd");
      myEOarray[ei] = "odd";
    }
    else
    {
      console.log("Even");
      myEOarray[ei] = "even";
    }
  }
  return myEOarray;
}


// DO NOT DELETE
module.exports = evenOdd;
