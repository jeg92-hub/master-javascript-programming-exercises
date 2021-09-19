function transformEmployeeData(array) {
  // your code here
  var res = [];
  array.forEach(function(item){
    var obj = {};
    item.forEach(function(i){
      obj[i[0]] = obj[i[1]];
    })
    res.push(obj);
  })
  return res;
}