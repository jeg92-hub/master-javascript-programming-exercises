function fromListToObject(array) {
  // your code herea
  var obj = {};
  array.forEach(function(item){
    obj[item[0]] = obj[item[1]];
  })
  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(ouput) // => { make: 'Ford', model: 'Mustang', year: 1964 }