function getLongestWordOfMixedElements(arr) {
    // your code here
    var stringArray = arr.filter(function(item){return (typeof item === 'string')});
    if(stringArray.length===0)return "";
    var max = stringArray.shift();
    stringArray.forEach(function(item){
        if(item.length > max.length){
            max = item
        }
    })
    return max;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'