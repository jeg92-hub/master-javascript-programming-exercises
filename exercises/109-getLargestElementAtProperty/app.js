var obj = {
  key: [1, 2, 4]
};
function getLargestElementAtProperty(o,k) {
    // your code here
    if(Object.keys(o).length === 0 || !k in o || !Array.isArray(o[k])){
      return [];
    }else{
        return Math.max(...o[k]);
    }
}
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4