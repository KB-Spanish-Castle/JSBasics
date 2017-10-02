// Create a function called sumIt that takes in the array and returns the sum
// of each of the values in the array.

var sumIt;

function sumIt(arr, sum)
{
  sum = 0;
  //sum = arr[0] + arr[1] + arr[2]; 
  for (var ie = 0; ie < arr.length; ie++ )
  {
    sum += arr[ie];
  }
  return sum;
}


// DO NOT DELETE
module.exports = sumIt;
