function listAllValues(obj) {
  // your code here
  var res =[];
  for(var key in obj){
    res.push(obj[key]);
  }
  return res;
}