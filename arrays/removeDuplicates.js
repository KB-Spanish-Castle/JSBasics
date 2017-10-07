// Write a JavaScript function removeDuplicates that 
//removes duplicate values fom an array.

var removeDuplicates;
var noRepeats = [];
//var result = [1, 2, 3];
function removeDuplicates(arr) {
  arr.forEach(function (elementNumber) {
    console.log("ARR is : " + elementNumber);
    if (noRepeats.indexOf(elementNumber) < 0) {
      noRepeats.push(elementNumber);
    }

  });
  return noRepeats;
}

// DO NOT DELETE
module.exports = removeDuplicates;
