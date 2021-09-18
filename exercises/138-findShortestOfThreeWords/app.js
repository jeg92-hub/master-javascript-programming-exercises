function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    var min = word1;
    if(min.length>word2.length){
        min = word2;
    }else if(min.length>word3.length){
        min = word3;
    }
    return min;
}
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'