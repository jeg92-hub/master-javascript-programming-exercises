function filterOddLengthWords(words) {
    // your code here
    return words.filter(function(item){return item.length%2!=0})
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']