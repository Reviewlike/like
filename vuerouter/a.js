// var arr1 = [
//   [0, 1],
//   [2, 3],
//   [4, 5]
// ];
// var arr2 = arr1.reduce((a, b)=> {
//   return a.concat(b);
// });
// // arr2 [0, 1, 2, 3, 4, 5]
// console.log(arr2);

var arr1 = [
  [0, 1],
  [2, 3],
  [4, 5]
];
function flatten(arr) {
  return [].concat(...arr.map(x => (Array.isArray(x) ? flatten(x) : x)));
}
var arr2 = flatten(arr1); // arr2 [0, 1, 2, 3, 4, 5]
