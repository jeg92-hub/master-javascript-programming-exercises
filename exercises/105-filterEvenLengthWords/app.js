function filterEvenLengthWords(words) {
    // your code here
    return words.filter(function(word){return word.length%2==0})
}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']