let arr = ["amora", "ameixa", "abacate"];

arr.unshift("banana", "bergamota");

console.log(arr, arr.length);

let bergamota = arr.shift();
console.log(arr, bergamota);
let banana = arr.shift();
console.log(arr, banana);
let abacate = arr.shift();
console.log(arr, abacate);
