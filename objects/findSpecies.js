// Create a function called findSpecies that takes in an array, loops through
// the array and returns an array of all of the species values for each object.

var findSpecies;
var newArray = [];
//var speciesList=[];

function findSpecies(arr) {

  for (iy = 0; iy < arr.length; iy++) {
    newArray.push(arr[iy].species);
  }
  console.log(newArray + " ");
  
  return newArray;
}

// DO NOT DELETE
module.exports = findSpecies;
