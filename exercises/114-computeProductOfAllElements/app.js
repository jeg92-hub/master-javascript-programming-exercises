function computeProductOfAllElements(arr) {
    // your code here
    return arr.length?arr.reduce((a,b) => a*b):0;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60