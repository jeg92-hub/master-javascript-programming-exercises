
function addToFrontOfNew(arr, element) {
    // Write your function here
    var newArray = [].concat(arr);
    newArray.unshift(element);
    return newArray;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]