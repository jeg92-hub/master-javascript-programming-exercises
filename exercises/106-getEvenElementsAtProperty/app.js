
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(o,k) {
    // your code here
    if(!k in o || !Array.isArray(o[k])){
      return [];
    }else{
        return o[k].filter(function(item){
            return item%2==0;
        })
    }
}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]