function convertObjectToList(obj) {
  // your code here
  var res = [];
  for(var key in obj){
    var item = [];
    item.push(key);
    item.push(obj[key]);
    res.push(item);
  }
  return res;
}