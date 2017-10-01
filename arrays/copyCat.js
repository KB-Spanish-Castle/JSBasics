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


var array2 =[];
array2[0] = arr[3];
array2[1] = arr[4];

var copyCat= array2.map(function(x) {
  return x;
});


//I had done slice that was incorrect!
// DO NOT DELETE
module.exports = copyCat;
