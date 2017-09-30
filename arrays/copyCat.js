// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.

var copyCat;

function copyCat(arr, num)
{
  arr.concat(num[2],num[3]);
  return arr;
}

//I had done slice that was incorrect!
// DO NOT DELETE
module.exports = copyCat;
