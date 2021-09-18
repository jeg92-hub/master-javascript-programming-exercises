var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!key in obj || !Array.isArray(obj[key]) || obj[key].length==0){
      return 0
    }else{
      return obj[key].reduce((a,b) => a*b);
    }
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24