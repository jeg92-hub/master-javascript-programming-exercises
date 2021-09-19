function getAllKeys(obj) {
  // your code here
  var res = [];
  for(var key in obj){
    res.push(key);
  }
  return res;
}