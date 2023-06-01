const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.map((materials) => materials.length)); // map gives values
// for example: if "Hydrogen" is the element we are looking for and we need length
// of Hydrogen then we can use map on the array
console.log(materials.map((materials) => materials.length > 7));
// console.log(materials.map(materials.length > 8 ? true : false));
// Expected Output: [ 8, 6, 7, 9 ]
console.log(materials.filter((materials) => materials.length));
console.log(materials.filter((materials) => materials.length > 7));
// it only gives us key. i.e, Hydrogen, Helium etc.
