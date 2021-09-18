var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(o,k) {
    // your code here
    if(!k in o || !Array.isArray(o[k])){
      return [];
    }else{
        return o[k].filter(function(item){
            return item%2!=0;
        })
    }
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]