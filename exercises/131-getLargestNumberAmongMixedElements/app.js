function getLargestNumberAmongMixedElements(arr) {
    // your code here
    var stringArray = arr.filter(function(item){return (typeof item === 'number')});
    if(stringArray.length===0)return 0;
    var max = stringArray.shift();
    stringArray.forEach(function(item){
        if(item > max){
            max = item
        }
    })
    return max;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5