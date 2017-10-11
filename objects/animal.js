// Create an object called animal. Make sure the animal has the following
// keys. (species, name, age, gender, favoriteFood) Also, give the animal a
// method of speech that returns a string that displays what the animal says.


var speech;
//create a method of speech
speech = Object.create({}, {
  animal: {
    species: "Feline",
    name: "Tiger",
    age: 4,
    gender: "Male",
    favoriteFood: "Salmon"
  }
});


// DO NOT DELETE
module.exports = animal;
