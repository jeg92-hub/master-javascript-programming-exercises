function getLengthOfLongestElement(arr) {
    // your code here
    return arr.length? Math.max(...arr.map(function(i){return i.length})):0;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5