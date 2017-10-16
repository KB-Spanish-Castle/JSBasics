// Create a function called changeName that takes in an object and a string
// and replaces the object's name propery with the given string. Return the new object.

var changeName;
var animalName;
//String = It's not a object and it's not a array

//console log both arguments inside the function.
function changeName(obj, newName) {

  obj.name = newName;
  
  console.log( "START: " + " name: " + newName + " obj.name is " + obj)

  return obj.name;
};
// DO NOT DELETE
module.exports = changeName;
