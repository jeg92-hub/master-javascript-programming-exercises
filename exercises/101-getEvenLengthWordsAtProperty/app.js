var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    if(!key in obj || !Array.isArray(obj[key])){
      return [];
    }else{
      return obj[key].filter(function(item){
        return item.length%2==0;
      })
    }
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']