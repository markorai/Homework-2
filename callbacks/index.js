// Challenge 1
function addTwo(num) {
    return num + 2;
}
// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
function addS(word) {
    return word + 'S';
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));

// Challenge 3
function map(array, callback) {
	let result = [];
  
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  
  return result;
}
// console.log(map([1, 2, 3], addTwo));

// Chalange 4

function forEach(array, callback) {
  for (let elem of array) {
    callback(elem);
  }
}


// Extension 1

function mapWith(array, callback) {
  let output = [];

  forEach(array, function(elem) {
    output.push(callback(elem));
  });

  return output;
}
// console.log(mapWith([1, 2, 3], addT

//Extension 2

function reduce(array, callback, initialValue) {
  for (let elem of array) {
    initialValue = callback(initialValue, elem);
  }
  return initialValue;
}