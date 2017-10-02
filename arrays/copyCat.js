// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.

/*

Your copyCat is not doing what was asked for.
They did not ask you to add elements to the array
It said to make a new array with two elements.


copyCat is asking you to construct a simple array with only two elements.
Please study how to make a simple array.
It is the most basic of javascript array syntax.
*/

//I had done slice that was incorrect!

var copyCat;

var arr2 = [1, 2, 3, 4, 5];

function copyCat(arr)
{
  upFrontArray = arr;
  var arr3 = [];
  arr3[0] = arr[2];
  arr3[1] = arr[3];
  
  //copycatArray[0] = arr[2];
  //copycatArray[1] = arr[3];
  //upFrontArray.push(arr);
  //copycatArray.push(arr[2], arr[3]);
  
  return arr3;
}

/*
var array2 =[];
array2[0] = arr[3];
array2[1] = arr[4];

var copyCat= array2.map(function(x) {
  return x;
});
*/

// DO NOT DELETE
module.exports = copyCat;
