var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(o,k) {
    // your code here
    if(!k in o || !Array.isArray(o[k]) || o[k].length == 0){
      return [];
    }else{
      return Math.min(o[k]);
    }
}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1