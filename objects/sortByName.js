// Write a JavaScript function sortByName to sort the following array of objects by the name value.
// Return the sorted array of objects

var animals = [
  { species: 'Primate', name: 'Coco', age: 10, gender: 'female', favoriteFood: 'Banana' },
  { species: 'Cat', name: 'Ophelia', age: 6, gender: 'female', favoriteFood: 'Tuna' },
  { species: 'Horse', name: 'Beauty', age: 3, gender: 'female', favoriteFood: 'Carot' },
  { species: 'Elephant', name: 'Jumbo', age: 22, gender: 'male', favoriteFood: 'Apples' },
  { species: 'Bird', name: 'Twiti', age: 7, gender: 'male', favoriteFood: 'Seeds' },
];

var sortByName = {};

animals.sort(function(name))
{
  
};
/*
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
*/
// DO NOT DELETE
return sortByName;
module.exports = sortByName;
