function transformFirstAndLast(array) {
  // your code here
  var firstItem = array.slice();
  var lastItem = array.pop();
  var obj = {};
  obj[firstItem] = lastItem;
  return obj;
}