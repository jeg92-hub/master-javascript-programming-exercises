function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  var numArray = arr.filter(function(item){return (typeof item === 'number')});
  if(numArray.length===0)return 0;
  var min = numArray.shift();
  numArray.forEach(function(item){
      if(item < min){
          min = item
      }
  })
  return min;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4