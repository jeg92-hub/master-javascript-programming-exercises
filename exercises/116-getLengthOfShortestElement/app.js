function getLengthOfShortestElement(arr) {
    // your code here
    return arr.length?Math.min(...arr.map(function(i){return i.length})):0;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3