// Create a function called addKey that takes in an object and adds a new key
// name weight and assigns it a value. Return the object.

var animal;
var addKey;
var myAnimals = {};

function addKey(myAnimals)
{
  myAnimals = {animalType: "Lizzard", animalName: "Aligator"};
  console.log(myAnimals);
  return myAnimals;
}

// DO NOT DELETE
module.exports = addKey;