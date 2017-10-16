// Create a function called getKeys that takes in the animal object and returns all
// of the key names.


var getKeys;
var myArray = [];
var keyCount = 0;
function getKeys(animal) {

  for (var keyAnimals in animal) {
    myArray.push(keyAnimals);

    console.log(keyAnimals);
  }
  console.log(myArray);
  return myArray;
  console.log("Animal is : " + keyAnimals + " The arrays I have is : " + myArray);

  //return keyAnimals();

}

// DO NOT DELETE
module.exports = getKeys;
