// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.



var copyCat;

var arr2 = [1, 2, 3, 4, 5];

function copyCat(arr)
{
  upFrontArray = arr;
  var arr3 = [];
  arr3[0] = arr[2];
  arr3[1] = arr[3];
  
  return arr3;
}



// DO NOT DELETE
module.exports = copyCat;
