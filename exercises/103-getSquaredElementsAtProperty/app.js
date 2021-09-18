var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(o, k) {
    if(!k in o || !Array.isArray(o[k])){
      return [];
    }else{
        return o[k].map(function(item){
            return item*item;
        })
    }
}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]