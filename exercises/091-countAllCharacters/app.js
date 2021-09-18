// Write your function here
function countAllCharacters(word){
    var res = {};

    for(var i = 0;i<word.length;i++){
        if(word[i] in res){
            res[word[i]] +=1;
        }else{
            res[word[i]] = 1;
        }
    }
    return res;
}