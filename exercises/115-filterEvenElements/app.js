
function filterEvenElements(arr) {
    // your code here
    return arr.length?arr.filter(function(item){return item%2==0}):[];
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
