function joinArrayOfArrays(arr) {
  // your code here
  var res = [];
  for(var i=0;i<arr.length;i++){
    res = res.concat(arr[i])
  }
  return res;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']