function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
    var max = word1;
    if(max.length<word2.length){
        max = word2;
    }else if(max.length<word3.length){
        max = word3;
    }
    return max;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'