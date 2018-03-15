function pairs(names) {
  names = names || [];
  pairs = [];

  while (names.length > 1) {
    pairs.push([names.getRandom(), names.getRandom()]);
  }

  if (names.length) {
    pairs.push([names[0]]);
  }

  return pairs;
}

export default pairs;

/**********************************************
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example:
*
* let array = [1, 2, 3, 4];
* let random = array.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 the random element
* console.log(array);  // [1, 2, 4] missing the random element
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
