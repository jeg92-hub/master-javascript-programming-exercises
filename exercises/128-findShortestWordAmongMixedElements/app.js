function findShortestWordAmongMixedElements(arr) {
    // your code here
    var stringArray = arr.filter(function(item){return (typeof item === 'string')});
    if(stringArray.length==0)return '';
    
    var min = stringArray.shift();
    stringArray.forEach(function(item){
        if(item.length < min.length){
            min = item
        }
    })
    return min;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'