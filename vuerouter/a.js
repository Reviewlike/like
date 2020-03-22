var arr1 = [
  [0, 1],
  [2, 3],
  [4, 5]
];
var arr2 = arr1.reduce((a, b) => {
  return a.concat(b);
});
// arr2 [0, 1, 2, 3, 4, 5]
console.log(arr2);
console.log(222);

