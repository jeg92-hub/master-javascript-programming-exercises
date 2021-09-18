function convertDoubleSpaceToSingle(str) {
    // your code here
    var newArray = str.split('  ');
    return newArray.join(' ');
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"