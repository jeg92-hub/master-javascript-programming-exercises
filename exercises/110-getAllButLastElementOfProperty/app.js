var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(o,k) {
    // your code here
    if(Object.keys(o).length === 0 || !k in o || !Array.isArray(o[k])){
      return [];
    }else{
        o[k].pop()
        return o[k];
    }
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]