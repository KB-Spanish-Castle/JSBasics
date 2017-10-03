// Create a function called copyCat that takes in an array, copies, and
// returns the second and third index values.

var copyCat;

function copyCat(arr)
{
  var arrList = [];

  arrList[0] = arr[2];
  arrList[1] = arr[3];

  return arrList;
}

// DO NOT DELETE
module.exports = copyCat;