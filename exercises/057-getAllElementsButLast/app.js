function getAllElementsButLast(array) {
    // your code here
    var newArray = array.reverse();
    newArray.shift();
    return newArray.reverse();
}